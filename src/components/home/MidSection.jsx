import { Grid, styled } from '@mui/material'
import { imageURL } from '../../constants/data'

const Image = styled('img')({
width:'100%',
justifyContent:'space-between'
})
const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`
const ImageCovid = styled('img')( ({theme})=>({
   
    marginTop: 20,
   
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}))

const MidSection = () => {
    
    return (
     <>
       <Wrapper lg={12} sm={12} md={12} xs={12} container >
        {
          imageURL.map(image => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Image src={image} />
            </Grid>
          ))

        }
        </Wrapper>
        <ImageCovid src="images/covid.webp" alt="covid"/>
     </>
    )
}

export default MidSection