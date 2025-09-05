import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid, 
  FormControlLabel, 
  Checkbox,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Footer from '../dashboard/component/Footer';
import { sendEmail } from '../services/emailService'; // Assurez-vous d'avoir une fonction sendEmail pour envoyer les emails

export default function Abonner() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    acceptConditions: false
  });
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    // Logique d'envoi des données vers votre API
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
        Téléphone: ${formData.telephone}
        ----------------------------
        Entreprise: ${formData.entreprise || 'Non spécifié'}
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
    
      setSuccess("Votre abonnement a été soumis avec succès! Veuillez patienter, vous recevrez un email de confirmation dans quelques instants.");
          
      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        acceptConditions: false
      });
      setOpenSnackbar(true);
      setActiveStep(0);
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setError("Une erreur s'est produite lors de l'envoi de votre abonnement");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 2 }}>
        <Grid container direction="column">
          {/* Formulaire d'abonnement (partie gauche) */}
          <Grid item xs={12} md={7} sx={{ p: 4, order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
              S'abonner à PolyCreation
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="nom"
                    label="Nom"
                    variant="filled"
                    fullWidth
                    required
                    value={formData.nom}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="prenom"
                    label="Prénom"
                    variant="filled"
                    fullWidth
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    variant="filled"
                    fullWidth
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="telephone"
                    label="Téléphone"
                    variant="filled"
                    fullWidth
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="entreprise"
                    label="Entreprise (optionnel)"
                    variant="filled"
                    fullWidth
                    value={formData.entreprise}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        name="acceptConditions" 
                        checked={formData.acceptConditions}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="J'accepte les conditions générales d'utilisation"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    size="large"
                    disabled={!formData.acceptConditions}
                    sx={{ 
                      py: 1.5, 
                      mt: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      }
                    }}
                  >
                    S'abonner maintenant
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          
          {/* Message d'abonnement (partie droite) */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              p: 4, 
              bgcolor: 'primary.main', 
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              order: { xs: 1, md: 2 }
            }}
          >
            <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
              <MailOutlineIcon sx={{ fontSize: 60, mb: 2 }} />
              
              <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                Rejoignez notre communauté
              </Typography>
              
              <Typography sx={{ mb: 3 }}>
                Abonnez-vous à PolyCreation pour faire partie de nos clients privilégiés.
                Bénéficiez d'avantages exclusifs, d'un accès prioritaire à nos services
                et restez informé de toutes nos nouveautés.
              </Typography>
              
              <Box sx={{ 
                bgcolor: 'rgba(255,255,255,0.1)', 
                p: 2, 
                borderRadius: 1, 
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography variant="body2">
                  En vous abonnant, vous rejoignez une communauté de clients satisfaits
                  et engagés. Nous nous engageons à vous offrir une expérience de qualité
                  et un service personnalisé.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box>
        <Footer/>
      </Box>
    </Container>
  );
}