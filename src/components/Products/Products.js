import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Shoes from '../../Shoes.json';
import './Products.css';


export default function Products() {
console.log(Shoes);
  return (
    <>
      <Container maxWidth='md' sx={{ mt: '20px' }}>
        <Grid container spacing={4}>
          {
            Object.keys(Shoes).map((keyName => {
              const shoe = Shoes[keyName]
              return (
                <Grid item key={keyName} xs={12} sm={6} md={4}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia sx={{ pt: '56.25%',flexGrow:'1' }}
                      image={shoe.imageURL}
                      title='card media react'
                    />
                    <CardContent >
                     <b>
                       <Typography gutterBottom variant='p'>
                      {shoe.name}
                      </Typography>
                      </b>
                      
                    </CardContent>
                    <CardActions sx={{ mt: '10px'}}>
                    <Link to={`/Products/${keyName}`} className='details'>
                      <Button size='small' color='primary'>
                        view Detail
                      </Button>
                    </Link>
                      {/* <Button size='small' color='primary'>edit</Button> */}
                    </CardActions>
                  </Card>
                </Grid>

              );
            }))
          }
        </Grid>
      </Container>
    </>
  );
}
