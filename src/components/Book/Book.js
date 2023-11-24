import React from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import '../style.css'


const Book = (props) => {
    const history = useNavigate()
    const { _id, name, author, description, price, image } = props.book
    const deleteHandler = () => {
        axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>history("/books"))
    }
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <Button className='button' LinkComponent={Link} to={`/books/${_id}`} sx={{ mt:"auto" }}>Update</Button>
        <Button className='button' onClick={deleteHandler} sx={{ mt:"auto" }}>Delete</Button>
    </div>
  )
}

export default Book