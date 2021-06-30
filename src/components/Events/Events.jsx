import React, { useEffect, useState, useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import UserContext from '../assets/UserContext';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    paddingLeft: '6px',
  },
}));

export default function Events() {
  const classes = useStyles();
  const { userInfo, newChange } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const getEventsData = async () => {
    try {
      const eventsData = await axios.get(`http://localhost:8000/api/post`);
      setEvents(eventsData.data);
    } finally {
      setLoadingEvents(false);
    }
  };
  useEffect(() => {
    getEventsData();
  }, [loadingEvents, newChange]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="3px solid #ff80ae"
      borderRadius="6px"
      style={{ margin: '1rem' }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridGap="20px"
        p="10px"
      >
        <Typography variant="h5" className={classes.title}>
          Community Events
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        m="20px"
        gridGap="50px"
      >
        {events
          .filter(
            (item) =>
              item.post_category_id === 1 && item.user_id === userInfo.user_id
          )
          .map((item) => (
            <Card className={classes.root}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
                subheader={item.date.substr(0, 10)}
              />
              <CardMedia
                className={classes.media}
                image={item.picture}
                title={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardContent />
            </Card>
          ))}
      </Box>
    </Box>
  );
}
