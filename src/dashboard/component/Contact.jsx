import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Card,
  Snackbar,
  Alert
} from '@mui/material';
import { sendEmail } from '../../services/emailService'; // Assurez-vous d'avoir une fonction sendEmail pour envoyer les emails

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici vous pouvez ajouter votre logique pour envoyer le formulaire
    setOpenSnackbar(true);
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      
    });

    try {
      // Créer le contenu de l'email
      const emailSubject = `Nouveau message de contact de ${formData.nom} ${formData.prenom}`;
      const emailContent = `
        Nouveau message de contact:
        ----------------------------
        Nom: ${formData.nom}
        ----------------------------
        Prenom: ${formData.prenom}
        ----------------------------
        Email: ${formData.email}
        ----------------------------
        Message: ${formData.message}
        ----------------------------
        Veuillez répondre à ce message pour plus de détails.
      `;

      // Adresse email de l'admin (remplacez par votre adresse)
      const ADMIN_EMAIL = 'koffimiensie@gmail.com'
      
      // Envoyer l'email à l'admin
      const emailResult = await sendEmail({
        to: ADMIN_EMAIL,
        subject: emailSubject,
        text: emailContent,
      });
      
      if (!emailResult.success) {
        throw new Error("Échec de l'envoi de l'email: " + emailResult.error);
      }

      setSuccess("Votre message a été envoyé avec succès ! Veuillez patienter, vous recevrez une réponse dans les plus brefs délais.");
      
      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        t
      });
      setActiveStep(0);
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setError("Une erreur s'est produite lors de l'envoi de votre message");
    };
  };

  return (
    <>
    <Typography variant="h2" component="h2" sx={{
       fontSize: { xs: '2.5rem', sm: '3.5rem' },
       fontWeight: 600,
       color: 'black',
       letterSpacing: '-0.025em',
       lineHeight: 1.2,
       background: 'linear-gradient(90deg, #2F4F2F,#007FFF)',
       backgroundClip:'text',
       WebkitTextFillColor:'transparent',
       textAlign:'center',
       width:'100%'
    }} >
        Contactez-nous
    </Typography>
      <Box sx={{ py: 8 }}>
        <Container width="50%">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Contactez nous sur nos differents reseaux
          </Typography>
          
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#f9f9f9'
            
          }}>
            <Paper elevation={0} sx={{ p: 4 ,backgroundColor:'#f5f5f5'}}>
              <Box 
                component="form" 
                onSubmit={handleSubmit} 
                noValidate 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3
                }}
              >
                {/* Chaque champ occupe toute la largeur et est positionné en colonne */}
                <TextField
                  name="nom"
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  variant="filled"
                  value={formData.nom}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f2f2f2' }}
                />
                
                <TextField
                  name="prenom"
                  required
                  fullWidth
                  id="prenom"
                  label="Prénom"
                  variant="filled"
                  value={formData.prenom}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f2f2f2' }}
                />
                
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse email"
                  name="email"
                  autoComplete="email"
                  variant="filled"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f2f2f2' }}
                />
                
                <TextField
                  required
                  fullWidth
                  id="message"
                  name="message"
                  label="Votre message"
                  multiline
                  rows={4}
                  variant="filled"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f2f2f2' }}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ 
                    mt: 2, 
                    py: 1.5,
                    backgroundColor: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    }
                  }}
                >
                  ENVOYER
                </Button>
              </Box>
            </Paper>
          </Card>
        </Container>
        
        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            Votre message a été envoyé avec succès !
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Contact;