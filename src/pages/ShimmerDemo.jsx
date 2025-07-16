import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Paper,
  Divider 
} from '@mui/material';
import {
  LayoutLoader,
  ChatItemShimmer,
  ChatListShimmer,
  TitleShimmer,
  HeaderShimmer,
  MainChatShimmer,
  ProfileShimmer,
} from '../components/layout/Loaders';

const ShimmerDemo = () => {
  const [activeDemo, setActiveDemo] = useState('layout');

  const demos = [
    { key: 'layout', label: 'Complete Layout', component: <LayoutLoader /> },
    { key: 'chatitem', label: 'Chat Item', component: <ChatItemShimmer /> },
    { key: 'chatlist', label: 'Chat List', component: <Box sx={{ height: '400px', width: '300px' }}><ChatListShimmer count={5} /></Box> },
    { key: 'title', label: 'Title', component: <TitleShimmer /> },
    { key: 'header', label: 'Header', component: <HeaderShimmer /> },
    { key: 'mainchat', label: 'Main Chat', component: <Box sx={{ height: '500px', width: '400px' }}><MainChatShimmer /></Box> },
    { key: 'profile', label: 'Profile', component: <Box sx={{ height: '500px', width: '300px' }}><ProfileShimmer /></Box> },
  ];

  const currentDemo = demos.find(demo => demo.key === activeDemo);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        🎨 Shimmer UI Components Demo
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Interactive demo of all shimmer loading components for the chat app
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Navigation Buttons */}
      <Stack 
        direction="row" 
        spacing={1} 
        flexWrap="wrap" 
        justifyContent="center" 
        sx={{ mb: 4 }}
      >
        {demos.map((demo) => (
          <Button
            key={demo.key}
            variant={activeDemo === demo.key ? 'contained' : 'outlined'}
            onClick={() => setActiveDemo(demo.key)}
            size="small"
          >
            {demo.label}
          </Button>
        ))}
      </Stack>

      {/* Demo Display */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9f9f9'
        }}
      >
        <Typography variant="h5" gutterBottom>
          {currentDemo?.label} Shimmer
        </Typography>
        
        <Box sx={{ 
          width: '100%', 
          height: activeDemo === 'layout' ? '80vh' : 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: activeDemo === 'layout' ? 'stretch' : 'center',
        }}>
          {currentDemo?.component}
        </Box>
      </Paper>

      {/* Usage Instructions */}
      <Paper elevation={2} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          📖 Usage Instructions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Import:</strong>
        </Typography>
        <Box component="pre" sx={{ 
          backgroundColor: '#f5f5f5', 
          p: 2, 
          borderRadius: 1, 
          mt: 1,
          fontSize: '0.875rem',
          overflow: 'auto'
        }}>
{`import { 
  LayoutLoader,
  ChatItemShimmer,
  ChatListShimmer,
  HeaderShimmer,
  MainChatShimmer,
  ProfileShimmer 
} from '../components/layout/Loaders';`}
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Example Usage:</strong>
        </Typography>
        <Box component="pre" sx={{ 
          backgroundColor: '#f5f5f5', 
          p: 2, 
          borderRadius: 1, 
          mt: 1,
          fontSize: '0.875rem',
          overflow: 'auto'
        }}>
{`// Show complete layout shimmer while loading
{isLoading ? <LayoutLoader /> : <YourAppContent />}

// Show specific component shimmer
{isLoadingChats ? <ChatListShimmer count={8} /> : <ChatList />}`}
        </Box>
      </Paper>
    </Container>
  );
};

export default ShimmerDemo;