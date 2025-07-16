import { Dialog , Stack , DialogTitle, TextField, InputAdornment, List , } from '@mui/material'
import React from 'react'
import { useInputValidation } from '6pp'
import { Search as SearchIcon } from '@mui/icons-material'

const Users = []

const Search = () => {
  const search = useInputValidation("")
  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"}  width={"25rem"}>
        <DialogTitle textAlign={"center"}> Find People </DialogTitle>
        <TextField 
        label="" 
        value={search.value}
        onChange={search.changeHandler}
        variant='outlined'
        size='small'
        InputProps={{
          startAdornment :(
          <InputAdornment position = "start">
            <SearchIcon />
          </InputAdornment>
          )
        }}
        />

        <List>
          {     
       Users.map((User) => (
    <ListItem>
    <ListItemText/>
    </ListItem>
))
 }
        </List>

      </Stack>
    </Dialog>
  )
}

export default Search