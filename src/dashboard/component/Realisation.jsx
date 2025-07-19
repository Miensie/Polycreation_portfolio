import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Link } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Affiche évènementielle',
    href: '#',
    imageSrc: 'src/assets/affiche1.jpg',
    imageAlt: "Affiche publicitaire design moderne",
    color: 'Black',
  },
  {
    id: 2, // IDs uniques corrigés
    name: 'Affiche pour anniversaire',
    href: '#',
    imageSrc: 'src/assets/affiche2.png',
    imageAlt: "Affiche publicitaire créative",
    color: 'Black',
  },
  {
    id: 3, // IDs uniques corrigés
    name: 'Affiche publicitaire',
    href: '#',
    imageSrc: 'src/assets/affiche3.png',
    imageAlt: "Affiche publicitaire artistique",
    color: 'Black',
  },
  // Possibilité d'ajouter plus de produits...
];

const ProductGrid = () => {
  return (
    <Box 
      component="section"
      sx={{ 
        backgroundColor: 'background.paper',
        py: { xs: 6, sm: 8, lg: 10 } // Padding vertical amélioré
      }}
    >
      <Box sx={{
        maxWidth: { xs: '42rem', sm: '48rem', lg: '80rem' },
        mx: 'auto',
        px: { xs: 2, sm: 3, lg: 4 }
      }}>
        {/* Titre de la section */}
        <Typography 
          variant="h2" 
          component="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' },
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            background: 'linear-gradient(90deg, #2F4F2F, #007FFF)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            mb: { xs: 4, sm: 6, lg: 8 }
          }}
        >
          Quelques réalisations
        </Typography>

        {/* Grille des produits */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, lg: 4 }}
        >
          {products.map((product) => (
            <Grid 
              item 
              key={product.id} 
              xs={12} 
              sm={6} 
              lg={4} // Changé de 3 à 4 pour 3 colonnes
            >
              <Card 
                elevation={2}
                sx={{ 
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    elevation: 8,
                    transform: 'translateY(-4px)',
                    '& .product-image': {
                      opacity: 0.85,
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
                <Link 
                  href={product.href} 
                  underline="none"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    color: 'inherit',
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary.main',
                      outlineOffset: '2px'
                    }
                  }}
                  aria-label={`Voir ${product.name}`}
                >
                  {/* Image du produit */}
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      alt={product.imageAlt}
                      image={product.imageSrc}
                      className="product-image"
                      sx={{
                        aspectRatio: '1 / 1',
                        width: '100%',
                        height: { xs: 280, sm: 300, lg: 320 },
                        backgroundColor: 'grey.200',
                        objectFit: 'cover',
                        transition: 'all 0.3s ease-in-out'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.backgroundColor = '#f5f5f5';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                        e.target.alt = 'Image non disponible';
                      }}
                    />
                  </Box>

                  {/* Contenu de la carte */}
                  <CardContent sx={{ 
                    flexGrow: 1,
                    p: 3,
                    '&:last-child': { pb: 3 }
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 1
                    }}>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography 
                          variant="h6" 
                          component="h3"
                          sx={{ 
                            color: 'text.primary',
                            fontWeight: 'medium',
                            fontSize: '1.1rem',
                            lineHeight: 1.3,
                            mb: 0.5
                          }}
                        >
                          {product.name}
                        </Typography>
                      </Box>
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
};

export default ProductGrid;