import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Back End' },
    { id: 3, name: 'APIs' },
    { id: 4, name: 'React' },
    { id: 5, name: 'Databases' },
    { id: 6, name: 'All' },
  ]

  return (
    <div>
      <h1 className="flex justify-center p-20 text-header">Select a Category</h1>
      <div className="flex justify-center justify-items-center w-3/5 h-40 ml-56 text-4xl grid gap-y-8 grid-cols-2">
        {categories.map((category) => (
          <div className="flex justify-center items-center bg-index p-5 rounded h-40 w-80 text-center" key={category.id}>
            <Link
              className="text-banner hover:text-header hover:animate-jump-in"
              key={category.id}
              to={`/study/${category.name}`}
              style={{ display: 'block', margin: '10px 0' }}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories
