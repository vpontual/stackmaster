import React, { useState } from 'react'
import { useSprings, animated, interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import styles from '../styles.module.css'
import card from '../assets/card.svg'

const cards = [card, card, card, card, card, card, card]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
  x: 500,
  y: 200 + i * 4,
  scale: 1.25,
  rot: 5 + Math.random() * 20,
  delay: i * 100,
})
const from = () => ({ x: 0, rot: 0, scale: 2, y: -1000 })

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(10deg) rotateY(10deg) rotateZ(90deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(),
  }))

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    api.start(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const centerX = screenWidth / 25 // Calculate center position
      const x = down ? Math.min(centerX, mx) : centerX
      const centerY = screenHeight / 2.8 // Calculate center position
      const y = down ? Math.min(centerY, mx) : centerY
      // const x = isGone ? (200 + screenHeight) * dir : down ? Math.max(minX, Math.min(maxX, mx)) : 0 // Clamp x value within the screen bounds
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.25 : 1 // Active cards lift up a bit

      return {
        x,
        y,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })

    if (!down && gone.size === cards.length) {
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
    }
  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

export default function Study() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  )
}
