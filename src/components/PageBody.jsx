import { Box } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import DialogBody from './DialogBody';

export default function PageBody() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flexShrink: 0,
      }}
    >
      <ProfileHeader />
      <DialogBody />
    </Box>
  );
}
