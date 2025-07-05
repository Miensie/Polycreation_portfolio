import React, { useState, useEffect } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function CompleteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier l'état initial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar principale - toujours visible avec tous les éléments */}
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(8px)', 
          boxShadow: 'none',
          zIndex: 1300,
          borderBottom: hasScrolled ? '1px solid rgba(200, 200, 200, 0.3)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold', 
                background:'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip:'text',
                WebkitTextFillColor:'transparent',
                fontSize:'35px'
              }}
            >
              POLYCREATION
            </Typography>

            {/* Menu complet toujours visible */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" sx={{ background:'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip:'text',
                WebkitTextFillColor:'transparent',fontWeight:'bold' }}>
                Accueil
              </Button>
              <Button color="inherit" 
              sx={{ background:'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip:'text',
                WebkitTextFillColor:'transparent',
                fontWeight:'bold' 

              }}>
                Services
              </Button>
              <Button color="inherit" sx={{ background:'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip:'text',
                WebkitTextFillColor:'transparent',fontWeight:'bold' }}>
                À propos
              </Button>
              <Button
              component={RouterLink} to="/projet"
              color="inherit" sx={{
                 background:'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip:'text',
                WebkitTextFillColor:'transparent',fontWeight:'bold' ,
                }}>
                Projets
              </Button>
              <Button color="inherit" sx={{ background:'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip:'text',
                WebkitTextFillColor:'transparent' ,fontWeight:'bold'}}>
                Contact
              </Button>
              <Button 
              component={RouterLink} to="/abonner"
              variant="contained" color='primary' size="small" sx={{backgroundColor:'0cbded',color:'white',borderRadius:'15px'}}>
                    S'abonner
               </Button>
            </Box>

            {/* Menu burger pour les écrans mobiles */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Espace pour pousser le contenu sous la navbar */}
      <Toolbar />

      {/* Votre contenu principal ici qui passera sous la navbar */}
      <Box sx={{ 
        zIndex: 1,
        position: 'relative'
      }}>
        {/* Insérez ici le contenu de votre page */}
      </Box>
    </Box>
  );
}