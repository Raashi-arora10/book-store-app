import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs } from '@mui/material'
import { NavLink} from 'react-router-dom'

const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:"#bbb"}} position='sticky'>
            <Toolbar>
                <Typography sx={{fontSize:"25px", color:"#000"}}>BooksZone</Typography>
                <Tabs sx={{ml:"auto", color:"#000"}} indicatorColor="primary" value={value} onChange={(e,val) => setvalue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label='Add Book' />
                    <Tab LinkComponent={NavLink} to="/books" label='Library' />
                    <Tab LinkComponent={NavLink} to="/" label='Go Back' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>

  )
}

export default Header