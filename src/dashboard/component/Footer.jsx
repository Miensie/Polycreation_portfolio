import * as React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

// Composant Logo/Brand
function BrandLogo() {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        color: 'primary.main',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8,
          transition: 'opacity 0.3s ease'
        }
      }}
    >
      POLYCREATION
    </Typography>
  );
}

// Composant Copyright optimisé
function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {'© '}
      {new Date().getFullYear()}
      {' '}
      <Link 
        color="text.secondary" 
        href="#"
        sx={{ 
          textDecoration: 'none',
          '&:hover': { 
            textDecoration: 'underline',
            color: 'primary.main'
          }
        }}
      >
        POLYCREATION
      </Link>
      {'. Tous droits réservés.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto' // Pour pousser le footer en bas de page
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4, sm: 6 },
        }}
      >
        {/* Section principale */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            gap: { xs: 4, md: 8 },
            mb: 4
          }}
        >
          {/* Logo et description */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 40%' },
              maxWidth: { xs: '100%', md: '400px' }
            }}
          >
            <BrandLogo />
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary', 
                mt: 2,
                lineHeight: 1.6
              }}
            >
              Solutions numériques & scientifiques : développement web/app, design visuel, analyse de données, 
              modèles prédictifs, plans d’expériences. Créativité & performance au service de vos projets.
            </Typography>
          </Box>

          {/* Liens de navigation */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 3, sm: 6, md: 8 },
              flex: { xs: '1 1 100%', md: '1 1 60%' },
              justifyContent: { md: 'flex-end' }
            }}
          >
            {/* Portfolio */}
            <Box sx={{ minWidth: '120px' }}>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 2,
                  color: 'text.primary'
                }}
              >
                Portfolio
              </Typography>
              <Stack spacing={1}>
                <Link 
                  color="text.secondary" 
                  variant="body2" 
                  component={RouterLink} 
                  to="/projet"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { 
                      color: 'primary.main',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Projets
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Section inférieure */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            gap: { xs: 2, sm: 0 }
          }}
        >
          {/* Copyright et liens légaux */}
          <Box>
            <Copyright />
            <Box sx={{ mt: 1, display: { xs: 'block', sm: 'inline' } }}>
              <Link 
                color="text.secondary" 
                variant="body2" 
                href="#privacy"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }
                }}
              >
                Politique de confidentialité
              </Link>
              <Typography 
                sx={{ 
                  display: { xs: 'none', sm: 'inline' }, 
                  mx: 1, 
                  opacity: 0.5,
                  color: 'text.secondary'
                }}
              >
                •
              </Typography>
              <Link 
                color="text.secondary" 
                variant="body2" 
                href="#terms"
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { 
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }
                }}
              >
                Conditions d'utilisation
              </Link>
            </Box>
          </Box>

          {/* Réseaux sociaux */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ 
              alignItems: 'center'
            }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'primary.main',
                  backgroundColor: 'action.hover'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'primary.main',
                  backgroundColor: 'action.hover'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://twitter.com/votre-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              sx={{ 
                color: 'text.secondary',
                '&:hover': { 
                  color: 'primary.main',
                  backgroundColor: 'action.hover'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <XIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}