import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Box, 
    Button, 
    Menu, 
    MenuItem, 
    Avatar, 
    Badge,
    Divider,
    useMediaQuery,
    useTheme
  } from '@mui/material';
  import { 
    Menu as MenuIcon, 
    Close as CloseIcon, 
    Notifications as NotificationsIcon 
  } from '@mui/icons-material';
  import { useState } from 'react';
  
  // ✅ Ajoutez les imports manquants
  // import Acceuil from './components/Acceuil';
  // import ProfileFrame from './components/ProfileFrame';
  
  const navigation = [
    { name: 'Acceuil', href: '#', current: true },
    { name: 'Equipe', href: '#', current: false },
    { name: 'Projets', href: '#', current: false },
    { name: 'Contactez-nous', href: '#', current: false },
  ];
  
  export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleMobileToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
      <>
        <AppBar position="static" sx={{ bgcolor: 'grey.800' }}>
          <Toolbar sx={{ 
            maxWidth: '1200px', 
            width: '100%', 
            mx: 'auto', 
            px: { xs: 2, sm: 3, lg: 4 } 
          }}>
            {/* Logo */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: { xs: 1, sm: 0 } 
            }}>
              <img
                alt="Your Company"
                src="src/assets/logo.jpg"
                style={{ height: 32, width: 32 }}
              />
            </Box>
    
            {/* Navigation desktop */}
            <Box sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              ml: 3,
              flexGrow: 1 
            }}>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  sx={{
                    color: item.current ? 'common.white' : 'grey.300',
                    bgcolor: item.current ? 'grey.900' : 'transparent',
                    mx: 0.5,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'grey.700',
                      color: 'common.black'
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
    
            {/* Boutons droite */}
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <IconButton
                size="large"
                color="inherit"
                sx={{ color: 'grey.400', '&:hover': { color: 'common.white' } }}
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
    
              {/* Menu profil */}
              <IconButton
                onClick={handleMenuOpen}
                size="small"
                sx={{ ml: 2 }}
              >
                <Avatar
                  alt="Profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1,
                    width: 200,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  }
                }}
              >
                <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
              </Menu>
    
              {/* Bouton menu mobile */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileToggle}
                sx={{ 
                  display: { xs: 'flex', sm: 'none' }, 
                  ml: 1,
                  color: 'grey.400',
                  '&:hover': { color: 'common.white' }
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
    
          {/* Menu mobile */}
          <Box sx={{ 
            display: { xs: mobileOpen ? 'block' : 'none', sm: 'none' }, 
            px: 2, 
            pb: 2 
          }}>
            {navigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color: item.current ? 'common.white' : 'grey.300',
                  bgcolor: item.current ? 'grey.900' : 'transparent',
                  mb: 0.5,
                  px: 3,
                  py: 2,
                  '&:hover': {
                    bgcolor: 'grey.700',
                    color: 'common.white'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </AppBar>
        
        {/* ✅ Section principale corrigée */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', // ✅ Corrigé : 'row' au lieu de 'rows'
          justifyContent: 'space-between',
          mt: 10 
        }}>
          {/* <Acceuil /> */}
          <Box mt={10}>
            {/* <ProfileFrame  
              imageUrl="/src/assets/POLYCRATION.png" 
              name="Polycreation" 
              title="Agence numerique"
            /> */}
          </Box>
        </Box>
      </>
    );
  }