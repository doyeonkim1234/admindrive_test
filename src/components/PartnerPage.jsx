import { Box } from '@mui/material';
import PageHeader from './PageHeader';
import PageBody from './PageBody';

export default function PartnerPage() {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%',
        bgcolor: '#ffffff',
        borderRadius: '18px',
        ml: '12px',
        '@media (max-width: 1023px)': { ml: 0 },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* PageBody */}
      <Box
        sx={{
          flex: 1,
          px: '32px',
          pt: '40px',
          pb: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          overflow: 'hidden',
        }}
      >
        <PageHeader title="General" />
        <PageBody />
      </Box>
    </Box>
  );
}
