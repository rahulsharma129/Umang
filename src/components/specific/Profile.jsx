// import React from 'react'
// import { Avatar, Stack, Typography } from '@mui/material'
// import { Face as FaceIcon , AlternateEmail as UserNameIcon , CalendarMonth as CalendarIcon} from '@mui/icons-material'
// import moment from 'moment'

// const Profile = () => { 
//   return (
//     <Stack spacing={"2rem"} direction= {"coloumn"} alignItems={"cemter"}>
//         <Avatar
//            sx={{
//             width: 200,
//             height: 200,
//             objectFit: "contain",
//             marginBottom: "1rem",
//             border: "5px solid white",
//            }}
//         />
//         <ProfileCard heading= {"Bio"} text = {" CAT "}/>
//         <ProfileCard heading= {"username"} text = {" taklu "} Icon={<UserNameIcon/>}/>
//         <ProfileCard heading= {"Name"} text = {" Umang "} Icon={<FaceIcon/>}/>
//         <ProfileCard heading= {"join"} text = {moment("2023-11-04T18:30:00.000Z").fromNow()} Icon={<CalendarIcon/>}/>
//     </Stack>
//   )
// }

// const ProfileCard = ( { text, Icon, heading}) => (
//     <Stack
//         direction={"row"}
//         alignItems={"center"}
//         spacing={"1rem"}
//         color={"white"}
//         textAlign={"center"}
//         />
        
        
//         </Stack>
            
        
// )

// export default Profile

import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from 'moment'

const Profile = () => { 
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={" CAT "} />
      <ProfileCard heading={"username"} text={" taklu "} Icon={<UserNameIcon />} />
      <ProfileCard heading={"Name"} text={" Umang "} Icon={<FaceIcon />} />
      <ProfileCard heading={"join"} text={moment("2023-11-04T18:30:00.000Z").fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  )
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && <span style={{ display: "flex", alignItems: "center" }}>{Icon}</span>}
    <Typography variant="subtitle2" fontWeight="bold">{heading}:</Typography>
    <Typography variant="body2">{text}</Typography>
  </Stack>
)

export default Profile