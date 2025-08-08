import React from 'react'
import { Dialog , Stack , DialogTitle, TextField, InputAdornment, List, Typography , Avatar,Button, ListItem, Stack } from '@mui/material'
import { sampleUser } from '../../constants/sampleData.jsx'
import UserItem from '../shared/UserItem.jsx'
import { useInputValidation } from '6pp'
const NewGroup = () => {

  const groupName = useInputValidation("");

  const [members , setMembers] = useState(sampleUser);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = () => {};
  const sumbitHandler = () => {};
  return (
       <Dialog open>
         <Stack p={{ xs: "1rem", sm: "3rem"}} Width={"25rem"} spacing={"2rem"}>
           <DialogTitle textAlign={"center"} variant='h4'> New Group </DialogTitle>

            <TextField label = "Group Name" value={groupName.value} onChange={groupName.changeHandler} />

            <Typography variant="body1"> Members </Typography>

           <Stack>
            {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
              />
          ))}
           </Stack>

           <stack direction={"row"} justifyContent={"space-evenly"}>
            <Button varient="text" color='error' size='large'> Cancel </Button>
            <Button varient="contained" size='large'> Create </Button>

           </stack>
   
         </Stack>
       </Dialog>
  )
}

export default NewGroup