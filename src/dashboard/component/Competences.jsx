import React, { useState, useEffect } from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  LinearProgress,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Code as CodeIcon,
  Style as StyleIcon,
  Javascript as JavascriptIcon,
  WebAsset as ReactIcon,
  DataObject as PhpIcon,
  SmartToy as PythonIcon,
  Brush as PhotoshopIcon,
  Palette as DesignIcon
} from '@mui/icons-material';

// Styled components
const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.spacing(2),
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: '1px solid #e9ecef',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    '& .skill-icon': {
      transform: 'scale(1.1)',
    },
    '& .progress-bar': {
      '& .MuiLinearProgress-bar': {
        animation: 'progressAnimation 1s ease-in-out',
      }
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2F4F2F, #007FFF)',
  },
  '@keyframes progressAnimation': {
    '0%': { transform: 'scaleX(0)' },
    '100%': { transform: 'scaleX(1)' }
  }
}));

const SkillIcon = styled(Box)(({ theme, color }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${color}20, ${color}10)`,
  border: `2px solid ${color}30`,
  transition: 'transform 0.3s ease-in-out',
}));

const AnimatedProgress = styled(LinearProgress)(({ theme, skillcolor }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: '#e9ecef',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: `linear-gradient(90deg, ${skillcolor}, ${skillcolor}dd)`,
    transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
  }
}));

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #2F4F2F, #007FFF)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
});

export default function CompetencesSection() {
  const [inView, setInView] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      name: 'HTML5',
      level: 80,
      icon: <CodeIcon fontSize="large" />,
      color: '#E34F26',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      level: 70,
      icon: <StyleIcon fontSize="large" />,
      color: '#1572B6',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      level: 50,
      icon: <JavascriptIcon fontSize="large" />,
      color: '#F7DF1E',
      category: 'Frontend'
    },
    {
      name: 'React.js',
      level: 50,
      icon: <ReactIcon fontSize="large" />,
      color: '#61DAFB',
      category: 'Frontend'
    },
    {
      name: 'PHP',
      level: 50,
      icon: <PhpIcon fontSize="large" />,
      color: '#777BB4',
      category: 'Backend'
    },
    {
      name: 'Python',
      level: 60,
      icon: <PythonIcon fontSize="large" />,
      color: '#3776AB',
      category: 'Backend'
    },
    {
      name: 'Tailwind CSS',
      level: 60,
      icon: <StyleIcon fontSize="large" />,
      color: '#06B6D4',
      category: 'Frontend'
    },
    {
      name: 'Photoshop',
      level: 80,
      icon: <PhotoshopIcon fontSize="large" />,
      color: '#31A8FF',
      category: 'Design'
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <Box 
      component="section"
      sx={{ 
        py: { xs: 8, sm: 10, md: 12 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #007FFF, transparent)',
        }
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: { xs: 6, sm: 8, md: 10 }
          }}
        >
          <GradientText
            variant={isMobile ? "h4" : "h3"}
            component="h2"
            sx={{ 
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
            }}
          >
            Nos Compétences
          </GradientText>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#6c757d',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Notre expertise technique couvre un large éventail de technologies modernes
          </Typography>

          {/* Category filters */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                icon={<DesignIcon />}
                sx={{
                  borderColor: '#007FFF',
                  color: '#007FFF',
                  '&:hover': {
                    backgroundColor: '#007FFF10',
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Skills Grid */}
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4 }}
          sx={{ justifyContent: 'center' }}
        >
          {skills.map((skill, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3}
              key={skill.name}
            >
              <SkillCard 
                elevation={0}
                sx={{
                  animation: inView ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                  '@keyframes fadeInUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(30px)'
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    }
                  }
                }}
              >
                {/* Skill Icon */}
                <SkillIcon 
                  className="skill-icon"
                  color={skill.color}
                >
                  {React.cloneElement(skill.icon, { 
                    style: { color: skill.color } 
                  })}
                </SkillIcon>

                {/* Skill Name */}
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: '#2c3e50',
                    textAlign: 'center',
                    mb: 1
                  }}
                >
                  {skill.name}
                </Typography>

                {/* Category Badge */}
                <Chip
                  label={skill.category}
                  size="small"
                  sx={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                    fontWeight: 500,
                    mb: 2
                  }}
                />

                {/* Progress Bar */}
                <Box sx={{ width: '100%', mb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                      Niveau
                    </Typography>
                    <Typography variant="body2" sx={{ color: skill.color, fontWeight: 600 }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  
                  <AnimatedProgress
                    variant="determinate"
                    value={inView ? skill.level : 0}
                    skillcolor={skill.color}
                    className="progress-bar"
                  />
                </Box>

                {/* Skill Level Text */}
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#6c757d',
                    textAlign: 'center'
                  }}
                >
                  {skill.level >= 70 ? 'Avancé' : skill.level >= 50 ? 'Intermédiaire' : 'Débutant'}
                </Typography>
              </SkillCard>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#2c3e50',
              fontWeight: 600,
              mb: 2
            }}
          >
            Prêt à collaborer ?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#6c757d',
              mb: 3
            }}
          >
            Contactez-nous pour discuter de votre projet
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}