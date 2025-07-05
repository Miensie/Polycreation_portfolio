import { Box, Typography, List, ListItem, Avatar, Card, CardContent } from '@mui/material';

const people = [
  {
    id: 1,
    name: 'Armand konan Kouakou',
    role: 'Co-Founder / Développeur web',
    description: 'Élève ingénieur en matériau et procédé à l\'INP-HB',
    imageUrl: '/assets/armand.jpg', // ✅ Chemin corrigé
  },
  {
    id: 2,
    name: 'Miensié ezekiel Amani',
    role: 'Co-Founder / Développeur web & Designer',
    description: 'Élève ingénieur en matériau et procédé à l\'INP-HB',
    imageUrl: '/src/assets/ezekiel-profile.jpg', // ✅ Chemin corrigé
  },
  // Ajoutez plus de membres si nécessaire
];

export default function LeadershipTeam() {
  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa', 
      py: { xs: 8, sm: 12 },
      px: 2 
    }}>
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, sm: 3, lg: 4 },
      }}>
        {/* Section Header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, sm: 8 },
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 'bold',
              letterSpacing: '-0.025em',
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(90deg, #2F4F2F, #007FFF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text', // ✅ Ajout du préfixe webkit
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            Notre équipe
          </Typography>
          <Typography 
            variant="h6"
            sx={{ 
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: '1.75rem',
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Nous sommes un groupe d'individus dynamiques et passionnés de la technologie, 
            dédiés à créer des solutions innovantes.
          </Typography>
        </Box>
        
        {/* Team Grid */}
        <Box 
          sx={{
            display: 'grid',
            gap: { xs: 3, sm: 4 },
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              lg: 'repeat(3, 1fr)' 
            },
            justifyItems: 'center'
          }}
        >
          {people.map((person) => (
            <Card 
              key={person.id}
              sx={{ 
                maxWidth: 350,
                width: '100%',
                borderRadius: 3,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Avatar 
                  alt={person.name} 
                  src={person.imageUrl} 
                  sx={{ 
                    width: { xs: 80, sm: 100 }, 
                    height: { xs: 80, sm: 100 },
                    mx: 'auto',
                    mb: 3,
                    border: '4px solid',
                    borderColor: 'primary.main'
                  }} 
                />
                
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    letterSpacing: '-0.025em',
                    color: 'text.primary',
                    mb: 1,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  {person.name}
                </Typography>
                
                <Typography 
                  variant="subtitle1"
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 1,
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  {person.role}
                </Typography>
                
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    lineHeight: '1.4'
                  }}
                >
                  {person.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}