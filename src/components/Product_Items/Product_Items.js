import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Container } from '@mui/material';
import Shoes from '../../Shoes.json';
import { useDispatch, useSelector } from 'react-redux';
import { cartData } from '../../store/actions/dataAction';
export default function Product_Items() {
  let cu = useSelector(state => state.data.cu);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { productKey } = useParams();

  // console.log(productKey);
  const shoe = Shoes[productKey];
  if (!shoe)
    return <h2>Product Not Found!</h2>

  return (
    <>
      <Container maxWidth='lg' sx={{ mt: '20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia sx={{ pt: '56.25%', flexGrow: '2' }}
                image={shoe.imageURL}
                title='card media react'
              />
              <CardContent className='contentiitems' >
                <Typography gutterBottom variant='p' sx={{ flexGrow: "1" }}>
                  {shoe.name}
                </Typography>
                <Typography gutterBottom variant='h6'>
                  Price:{shoe.price}
                </Typography>
                <Typography gutterBottom variant='h6'>
                  Brand:{shoe.brand}
                </Typography>
                <Typography gutterBottom variant='h6'>
                  Category:{shoe.category}
                </Typography>
                <Typography gutterBottom variant='h6'>
                  Gender:{shoe.gender}
                </Typography>
                <Typography gutterBottom variant='h6'>
                  Total Items Left:{shoe.items_left}
                </Typography>
              </CardContent>
              {cu.firstName &&
                <Button size='small' color='primary' onClick={(e) => {
                  dispatch(cartData(productKey));
                  // localStorage.setItem('productkey',JSON.stringify([productarray]));
                  let predata = JSON.parse(localStorage.getItem("productKey"))
                  console.log(productKey);
                  if (predata === null) {
                    localStorage.setItem("productKey", JSON.stringify([{productKey}]))
                  } else {
                    predata.push({productKey})
                    localStorage.setItem("productKey", JSON.stringify(predata))
                  }
                  navigate('/Cart');
                }}>add to cart</Button>
              }
              
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

