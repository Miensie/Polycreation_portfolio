import { Box, Typography, Avatar,Paper } from '@mui/material';
import { styled } from '@mui/system';

const RadialGradientBackground = styled('div')({
  position: 'absolute',
  inset: 0,
  zIndex: -10,
  background: 'radial-gradient(45rem 50rem at top, #e0e7ff, white)',
  opacity: 0.2
});

const SkewedBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: '50%',
  zIndex: -10,
  marginRight: theme.spacing(2),
  width: '200%',
  transformOrigin: 'bottom left',
  transform: 'skewX(-30deg)',
  backgroundColor: 'white',
  boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)',
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(3.5)
  },
  [theme.breakpoints.up('lg')]: {
    marginRight: 0
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: theme.spacing(2),
    transformOrigin: 'center'
  }
}));

export default function TestimonialSection() {
  return (
    <Box 
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        px: { xs: 3, sm: 4, lg: 4 },
        py: { xs: 6, sm: 8 }
      }}
    >
      <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem' },
              fontWeight: 600,
              color: 'black',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              background: 'linear-gradient(90deg, #2F4F2F,#007FFF)',
              backgroundClip:'text',
              WebkitTextFillColor:'transparent',
              textAlign:'center'
            }}
          >
            Nos clients temoignent
          </Typography>
      <RadialGradientBackground />
      <SkewedBackground />
     <Paper elevation={3} 
        sx={{background: 'linear-gradient(to top right,rgb(206, 198, 224), #776fff)',
        borderRadius:'15px',
        marginTop:'30px'}}>
      <Box sx={{
        maxWidth: { xs: '42rem', lg: '56rem' },
        mx: 'auto'
      }}>
        <Box
          component="img"
          alt="Workcation logo"
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          sx={{
            display: 'block',
            mx: 'auto',
            height: 48
          }}
        />
      
         <Box component="figure" sx={{ mt: 5 }}>
        
          <Typography 
            component="blockquote" 
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              lineHeight: { xs: '2rem', sm: '2.25rem' },
              fontWeight: 600,
              color: 'text.primary'
            }}
          >
            "J'ai confié la conception de mon logo pour ma marque de parfum et POLYCREATION m'a emerveillé en un temps record j'ai été ravi de leurs services."
          </Typography>
          
          <Box component="figcaption" sx={{ mt: 5 }}>
            <Avatar
              alt="Judith Black"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              sx={{
                width: 40,
                height: 40,
                mx: 'auto'
              }}
            />
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 1.5,
              mt: 3
            }}>
              <Typography component="div" sx={{ fontWeight: 600, color: 'text.primary' }}>
                Judith Black
              </Typography>
              
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true">
                <circle r={1} cx={1} cy={1} fill="currentColor" />
              </svg>
              
              <Typography component="div" sx={{ color: 'text.secondary' }}>
                CEO of STYLAND PARIS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      </Paper> 
    </Box>
  );
}