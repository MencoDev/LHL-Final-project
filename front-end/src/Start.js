import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from './config/axios';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: '50%',
  },
}));

export default function Start(props) {
  const classes = useStyles();
  const history = useHistory();
  
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get("/users").then(res => {
      console.log("Response has comeback!");
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    setUserName(getName(history.location.state?.userId));
  }, [users])

  function getName(id) {
    console.log(id);
    const user = users.filter(user => user.id === id)[0]
    return (user) ? user.name : "Default User";
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img className={classes.img} alt="cartoon-date" src="https://media.istockphoto.com/vectors/illustration-of-romantic-date-vector-id1056840218?k=20&m=1056840218&s=612x612&w=0&h=1PX5kGppsR5BGi_rqfDvjoGfqKgW5ySRV-LNcAKX-00="/>
      <Typography component="h1" variant="h5">
        Welcome, {userName}!
      </Typography>
      <Typography component="h1" variant="subtitle1" color="textSecondary">
        You currently have no date spots.
      </Typography>
      <Button
        variant="contained"
        color="primary"
      >
        <Link to={{pathname:"/generatelist", state: { userId: history.location.state?.userId}}} style={{ textDecoration: 'none', color: "white" }}>
          Start building your list
        </Link>
      </Button>
    </Container>
  )
}
