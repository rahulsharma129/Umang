import React from 'react'
import { Dialog , Stack , DialogTitle, TextField, InputAdornment, List, Typography , Avatar,Button, ListItem, Stack } from '@mui/material'
import { sampleNotifications } from '../../constants/sampleData.jsx'
 const Notifications = () => {

const friendRequestHandler = ({_id,accept}) => {

  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem"}} maxWidth={"25rem"}>
        <DialogTitle> Notifications </DialogTitle>

        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map(({sender, _id}) => (
              <NotificationItem
                sender={sender}
                _id ={_id}
                key={_id}
                handler={friendRequestHandler}
              />
            ))
          ): (
            <Typography textAlign={"center"}> 0 notifications </Typography>
          )
        }
      </Stack>
    </Dialog>
  )
}

const NotificationItem = ({ sender, _id, handler }) => {
  const { name, avatar} = sender;
  return (
    <ListItem>
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
            <Avatar/>
            <Typography 
            variant="body1"
            sx={{ 
               flexGrow: 1,
               display: "webkit-box",
               WebkitLineClamp: 1,
               WebkitBoxOrient: "vertical",
               overflow: "hidden",
               textOverflow: "ellipsis", 
               width: "100%",
            }}
            > {`&{name} send you a friend request`}
            </Typography>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Button onclick={() => handler({_id, accept: true})}> Accept </Button>
              <Button color = "error" onclick={() => handler({_id, accept: false})}> Reject </Button>
            </Stack>

        </Stack>
    </ListItem>
  )
}

export default Notifications;
