import React from 'react';
import { 
  Typography, 
  Button, 
  Box, 
  Container,
  Avatar
} from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: 4
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
          {/* Logo */}
          <Avatar
            alt="Logo Polycreation"
            src="/assets/logo.jpg" // ✅ Chemin corrigé
            sx={{
              width: { xs: 150, sm: 200, md: 250 }, // ✅ Responsive
              height: { xs: 150, sm: 200, md: 250 },
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: '4px solid white',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          
          {/* Contenu principal */}
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // ✅ Responsive
                background: 'linear-gradient(90deg, #0cbded, #42397e)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text', // ✅ Préfixe webkit ajouté
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '-0.02em'
              }}
            >
              POLYCREATION
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{
                fontWeight: 400,
                mb: 4,
                color: 'text.secondary',
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }, // ✅ Responsive
                lineHeight: 1.4,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Votre partenaire de confiance pour le développement digital et le design graphique
            </Typography>
            
            {/* Boutons d'action */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' }, // ✅ Responsive
              gap: 2,
              mt: 4
            }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{
                  backgroundColor: '#0cbded', // ✅ Couleur corrigée
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(12, 189, 237, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0aa6c7',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(12, 189, 237, 0.6)'
                  }
                }}
              >
                S'abonner
              </Button>
              
              <Button 
                variant="outlined" 
                size="large" 
                sx={{
                  borderColor: '#0cbded', // ✅ Couleur corrigée
                  color: '#0cbded',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0cbded',
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(12, 189, 237, 0.3)'
                  }
                }}
              >
                Voir nos projets
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}