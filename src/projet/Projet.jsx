import React, { useState, useCallback, useMemo } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Typography, 
  Box,
  Chip,
  IconButton,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Fade,
  useMediaQuery,
  useTheme,
  Tooltip
} from '@mui/material';
import { 
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
  Visibility as VisibilityIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Analytics as AnalyticsIcon,
  VideoLibrary as VideoIcon,
  FilterList as FilterIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Footer from '../dashboard/component/Footer';

// ===== STYLED COMPONENTS =====
const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    '& .project-overlay': {
      opacity: 1,
    },
    '& .project-image': {
      transform: 'scale(1.1)',
    }
  },
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  height: 240,
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.4s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: 200,
  }
}));

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  gap: theme.spacing(2),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(10, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  }
}));

const FilterButton = styled(Button)(({ theme, active }) => ({
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontWeight: 600,
  padding: theme.spacing(1, 3),
  margin: theme.spacing(0.5),
  border: '2px solid',
  borderColor: active ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.12)',
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? 'white' : theme.palette.text.primary,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.primary.main,
    color: 'white',
    transform: 'translateY(-2px)',
  }
}));

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(102, 126, 234, 0.1)',
  color: '#667eea',
  border: '1px solid rgba(102, 126, 234, 0.3)',
  fontWeight: 500,
  fontSize: '0.75rem',
  '&:hover': {
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
  }
}));

// ===== COMPOSANT PRINCIPAL =====
export default function ProjetPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // ===== DONNÉES DES PROJETS =====
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Site web de POLYCREATION",
      category: "web",
      image: "assets/logo.jpg",
      shortDescription: "Site web avec React et Node.js",
      fullDescription: "Une plateforme web complète pour présenter les services de Polycreation, incluant un portfolio interactif, un blog et une section contact. Technologies utilisées : React pour le frontend, Node.js pour le backend.",
      technologies: ["React", "Node.js"],
      demoUrl: "https://polycreation.pages.dev",
      githubUrl: "https://github.com/Miensie/Polycreation_portfolio",
      date: "2025",
      client: "Polycreation",
      duration: "3 mois"
    },
    {
      id: 2,
      title: "Application web SANGBE GROUPE EXCHANGE",
      category: "web",
      image: "assets/web/logocrypto.png",
      shortDescription: "Application de gestion d'achat et d'échange de cryptomonnaies",
      fullDescription: "Une application web sécurisée permettant aux utilisateurs d'acheter, vendre et échanger des cryptomonnaies. Fonctionnalités incluent l'authentification, le suivi des transactions en temps réel et un tableau de bord utilisateur. Technologies utilisées : React, Node.js, MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://miensie.github.io/Sangbe-Groupe-Exchange/",
      githubUrl: "https://github.com/Miensie/Sangbe-Groupe-Exchange",
      date: "2025",
      client: "Sangbe Groupe Exchange",
      duration: "2 mois"
    },
    {
      id: 3,
      title: "Affiche publicitaire de POLYCREATION",
      category: "design",
      image: "assets/affiche/design.jpg",
      shortDescription: "Affiche publicitaire créative pour Polycreation",
      fullDescription: "Conception d'une affiche publicitaire attrayante pour promouvoir les services de Polycreation. L'affiche utilise des éléments graphiques modernes et une typographie claire pour capter l'attention du public cible.",
      technologies: ["Adobe Photoshop"],
      demoUrl: null,
      githubUrl: null,
      date: "2025",
      client: "Polycreation",
      duration: "1 semaine"
    },
    {
      id: 4,
      title: "Vidéo promotionnelle de POLYCREATION",
      category: "video",
      image: "assets/logo.jpg",
      shortDescription: "Vidéo promotionnelle dynamique pour Polycreation",
      fullDescription: "Production d'une vidéo promotionnelle mettant en avant les services et les valeurs de Polycreation.",
      technologies: ["Adobe Premiere Pro"],
      demoUrl: "https://www.youtube.com/shorts/USHnXe-Rtd0",
      githubUrl: null,
      date: "2025",
      client: "Polycreation",
      duration: "2 jours"
    },
    {
      id: 5,
      title: "Affiche évenementielle",
      category: "design",
      image: "assets/affiche/JC.png",
      shortDescription: "Affiche évenementielle pour promouvoir une journée carrière",
      fullDescription: "Création d'une affiche évenementielle pour promouvoir une journée carrière organisée par l'amicale des polytechs anciens de l'UNA. L'affiche utilise des couleurs vives et une mise en page claire pour attirer l'attention des étudiants.",
      technologies: ["Adobe Photoshop"],
      demoUrl: null,
      githubUrl: null,
      date: "2024",
      client: "Amicale des Polytechs Anciens de l'UNA",
      duration: "1 semaine"
    },
    {
      id: 6,
      title: "Vidéo évènementielle",
      category: "video",
      image: "https://i.pinimg.com/1200x/49/c8/55/49c855437304f1f61ba12f5273e1a566.jpg",
      shortDescription: "Vidéo évènementielle pour annoncer un événement spirituel dénommé EPHPHATA",
      fullDescription: "Production d'une vidéo évènementielle pour annoncer un événement spirituel dénommé EPHPHATA organisé par l'AECOD.",
      technologies: ["Capcut"],
      demoUrl: "https://youtu.be/7ab1mE2YHQg?si=z9Ovyj5XxxhD0UIC",
      githubUrl: null,
      date: "2024",
      client: "AECOD",
      duration: "3 jours"
    }
    // Ajoutez plus de projets si nécessaire

  ], []);

  // ===== FILTRES =====
  const categories = useMemo(() => [
    { key: 'all', label: 'Tous les projets', icon: <FilterIcon /> },
    { key: 'web', label: 'Développement Web', icon: <CodeIcon /> },
    { key: 'mobile', label: 'Applications Mobiles', icon: <CodeIcon /> },
    { key: 'design', label: 'Design', icon: <PaletteIcon /> },
    { key: 'data', label: 'Data & Analytics', icon: <AnalyticsIcon /> },
    { key: 'video', label: 'Audiovisuel', icon: <VideoIcon /> }
  ], []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(project => project.category === filter);
  }, [projects, filter]);

  // ===== HANDLERS =====
  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(cat => cat.key === category);
    return categoryData ? categoryData.icon : <CodeIcon />;
  };

  return (
    <Box component="main" sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      {/* ===== SECTION HERO ===== */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              position: 'relative',
              zIndex: 1
            }}
          >
            Nos Projets Réalisés
          </Typography>
          
          <Typography 
            variant="h5" 
            component="p"
            sx={{ 
              mb: 4,
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              position: 'relative',
              zIndex: 1
            }}
          >
            Découvrez une sélection de nos réalisations récentes, 
            témoignant de notre expertise et de notre créativité.
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* ===== FILTRES ===== */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          mb: 6,
          px: 2
        }}>
          {categories.map((category) => (
            <FilterButton
              key={category.key}
              active={filter === category.key}
              onClick={() => handleFilterChange(category.key)}
              startIcon={category.icon}
              size={isMobile ? 'small' : 'medium'}
            >
              {isMobile ? category.label.split(' ')[0] : category.label}
            </FilterButton>
          ))}
        </Box>

        {/* ===== GRILLE DES PROJETS ===== */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {filteredProjects.map((project) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={4} 
              key={project.id}
            >
              <ProjectCard onClick={() => handleProjectClick(project)}>
                <ProjectImage
                  className="project-image"
                  image={project.image}
                  title={project.title}
                >
                  <ProjectOverlay className="project-overlay">
                    <Tooltip title="Voir les détails">
                      <IconButton 
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.2)', 
                          color: 'white',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                  </ProjectOverlay>
                </ProjectImage>
                
                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  p: 3
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {getCategoryIcon(project.category)}
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        ml: 1, 
                        color: '#667eea', 
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {project.date}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      color: '#1a202c',
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#718096', 
                      mb: 3,
                      flexGrow: 1,
                      lineHeight: 1.6
                    }}
                  >
                    {project.shortDescription}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <TechChip 
                        key={tech} 
                        label={tech} 
                        size="small" 
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <TechChip 
                        label={`+${project.technologies.length - 3}`} 
                        size="small" 
                      />
                    )}
                  </Box>

                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      alignSelf: 'flex-start',
                      color: '#667eea',
                      fontWeight: 600,
                      textTransform: 'none',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '& .MuiSvgIcon-root': {
                          transform: 'translateX(4px)'
                        }
                      },
                      '& .MuiSvgIcon-root': {
                        transition: 'transform 0.2s ease-in-out'
                      }
                    }}
                  >
                    Voir les détails
                  </Button>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" sx={{ color: '#718096', mb: 2 }}>
              Aucun projet trouvé
            </Typography>
            <Typography variant="body1" sx={{ color: '#a0aec0' }}>
              Essayez un autre filtre pour voir plus de projets.
            </Typography>
          </Box>
        )}
      </Container>

      {/* ===== DIALOG DÉTAILS PROJET ===== */}
      <Dialog
        open={!!selectedProject}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 3,
            maxHeight: '90vh'
          }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              pb: 2
            }}>
              <Box>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  {selectedProject.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#718096', mt: 0.5 }}>
                  {selectedProject.client} • {selectedProject.duration} • {selectedProject.date}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseDialog} size="large">
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 0 }}>
              <CardMedia
                component="img"
                height={isTablet ? "250" : "350"}
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ objectFit: "contain"}}
              />
              
              <Box sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {selectedProject.fullDescription}
                </Typography>
                
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Technologies utilisées
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 3 }}>
                  {selectedProject.technologies.map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </Box>
              </Box>
            </DialogContent>

            <DialogActions sx={{ p: 3, gap: 2 }}>
              {selectedProject.demoUrl && (
                <Button
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: '#667eea',
                    '&:hover': { bgcolor: '#5a67d8' },
                    textTransform: 'none',
                    fontWeight: 600
                  }}
                >
                  Voir la démo
                </Button>
              )}
              
              {selectedProject.githubUrl && (
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: '#667eea',
                    color: '#667eea',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#5a67d8',
                      bgcolor: 'rgba(102, 126, 234, 0.04)'
                    }
                  }}
                >
                  Code source
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
      <Box>
        <Footer/>
      </Box>
    </Box>
    
  );
}