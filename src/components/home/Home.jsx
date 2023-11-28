import { Fragment } from 'react'
import Navbar from './Navbar'
import Bannar from './Bannar'
import Slide from  './Slide'
import MidSlide from './MidSlide'
import { Box,styled } from '@mui/material'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';
import MidSection from './MidSection'

const Componentt= styled(Box)`
background:#f2f2f2;
padding:10px`;

function Home() {
  const getProducts = useSelector(state => state.getProducts);
  const {products}=getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

  return (
    <>
    <Navbar/>
    <Componentt>
      <Bannar/>
      <MidSlide products={products} title='Discounts for You' timer={true} />
      <Slide products={products} title='Suggested Items' timer={false} />
      <MidSection/>
      <Slide products={products} title='Top Selection' timer={false}/>
      <Slide products={products}  title='Recommended Items' timer={false}/>
    
    </Componentt>
   
    </>
  )
}

export default Home