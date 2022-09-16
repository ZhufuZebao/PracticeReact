import React from 'react';
import {Button} from '@material-ui/core'
import { Paper,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from "react-router-dom";
const useStyles = makeStyles({
  paper: {
    width:'460px',
    height:'fit-content',
    position:'absolute',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    margin:'auto',
    padding:'35px 60px',
    border:'1px solid lightgray',
    borderRadius:'10px'
  },
  title:{
    marginTop:'0px'
  },
  input:{
    width:'100%',
  },
  subTitle:{
    fontSize:'20px',
    fontWeight:600,
    textAlign:'left',
    margin:'10px 0px'
  },
  submitButton:{
    width:'100%',
    marginTop: '20px',
    height: '50px',
    backgroundColor:'#744dfe',
  }
});

function Login() {
  const classes = useStyles();
  const navigate = useNavigate() as any;
  const submit = () => {
    navigate("/user")
  }
    return (
      <div>
        <Paper className={classes.paper} elevation={0}>
          <h2 className={classes.title}>Login Page</h2>
          <hr/>
          <div>
            <div className={classes.subTitle}>email</div>
            <TextField className={classes.input} variant="outlined" placeholder="please input email"/>
          </div>
          <div>
            <div className={classes.subTitle}>password</div>
            <TextField type="password" className={classes.input} variant="outlined" placeholder="please input password"/>
          </div>
          <Button className={classes.submitButton} variant="contained" color="secondary" onClick={() => submit()}>
            LOGIN
          </Button>
        </Paper>
      </div>
    );
}

export default Login;