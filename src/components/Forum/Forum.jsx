import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
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
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';
import UserContext from '../assets/UserContext';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ComponentContainer = styled(Container)`
  border: solid 2px ${Theme.fiverrOrangeLight};
  border-radius: 0.5rem;
  margin: 1%;
  padding: 1%;
`;
const CardContainer = styled(Container)`
  margin: 0 0 0 0;
`;

export default function Forum() {
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);

  const [topics, setTopics] = useState([]);
  const [loadingTopic, setLoadingTopic] = useState(true);
  const getTopicData = async () => {
    try {
      const topicData = await axios.get(`http://localhost:8000/api/post`);
      setTopics(topicData.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingTopic(false);
    }
  };
  useEffect(() => {
    getTopicData();
  }, [loadingTopic]);

  return (
    <ComponentContainer flex column jcCenter>
      <Title>Forum</Title>
      {topics
        .filter(
          (topic) =>
            topic.post_category_id === 4 && topic.user_id === userInfo.user_id
        )
        .map((topic) => (
          <CardContainer>
            <Card className={classes.root}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={`${topic.title}`}
                subheader={`${topic.date} | ${topic.community_name}`}
              />
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                  {topic.content} ...
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
        ))}
    </ComponentContainer>
  );
}
