import { Dialog, DialogActions, DialogContent, Button, Box, TextField } from "@mui/material";
import { useContext } from "react";
import {AuthContext} from '../signin/context/auth-context'
const SigninDialog = (props) => {
  const authCtx = useContext(AuthContext);
  const onSigninHandler = () => {
    authCtx.login();
    props.closeDialog();
  }
  return (
    <Dialog open={props.showDialog} onClose={props.closeDialog}>
      <DialogContent>
          <Box
            sx={{
              "& .MuiTextField-root": { mt: 1, width: "100%" },
            }}
          >
            <TextField label="account" />
            <TextField label="password" type="password" />
          </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {props.closeDialog()}}>close</Button>
        <Button onClick={onSigninHandler}>login</Button>
      </DialogActions>
    </Dialog>
  );
};
export default SigninDialog;
