import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.jpg'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem"
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "NONE",
  },
  grow: {
    flexGrow: 1
  },
  Button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10PX",
    height: "2rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image}/>
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" color='textPrimary' component="p">
            Hello Guest
          </Typography>
          <div className={classes.Button}>
            <Button variant='outlined'>
                <strong>Sign In</strong>
            </Button>
            <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={5} color='secondary'>
                    <ShoppingCart fontSize='large' color='Primary'/>
                </Badge>           
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
