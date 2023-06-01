import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoughnutChart from '../../components/DoughnutChart'
import './css/style.css'
import DashboardTable from '../../components/table';
import AppNav from '../../components/navbar';
import SubNav from '../../components/subNav';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <AppNav />
    <SubNav />
    <Grid container className='dashboard'>
      <Grid md={3} xs={12}>
        <DoughnutChart />
        <div>
          <p>Project Plan</p>
          <p>Today-Project Started</p>
          <p>Tomorrow</p>
        </div>

        <div className='background'>
          <p>Scope Project</p>
          <p className='float'>Complete</p>
        </div>
        <p>April, 6, 2020</p>
        <div className='border'>
          <p>Assign SMEs</p>
          <p className='float'>Not Started</p>
        </div>
        <p>April, 6, 2020</p>

        <div className='background'>
          <p>Security Overview</p>
          <p className='float'>In Progress</p>
        </div>
        <p>April, 6, 2020</p>
        <div className='border'>
          <p>Assign SMEs</p>
          <p className='float'>Not Started</p>
        </div>
      </Grid>
      <Grid md={9} xs={12}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="By Participant" {...a11yProps(0)} />
              <Tab label="By Section" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DashboardTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </TabPanel>

        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default Dashboard