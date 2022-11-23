import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../signin/context/auth-context";
import { useContext, useState } from "react";
import { Login as LoginIcon, Logout as LogoutIcon } from "@mui/icons-material";
import SigninDialog from "./SigninDialog";
const AppHeader = (props) => {
  const [showSignin, setShowSignin] = useState(false);
  const authCtx = useContext(AuthContext);
  const pages = [{ text: "Todos", link: "/todos" }];
  const onSigninHandler = () => {};
  return (
    <>
      <SigninDialog
        showDialog={showSignin}
        closeDialog={() => setShowSignin(false)}
      />
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                width: "100",
                flexGrow: 1,
              }}
            >
              {pages.map((item, index) => (
                <Button
                  component={Link}
                  color="inherit"
                  to={item.link}
                  key={"page" + index}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            {!authCtx.isAuth && (
              <IconButton color="inherit" onClick={() => setShowSignin(true)}>
                <LoginIcon />
              </IconButton>
            )}
            {authCtx.isAuth && (
              <IconButton color="inherit" onClick={authCtx.logout}>
                <LogoutIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppHeader;
