import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Collapse,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

// ──────────────── design tokens ────────────────
const colors = {
  bgSurface: '#0e1018',
  textPrimary: '#f2f4f7',
  textSecondary: '#cbd1dc',
  textTertiary: '#727b8c',
  textMuted: '#454e5b',
  brandPrimary: '#4364e8',
  hoverBg: 'rgba(123,156,241,0.08)',
  divider: 'rgba(255,255,255,0.08)',
};

const NAV_SECTIONS = [
  {
    id: 'account',
    label: '계정 관리',
    items: [
      { id: 'users',         label: '사용자',        icon: PeopleAltOutlinedIcon },
      { id: 'admins',        label: '관리자',         icon: ManageAccountsOutlinedIcon },
      { id: 'pending-del',   label: '삭제 대기 계정', icon: PersonRemoveOutlinedIcon },
    ],
  },
  {
    id: 'system',
    label: '시스템 설정',
    items: [
      { id: 'general',   label: '일반 설정',       icon: TuneOutlinedIcon },
      { id: 'smtp',      label: 'SMTP 설정',       icon: EmailOutlinedIcon },
      { id: 'license',   label: '라이선스 관리',    icon: CardMembershipOutlinedIcon },
      { id: 'office',    label: 'Office 설정',     icon: ApartmentOutlinedIcon },
      { id: 'storage',   label: '스토리지 설정',    icon: StorageOutlinedIcon },
      { id: 'note',      label: '노트 설정 (Beta)', icon: NoteOutlinedIcon },
    ],
  },
  {
    id: 'security',
    label: '보안/인증 관리',
    items: [
      { id: 'auth',    label: '인증 설정',      icon: LockOutlinedIcon },
      { id: 'apikey',  label: 'API Key 관리',   icon: KeyOutlinedIcon },
      { id: 'access',  label: '접근 제한 설정', icon: BlockOutlinedIcon },
    ],
  },
  {
    id: 'service',
    label: '서비스 관리',
    items: [
      { id: 'branding',  label: '브랜딩 설정', icon: BrushOutlinedIcon },
      { id: 'features',  label: '기능 설정',   icon: ExtensionOutlinedIcon },
    ],
  },
];

// ──────────────── sub-components ────────────────

function SectionHeader({ label, expanded, onToggle }) {
  return (
    <Box
      onClick={onToggle}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
        userSelect: 'none',
        width: '100%',
      }}
    >
      <Box
        sx={{
          flex: '1 0 0',
          height: '28px',
          display: 'flex',
          alignItems: 'flex-end',
          pb: '2px',
          pt: '6px',
          px: '8px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            lineHeight: '16px',
            color: colors.textMuted,
          }}
        >
          {label}
        </Typography>
      </Box>
      {expanded ? (
        <ExpandLessIcon sx={{ fontSize: 16, color: colors.textMuted, flexShrink: 0 }} />
      ) : (
        <ExpandMoreIcon sx={{ fontSize: 16, color: colors.textMuted, flexShrink: 0 }} />
      )}
    </Box>
  );
}

function NavItem({ label, icon: Icon, active, onClick }) {
  return (
    <ListItemButton
      onClick={onClick}
      disableRipple
      sx={{
        height: '36px',
        borderRadius: '4px',
        px: '12px',
        py: '4px',
        gap: '10px',
        flexShrink: 0,
        bgcolor: active ? colors.brandPrimary : 'transparent',
        '&:hover': {
          bgcolor: active ? colors.brandPrimary : colors.hoverBg,
        },
        minWidth: 0,
      }}
    >
      <ListItemIcon sx={{ minWidth: 0, flexShrink: 0 }}>
        <Icon
          sx={{
            fontSize: 16,
            color: active ? colors.textPrimary : colors.textTertiary,
          }}
        />
      </ListItemIcon>
      <ListItemText
        primary={label}
        slotProps={{
          primary: {
            sx: {
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '16px',
              letterSpacing: '-0.24px',
              color: active ? colors.textPrimary : colors.textTertiary,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
        }}
      />
    </ListItemButton>
  );
}

// ──────────────── main component ────────────────

export default function NavSidebar() {
  const [activeItem, setActiveItem] = useState('users');
  const [expandedSections, setExpandedSections] = useState({
    account: true,
    system: true,
    security: true,
    service: true,
  });

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  return (
    <Box
      sx={{
        width: '260px',
        height: '100%',
        '@media (max-width: 1023px)': { display: 'none' },
        bgcolor: colors.bgSurface,
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: '24px',
          pt: '20px',
          pb: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '-0.165px',
            color: colors.textPrimary,
          }}
        >
          Thinkfree{' '}
          <Box component="span" sx={{ color: colors.brandPrimary }}>
            Drive
          </Box>
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '16px',
            color: colors.textSecondary,
          }}
        >
          Admin
        </Typography>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          borderColor: colors.divider,
          mx: '15px',
          flexShrink: 0,
        }}
      />

      {/* DrawerContent */}
      <Box
        sx={{
          flex: '1 0 0',
          overflowY: 'auto',
          px: '12px',
          pt: '16px',
          pb: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          '&::-webkit-scrollbar': { width: '0px' },
        }}
      >
        {NAV_SECTIONS.map((section) => (
          <Box key={section.id} sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <SectionHeader
              label={section.label}
              expanded={expandedSections[section.id]}
              onToggle={() => toggleSection(section.id)}
            />
            <Collapse in={expandedSections[section.id]} timeout={200} unmountOnExit>
              <List disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                {section.items.map((item) => (
                  <NavItem
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    active={activeItem === item.id}
                    onClick={() => setActiveItem(item.id)}
                  />
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </Box>

      {/* DrawerFooter */}
      <Box
        sx={{
          height: '64px',
          px: '12px',
          py: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          bgcolor: colors.bgSurface,
          flexShrink: 0,
        }}
      >
        {/* Avatar */}
        <Box
          sx={{
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            bgcolor: colors.brandPrimary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '16px',
              letterSpacing: '-0.24px',
              color: '#ffffff',
            }}
          >
            E
          </Typography>
        </Box>

        {/* User info */}
        <Box
          sx={{
            flex: '1 0 0',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            overflow: 'hidden',
          }}
        >
          <Typography
            noWrap
            sx={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '16px',
              letterSpacing: '-0.24px',
              color: colors.textPrimary,
            }}
          >
            관리자
          </Typography>
          <Typography
            noWrap
            sx={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              lineHeight: '16px',
              color: colors.textMuted,
            }}
          >
            admin@thinkfree.com
          </Typography>
        </Box>

        {/* 3-dot menu */}
        <IconButton
          size="small"
          disableRipple
          sx={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            padding: 0,
            flexShrink: 0,
            '&:hover': { bgcolor: colors.hoverBg },
          }}
        >
          <MoreVertIcon sx={{ fontSize: 16, color: colors.textTertiary }} />
        </IconButton>
      </Box>
    </Box>
  );
}
