
import React from 'react';
import { useState } from 'react';
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
  Button
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
  School as SchoolIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components
const ServiceIcon = styled(Box)(({ theme, color }) => ({
  backgroundColor: `${color}22`,
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
}));

const ExpandMoreStyled = styled(IconButton)(({ theme, expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

export default function ServicesGrid() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Développement Informatique",
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
      title: "Affiches Publicitaires",
      icon: <PaletteIcon fontSize="large" />,
      color: "#457b9d",
      subservices: [
        { name: "Design graphique", icon: <BrushIcon /> },
        { name: "Flyers", icon: <DescriptionIcon /> },
        { name: "Bannières web", icon: <ComputerIcon /> }
      ]
    },
    {
      title: "Production Audiovisuelle",
      icon: <MovieIcon fontSize="large" />,
      color: "#1d3557",
      subservices: [
        { name: "Vidéos", icon: <VideoLibraryIcon /> },
        { name: "Animations graphiques", icon: <MovieIcon /> },
        { name: "Montage vidéo", icon: <MovieIcon /> }
      ]
    },
    {
      title: "Autres Services",
      icon: <BuildIcon fontSize="large" />,
      color: "#2a9d8f",
      subservices: [
        { name: "Conseil informatique", icon: <StorageIcon /> },
        { name: "Formation", icon: <SchoolIcon /> },
        { name: "Support technique", icon: <CodeIcon /> }
      ]
    }
  ];

  const toggleExpand = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3, bgcolor: '#f5f7fa' }}>
      <Box sx={{ py: 10, bgcolor: '#f8f9fa' }}>
         <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            mb:4,
           fontWeight:'bold',
           background: 'linear-gradient(90deg,#2F4F2F,#007FFF)',
           WebkitTextFillColor:'transparent',
           backgroundClip:'text',
           fontSize: { xs: '2.5rem', sm: '3.5rem'}
       }}>
           Nos Services
           </Typography>
           <Typography 
                  variant="h2" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.8rem' }
                  }}
                >
                  Nous sommes une agence constituée de developpeurs et de designers talentieux.
                </Typography>

                <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#6c757d', 
                              fontSize: '1.1rem',
                              maxWidth: '800px',
                              mx: 'auto',
                              mb: 1
                            }}
                          >
                            Constitué d'une équipe dynamique et passionnée nous faisons de vos projets une réalité.
                          </Typography>
              <Typography 
                   variant="body1" 
                     sx={{ 
                    color: '#6c757d', 
                     fontSize: '1.1rem',
                     maxWidth: '800px',
                     mx: 'auto',
                        mb: 4,
                        textAlign:'center'
                         }}
                    >
                  Nous pouvons vous proposer des solutions adapté à vos besoins.
           </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: '#4285f4',
              borderRadius: '4px',
              py: 1.5,
              px: 4,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: '#3367d6',
                
              }
            }}
          >
            Contactez-nous
          </Button>
                
       </Box>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ServiceCard onClick={() => toggleExpand(index)}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4 }}>
                <ServiceIcon color={service.color}>
                  {React.cloneElement(service.icon, { style: { color: service.color, fontSize: 40 } })}
                </ServiceIcon>
                
                <Typography variant="h6" component="h3" align="center">
                  {service.title}
                </Typography>
                
                <ExpandMoreStyled
                  expanded={expandedService === index}
                  aria-expanded={expandedService === index}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMoreStyled>
              </CardContent>
              
              <Collapse in={expandedService === index} timeout="auto" unmountOnExit>
                <Box sx={{ borderTop: `1px solid ${service.color}40`, bgcolor: '#f7f9fc', p: 2 }}>
                  <List dense disablePadding>
                    {service.subservices.map((subservice, subIndex) => (
                      <ListItem key={subIndex} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36, color: service.color }}>
                          {subservice.icon}
                        </ListItemIcon>
                        <ListItemText primary={subservice.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Collapse>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}