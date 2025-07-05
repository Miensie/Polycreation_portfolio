import React from 'react'
import Homepage from './component/Homepage.jsx'
import ProfileFrame from './component/ProfileFrame.jsx'
import About from './component/About.jsx'
import Acceuil from './component/Acceuil.jsx'

import Work from './component/Work.jsx'
import Team from './component/Team.jsx'
import Testimonial from './component/Testimonial.jsx'
import Realisation from './component/Realisation.jsx'
import Competence from './component/Competence.jsx'
import {  Box  } from '@mui/material'
import Homes from './component/Homes.jsx'
import Competences from './component/Competences.jsx'
import Contact from './component/Contact.jsx'
import Text from './component/Text.jsx'


export default function Dashboard() {
  return (
    <Box>
        <Homepage />
        
        <Box mt={10}>
          <Homes />
        </Box>
   
         <Box>
           <About /> 
         </Box>
         <Box>
           <Acceuil /> 
         </Box>
         <Box mt={5}>
            <Work />
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
         <Box  mt={10} sx={{display:'flex',flexDirection:'row',width:'100%',
         
         }}>
            
             <Box sx={{width:'60%'}} >
               <Contact />
             </Box>
             <Box sx={{width:'40%',marginTop:'200px'}}> 
               <Text/>
             </Box>
            
         </Box>
         
    </Box>
  )
}
