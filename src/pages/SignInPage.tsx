import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  FormControl,
  TextField,
  Typography,
  Stack,
  Link as MuiLink,
  Card as MuiCard,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ForgotPassword from "../components/ForgotPassword";
import Animation from "../components/BackgroundAnimation";
import { slideInFromLeft } from "../components/SlideAnimation";

const Card = styled(MuiCard)(({ theme }) => ({
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  backgroundColor: "#f4f0e5",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 10px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateEmail = () => {
    const email = document.getElementById("email") as HTMLInputElement;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      return false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
      return true;
    }
  };

  const validatePassword = () => {
    const password = document.getElementById("password") as HTMLInputElement;

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      return false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
      return true;
    }
  };

  const handleBlur = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    if (!email.value && !password.value) {
      setEmailError(false);
      setEmailErrorMessage("");
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#c4a589",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          px: 10,
          width: "100%",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Animation type={1} />
        <Stack
          sx={{
            animation: `${slideInFromLeft} 0.5s ease-out`,
            minHeight: "100%",
            width: "100%",
            height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
          }}
          direction="column"
          justifyContent="space-between"
        >
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <FormControl>
                <TextField
                  onChange={validateEmail}
                  onBlur={handleBlur}
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  required
                  fullWidth
                  color={emailError ? "error" : "primary"}
                  sx={{ ariaLabel: "email" }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={validatePassword}
                  onBlur={handleBlur}
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  required
                  fullWidth
                  color={passwordError ? "error" : "primary"}
                />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  paddingTop={1}
                  gap={8}
                >
                  <FormControlLabel
                    label="Remember me"
                    control={<Checkbox value="remember" color="primary" />}
                  />
                  <MuiLink
                    component="button"
                    type="button"
                    onClick={handleClickOpen}
                    variant="body2"
                  >
                    Forgot your password?
                  </MuiLink>
                </Box>
              </FormControl>

              <ForgotPassword open={open} handleClose={handleClose} />
              <Button type="submit" fullWidth variant="contained">
                Sign in
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Don&apos;t have an account?
                <Link to={"/signup"}>
                  <span style={{ marginLeft: "10px" }}>Sign up</span>
                </Link>
              </Typography>
            </Box>
            <Divider>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FcGoogle />}
                onClick={() => alert("Sign in with Google")}
              >
                Sign in with Google
              </Button>
            </Box>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
}
