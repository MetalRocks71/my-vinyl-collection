import dotenv from 'dotenv'
dotenv.config() 
console.log('Mongo URI:', process.env.MONGO_URI)


const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const uri =
  'mongodb+srv://metalrocks7179_db_user:1TUAGasdzFtLzcN8@mydbvinyls.rodef0a.mongodb.net/?appName=MyDBVinyls&ssl=true&retryWrites=true&w=majority'
const client = new MongoClient(uri)

let database

async function connectDB() {
  try {
    await client.connect()
    database = client.db('vinyls_database')
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
  }
}

connectDB()

// GET all metal albums
app.get('/api/metal-albums', async (req, res) => {
  try {
    const albums = await database.collection('metal_albums').find({}).toArray()
    res.json(albums)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch albums' })
  }
})

// GET all rock albums
app.get('/api/rock-albums', async (req, res) => {
  try {
    const albums = await database.collection('rock_albums').find({}).toArray()
    res.json(albums)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch albums' })
  }
})

// ADD new album
app.post('/api/metal-albums', async (req, res) => {
  try {
    const newAlbum = req.body
    const result = await database.collection('metal_albums').insertOne(newAlbum)
    res.json({ ...newAlbum, _id: result.insertedId })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add album' })
  }
})

// UPDATE album
app.put('/api/metal-albums/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedAlbum = req.body

    await database
      .collection('metal_albums')
      .updateOne({ id: parseInt(id) }, { $set: updatedAlbum })

    res.json(updatedAlbum)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update album' })
  }
})

// DELETE album
app.delete('/api/metal-albums/:id', async (req, res) => {
  try {
    const { id } = req.params
    await database.collection('metal_albums').deleteOne({ id: parseInt(id) })
    res.json({ message: 'Album deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete album' })
  }
})
// ADD new rock album
app.post('/api/rock-albums', async (req, res) => {
  try {
    const newAlbum = req.body
    const result = await database.collection('rock_albums').insertOne(newAlbum)
    res.json({ ...newAlbum, _id: result.insertedId })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add rock album' })
  }
})

// UPDATE rock album
app.put('/api/rock-albums/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedAlbum = req.body

    await database
      .collection('rock_albums')
      .updateOne({ id: parseInt(id) }, { $set: updatedAlbum })

    res.json(updatedAlbum)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update rock album' })
  }
})

// DELETE rock album
app.delete('/api/rock-albums/:id', async (req, res) => {
  try {
    const { id } = req.params
    await database.collection('rock_albums').deleteOne({ id: parseInt(id) })
    res.json({ message: 'Rock album deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete rock album' })
  }
})
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
