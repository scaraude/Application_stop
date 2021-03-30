import React from "react";
import Logo from "./Logo.png"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar : {
    background : "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  item: {
    color: "brown",
  },
}));

const NavBar = () => {
  const classes = useStyles();
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} alt="Hitch Hick logo" />
          </Typography>
          <Button className={classes.item}>Itinéraire</Button>
          <Button className={classes.item}>Plan</Button>
          <Button className={classes.item}>Blog</Button>
          <Button className={classes.item}>Login</Button>
        </Toolbar>
      </AppBar>
    );
  };
export default NavBar;