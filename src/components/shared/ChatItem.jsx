import { Typography, Box , Stack, Avatar} from '@mui/material'
import { Link } from '../styles/StyledComponents'
import React , { memo }  from 'react'
import AvatarCard from './AvatarCard'

const ChatItem = ({
    avatar= [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
}) => {
  return (
  <Link 
   sx = {{
    padding: "0",
   }}
  to={'/chat/&{_id}'} onContextMenu={(e) => handleDeleteChat(e,_id,groupChat)}>
    <div
    sx={{        display: "flex",
        alignItems: "center",
        gap : "1rem",
        padding: "1rem",
        backgroundColor: sameSender ? "black" : "unset",
        color: sameSender ? "white" : "unset",
        position: "relative",
    }}
    >
        <AvatarCard avatar = {avatar}/>
        <stack>
            <Typography> {name} </Typography>
            {newMessageAlert && (
                <Typography> {newMessageAlert.count} New Message </Typography>
            )}
        </stack>
        {
            isOnline && (
                <Box
                sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)",
                }}
                />
            )
        }
    </div>
  </Link>
  )
}

export default memo(ChatItem);