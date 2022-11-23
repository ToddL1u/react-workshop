import Auth from "../components/Auth";
import Profile from '../components/Profile'
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/auth-context'
const SigninApp = () => {
  const authCtx = useContext(AuthContext);
  // useEffect(()=> {
    
  // }, [authCtx.isAuth])
  return (
    <>
      {!authCtx.isAuth && <Auth/>}
      {authCtx.isAuth && <Profile/>}
    </>
  );
};

export default SigninApp;
