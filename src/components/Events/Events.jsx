import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import devoxx from '../assets/img/devoxx-france.png';

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

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="2px solid #ff80ae"
      borderRadius="6px"
      m="20px"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridGap="20px"
        p="10px"
      >
        <Typography variant="h5" className={classes.title}>
          Communauty Events
        </Typography>
      </Box>
      <Box display="flex" m="20px" gridGap="20px">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="event" className={classes.avatar}>
                M
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Devoxx France"
            subheader="From September 29 to October 1st, 2021"
          />
          <CardMedia
            className={classes.media}
            image={devoxx}
            title="Devoxx France 2021"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              A conference for developpers organized by Quantixx in the Palais
              des Congrès in Paris.
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
      </Box>
    </Box>
  );
}
