import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';

const ContactSection = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#f8f9fa',
        py: 4,
        width: '100%',
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0',
        borderBottomLeftRadius:'50%',
        borderBottomRightRadius:'50%',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{ 
                fontWeight: 600,
                color: '#212121',
                mb: 1
              }}
            >
              Etes-vous interesser à travailler avec nous?
            </Typography>
            <Typography 
              variant="body1"
              sx={{ color: '#424242' }}
            >
              Nous vous proposons du sur mesure.
            </Typography>
          </Box>
          
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1976d2',
              py: 1.5,
              px: 4,
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            Engager nous
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;