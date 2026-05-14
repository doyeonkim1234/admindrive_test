import { Box, Typography } from '@mui/material';

export default function FormControl({ label, children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        minHeight: '36px',
        '@media (max-width: 1023px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          minHeight: 'unset',
        },
      }}
    >
      {/* InputLabel */}
      <Box sx={{ width: '120px', flexShrink: 0, height: '16px' }}>
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: '16px',
            letterSpacing: '-0.24px',
            color: '#32373f',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* FormControlValue */}
      <Box
        sx={{
          flex: '1 0 0',
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          height: '36px',
          '@media (max-width: 1023px)': {
            width: '100%',
            flex: 'unset',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
