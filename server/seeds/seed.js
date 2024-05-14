const db = require('../config/connection')
const { User, Question } = require('../models')
const userSeeds = require('./userSeeds.json')
const questionSeeds = require('./questionSeeds.json')
const cleanDB = require('./cleanDB')

db.once('open', async () => {
  try {
    await cleanDB('User', 'users')
    await User.create(userSeeds)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  try {
    await cleanDB('Question')
    await Question.create(questionSeeds)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('all done!')
  process.exit(0)
})
