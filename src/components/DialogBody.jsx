import { Box } from '@mui/material';
import FormControls from './FormControls';
import PrimaryButton from './PrimaryButton';

export default function DialogBody() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#ffffff',
        border: '1px solid #e2e5ec',
        borderRadius: '12px',
        pt: '24px',
        pl: '32px',
        pr: '40px',
        pb: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '32px',
        flexShrink: 0,
      }}
    >
      {/* FormControls */}
      <FormControls />

      <PrimaryButton>저장</PrimaryButton>
    </Box>
  );
}
