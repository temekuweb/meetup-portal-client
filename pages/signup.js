import React, { Component, Fragment } from "react";
import Link from 'next/link';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import IconButton from '@material-ui/core/IconButton';
import Input from "@material-ui/core/Input";
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignUp extends Component {
  state = {
    email: "",
    fullName: "",
    password: "",
    showPassword: false,
    blockSubmit: true
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    this.checkForm();
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  checkForm() {
    const { email, password } = this.state;
    this.setState({ blockSubmit: (fullName && password && email) ? false : true });
  }
  render() {
    const {
      props: { classes },
      state: { showPassword }
    } = this;

    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Temecula Portal
            </Typography>
            <Typography variant="subheading" gutterBottom>
              create an account
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <Input
                  placeholder="Enter email address"
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="Enter email address"
                  className={classes.input}
                  onChange={this.handleChange("email")}
                  value={this.state.email}
                  inputProps={{ "aria-label": "Description" }}
                />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <Input
                  id="fullName"
                  name="fullName"
                  autoComplete="fullName"
                  placeholder="Enter full name"
                  className={classes.input}
                  onChange={this.handleChange("fullName")}
                  value={this.state.fullName}
                  inputProps={{ "aria-label": "Description" }}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {/* <PasswordField label={"enter password"} customId={"password"} /> */}

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                disabled={this.state.blockSubmit}
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </Paper>
          <Link href="/login">
            <a className={classes.paper}>
              <Typography variant="subheading" gutterBottom>
                Already have an account? Log in
              </Typography>
            </a>
          </Link>
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SignUp);
