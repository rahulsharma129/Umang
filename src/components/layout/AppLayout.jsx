

import React from 'react';
import { Grid, Box } from '@mui/material';
import Header from './Header';
import Title from '../shared/Title';
import Chatlist from '../specific/Chatlist';
import { sampleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    const params = useParams();
     const chatId = params.chatId;

     const handleDeleteChat = (e , _id , groupChat) => {
      e.preventDefault();
      console.log("Delete chat" , _id, groupChat);
     }
    return (
       <Box sx={{ height: '100%' }}> 
        <Title />
        <Header />
        <Grid container sx={{ width: '100%' }}>
          <Grid
          size= {4}
            // size={{ sm: 4, md: 3 }} 
            sx={{
              display: { xs: 'none', sm: 'block' },
              height: '100%', 
            }}
          >
            <Chatlist chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat} />
          </Grid>
          <Grid
          size={4}
            // size={{ xs: 12, sm: 8, md: 5, lg: 6 }} 
            sx={{ height: '100%' }}
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
          size={4}
            // size={{ md: 4, lg: 3 }} 
            sx={{
              display: { xs: 'none', md: 'block' },
              padding: '4rem', 
              bgcolor: 'rgba(0,0,0,0.85)',
              height: '100%',
            }}
          >
            <Profile/>
          </Grid>
        </Grid>
       </Box>
    );
  };
};

export default AppLayout;



