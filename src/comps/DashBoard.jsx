import React from 'react';
import { Stack, Box, Typography } from "@mui/material";
import BasicPie from './Pie';
import GridDemo from './Line';
import CompositionExample from './Gauge';
import BasicBars from './Bar';
import RadarChartDemo from './RadarChart';
import AreaChartDemo from './AreaChart';


const chartBoxStyle = (bgGradient) => ({
  position: 'relative',
  width: '48%',
  height: 400,
  borderRadius: 4,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.3)',
    '&::before': {
      opacity: 1,
      animation: 'pulseGlow 2s ease-in-out infinite',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: bgGradient,
    opacity: 0.3,
    filter: 'blur(30px)',
    zIndex: 0,
    transition: 'opacity 0.4s ease',
  },
  '& .chart-content': {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const titleStyle = {
  variant: "h6",
  fontWeight: "bold",
  mb: 2,
  color: '#111827',
  zIndex: 1,
};

const DashBoard = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%', bgcolor: '#f3f4f6' }}>
      <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto', width: '100%' }}>


        <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="space-between" mb={6}>
          <Box sx={chartBoxStyle('linear-gradient(to right, #a1c4fd, #c2e9fb)')}>
            <Typography sx={titleStyle}>Traffic Report</Typography>
            <Box className="chart-content">
              <BasicPie />
            </Box>
          </Box>

          <Box sx={chartBoxStyle('linear-gradient(to right, #fbc2eb, #a6c1ee)')}>
            <Typography sx={titleStyle}>Revenue Report</Typography>
            <Box className="chart-content">
              <CompositionExample />
            </Box>
          </Box>
        </Stack>


        <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="space-between" mb={6}>
          <Box sx={chartBoxStyle('linear-gradient(to right, #fddb92, #d1fdff)')}>
            <Typography sx={titleStyle}>Zone Report</Typography>
            <Box className="chart-content">
              <GridDemo />
            </Box>
          </Box>

          <Box sx={chartBoxStyle('linear-gradient(to right, #a1ffce, #faffd1)')}>
            <Typography sx={titleStyle}>Everyday Report</Typography>
            <Box className="chart-content">
              <BasicBars />
            </Box>
          </Box>
        </Stack>


        <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="space-between">
          <Box sx={chartBoxStyle('linear-gradient(to right, #f6d365, #fda085)')}>
            <Typography sx={titleStyle}>Department Report</Typography>
            <Box className="chart-content">
              <RadarChartDemo />
            </Box>
          </Box>

          <Box sx={chartBoxStyle('linear-gradient(to right, #e0c3fc, #8ec5fc)')}>
            <Typography sx={titleStyle}>Sales Trend</Typography>
            <Box className="chart-content">
              <AreaChartDemo />
            </Box>
          </Box>
        </Stack>
      </Box>

      <style>
        {`
          @keyframes pulseGlow {
            0% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.05);
            }
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default DashBoard;
