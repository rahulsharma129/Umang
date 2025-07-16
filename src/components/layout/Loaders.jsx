import React from 'react';
import {
  Box,
  Stack,
  Skeleton,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  Paper,
} from '@mui/material';
import { orange } from '../../constants/color';

// Shimmer animation keyframes
const shimmerStyles = {
  '@keyframes shimmer': {
    '0%': {
      backgroundPosition: '-200px 0',
    },
    '100%': {
      backgroundPosition: 'calc(200px + 100%) 0',
    },
  },
  shimmerBase: {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200px 100%',
    animation: 'shimmer 1.5s infinite',
  },
};

// Individual Chat Item Shimmer
export const ChatItemShimmer = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
      },
    }}
  >
    {/* Avatar Shimmer */}
    <Box sx={{ position: 'relative', width: '5rem', height: '3rem' }}>
      <Skeleton
        variant="circular"
        width={48}
        height={48}
        sx={{
          position: 'absolute',
          border: '2px solid white',
          ...shimmerStyles.shimmerBase,
        }}
      />
    </Box>

    {/* Text Content Shimmer */}
    <Stack sx={{ flex: 1, gap: '0.5rem' }}>
      <Skeleton
        variant="text"
        width="60%"
        height={20}
        sx={shimmerStyles.shimmerBase}
      />
      <Skeleton
        variant="text"
        width="40%"
        height={16}
        sx={shimmerStyles.shimmerBase}
      />
    </Stack>

    {/* Online Status Shimmer */}
    <Skeleton
      variant="circular"
      width={10}
      height={10}
      sx={{
        position: 'absolute',
        right: '1rem',
        ...shimmerStyles.shimmerBase,
      }}
    />
  </Box>
);

// Chat List Shimmer
export const ChatListShimmer = ({ count = 8 }) => (
  <Stack width="100%" direction="column" sx={{ height: '100%', overflow: 'hidden' }}>
    {Array.from({ length: count }).map((_, index) => (
      <ChatItemShimmer key={index} />
    ))}
  </Stack>
);

// Header Shimmer
export const HeaderShimmer = () => (
  <Box sx={{ flexGrow: 1, height: '4rem', ...shimmerStyles }}>
    <AppBar position="static" sx={{ bgcolor: orange }}>
      <Toolbar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Skeleton
            variant="text"
            width={80}
            height={32}
            sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}
          />
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Skeleton
            variant="circular"
            width={32}
            height={32}
            sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="circular"
              width={40}
              height={40}
              sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}
            />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

// Main Chat Area Shimmer
export const MainChatShimmer = () => (
  <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    {/* Chat Header */}
    <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={shimmerStyles.shimmerBase}
        />
        <Stack>
          <Skeleton
            variant="text"
            width={120}
            height={20}
            sx={shimmerStyles.shimmerBase}
          />
          <Skeleton
            variant="text"
            width={80}
            height={16}
            sx={shimmerStyles.shimmerBase}
          />
        </Stack>
      </Box>
    </Box>

    {/* Chat Messages Area */}
    <Box sx={{ flex: 1, p: 2, overflow: 'hidden' }}>
      <Stack spacing={2}>
        {/* Received Message */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ maxWidth: '70%' }}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={40}
              sx={{ borderRadius: 2, ...shimmerStyles.shimmerBase }}
            />
          </Box>
        </Box>

        {/* Sent Message */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ maxWidth: '70%' }}>
            <Skeleton
              variant="rectangular"
              width={150}
              height={40}
              sx={{ borderRadius: 2, ...shimmerStyles.shimmerBase }}
            />
          </Box>
        </Box>

        {/* Received Message */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ maxWidth: '70%' }}>
            <Skeleton
              variant="rectangular"
              width={180}
              height={60}
              sx={{ borderRadius: 2, ...shimmerStyles.shimmerBase }}
            />
          </Box>
        </Box>

        {/* Sent Message */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ maxWidth: '70%' }}>
            <Skeleton
              variant="rectangular"
              width={220}
              height={40}
              sx={{ borderRadius: 2, ...shimmerStyles.shimmerBase }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>

    {/* Message Input Area */}
    <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Skeleton
          variant="rectangular"
          sx={{ flex: 1, height: 40, borderRadius: 2, ...shimmerStyles.shimmerBase }}
        />
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={shimmerStyles.shimmerBase}
        />
      </Box>
    </Box>
  </Box>
);

// Profile Section Shimmer
export const ProfileShimmer = () => (
  <Box sx={{ padding: '4rem', bgcolor: 'rgba(0,0,0,0.85)', height: '100%' }}>
    <Stack spacing={3} alignItems="center">
      {/* Profile Avatar */}
      <Skeleton
        variant="circular"
        width={120}
        height={120}
        sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
      />

      {/* Profile Name */}
      <Skeleton
        variant="text"
        width={150}
        height={24}
        sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
      />

      {/* Profile Details */}
      <Stack spacing={2} width="100%">
        <Skeleton
          variant="text"
          width="80%"
          height={20}
          sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
        />
        <Skeleton
          variant="text"
          width="60%"
          height={20}
          sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
        />
        <Skeleton
          variant="text"
          width="90%"
          height={20}
          sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
        />
      </Stack>

      {/* Action Buttons */}
      <Stack spacing={2} width="100%" mt={4}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={40}
          sx={{ borderRadius: 1, bgcolor: 'rgba(255,255,255,0.1)' }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={40}
          sx={{ borderRadius: 1, bgcolor: 'rgba(255,255,255,0.1)' }}
        />
      </Stack>
    </Stack>
  </Box>
);

// Complete Layout Shimmer (matching AppLayout structure)
export const LayoutLoader = () => (
  <Box sx={{ height: '100%', ...shimmerStyles }}>
    <HeaderShimmer />
    <Grid container sx={{ width: '100%', height: 'calc(100% - 4rem)' }}>
      {/* Chat List Column */}
      <Grid
        size={4}
        sx={{
          display: { xs: 'none', sm: 'block' },
          height: '100%',
          borderRight: '1px solid #e0e0e0',
        }}
      >
        <ChatListShimmer />
      </Grid>

      {/* Main Chat Column */}
      <Grid
        size={4}
        sx={{
          height: '100%',
          borderRight: '1px solid #e0e0e0',
        }}
      >
        <MainChatShimmer />
      </Grid>

      {/* Profile Column */}
      <Grid
        size={4}
        sx={{
          display: { xs: 'none', md: 'block' },
          height: '100%',
        }}
      >
        <ProfileShimmer />
      </Grid>
    </Grid>
  </Box>
);

// Export individual components for specific use cases
export {
  ChatItemShimmer,
  ChatListShimmer,
  HeaderShimmer,
  MainChatShimmer,
  ProfileShimmer,
};