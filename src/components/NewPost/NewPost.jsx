import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  const [contentType, setContentType] = React.useState('event');
  const [community, setCommunity] = React.useState('');
  const handleChange = (event) => {
    setCommunity(event.target.value);
  };
  const classes = useStyles();
  const handleContentType = (event, newContentType) => {
    setContentType(newContentType);
  };
  return (
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
            <MenuItem value="graphism/design">Graphism/Design</MenuItem>
            <MenuItem value="digital marketing">Digital marketing</MenuItem>
            <MenuItem value="writing/translation">Writing/Translation</MenuItem>
            <MenuItem value="video/animation">Video/Animation</MenuItem>
            <MenuItem value="music/audio">Music/Audio</MenuItem>
            <MenuItem value="programming/tech">Programming/Tech</MenuItem>
            <MenuItem value="data">Data</MenuItem>
          </Select>
        </FormControl>
        <ToggleButtonGroup
          value={contentType}
          exclusive
          onChange={handleContentType}
          aria-label="text alignment"
        >
          <ToggleButton value="event" aria-label="left aligned">
            Event
          </ToggleButton>
          <ToggleButton value="news" aria-label="centered">
            News
          </ToggleButton>
          <ToggleButton value="deal" aria-label="right aligned">
            Deal
          </ToggleButton>
          <ToggleButton value="training" aria-label="justified">
            Training
          </ToggleButton>
          <ToggleButton value="topic" aria-label="justified">
            Topic
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box display="flex" m="20px" gridGap="20px">
        <TextField id="standard-basic" label="Title" />
        <TextField id="standard-basic" label="Picture" />
        <TextField id="standard-basic" label="Description" />
        <TextField id="standard-basic" label="Date" />
        <TextField id="standard-basic" label="Lieu" />
        <Button variant="contained" color="primary" className={classes.button}>
          Post
        </Button>
      </Box>
    </Box>
  );
}
