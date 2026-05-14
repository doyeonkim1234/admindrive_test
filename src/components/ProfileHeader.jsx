import { Box, Typography } from '@mui/material';
import ProfileIcon from '../assets/icons/Profile.svg';
import EditIcon from '../assets/icons/edit.svg';

const colors = {
  textSecondary: '#32373f',
  textMuted:     '#454e5b',
};

export default function ProfileHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Profile avatar */}
      <Box sx={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
        <img src={ProfileIcon} alt="profile" width={48} height={48} />

        {/* ProfileEditAction — absolute, bottom-0, left=32px (우하단 편집 버튼) */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '32px',
            width: 20,
            height: 20,
            bgcolor: '#ffffff',
            border: '1px solid #e2e5ec',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <img src={EditIcon} alt="edit" width={12} height={12} />
        </Box>
      </Box>

      {/* ProfileInfo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '-0.165px',
            color: colors.textSecondary,
            whiteSpace: 'nowrap',
          }}
        >
          Admin(default)
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '16px',
            letterSpacing: '-0.24px',
            color: colors.textMuted,
            whiteSpace: 'nowrap',
          }}
        >
          admin@thinkfree.com
        </Typography>
      </Box>
    </Box>
  );
}
