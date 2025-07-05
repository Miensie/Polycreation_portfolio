import React from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar
} from '@mui/material';
import {
  CloudUpload,
  Lock,
  Sync,
  Fingerprint
} from '@mui/icons-material';

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudUpload,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: Lock,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: Sync,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: Fingerprint,
  },
];

export default function FeatureSection() {
  return (
    <Box 
      sx={{ 
        bgcolor: 'background.paper', 
        py: { xs: 8, sm: 10, md: 12 } 
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            maxWidth: { sm: '100%', md: '600px', lg: '700px' }, 
            mx: 'auto', 
            textAlign: 'center',
            mb: { xs: 6, sm: 8, md: 10 }
          }}
        >
          <Typography 
            variant="subtitle1" 
            color="primary"
            sx={{ 
              fontWeight: 'medium',
              mb: 2
            }}
          >
            Deploy faster
          </Typography>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              color: 'text.primary'
            }}
          >
            Everything you need to deploy your app
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              lineHeight: 1.75
            }}
          >
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4}
          sx={{
            maxWidth: { md: '800px', lg: '100%' },
            mx: 'auto'
          }}
        >
          {features.map((feature) => (
            <Grid item xs={12} sm={6} key={feature.name}>
              <Box sx={{ display: 'flex' }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    mr: 3,
                    width: 48,
                    height: 48
                  }}
                >
                  <feature.icon fontSize="medium" />
                </Avatar>
                <Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 'medium',
                      mb: 1
                    }}
                  >
                    {feature.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}