import {
  Avatar,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Component } from "react";
import {
  DONT_HAVE_ACCOUNT,
  FORGOT_PASSWORD,
} from "../../libs/constants/constants";
import axios from "axios";
import { userService } from "../service/auth.service";

class Login extends Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
      username: "",
      passwrod: "",
      submitted: false,
      loading: false,
      error: "",
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  render() {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="xs"
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              {FORGOT_PASSWORD}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth/register" variant="body2">
              {DONT_HAVE_ACCOUNT}
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
