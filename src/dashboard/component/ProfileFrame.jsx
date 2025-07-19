import { useState } from 'react';
import { Box, Card, CardMedia, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Composant de cadre animé personnalisé
const AnimatedProfileFrame = styled(Card)(({ theme }) => ({
  position: 'relative',
  maxWidth: 400,
  margin: '0 auto',
  borderRadius: theme.spacing(2),
  overflow: 'visible',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-10px) rotate(2deg)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
    backgroundSize: '300% 300%',
    borderRadius: theme.spacing(2.5),
    zIndex: -1,
    animation: 'gradientShift 3s ease infinite',
  },
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

// Bulle décorative animée
const Bubble = styled(Box)(({ size, delay, theme }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  opacity: 0.6,
  zIndex: 1,
  animation: `float ${delay}s ease-in-out infinite`,
  '@keyframes float': {
    '0%': { transform: 'translateY(0) scale(1)' },
    '50%': { transform: 'translateY(-20px) scale(1.1)' },
    '100%': { transform: 'translateY(0) scale(1)' },
  },
}));

// Composant principal
export default function ProfileFrame({ imageUrl, name, title }) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  // Image par défaut si aucune n'est fournie
  const defaultImage = 'https://via.placeholder.com/350x350';
  
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: 'fit-content',
        margin: '0 auto'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bulles décoratives qui apparaissent au survol */}
      {isHovered && (
        <>
          <Bubble 
            size={30} 
            delay={2} 
            sx={{ top: -15, right: 30 }}
          />
          <Bubble 
            size={40} 
            delay={2.5} 
            sx={{ bottom: 40, right: -20 }}
          />
          <Bubble 
            size={25} 
            delay={3} 
            sx={{ top: 30, left: -15 }}
          />
        </>
      )}
      
      <AnimatedProfileFrame>
        <CardMedia
          component="img"
          image={imageUrl || defaultImage}
          alt={name || "Photo de profil"}
          sx={{ 
            height: 400,
            width: 400,
            objectFit: 'cover',
            borderRadius: theme.spacing(1.5),
          }}
        />
        
        {/* Infos qui apparaissent au survol */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: theme.spacing(2),
            borderBottomLeftRadius: theme.spacing(1.5),
            borderBottomRightRadius: theme.spacing(1.5),
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {name || "Votre Nom"}
          </Typography>
          <Typography variant="body2">
            {title || "Développeur Web"}
          </Typography>
        </Box>
      </AnimatedProfileFrame>
    </Box>
  );
}

// Exemple d'utilisation:
/*
import ProfileFrame from './components/ProfileFrame';

function App() {
  return (
    <ProfileFrame 
      imageUrl="/chemin/vers/votre/photo.jpg" 
      name="Jean Dupont" 
      title="Développeur Full Stack"
    />
  );
}
*/