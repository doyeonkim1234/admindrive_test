import { Box, Typography, Select, MenuItem, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from './FormControl';
import EditIcon from '../assets/icons/edit.svg';

const textStyle = {
  fontFamily: 'Pretendard, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.165px',
  color: '#171b23',
};

const inputSx = {
  width: '100%',
  height: '36px',
  fontFamily: 'Pretendard, sans-serif',
  fontSize: '14px',
  color: '#32373f',
  letterSpacing: '-0.165px',
  '& .MuiOutlinedInput-root': {
    height: '36px',
    borderRadius: '6px',
    '& fieldset': { borderColor: '#e2e5ec' },
    '&:hover fieldset': { borderColor: '#cbd1dc' },
    '&.Mui-focused fieldset': { borderColor: '#4364e8', borderWidth: '1px' },
  },
  '& .MuiOutlinedInput-input': {
    padding: '8px 12px',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '14px',
    color: '#32373f',
    letterSpacing: '-0.165px',
  },
};

const selectSx = {
  width: '100%',
  height: '36px',
  borderRadius: '6px',
  fontFamily: 'Pretendard, sans-serif',
  fontSize: '14px',
  color: '#32373f',
  letterSpacing: '-0.165px',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e2e5ec' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#cbd1dc' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4364e8', borderWidth: '1px' },
  '& .MuiSelect-select': {
    padding: '8px 12px',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '14px',
  },
  '& .MuiSelect-icon': { color: '#727b8c', fontSize: 18 },
};

// ── 비밀번호 dots ──
function PasswordDots() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '36px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <Box
            key={i}
            sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#32373f', flexShrink: 0 }}
          />
        ))}
      </Box>
      <Box
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img src={EditIcon} alt="edit" width={16} height={16} />
      </Box>
    </Box>
  );
}

// ── 읽기전용 텍스트 값 ──
function ReadonlyValue({ children }) {
  return (
    <Typography sx={{ ...textStyle, whiteSpace: 'nowrap' }}>{children}</Typography>
  );
}

export default function FormControls() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>

      {/* 관리자 계정 */}
      <FormControl label="관리자 계정">
        <ReadonlyValue>admin@thinkfree.com</ReadonlyValue>
      </FormControl>

      {/* 비밀번호 */}
      <FormControl label="비밀번호">
        <PasswordDots />
      </FormControl>

      {/* 언어 */}
      <FormControl label="언어">
        <Select
          defaultValue="english"
          IconComponent={KeyboardArrowDownIcon}
          sx={selectSx}
        >
          <MenuItem value="english" sx={{ fontFamily: 'Pretendard, sans-serif', fontSize: '14px' }}>English</MenuItem>
          <MenuItem value="korean" sx={{ fontFamily: 'Pretendard, sans-serif', fontSize: '14px' }}>한국어</MenuItem>
        </Select>
      </FormControl>

      {/* 서버 IP */}
      <FormControl label="서버 IP">
        <TextField
          defaultValue="http://203.246.181.144"
          sx={inputSx}
        />
      </FormControl>

      {/* 도메인 주소 */}
      <FormControl label="도메인 주소">
        <TextField
          defaultValue="https://drive-dev.local.thinkfree.com"
          sx={inputSx}
        />
      </FormControl>

      {/* 제품버전 */}
      <FormControl label="제품버전">
        <ReadonlyValue>v1.3.0(build 202605131600)</ReadonlyValue>
      </FormControl>

    </Box>
  );
}
