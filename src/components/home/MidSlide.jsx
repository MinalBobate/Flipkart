import Slide from './Slide'
import {Box,styled} from '@mui/material'

const Image=styled('img')({
 width:"96%",
 height:'335px',
 marginTop:'10px',
 marginLeft:'10px'
  
})
const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide=({products,title,timer}) =>{
  return (
    <Box style={{display:'flex', width:'100%'}}>
        <LeftComponent>
        <Slide products={products} title={title} timer={timer}/>
        </LeftComponent>
        <RightComponent>
        <Image src="images/ad.webp" alt="ad" />
        </RightComponent>
    </Box>
  )
}

export default MidSlide