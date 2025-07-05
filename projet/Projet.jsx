'use client'

import * as React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Chip,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar sx={{ py: 2, px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Logo */}
          <Box sx={{ flexGrow: { xs: 1, lg: 0 } }}>
            <Button href="#" sx={{ p: 0 }}>
              <Box component="span" sx={{ sr: 'only' }}>Your Company</Box>
              <Box
                component="img"
                src="/api/placeholder/40/40"
                alt="Logo"
                sx={{ height: 32, width: 'auto' }}
              />
            </Button>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, mx: 'auto' }}>
            {navigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                sx={{ 
                  mx: 1.5, 
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'none'
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          
          {/* Login Button (Desktop) */}
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Button 
              href="#" 
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                fontWeight: 600, 
                fontSize: '0.875rem',
                textTransform: 'none',
                color: 'text.primary'
              }}
            >
              Log in
            </Button>
          </Box>
          
          {/* Mobile Menu Toggle */}
          <Box sx={{ display: { lg: 'none' } }}>
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': { 
            width: { xs: '100%', sm: 320 },
            boxSizing: 'border-box',
            px: 2,
            py: 3
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Button href="#" sx={{ p: 0 }}>
            <Box component="span" sx={{ sr: 'only' }}>Your Company</Box>
            <Box
              component="img"
              src="/api/placeholder/40/40"
              alt="Logo"
              sx={{ height: 32, width: 'auto' }}
            />
          </Button>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            size="large"
            edge="end"
            color="inherit"
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <List>
          {navigation.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton 
                href={item.href}
                sx={{ 
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 600
                }}
              >
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ 
                    fontWeight: 'inherit',
                    fontSize: '1rem'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Divider sx={{ my: 2 }} />
        
        <List>
          <ListItem disablePadding>
            <ListItemButton
              href="#"
              sx={{ 
                py: 1.5,
                borderRadius: 1,
                fontWeight: 600
              }}
            >
              <ListItemText 
                primary="Log in" 
                primaryTypographyProps={{ 
                  fontWeight: 'inherit',
                  fontSize: '1rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 14, pb: 12 }}>
        <Box sx={{ 
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: 'md',
          mx: 'auto',
          py: { xs: 8, sm: 12, md: 14 }
        }}>
          {/* Announcement Chip */}
          <Box 
            sx={{ 
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
              mb: 4
            }}
          >
            <Chip
              label={
                <Typography variant="body2" component="span">
                  Announcing our next round of funding.{' '}
                  <Button
                    href="#"
                    sx={{ 
                      fontSize: 'inherit',
                      fontWeight: 600,
                      color: 'primary.main',
                      textTransform: 'none',
                      p: 0,
                      '&:hover': {
                        background: 'transparent',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Read more <ArrowForwardIcon sx={{ fontSize: '0.8rem', ml: 0.5 }} />
                  </Button>
                </Typography>
              }
              variant="outlined"
              sx={{ 
                borderRadius: 20,
                px: 1,
                py: 2.5,
                height: 'auto',
                borderColor: 'divider'
              }}
            />
          </Box>
          
          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.75rem', sm: '4.5rem' },
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}
          >
            Data to enrich your online business
          </Typography>
          
          {/* Subheading */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              mt: 4,
              color: 'text.secondary',
              fontSize: { xs: '1.125rem', sm: '1.25rem' },
              fontWeight: 500,
              maxWidth: 'md',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat.
          </Typography>
          
          {/* CTA Buttons */}
          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 3,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 1,
                textTransform: 'none'
              }}
            >
              Get started
            </Button>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                textTransform: 'none'
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Container>
      
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        {/* Top Gradient */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '600px', sm: '1200px' },
            height: { xs: '300px', sm: '600px' },
            top: { xs: '-160px', sm: '-320px' },
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(144,137,252,0.3) 0%, rgba(255,128,181,0.3) 100%)',
            filter: 'blur(80px)',
            opacity: 0.6
          }}
        />
        
        {/* Bottom Gradient */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '600px', sm: '1200px' },
            height: { xs: '300px', sm: '600px' },
            bottom: { xs: '-120px', sm: '-300px' },
            right: { xs: '-100px', sm: '-360px' },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,128,181,0.3) 0%, rgba(144,137,252,0.3) 100%)',
            filter: 'blur(80px)',
            opacity: 0.6
          }}
        />
      </Box>
    </Box>
  );
}
