import standings from '../resources/standings-resources'

const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'superleague'

export function insertStandings() {

  const standingsToBeInserted = standings.standings
  console.log("standingsToBeInserted", standingsToBeInserted)
  return new Promise((resolve, reject) => {
    return MongoClient.connect(url, async (err, client) => {
      assert.equal(null, err)
      console.log("Connected successfully to server")
      const db = client.db(dbName)

      try {
        const collection = db.collection('standings')
        const feedback = await collection.insertMany(standingsToBeInserted)
        resolve(feedback)
        return
      } catch (e) {
        reject(e)
        return
      } finally {
        client.close()
      }

    })
  })
}