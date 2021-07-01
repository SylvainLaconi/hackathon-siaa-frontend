import React, { useState, useEffect, useContext } from 'react';
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
import UserContext from '../assets/UserContext';
import { Title } from '../assets/styles/Theme';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ComponentContainer = styled.div`
  display: 'flex';
  flex-direction: 'column';
  border-radius: 0px;
  margin-top: 1rem;
  text-align: center;
  background-color: white;
`;
const CardContainer = styled.div`
  display: 'flex';
  margin-bottom: 0.5rem;
  text-align: center;
`;

export default function Training() {
  const classes = useStyles();
  const { userInfo, newChange } = useContext(UserContext);
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
  }, [loadingTraining, newChange]);
  return (
    <ComponentContainer>
      <Title>Training</Title>
      {training
        .filter(
          (item) =>
            item.post_category_id === 5 && item.user_id === userInfo.user_id
        )
        .map((item) => {
          return (
            <CardContainer>
              <Card className={classes.root} style={{ margin: '0 auto' }}>
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
                    {item.date.substr(0, 10)} | {item.location}
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
