import {Box,Typography,styled} from '@mui/material'
import {navData} from '../../constants/data'

const Wrapper=styled(Box)(({theme})=>({
display:'flex',
margin:'50px 130px 0 130px',
padding:'12px 0 8px 0',
textAlign:"center",
justifyContent:'space-around',
[theme.breakpoints.down('lg')]:{
 margin:0 
}
}))

function Navbar() {
  return (
    <Wrapper>
    {
        navData.map(data=>(
            <Box>
                <img src={data.url} alt='nav' style={{width:'65px'}}/>
                <Typography>{data.text}</Typography>
            </Box>
        ))

    }
    </Wrapper>
  )
}

export default Navbar