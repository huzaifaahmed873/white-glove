import React from 'react'
import SubDrawer from '../../components/Drawer'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import Card from '../../components/card';
import RfpTable from '../../components/tableContent';

const TableContent= () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
  return (
    <>
      <SubDrawer content=<RfpTable /> />
      
    </>
  )
}

export default TableContent