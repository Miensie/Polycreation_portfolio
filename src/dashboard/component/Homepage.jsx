import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Divider,
  MenuItem,
  Drawer,
  Typography,
  styled, 
  alpha,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Fonction pour gérer le défilement vers les sections
const scrollToSection = (sectionId) => (event) => {
  event.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Composant pour gérer le défilement automatique lors du chargement de la page
const ScrollToHashSection = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  
  return null;
};

// Composant Logo
const Sitemark = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Typography 
      variant="h6" 
      component={RouterLink}
      to="/"
      sx={{ 
        flexGrow: 1, 
        fontWeight: 'bold', 
        background: 'linear-gradient(90deg,#0cbded,#42397e)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: isMobile ? '1.5rem' : '2rem',
        textDecoration: 'none',
        fontFamily: 'monospace',
        letterSpacing: '.1rem'
      }}
    >
      POLYCREATION
    </Typography>
  );
};

// Toolbar stylisé avec effet glassmorphism
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.3),
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
  margin: '8px',
  [theme.breakpoints.down('sm')]: {
    padding: '4px 8px',
    margin: '4px',
  },
}));

export default function Homepage() {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('accueil');
  const theme = useTheme();
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Configuration des liens de navigation - synchronisée avec Dashboard
  const navLinks = [
    { text: 'Accueil', path: '/', scrollTo: 'accueil', isRoute: true },
    { text: 'À propos', path: '#apropos', scrollTo: 'apropos', isRoute: false },
    { text: 'Services', path: '#services', scrollTo: 'services', isRoute: false },
    { text: 'Contact', path: '#contact', scrollTo: 'contact', isRoute: false }
  ];

  // Détection de la section active avec debounce
  React.useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const navbarHeight = 80;
        const scrollPosition = window.scrollY + navbarHeight + 100;
        
        // Sections dans l'ordre d'apparition dans le Dashboard
        const sections = ['accueil', 'apropos', 'services', 'contact'];
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const elementTop = element.offsetTop;
            if (scrollPosition >= elementTop) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Fonction pour déterminer si un bouton est actif
  const isActiveButton = (link) => {
    if (link.isRoute && location.pathname === '/') {
      return activeSection === link.scrollTo;
    }
    if (link.isRoute) {
      return location.pathname === link.path;
    }
    return activeSection === link.scrollTo;
  };

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (link) => (event) => {
    if (link.isRoute && link.path === '/') {
      // Si on est déjà sur la page d'accueil, scroller vers la section
      event.preventDefault();
      scrollToSection(link.scrollTo)(event);
    } else if (!link.isRoute) {
      // Pour les liens avec ancre
      scrollToSection(link.scrollTo)(event);
    }
    // Pour les vraies routes, laisser le comportement par défaut
  };

  // Styles pour les boutons
  const getButtonStyles = (link) => ({
    background: 'linear-gradient(90deg,#0cbded,#42397e)',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    position: 'relative',
    fontSize: '0.875rem',
    textTransform: 'none',
    '&::after': isActiveButton(link) ? {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      right: 0,
      height: 2,
      background: 'linear-gradient(90deg,#0cbded,#42397e)',
      borderRadius: '1px'
    } : {},
    '&:hover': {
      backgroundColor: 'rgba(12, 189, 237, 0.1)',
      transform: 'translateY(-1px)',
      transition: 'all 0.3s ease'
    }
  });

  return (
    <>
      <ScrollToHashSection />
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: { xs: 1, sm: 2 },
          zIndex: 1300
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            {/* Logo */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              <Sitemark />
              
              {/* Navigation desktop */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, gap: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.text}
                    component={link.isRoute ? RouterLink : "a"}
                    to={link.isRoute ? link.path : undefined}
                    href={!link.isRoute ? link.path : undefined}
                    onClick={handleLinkClick(link)}
                    variant="text"
                    color="info"
                    size="small"
                    sx={getButtonStyles(link)}
                  >
                    {link.text}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Bouton S'abonner desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              <Button 
                component={RouterLink} 
                to="/abonner"
                variant="contained"
                size="small"
                sx={{
                  background: 'linear-gradient(90deg,#0cbded,#42397e)',
                  color: 'white',
                  borderRadius: '20px',
                  px: 3,
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(90deg,#42397e,#0cbded)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(12, 189, 237, 0.4)'
                  }
                }}
              >
                S'abonner
              </Button>
            </Box>

            {/* Menu mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton 
                aria-label="Menu button" 
                onClick={toggleDrawer(true)}
                sx={{ 
                  p: { xs: 0.5, sm: 1 },
                  color: '#42397e'
                }}
              >
                <MenuIcon />
              </IconButton>
              
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    maxHeight: '100vh',
                    overflowY: 'auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)'
                  }
                }}
              >
                <Box sx={{ p: 2, backgroundColor: 'transparent' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 2 
                  }}>
                    <Sitemark />
                    <IconButton 
                      onClick={toggleDrawer(false)} 
                      edge="end"
                      sx={{ color: '#42397e' }}
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  {/* Navigation mobile */}
                  {navLinks.map((link) => (
                    <MenuItem 
                      key={link.text}
                      component={link.isRoute ? RouterLink : "a"}
                      to={link.isRoute ? link.path : undefined}
                      href={!link.isRoute ? link.path : undefined}
                      onClick={(e) => {
                        handleLinkClick(link)(e);
                        toggleDrawer(false)();
                      }}
                      sx={{ 
                        py: 1.5,
                        color: '#42397e',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: 'rgba(12, 189, 237, 0.1)'
                        }
                      }}
                    >
                      {link.text}
                    </MenuItem>
                  ))}
                  
                  <Divider sx={{ my: 2 }} />
                  
                  {/* Bouton S'abonner mobile */}
                  <MenuItem sx={{ py: 1.5 }}>
                    <Button 
                      component={RouterLink}
                      to="/abonner"
                      variant="contained"
                      fullWidth
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(90deg,#0cbded,#42397e)',
                        color: 'white',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                          background: 'linear-gradient(90deg,#42397e,#0cbded)',
                        }
                      }}
                      onClick={toggleDrawer(false)}
                    >
                      S'abonner
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </>
  );
}