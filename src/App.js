import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tops from './components/Tops'
import Footer from './components/Footer'
import Collection from './components/Collection'
import Collectionrock from './components/Collectionrock'
import Topsrocks from './components/Topsrock'

// filepath: src\app.js (or where you use the data)
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function getVinyls() {
  await client.connect();
  const db = client.db('vinyl-collection');
  return await db.collection('albums').find({}).toArray();
}

// Use getVinyls() instead of importing from data.js

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Hero />
      <About />
      <Tops />
      <Topsrocks />
      <Collection searchQuery={searchQuery} />
      <Collectionrock searchQuery={searchQuery} />
      <Footer />
    </>
  )
}

export default App
