import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';
import picture1 from '../assets/img/writing.jpg';
import picture2 from '../assets/img/photo65.jpg';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const trainingData = [
  {
    title: 'Première formation',
    picture: picture1,
    description: 'description',
    date: '29.06.2021 ',
    location: 'Paris',
  },
  {
    title: 'Deuxième formation',
    picture: picture2,
    description: 'description2',
    date: '27.06.2021 ',
    location: 'Lille',
  },
];

export default function RecipeReviewCard() {
  const classes = useStyles();
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
  return (
    <ComponentContainer>
      <Title>Training</Title>
      {trainingData.map((item) => {
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
                  {item.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
              </CardActions>
            </Card>
          </CardContainer>
        );
      })}
    </ComponentContainer>
  );
}
