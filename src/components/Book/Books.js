import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Book from './Book'
import '../style.css'

const URL = "http://localhost:5000/books"

const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data)
}

const Books = () => {
    const [books, setBooks] = useState()
    useEffect(() => {
        fetchHandler().then(data => setBooks(data.books))
    },[])
    console.log(books);
  return <div className='friend'>
    <h1>Find Your Friend</h1>
    <ul>
        {books && 
            books.map((book,i) => (
                <li className='book' key = {i}>
                    <Book book={book} />
                </li>
        ))}
    </ul>
  </div>
 
}

export default Books