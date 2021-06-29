import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ComponentContainer = styled(Container)`
  border: solid 2px ${Theme.fiverrGreen};
  border-radius: 0.5rem;
  width: 20%;
  margin: 1%;
  padding: 1%;
`;
const CardContainer = styled(Container)`
  margin: 5% 0 0 0;
`;

export default function Training() {
  const classes = useStyles();
  const [training, setTraining] = useState([]);
  const [loadingTraining, setLoadingTraining] = useState(true);
  const getTrainingData = async () => {
    try {
      const trainingData = await axios.get(`http://localhost:8000/api/post`);
      setTraining(trainingData.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingTraining(false);
    }
  };
  useEffect(() => {
    getTrainingData();
  }, [loadingTraining]);
  return (
    <ComponentContainer flex column jcCenter>
      <Title>Training</Title>
      {training
        .filter((item) => item.post_category_id === 5)
        .map((item) => {
          return (
            <CardContainer>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={item.picture}
                  title="Training picture"
                />
                <CardContent>
                  <Typography variant="body1" color="textPrimary" component="p">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {item.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.date} | {item.location}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton>
                    <ChatIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </CardContainer>
          );
        })}
    </ComponentContainer>
  );
}
