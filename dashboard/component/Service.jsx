import React from 'react';
import { 
  Box, 
  Paper,
  Typography, 
  Container, 
  Grid, 
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import BrushIcon from '@mui/icons-material/Brush';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 10, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="p" 
            sx={{ 
              mb: 2, 
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2F4F2F,#007FFF)',
              backgroundClip:'text',
              WebkitTextFillColor:'transparent',
              textAlign:'center'
            }}
          >
           NOS SERVICES
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
              mb: 4
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
                bgcolor: '#3367d6'
              }
            }}
          >
            Contactez-nous
          </Button>
        </Box>
        
        {/* Services using standard Grid */}
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={4}>
            {/* Service 1 */}
            <Grid item xs={12} sm={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start', 
                  gap: 2
                }}
              >
                <Box 
                  sx={{ 
                    color: '#4285f4',
                    flexShrink: 0,
                    '& svg': {
                      fontSize: '2.5rem'
                    }
                  }}
                >
                  <ComputerIcon />
                </Box>
                <Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    Développement Digital
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d' }}>
                    Nous développons votre site web en utilisant les meilleures pratiques et standards, pour vous offrir une solution performante, sécurisée et adaptée à vos besoins spécifiques.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            
            {/* Service 2 */}
            <Grid item xs={12} sm={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start', 
                  gap: 2
                }}
              >
                <Box 
                  sx={{ 
                    color: '#4285f4',
                    flexShrink: 0,
                    '& svg': {
                      fontSize: '2.5rem'
                    }
                  }}
                >
                  <PhoneIphoneIcon />
                </Box>
                <Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    Design
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d' }}>
                    Nous commençons par concevoir une maquette ou un prototype de votre site/application, et vous le présentons. Une fois la maquette initiale validée, nous entamons le processus de révision pour le perfectionner.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            
            {/* Service 3 */}
            <Grid item xs={12} sm={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start', 
                  gap: 2
                }}
              >
                <Box 
                  sx={{ 
                    color: '#4285f4', 
                    flexShrink: 0,
                    '& svg': {
                      fontSize: '2.5rem'
                    }
                  }}
                >
                  <BrushIcon />
                </Box>
                <Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    Design et Identité Visuelle
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d' }}>
                    Nous créons une identité visuelle unique pour votre marque, incluant logo, charte graphique et supports de communication, pour vous démarquer et transmettre efficacement vos valeurs.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            
            {/* Service 4 */}
            <Grid item xs={12} sm={6}>
              <Paper 
                elevation={10} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start', 
                  gap: 2
                }}
              >
                <Box 
                  sx={{ 
                    color: '#4285f4',
                    flexShrink: 0,
                    '& svg': {
                      fontSize: '2.5rem'
                    }
                  }}
                >
                  <VideocamIcon />
                </Box>
                <Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    Production Audiovisuelle
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6c757d' }}>
                    De la conception à la réalisation, nous produisons des contenus vidéo de qualité professionnelle pour présenter votre entreprise, vos produits ou services de manière attractive et engageante.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}