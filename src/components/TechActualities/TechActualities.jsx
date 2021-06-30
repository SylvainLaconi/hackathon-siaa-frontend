import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
import UserContext from '../assets/UserContext';
import Theme, { Title, Container } from '../assets/styles/Theme';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '40%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ComponentContainer = styled(Container)`
  border: solid 3px ${Theme.fiverrPinkLight};
  border-radius: 6px;
  margin: 0 1rem;
`;
const CardContainer = styled(Container)`
  margin: 0 0 0 0;
`;
const Link = styled.a`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${Theme.fiverrPink};
  &:hover {
    color: ${Theme.fiverrPinkLight};
  }
`;

export default function TechActualities() {
  const classes = useStyles();
  const { userInfo, newChange } = useContext(UserContext);
  const [actualities, setActualities] = useState([]);
  const [loadingActualities, setLoadingActualities] = useState(true);
  const getActualitiesData = async () => {
    try {
      const actualitiesData = await axios.get(`http://localhost:8000/api/post`);
      setActualities(actualitiesData.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingActualities(false);
    }
  };
  useEffect(() => {
    getActualitiesData();
  }, [loadingActualities, newChange]);
  return (
    <ComponentContainer flex column jcCenter>
      <Title>Tech Actualities</Title>
      {actualities
        .filter(
          (item) =>
            item.post_category_id === 3 && item.user_id === userInfo.user_id
        )
        .map((item) => {
          return (
            <CardContainer>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={`${item.firstname} ${item.lastname}`}
                  subheader={`${item.date} | ${item.location}`}
                />
                <CardContent>
                  <Typography variant="body1" color="textPrimary" component="p">
                    {item.title}
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image={item.picture}
                    title="Article picture"
                  />
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
                  <Link
                    href={item.content}
                    target="_blank"
                    rel="noreferrer"
                    className="article"
                  >
                    See more
                  </Link>
                </CardActions>
              </Card>
            </CardContainer>
          );
        })}
    </ComponentContainer>
  );
}
