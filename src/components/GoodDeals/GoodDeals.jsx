import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Image } from '@material-ui/icons';
import mouse from '../assets/img/mouse.jpg';

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  title: {
    paddingLeft: '6px',
  },
}));

export default function GoodDeals() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="2px solid #be5272"
      borderRadius="6px"
      m="20px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap="20px"
        p="10px"
      >
        <Typography variant="h5" className={classes.title}>
          The bargain corner
        </Typography>
        <Paper className={classes.root}>
          <Tabs
            value={tab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="To sell" />
            <Tab label="To rent" />
            <Tab label="Classified ad" />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <List className={classes.root}>
              <ListItem>
                <Image>image={mouse}</Image>
                <ListItemText
                  primary="Mouse"
                  secondary="June 29, 2021 This mouse is to sell for 5$."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Screen 24 inch"
                  secondary="Juin 26, 2021 "
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Cable USB"
                  secondary="July 13, 2021"
                  price="10$"
                />
              </ListItem>
            </List>
          </TabPanel>
        </Paper>
      </Box>
    </Box>
  );
}
