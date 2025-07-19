import React from 'react'
import Homepage from './component/Homepage.jsx'
import About from './component/About.jsx'
import Acceuil from './component/Acceuil.jsx'
import { useNavigate } from 'react-router-dom';

import Team from './component/Team.jsx'
import Testimonial from './component/Testimonial.jsx'
import Realisation from './component/Realisation.jsx'
import {  Box  } from '@mui/material'
import Homes from './component/Homes.jsx'
import Competences from './component/Competences.jsx'
import Contact from './component/Contact.jsx'
import Text from './component/Text.jsx'
import Footer from './component/Footer.jsx'

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Box>
        <Homepage />
        {/* Section Accueil/Home */}
        <Box id="accueil" mt={10}>
          <Homes />
        </Box>
        
        {/* Section À propos */}
        <Box id="apropos">
           <About /> 
        </Box>
        
        {/* Section Services */}
        <Box id="services" mt={5}>
            <Acceuil />
        </Box>
        
        <Box mt={5}>
            <Team />
        </Box>
        
        <Box>
            <Testimonial />
        </Box>
        
        <Box>
            <Realisation />
        </Box>
        
        <Box sx={{}}>
            <Competences />
        </Box>
        
        {/* Section Contact */}
        <Box id="contact" mt={10}>
          <Contact />
        </Box>
        <Box> 
          <Text/>
        </Box>
        <Box> 
          <Footer/>
        </Box>
    </Box>
    
  )
}