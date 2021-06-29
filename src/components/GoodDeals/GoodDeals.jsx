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
import { Image } from '@material-ui/icons';
import mouse from '../assets/img/mouse.jpg';
import screen from '../assets/img/screen.jpg';
import cable from '../assets/img/cable.jpg';
import computer from '../assets/img/macbook.jpg';
import tablet from '../assets/img/tablet.jpg';
import printer from '../assets/img/printer.png';

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
                <Image>image={screen}</Image>
                <ListItemText
                  primary="Screen 24 inch"
                  secondary="Juin 26, 2021 This Apple screen is to sell for 350$, color white."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Image>image={cable}</Image>
                </ListItemAvatar>
                <ListItemText
                  primary="Cable USB"
                  secondary="July 13, 2021 This câble USB is to sell for 5$. Never used."
                />
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <List className={classes.root}>
              <ListItem>
                <Image>image={computer}</Image>
                <ListItemText
                  primary="MacBook Air"
                  secondary="May 29, 2021 My MacBook Air is to rent for 40$/month."
                />
              </ListItem>
              <ListItem>
                <Image>image={tablet}</Image>
                <ListItemText
                  primary="iPad Pro 3 tablet"
                  secondary="May 25, 2021 This tablet is to rent for 35$/month."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Image>image={printer}</Image>
                </ListItemAvatar>
                <ListItemText
                  primary="Printer HP officeJet Pro 8000"
                  secondary="July 13, 2021 This printer is to rent for 75$/month."
                />
              </ListItem>
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
