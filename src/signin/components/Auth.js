import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
const Auth = () => {
  //can use useContext hook or jsx Context.Consumer
  const authCtx = useContext(AuthContext);
  const onLoginHandler = (event) => {
    event.preventDefault();
    authCtx.login();
  };
  return (
    <Card>
      <Box component="form" onSubmit={onLoginHandler}>
        <CardContent
          sx={{
            "& .MuiTextField-root": { mb: 1, width: "100%" },
          }}
        >
          <TextField label="account" />
          <TextField label="password" type="password" />
        </CardContent>
        <CardActions>
          <Button type="submit">Login</Button>
        </CardActions>
      </Box>
    </Card>
  );
};
export default Auth;
