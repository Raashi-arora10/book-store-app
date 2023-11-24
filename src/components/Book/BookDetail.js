import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const BookDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/books"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div className="add">
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box 
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              maxWidth={700}
              alignContent={"center"}
              alignSelf="center"
              marginLeft={"auto"}
              marginRight="auto"
              marginTop={5}
            >
              <FormLabel sx={{color:"#fff"}}>Name</FormLabel>
              <TextField sx={{border:"1px solid #fff" , backgroundColor:"#ccc"}}
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />
              <FormLabel sx={{color:"#fff"}}>Author</FormLabel>
              <TextField sx={{border:"1px solid #fff" , backgroundColor:"#ccc"}}
                value={inputs.author}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="author"
              />
              <FormLabel sx={{color:"#fff"}}>Description</FormLabel>
              <TextField sx={{border:"1px solid #fff" , backgroundColor:"#ccc"}}
                value={inputs.description}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="description"
              />
              <FormLabel sx={{color:"#fff"}}>Price</FormLabel>
              <TextField sx={{border:"1px solid #fff" , backgroundColor:"#ccc"}}
                value={inputs.price}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="outlined"
                name="price"
              />
              <FormLabel sx={{color:"#fff"}}>Image</FormLabel>
              <TextField sx={{border:"1px solid #fff", backgroundColor:"#ccc"}}
                value={inputs.image}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="image"
              />
              <FormControlLabel
                control={
                  <Checkbox sx={{color:"#fff"}}
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />
  
              <Button variant="contained" type="submit">
                Update Book
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default BookDetail;