import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  ListItemIcon,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import UserContext from '../assets/UserContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  title: {
    paddingLeft: '6px',
  },
  button: {
    margin: theme.spacing(1),
    color: 'white',
    backgroundColor: '#1dbf73',
    '&:hover': {
      backgroundColor: '#d0f7e6',
      color: 'black',
    },
  },
}));

export default function NewPost() {
  const { userInfo, loadingInfo, newChange, setNewChange } =
    useContext(UserContext);
  const [contentType, setContentType] = React.useState('event');
  const [community, setCommunity] = React.useState('');
  const [communityList, setCommunityList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [postCategory, setPostCategory] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const userId = !loadingInfo && userInfo.user_id;

  const getCommunityList = async () => {
    try {
      const dataList = await axios.get(`http://localhost:8000/api/community`);
      setCommunityList(dataList.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingList(false);
    }
  };

  const getPostCategory = async () => {
    try {
      const dataCategory = await axios.get(
        `http://localhost:8000/api/post_category`
      );
      setPostCategory(dataCategory.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingCategory(false);
    }
  };

  useEffect(() => {
    getCommunityList();
    getPostCategory();
  }, [loadingList]);

  const handleChange = (event) => {
    setCommunity(event.target.value);
  };
  const classes = useStyles();
  const handleContentType = (event, newContentType) => {
    setContentType(newContentType);
  };

  const postNewPost = async () => {
    try {
      await axios.post('http://localhost:8000/api/post', {
        title,
        picture,
        content,
        date,
        location,
        community_id: community,
        user_id: userId,
        post_category_id: contentType,
      });
      setNewChange(!newChange);
      toast.success('Your post is sent');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.error(`${error.message}`);
    }
  };
  return (
    !loadingList &&
    !loadingCategory && (
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="0px"
        bgcolor="white"
        style={{ margin: '0 1rem' }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gridGap="20px"
          p="10px"
          backgroundColor="white"
        >
          <Typography variant="h5" className={classes.title}>
            New Post
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="post-community">Community</InputLabel>
            <Select
              labelId="post-community"
              id="post-community-select"
              value={community}
              onChange={handleChange}
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                MenuListProps: {
                  disablePadding: true,
                },
              }}
            >
              {communityList.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.community_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ToggleButtonGroup
            value={contentType}
            exclusive
            onChange={handleContentType}
            aria-label="text alignment"
          >
            {postCategory.map((item) => (
              <ToggleButton key={ListItemIcon.id} value={item.id}>
                {item.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Box display="flex" m="20px" gridGap="20px">
          <TextField
            id="standard-basic"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Lieu"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button
            variant="contained"
            color="black"
            className={classes.button}
            onClick={postNewPost}
          >
            Post
          </Button>
        </Box>
      </Box>
    )
  );
}
