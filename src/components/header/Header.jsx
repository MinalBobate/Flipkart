import { useState, useContext } from 'react';
import { AppBar, Toolbar, Box, InputBase, Typography, Button , styled} from '@mui/material'


import { ShoppingCart } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import LoginDialog from '../login/LoginDialog';
import { LoginContext } from '../../contex/ContextProvider';
import Profile from './Profile';
import {Link } from 'react-router-dom'


const CustomAppBar = styled(AppBar)`  //CustomAppBar me C should be capital otherwise on use variable error
height: 50px;
background:#2874f0;
box-shadow:none;
`;


const CustomToolbar = styled(Toolbar)`  //CustomAppBar me C should be capital otherwise on use variable error
min-height:50px;


`;
const Componentt = styled(Link)`
margin-left: 12%;
line-height: 0px ;
margin-bottom:10px;
text-decoration:none;
color:inherit;
`;


const InputContainer = styled(Box)`
display:flex;
background: white;
width:35%;
height:33px;
border-radius:2px;
margin-bottom:13px;
margin-left: 1%;`;

const CustomInputBase = styled(InputBase)` 
width:100%;
`;
const ButtonWrapper = styled(Box)`
display:flex;
margin-left:20px;
margin-bottom:12px;
margin-right:0px;
padding-right:0px;
width:46%;
& button,&>div{margin-right:20px;
color:white;
text-transform:none;
font-size:16px;
font-weight:600}`;

const SearchWrapper = styled(Box)`
color:blue;
padding:5px`;




const Header = () => {
    const [open, setOpen] = useState(false);
    const {account,setAccount} = useContext(LoginContext);//usecontext mdhe {}not []
    const handleClick = () => {
        setOpen(true);
    }
    //const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    //const SubURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <CustomAppBar>
            <CustomToolbar>
                <Componentt to={`/`} >
                    <img src='images/logo.png' style={{ width: 70 }} alt='logo' />
                    <Box style={{ display: 'flex' }}>
                        <Typography style={{ fontStyle: 'italic', fontSize: 12 }}>Explore <Box component='span' style={{ color: 'yellow' }}>Plus</Box></Typography>
                        <img src='images/plus.png' style={{ width: 10, height: 10 }} alt='square' />
                    </Box>
                </Componentt>
                <InputContainer > <CustomInputBase placeholder='search product' style={{}}></CustomInputBase><SearchWrapper><SearchIcon /></SearchWrapper>
                </InputContainer>
                <ButtonWrapper  >
                    {
                    account?<Profile account={account} setAccount={setAccount}/>:
                    <Button variant='contained' onClick={handleClick} style={{ color: '#2874f0', background: 'white', height: '29px', width: '30%', textAlign: 'center', marginTop: '4px' }}>Login</Button>
                    }
                    <Button style={{ padding: '0px', width: '30%' }}>Become a Seller </Button>
                    <Button style={{ width: '20px' }}> More</Button>
                    <Box style={{ display: 'flex', width: '20px' }}><ShoppingCart /><Button>Cart</Button></Box>
                    <LoginDialog style={{}} open={open} setOpen={setOpen} />
                </ButtonWrapper>
            </CustomToolbar>
        </CustomAppBar>

    )
}
export default Header;