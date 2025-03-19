import React from 'react';
import { Stack, Box, Typography, useTheme } from "@mui/material";
import BasicPie from './Pie';
import GridDemo from './Line';
import CompositionExample from './Gauge';
import BasicBars from './Bar';

const DashBoard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', height: '100%', bgcolor: '#f9fafb' }}>
      {/* Dashboard Content */}
      <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto', width: '100%' }}>

        {/* Top Section */}
        <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="space-between" mb={6}>
          <Box
            sx={{
              background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
              width: '48%',
              height: 400,
              boxShadow: 4,
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Traffic Report
            </Typography>
            <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BasicPie />
            </Box>
          </Box>

          <Box
            sx={{
              background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
              width: '48%',
              height: 400,
              boxShadow: 4,
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Revenue Report
            </Typography>
            <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CompositionExample />
            </Box>
          </Box>
        </Stack>

        {/* Bottom Section */}
        <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="space-between">
          <Box
            sx={{
              background: 'linear-gradient(to right, #fddb92, #d1fdff)',
              width: '48%',
              height: 400,
              boxShadow: 4,
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Zone Report
            </Typography>
            <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GridDemo />
            </Box>
          </Box>

          <Box
            sx={{
              background: 'linear-gradient(to right, #a1ffce, #faffd1)',
              width: '48%',
              height: 400,
              boxShadow: 4,
              borderRadius: 4,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Everyday Report
            </Typography>
            <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BasicBars />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default DashBoard;
