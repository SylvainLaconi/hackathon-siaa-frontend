import React from 'react';
import { Box, CardActionArea, makeStyles, Typography } from '@material-ui/core';
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
import mixit from '../assets/img/mixit2021.jpg';
import reactSummit from '../assets/img/reactSummit2021.png';
import dddeurope from '../assets/img/DDD-europe2022.jpg';

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
      <Box display="flex" justifyContent="center" m="20px" gridGap="50px">
        <Card className={classes.root}>
          <CardActionArea href="https://dddeurope.com/" target="_blank">
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
              title="DDD Europe"
              subheader="June 23-24, 2022"
            />
            <CardMedia
              className={classes.media}
              image={dddeurope}
              title="DDD Europe 2022"
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
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea href="https://www.devoxx.fr/" target="_blank">
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
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea href="https://mixitconf.org/" target="_blank">
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
              title="MiXiT 2021"
              subheader="May 18, 19 & 20, 2021"
            />
            <CardMedia
              className={classes.media}
              image={mixit}
              title="MiXiT 2021"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                A conference for developpers. This year, for its 10th edition,
                the conferences are online, in french and in english !
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
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea
            href="https://remote.reactsummit.com/"
            target="_blank"
          >
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
              title="React Summit"
              subheader="April 14-16, 2021"
            />
            <CardMedia
              className={classes.media}
              image={reactSummit}
              title="React Summit 2021"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                The biggest React conference in the cloud !
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
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
