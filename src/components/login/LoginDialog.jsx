import { useState, useContext } from 'react'
import { Dialog, Box, styled, Typography, Button, TextField } from "@mui/material"
import { authenticateSignup, authenticateLogin } from '../../services/api';
import { LoginContext } from '../../contex/ContextProvider';

const Component = styled(Box)`
width:45vw;
height:70vh;
display:flex`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 40%;

padding: 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
} `;
const Wrapper = styled(Box)`

{/*flex:1*/}
&>*{
  margin-top:10px;
  margin-left:30px;
}
`;
const LoginButton = styled(Button)`
color:white;
background-color:orange;
text-transform: none;
width:65%;
margin-left:30px;
border-radius: 2px;
text-align:center;
margin-top:30px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    width:65%;
    margin-left:30px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    text-align:center;
`;
const CreateAccount = styled(Typography)`
    margin: 50px 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const initialAccountValues = {

  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here",
    subHeading: 'Signup to get started'
  }
}
const initialSignupValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  password: ''
}
const initialLoginValues={
  phone:'',
  password:''
}


const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(initialAccountValues.login);
  const [signup, setSignup] = useState(initialSignupValues)
  const [login, setLogin] = useState(initialLoginValues)
  const [error,showError]=useState(false);
  const {setAccount}=useContext(LoginContext)

  const toggleSignup = () => {
    toggleAccount(initialAccountValues.signup);
  }
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
    console.log(e.target.value);
  }
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
    console.log(e.target.value);
  }


  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialAccountValues.login);
    showError(false);
  };
  const signupUser = async () => {
    const response = await authenticateSignup(signup)
    handleClose();
    console.log(response);
    if(signup){setAccount(signup.firstname)}
  }
  const loginUser=async()=>{
    const response = await authenticateLogin(login)
    if(!response) 
    showError(true);
else {
    showError(false);
    handleClose();
    setAccount(response.data.data.firstname);
}
  }

  return (
    <Dialog open={open} onClose={() => handleClose()} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Image>
          <Typography variant="h5">here heading</Typography>
          <Typography style={{ marginTop: 20 }}>sub heading jbnujcnfvi  jhnsk agsjnsdik</Typography>
        </Image>

        {account.view === 'login' ?
          <Wrapper>
            <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name='phone' label="Enter Mobile no. or Email" />
            { error && <Error>Please enter valid Email ID/Mobile number</Error> }
                            
            <TextField variant='standard' onChange={(e)=>{onValueChange(e)}} name='password' label="Enter Password" />
            <Typography style={{ fontSize: 12, marginTop: 20 }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
            <LoginButton onClick={loginUser}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>

          </Wrapper>
          : <Wrapper>
            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="firstname" label="Enter First Name" />
            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="lastname" label="Enter Last Name" />
            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="phone" label="Enter Mobile no." />
            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
            <LoginButton onClick={signupUser}>Continue</LoginButton>
          </Wrapper>
        }
      </Component>
    </Dialog>
  )
}

export default LoginDialog;