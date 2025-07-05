import { Box, Typography, Grid, Link, styled } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'

const links = [
  { name: 'En savoir plus', href:'#' },
  { name: 'Rejoindre notre communauté', href: '#' },
  { name: 'Nos valeurs', href: '#' },
  { name: 'Voire le contrat', href: '#' },
];

const stats = [
  { name: 'Années d\'experiences', value: '3+' },
  { name: 'Projets terminés', value: '50+' },
  { name: 'Clients satisfaires', value: '50+' },
  { name: 'Projets en cours', value: 'Illimité' },
];

const BlobEffect = styled('div')(({ theme }) => ({
  position: 'absolute',
  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  background: 'linear-gradient(to top right,rgb(34, 17, 75), #776fff)',
  opacity: 0.2,
  width: '68.5625rem',
  aspectRatio: '1097/845',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export default function WorkWithUs() {
  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'grey.900',
      py: { xs: 6, sm: 8 },
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply)',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        [theme => theme.breakpoints.up('md')]: {
          backgroundPosition: 'center',
        },
      },
    }}>
      {/* Effets de blob */}
      <BlobEffect sx={{
        top: { sm: -40, md: -52 },
        right: '50%',
        mr: { sm: 10 },
        transform: 'translateX(50%)',
        [theme => theme.breakpoints.up('sm')]: {
          display: 'block',
          transform: 'translateX(0)',
          ml: { sm: 16 },
        },
      }} />
      
      <BlobEffect sx={{
        top: { xs: -52, sm: -224 },
        left: '50%',
        transform: 'translateX(-50%)',
        [theme => theme.breakpoints.up('sm')]: {
          transform: 'translateX(0)',
        },
      }} />

      <Box sx={{
        maxWidth: '1200px', // équivalent à max-w-7xl
        mx: 'auto',
        px: { xs: 3, lg: 4 },
        position: 'relative',
      }}>
        <Box sx={{ maxWidth: { xs: '100%', lg: '50%' }, mb: 4 }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem' },
              fontWeight: 600,
              color: 'common.white',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
            }}
          >
            Travailler avec NOUS
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              mt: 2,
              color: 'grey.300',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              fontWeight: 500,
              lineHeight: { sm: '2rem' },
            }}
          >
            Nous disposons d'une large gamme de service allant du developpement digital à la production audiovisuelle,nous vous aidons à donner
            vie à vos idées.
            Nous faire confiance, c'est dire oui au travail bien faire.
          </Typography>
        </Box>

        <Box sx={{ 
          maxWidth: { xs: '100%', lg: '100%' },
          mt: { xs: 5, sm: 5, lg: 5 },
        }}>
          <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }} sx={{ mb: 4 }}>
            {links.map((link) => (
              <Grid item key={link.name} xs={12} sm={6} md="auto">
                <Link
                 component={RouterLink} to="/projet"
                  href={link.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'common.white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    lineHeight: '1.75rem',
                    '&:hover': {
                      textDecoration: 'none',
                    },
                  }}
                >
                  {link.name} <Box component="span" sx={{ ml: 1 }}>→</Box>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }} sx={{ mt: { xs: 4, sm: 5 } }}>
            {stats.map((stat) => (
              <Grid item key={stat.name} xs={12} sm={6} lg={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: 'grey.300',
                      fontSize: '1rem',
                      lineHeight: '1.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {stat.name}
                  </Typography>
                  <Typography 
                    variant="h3"
                    sx={{ 
                      color: 'common.white',
                      fontSize: '2.25rem',
                      fontWeight: 600,
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}