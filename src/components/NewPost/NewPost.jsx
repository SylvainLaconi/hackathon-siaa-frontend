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
    backgroundColor: '#8f2900',
    '&:hover': {
      backgroundColor: '#ff7640',
    },
  },
}));

export default function NewPost() {
  const { userInfo, loadingInfo } = useContext(UserContext);
  const [contentType, setContentType] = React.useState('event');
  const [community, setCommunity] = React.useState('');
  const [communityList, setCommunityList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [postCategory, setPostCategory] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);

  const userId = !loadingInfo && userInfo.user_id;

  console.log(userId);

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
  return (
    !loadingList &&
    !loadingCategory && (
      <Box
        display="flex"
        flexDirection="column"
        border="2px solid #ff7640"
        borderRadius="6px"
        style={{ margin: '0 1rem' }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gridGap="20px"
          p="10px"
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
          <TextField id="standard-basic" label="Title" />
          <TextField id="standard-basic" label="Picture" />
          <TextField id="standard-basic" label="Description" />
          <TextField id="standard-basic" label="Date" />
          <TextField id="standard-basic" label="Lieu" />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Post
          </Button>
        </Box>
      </Box>
    )
  );
}
