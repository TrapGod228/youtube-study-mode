import React from 'react';
import { Box, Chip, styled, useTheme } from '@mui/material';

const categories = [
  'All',
  'Gaming',
  'Chess openings',
  'Live',
  'Music',
  'Original video animation',
  'Data Structures',
  'Shonen manga',
  'AI',
  'Audio commentaries',
  'Source code',
];

const StyledChip = styled(Chip)(() => ({
  borderRadius: 16,
  fontWeight: 500,
  fontSize: '0.9rem',
  height: 40,
  transition: 'all 0.2s ease',
  '&:hover': {
    bgcolor: 'rgba(0, 0, 0, 0.04)',
  },
  '&.MuiChip-clickable': {
    color: 'text.secondary',
    '&.Mui-focusVisible': {
      outline: '2px auto rgba(0, 0, 0, 0.12)',
    },
  },
  px: 2.5,
}));

const CategoryChips: React.FC = () => {
  const [selected, setSelected] = React.useState(0);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1.5,
        pl: 2,
        pr: 1,
        py: 0.75,
        bgcolor: '#fff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'sticky',
        top: 56,
        left: 0,
        right: 0,
        zIndex: 1100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        borderRadius: 1,
      }}
    >
      {categories.map((cat, idx) => (
        <StyledChip
          key={cat}
          label={cat}
          clickable
          color={selected === idx ? 'primary' : 'default'}
          onClick={() => setSelected(idx)}
          sx={{
            color: selected === idx ? '#fff' : theme.palette.text.primary,
          }}
        />
      ))}
    </Box>
  );
};

export default CategoryChips;
