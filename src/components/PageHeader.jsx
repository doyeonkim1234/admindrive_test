import { Box, Typography } from '@mui/material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const colors = {
  brandPrimary: '#4364e8',
  textSecondary: '#32373f',
};

export default function PageHeader({ title = 'General' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        width: '100%',
        height: '24px',
      }}
    >
      {/* screen_folder — 1024px 미만에서만 노출 */}
      <Box sx={{ display: 'none', '@media (max-width: 1023px)': { display: 'flex' }, width: 24, height: 24, flexShrink: 0 }}>
        <MenuIcon sx={{ fontSize: 24, color: colors.textSecondary }} />
      </Box>

      {/* PageTitle */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {/* Iconly chart icon — cobalt 테두리 + 아이콘 */}
        <Box
          sx={{
            position: 'relative',
            width: 20,
            height: 20,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1.2px solid ${colors.brandPrimary}`,
            borderRadius: '3.5px',
          }}
        >
          <BarChartOutlinedIcon
            sx={{ fontSize: 13, color: colors.brandPrimary }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 600,
            fontSize: '17px',
            lineHeight: '24px',
            letterSpacing: '-0.45px',
            color: colors.textSecondary,
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
