import {
  Avatar,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Component } from "react";
import { HAVE_ACCOUNT } from "../../libs/constants/constants";

class Register extends Component {
  render() {
    return (
      <Container
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="xs"
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
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
          <Grid item>
            <Link href="/auth/login" variant="body2">
              {HAVE_ACCOUNT}
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Register;
