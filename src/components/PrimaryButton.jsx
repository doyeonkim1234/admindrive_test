import { Button } from '@mui/material';

export default function PrimaryButton({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      disableRipple
      sx={{
        height: '36px',
        px: '16px',
        py: '6px',
        minWidth: 0,
        bgcolor: '#272c36',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '6px',
        boxShadow: '0px 1.5px 0px rgba(0,0,0,0.03)',
        fontFamily: 'Pretendard, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '-0.165px',
        color: '#ffffff',
        textTransform: 'none',
        whiteSpace: 'nowrap',
        '&:hover': { bgcolor: '#32373f' },
        '&:active': { bgcolor: '#1e2229' },
      }}
    >
      {children}
    </Button>
  );
}
