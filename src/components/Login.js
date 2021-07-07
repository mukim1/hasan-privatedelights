import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Grid, Card, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './styles.module.css'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '120px',
    margin: 'auto'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: '20px',
    maxWidth: '450px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Card>
          <AppBar position="static" className={styles.cardAppbar}>
            <Toolbar>
              <h2>LogIn</h2>
            </Toolbar>
          </AppBar>
          <form className={classes.form} noValidate action="https://formspree.io/f/mjvjopvy" method="post">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container justify="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={`${classes.submit} ${styles.btn}`}
              >
                Login
              </Button>
            </Grid>
            <Grid container justify="space-between">
              <p><Link to="/">Set New Password</Link></p>
              <p><Link to="/">Sign Up</Link></p>
              <p><Link to="/">Help</Link></p>
            </Grid>
          </form>
        </Card>
      </div>
    </Container>
  );
}