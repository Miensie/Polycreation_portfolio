import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  IconButton,
  Divider
} from '@mui/material';
import { 
    Phone as PhoneIcon, 
    Email as EmailIcon, 
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    WhatsApp as WhatsAppIcon,
    Facebook as FacebookIcon,
    Language as WebsiteIcon
  } from '@mui/icons-material';

  const Text = () => {

    return(
    <>
       <Box>
          <Container>
          <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column',backgroundColor:'#f5f5f5' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    Nous sommes à votre service
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    Vous pouvez nous contacter 24h/24 pour vos achats. Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans votre processus d'achat.
                  </Typography>

                  <List sx={{ mt: 2 }}>
                    <ListItem>
                      <ListItemIcon>
                        <TimeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Disponibilité" 
                        secondary="24h/24, 7j/7" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Téléphone" 
                        secondary="+33 1 23 45 67 89" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Email" 
                        secondary="contact@votreentreprise.com" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Adresse" 
                        secondary="123 Avenue des Champs-Élysées, 75008 Paris, France" 
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Container>
       </Box>
    
    </>

    );

  };

  export default Text;