import { styled, Box, Typography,Divider ,Button} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import TimerIcon from '@mui/icons-material/Timer';
import {Link} from 'react-router-dom'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


const Wrapper=styled(Box)`
background-color:#fff;
margin-top:10px;
`;
const Deal =styled(Box)`
display:flex;
padding:10px 10px;
align-items:center;
`;
const DealText=styled(Typography)`
font-size:20px;
font-weight:600px;
margin-right:10px;
`;
const Text=styled(Typography)`
font-size:14px;

margin-top:5px;
`;
const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    color:#fff;
    text-transform:none;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Slide=({products,title, timer})=>{
    return(
        <Wrapper>
            <Deal>
                <DealText>{title}</DealText>
                {timer&& <Box><TimerIcon style={{marginRight:10}}/>
                <Countdown date={Date.now() + 10000} /></Box>}
                
              <ViewAllButton>View All</ViewAllButton>
            
            </Deal>
            <Divider />
            <Carousel 
             swipeable={false}
             draggable={false}
             responsive={responsive}
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={4000}
             keyBoardControl={true}
             showDots={false}
            
             containerClass="carousel-container"
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px">
                {
                    products.map(product=>(
                        <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box  style={{ padding: '25px 15px', textAlign:"center"}}>
                        <Image src={product.url} alt="slide" id={product.id} />
                        <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                        <Text style={{ color: 'green' }}>{product.discount}</Text>
                        <Text style={{ color: '#212121', opacity: '0.6' }}>{product.tagline}</Text>
                        </Box>
                        </Link>
                       
                    ))
                }

            </Carousel>
        </Wrapper>
    )



}

export default Slide;