import { Box, CircularProgress, Typography } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Box>
        <Typography marginBottom={2} marginTop={-2} sx={{ opacity: 0.7 }}>
          Loading...
        </Typography>
      </Box>
      <CircularProgress />
    </Box>
  );
};
