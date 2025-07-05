import { Box, Typography, Grid } from '@mui/material';

export default function TrustedBy() {
  const logos = [
    {
      name: 'Transistor',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
      width: 158,
      height: 48,
      colSpan: { xs: 2, lg: 1 }
    },
    {
      name: 'Reform',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
      width: 158,
      height: 48,
      colSpan: { xs: 2, lg: 1 }
    },
    {
      name: 'Tuple',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
      width: 158,
      height: 48,
      colSpan: { xs: 2, lg: 1 }
    },
    {
      name: 'SavvyCal',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
      width: 158,
      height: 48,
      colSpan: { xs: 2, sm: 2, lg: 1 },
      start: { sm: 2 }
    },
    {
      name: 'Statamic',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
      width: 158,
      height: 48,
      colSpan: { xs: 2, sm: 2, lg: 1 },
      start: { xs: 2, sm: 'auto' }
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: 'background.paper', 
      py: { xs: 6, sm: 8 }
    }}>
      <Box sx={{
        maxWidth: '1200px', // équivalent à max-w-7xl
        mx: 'auto',
        px: { xs: 3, lg: 4 }
      }}>
        <Typography 
          variant="h6" 
          component="h2"
          align="center"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            lineHeight: '2rem'
          }}
        >
          Trusted by the world's most innovative teams
        </Typography>

        <Grid 
          container
          spacing={{ xs: 2, sm: 3, lg: 4 }}
          sx={{
            mt: 5,
            maxWidth: { xs: '400px', sm: '500px', lg: 'none' },
            mx: 'auto'
          }}
        >
          {logos.map((logo, index) => (
            <Grid 
              item
              key={index}
              xs={logo.colSpan.xs}
              sm={logo.colSpan.sm || logo.colSpan.xs}
              lg={logo.colSpan.lg}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gridColumnStart: logo.start?.xs ? 'span 2' : undefined,
                ...(logo.start?.sm && { 
                  sm: { 
                    gridColumnStart: logo.start.sm === 2 ? 2 : 'auto' 
                  } 
                })
              }}
            >
              <Box
                component="img"
                alt={logo.name}
                src={logo.src}
                sx={{
                  maxHeight: 48,
                  width: '100%',
                  objectFit: 'contain',
                  height: 'auto'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}