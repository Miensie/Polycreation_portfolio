import React, { useState, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
  Container
} from '@mui/material';
import { 
  Code as CodeIcon,
  Computer as ComputerIcon, 
  PhoneAndroid as PhoneAndroidIcon,
  Storage as StorageIcon,
  Palette as PaletteIcon,
  Description as DescriptionIcon,
  Movie as MovieIcon,
  VideoLibrary as VideoLibraryIcon,
  ExpandMore as ExpandMoreIcon,
  Brush as BrushIcon,
  Build as BuildIcon,
  School as SchoolIcon,
  Analytics as AnalyticsIcon,
  CreditCard as CreditCardIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components optimisés
const ServiceIcon = styled(Box)(({ theme, servicecolor }) => ({
  backgroundColor: `${servicecolor}15`,
  borderRadius: '50%',
  padding: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  border: `2px solid ${servicecolor}30`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: `${servicecolor}25`,
    transform: 'scale(1.05)',
  }
}));

const ExpandMoreStyled = styled(IconButton)(({ theme, expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
  }),
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  }
}));

const ServiceCard = styled(Card)(({ theme, servicecolor }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: theme.spacing(2),
  border: `1px solid ${servicecolor}20`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 8px 32px ${servicecolor}25`,
    transform: 'translateY(-4px)',
    borderColor: `${servicecolor}40`,
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
  }
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #2F4F2F, #007FFF)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

export default function ServicesGrid() {
  const [expandedService, setExpandedService] = useState(null);

  // Services data avec corrections
  const services = [
    {
      title: "Développement Digital",
      icon: <CodeIcon fontSize="large" />,
      color: "#e63946",
      subservices: [
        { name: "Création de sites web", icon: <ComputerIcon /> },
        { name: "Applications web", icon: <CodeIcon /> },
        { name: "Applications mobiles", icon: <PhoneAndroidIcon /> },
        { name: "Logiciels de gestion", icon: <StorageIcon /> }
      ]
    },
    {
      title: "Design & Identité Visuelle", // Correction orthographique
      icon: <PaletteIcon fontSize="large" />,
      color: "#457b9d",
      subservices: [
        { name: "Logos", icon: <BrushIcon /> },
        { name: "Flyers", icon: <DescriptionIcon /> },
        { name: "Cartes de visite", icon: <CreditCardIcon /> }, // Icône plus appropriée
        { name: "Charte graphique", icon: <PaletteIcon /> }
      ]
    },
    {
      title: "Production Audiovisuelle",
      icon: <MovieIcon fontSize="large" />,
      color: "#1d3557",
      subservices: [
        { name: "Voix off", icon: <VideoLibraryIcon /> },
        { name: "Spots publicitaires", icon: <VideoLibraryIcon /> },
        { name: "Montage vidéo", icon: <MovieIcon /> },
        { name: "Animation graphique", icon: <MovieIcon /> }
      ]
    },
    {
      title: "Analyse & Optimisation",
      icon: <AnalyticsIcon fontSize="large" />, // Icône plus appropriée
      color: "#2a9d8f",
      subservices: [
        { name: "Analyse statistique", icon: <AnalyticsIcon /> },
        { name: "Modèles prédictifs", icon: <SchoolIcon /> }, // Correction orthographique
        { name: "Plans d'expérience", icon: <BuildIcon /> }
      ]
    }
  ];

  // Optimisation avec useCallback
  const toggleExpand = useCallback((index) => {
    setExpandedService(prev => prev === index ? null : index);
  }, []);

  // Gestion du clic sur le bouton contact
  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Box component="main" sx={{ bgcolor: '#f5f7fa', minHeight: '100vh' }}>
      {/* Section Hero */}
      <HeroSection>
        <Container maxWidth="lg">
          <GradientText
            variant="h3"
            component="h1"
            sx={{
              mb: 4,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }
            }}
          >
            Nos Services
          </GradientText>

          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: '#2c3e50',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              lineHeight: 1.3
            }}
          >
            Nous sommes une agence constituée de développeurs et de designers talentueux.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#6c757d', 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              maxWidth: '800px',
              mx: 'auto',
              mb: 2,
              lineHeight: 1.6
            }}
          >
            Constituée d'une équipe dynamique et passionnée, nous faisons de vos projets une réalité.
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#6c757d', 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Nous pouvons vous proposer des solutions adaptées à vos besoins.
          </Typography>

          <Button 
            variant="contained" 
            size="large"
            onClick={handleContactClick}
            sx={{ 
              bgcolor: '#4285f4',
              borderRadius: 2,
              py: 1.5,
              px: 4,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(66, 133, 244, 0.3)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                bgcolor: '#3367d6',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(66, 133, 244, 0.4)',
              }
            }}
          >
            Contactez-nous
          </Button>
        </Container>
      </HeroSection>

      {/* Section Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={6} key={index}>
              <ServiceCard 
                servicecolor={service.color}
                onClick={() => toggleExpand(index)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedService === index}
                aria-label={`${service.title} - Cliquez pour voir les détails`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(index);
                  }
                }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  pt: 4,
                  pb: 3,
                  px: 3
                }}>
                  <ServiceIcon servicecolor={service.color}>
                    {React.cloneElement(service.icon, { 
                      style: { color: service.color, fontSize: 40 } 
                    })}
                  </ServiceIcon>
                  
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    align="center"
                    sx={{
                      color: '#2c3e50',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    align="center" 
                    sx={{ 
                      color: '#6c757d',
                      opacity: expandedService === index ? 0 : 1,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    Cliquez pour voir les détails
                  </Typography>
                  
                  <ExpandMoreStyled
                    expanded={expandedService === index}
                    aria-expanded={expandedService === index}
                    aria-label="Voir plus de détails"
                  >
                    <ExpandMoreIcon sx={{ color: service.color }} />
                  </ExpandMoreStyled>
                </CardContent>
                
                <Collapse in={expandedService === index} timeout="auto" unmountOnExit>
                  <Box sx={{ 
                    borderTop: `2px solid ${service.color}40`, 
                    bgcolor: `${service.color}08`,
                    p: 3 
                  }}>
                    <List dense disablePadding>
                      {service.subservices.map((subservice, subIndex) => (
                        <ListItem 
                          key={subIndex} 
                          disableGutters
                          sx={{
                            py: 1,
                            '&:hover': {
                              bgcolor: `${service.color}10`,
                              borderRadius: 1
                            }
                          }}
                        >
                          <ListItemIcon sx={{ 
                            minWidth: 40, 
                            color: service.color 
                          }}>
                            {subservice.icon}
                          </ListItemIcon>
                          <ListItemText 
                            primary={subservice.name}
                            primaryTypographyProps={{
                              fontSize: '0.95rem',
                              fontWeight: 500,
                              color: '#2c3e50'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Collapse>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}