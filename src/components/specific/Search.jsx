import { Dialog , Stack , DialogTitle, TextField, InputAdornment, List , } from '@mui/material'
import React ,{ useState} from 'react'
import { useInputValidation } from '6pp'
import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem.jsx'
import { sampleUser } from '../../constants/sampleData.jsx'

const Users = [1,2,3];

const Search = () => {
  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false;

  const [ users, setUsers ] = useState(sampleUser);

  const addFriendsHandler = (id) => {
    console.log(id);
  }
  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"}  width={"25rem"}>
        <DialogTitle textAlign={"center"}> Find People </DialogTitle>
        <TextField 
        label="" 
        value={search.value}
        onChange={search.changeHandler}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment :(
          <InputAdornment position = "start">
            <SearchIcon />
          </InputAdornment>
          )
        }}
        />

        <List>
          {Users.map((i) => (
          <UserItem
          user={i}
          key={i._id}
          handler={addFriendsHandler}
          handlerIsLoading={isLoadingSendFriendRequest}
          />
     ))}
        </List>
      </Stack>
    </Dialog>
  )
}

export default Search;