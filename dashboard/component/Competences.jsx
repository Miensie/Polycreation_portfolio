import React from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar
} from '@mui/material';

const features = [
  {
    name: 'Html',
    description:'80%',
    imageUrl: 'src/assets/affiche1.jpg',
    imageAlt: "",
    
  },
  {
    name: 'Css',
    description:'70%',
    imageUrl: 'src/assets/affiche1.jpg',
    imageAlt: "",
    
  },
  {
    name: 'Javascript',
    description:'50%.',
    imageUrl: 'src/assets/affiche1.jpg',
    imageAlt: "",
  },
  {
    name: 'React js',
    description:'50%.',
    imageUrl: 'src/assets/comp1.jpg',
    imageAlt: "",
  },
  {
    name: 'Php',
    description:'50%.',
    imageUrl: 'src/assets/comp1.jpg',
    imageAlt: "",
  },
  {
    name: 'Python Flet',
    description:'60%.',
    imageUrl: 'src/assets/comp1.jpg',
    imageAlt: "",
  },
  {
    name: 'Tailwind Css',
    description:'60%.',
    imageUrl: 'src/assets/comp1.jpg',
    imageAlt: "",
  },
  {
    name: 'Photoshop',
    description:'80%.',
    imageUrl: 'src/assets/comp1.jpg',
    imageAlt: "",
  }
  
];

export default function FeatureSection() {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, sm: 10, md: 12 },
        width:'100%',
        height:'500px', 
        borderBlockStartStyle:'dashed'
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
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              color: '#4285f4',
              background: 'linear-gradient(90deg, #2F4F2F,#007FFF)',
              backgroundClip:'text',
              WebkitTextFillColor:'transparent',
              textAlign:'center'
            }}
          >
            Nos compétences
          </Typography>
          
        </Box>

        <Grid 
          container 
          spacing={4}
          sx={{
            maxWidth: { md: '100%', lg: '100%' },
            mx: 'auto',
            backgroundColor:'#f5f5f5',
            width:'100%',
            height:'500px',
            paddingLeft:'100px',
            paddingTop:'50px',
            borderRadius:'15px'
       
          }}
        >
          {features.map((feature) => (
            <Grid item xs={12} sm={6} >
              <Box sx={{ display: 'flex' }}>
                <Paper elevation={10}
                  sx={{
                 
                    color: 'white',
                    mr: 3,
                    width: 180,
                    height: 180,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    borderRadius:'15px',
                    background:'linear-gradient(90deg,#2F4F2F,#007FFF)',
                    backgroundClip:'text',
                    WebkitTextFillColor:'transparent',
                  }}
                  src={feature.imageUrl}
                    alt={feature.imageAlt}
                >
                <Box sx={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'column'
                }}>
                  <Typography variant="h4" component="h3">
                    {feature.name}
                  </Typography>
                  <Typography variant="h4" component="h3">
                    {feature.description}
                  </Typography>
                </Box> 
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}