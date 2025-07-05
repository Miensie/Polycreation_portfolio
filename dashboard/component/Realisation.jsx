import { Box, Typography, Grid, Card, CardMedia, CardContent, Link } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Affiche publicitaire',
    href: '#',
    imageSrc: 'src/assets/affiche1.jpg',
    imageAlt: "",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Affiche publicitaire',
    href: '#',
    imageSrc: 'src/assets/affiche1.jpg',
    imageAlt: "",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Affiche publicitaire',
    href: '#',
    imageSrc: 'src/assets/affiche1.jpg',
    imageAlt: "",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

export default function ProductGrid() {
  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Box sx={{
        maxWidth: { xs: '42rem', sm: '48rem', lg: '80rem' },
        mx: 'auto',
        px: { xs: 2, sm: 3, lg: 4 },
        py: { xs: 4, sm: 6 }
      }}>
        <Typography 
          variant="h2" 
          component="h2"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: 'text.primary',
            background: 'linear-gradient(90deg, #2F4F2F,#007FFF)',
              backgroundClip:'text',
              WebkitTextFillColor:'transparent',
              textAlign:'center'
          }}
        >
          Quelques réalisations
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, lg: 4 }}
          sx={{ mt: 3 }}
        >
          {products.map((product) => (
            <Grid 
              item 
              key={product.id} 
              xs={12} 
              sm={6} 
              lg={3}
            >
              <Card 
                sx={{ 
                  position: 'relative',
                  '&:hover .product-image': {
                    opacity: 0.75
                  }
                }}
              >
                <Link 
                  href={product.href} 
                  underline="none"
                  sx={{
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={product.imageAlt}
                    image={product.imageSrc}
                    className="product-image"
                    sx={{
                      aspectRatio: '1 / 1',
                      width: '100%',
                      borderRadius: 1,
                      backgroundColor: 'grey.200',
                      objectFit: 'cover',
                      transition: 'opacity 0.3s ease',
                      height: { lg: 320 }
                    }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography 
                          variant="body1" 
                          component="h3"
                          sx={{ color: 'text.secondary' }}
                        >
                          {product.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ color: 'text.disabled', mt: 1 }}
                        >
                          {product.color}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 'medium', color: 'text.primary' }}
                      >
                        {product.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}