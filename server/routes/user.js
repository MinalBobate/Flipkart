import express from 'express'
import {userLogIn, userSignUp} from '../controller/user.js'
import { getProducts } from '../controller/products.js'
const router= express.Router()


router.post('/signup',userSignUp)
router.post('/login',userLogIn)
router.get('/products', getProducts);
// router.get('/product/:id', getProductById);



// router.post('/payment', addPaymentGateway);
// router.post('/callback', paymentResponse);

export default router;