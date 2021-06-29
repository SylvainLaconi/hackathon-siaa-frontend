import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';
import picture1 from '../assets/img/writing.jpg';
import picture2 from '../assets/img/photo65.jpg';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const trainingData = [
  {
    userName: 'John',
    userInitial: 'J',
    title: 'Première actualité',
    picture: picture1,
    description: 'description',
    date: '29.06.2021 ',
    location: 'Paris',
  },
  {
    userName: 'Sam',
    userInitial: 'S',
    title: 'Deuxième actualité',
    picture: picture2,
    description: 'description2',
    date: '27.06.2021 ',
    location: 'Lille',
  },
];

const ComponentContainer = styled(Container)`
  border: solid 2px ${Theme.fiverrPinkLight};
  border-radius: 0.5rem;
  margin: 1%;
  padding: 1%;
`;
const CardContainer = styled(Container)`
  margin: 2% 0 0 0;
`;

export default function TechActualities() {
  const classes = useStyles();
  return (
    <ComponentContainer flex column jcCenter>
      <Title>Training</Title>
      {trainingData.map((item) => {
        return (
          <CardContainer>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {item.userInitial}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.userName}
                subheader={`${item.date} | ${item.location}`}
              />
              <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  {item.description}
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
