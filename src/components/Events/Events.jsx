import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
      m="20px"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridGap="20px"
        p="10px"
      >
        <Typography variant="h5" className={classes.title}>
          Communauty Events
        </Typography>
      </Box>
      <Box display="flex" m="20px" gridGap="20px" />
    </Box>
  );
}
