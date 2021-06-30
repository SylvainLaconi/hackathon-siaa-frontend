import React, { useContext, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import UserContext from '../assets/UserContext';

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
  photo: {
    width: '150px',
    paddingRight: '20px',
  },
}));

export default function GoodDeals() {
  const classes = useStyles();
  const { userInfo, newChange } = useContext(UserContext);
  const [goodDeals, setGoodDeals] = useState([]);
  const [loadingGoodDeals, setLoadingGoodDeals] = useState(true);
  const [tab, setTab] = React.useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };
  const getGoodDealsData = async () => {
    try {
      const goodDealsData = await axios.get(`http://localhost:8000/api/post`);
      setGoodDeals(goodDealsData.data);
    } finally {
      setLoadingGoodDeals(false);
    }
  };
  useEffect(() => {
    getGoodDealsData();
  }, [loadingGoodDeals, newChange]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="3px solid #be5272"
      borderRadius="6px"
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
              {goodDeals
                .filter(
                  (item) =>
                    item.post_category_id === 2 &&
                    item.user_id === userInfo.user_id
                )
                .map((item) => (
                  <ListItem>
                    <img
                      className={classes.photo}
                      src={item.picture}
                      alt={item.title}
                    />
                    <ListItemText
                      primary={item.title}
                      secondary={`${item.date.substr(0, 10)}, This ${
                        item.title
                      } is to sell for ${item.content}.`}
                    />
                  </ListItem>
                ))}
            </List>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <List className={classes.root}>
              {goodDeals
                .filter(
                  (item) =>
                    item.post_category_id === 2 &&
                    item.user_id === userInfo.user_id
                )
                .map((item) => (
                  <ListItem>
                    <img
                      className={classes.photo}
                      src={item.picture}
                      alt={item.title}
                    />
                    <ListItemText
                      primary={item.title}
                      secondary={`${item.date.substr(0, 10)}, This ${
                        item.title
                      } is to sell for ${item.content}.`}
                    />
                  </ListItem>
                ))}
            </List>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <List className={classes.root}>
              <ListItem>
                <ListItemText
                  primary="JavaScript classes"
                  secondary="June 16, 2021 Hello, I'm looking for someone to teach some basis in JS. I live in Paris and I'm available every weekend. Thank you !"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="UX UI Designer"
                  secondary="May 30, 2021 Hi, I'm working on a personal projet and I need a professional help of an UX UI designer. Someone to join my team ? I'll give you more details later ;-)"
                />
              </ListItem>
            </List>
          </TabPanel>
        </Paper>
      </Box>
    </Box>
  );
}
