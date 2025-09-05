import React, { useState, useEffect } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { 
  Paper, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  Avatar
} from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
//import logo from '../../assets/logo.jpg'

// Animation de rotation pour le logo
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Logo avec animation
const RotatingLogo = styled(Avatar)`
  animation: ${rotate} 10s linear infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${rotate} 3s linear infinite;
    box-shadow: 0 0 15px #0cbded;
  }
`;

// Style pour les symboles de code qui flottent en arrière-plan
const CodeSymbol = styled(Box)`
  position: absolute;
  color: rgba(12, 189, 237, 0.1);
  font-family: monospace;
  font-weight: bold;
  user-select: none;
  z-index: 0;
  font-size: ${props => props.size || '24px'};
`;

// Symboles de code à utiliser
const codeSymbols = ['<>', '/>', '{...}', '()', '[]', '=>', '&&', '||', '++', '!=', '==', 'return', 'const', 'let', 'async', 'await', 'import', 'export', 'function', '</>'];

export default function Home() {
    const [codeElements, setCodeElements] = useState([]);
    
    // Génère un symbole de code avec position et animation aléatoires
    const generateRandomCodeElement = (index) => {
        const randomSymbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.floor(Math.random() * 20) + 14; // Taille entre 14px et 34px
        const duration = Math.floor(Math.random() * 40) + 20; // Durée entre 20s et 60s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.9 + 0.9; // Opacité entre 0.05 et 0.25
        
        return (
            <CodeSymbol
                key={index}
                size={`${size}px`}
                sx={{
                    left: `${left}vw`,
                    top: `${top}vh`,
                    opacity: opacity,
                    animation: `float ${duration}s linear ${delay}s infinite`,
                }}
            >
                {randomSymbol}
            </CodeSymbol>
        );
    };
    
    // Génère 30 symboles de code en arrière-plan
    useEffect(() => {
        const floatKeyframes = `
            @keyframes float {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                }
                25% {
                    transform: translate(10vw, -15vh) rotate(90deg);
                }
                50% {
                    transform: translate(20vw, 0) rotate(180deg);
                }
                75% {
                    transform: translate(10vw, 15vh) rotate(270deg);
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                }
            }
        `;
        
        // Ajoute les keyframes à la page
        const styleElement = document.createElement('style');
        styleElement.innerHTML = floatKeyframes;
        document.head.appendChild(styleElement);
        
        // Génère les symboles
        const elements = [];
        for (let i = 0; i < 30; i++) {
            elements.push(generateRandomCodeElement(i));
        }
        setCodeElements(elements);
        
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            {/* Symboles de code en arrière-plan */}
            {codeElements}
            
            <Container maxWidth="lg" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <RotatingLogo
                        alt="Logo"
                        src={"assets/logo.jpg"}
                        sx={{
                            width: 250, 
                            height: 250,
                            mb: 4,
                            boxShadow: '0 0 10px rgba(12, 189, 237, 0.5)',
                            border: '1px solid #0cbded'
                        }}
                    />
                </Box>
                 
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography 
                        variant="h4" 
                        component="h1" 
                        sx={{
                            mb: 2,
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                            background: 'linear-gradient(90deg, #2F4F2F,#007FFF)',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 5px rgba(12, 189, 237, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                textShadow: '0 0 15px rgba(12, 189, 237, 0.6)'
                            },
                            fontWeight: 'bold'
             
                        }}
                    >
                        POLYCREATION
                    </Typography>
                    
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{
                            fontWeight: 500,
                            mb: 2,
                            maxWidth: '800px',
                            margin: '0 auto 20px auto',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                color: '#0cbded'
                            }
                        }}
                    >
                        Votre partenaire de confiance pour le developpement digitale et design graphique
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                        <Button 
                        component={RouterLink} to="/projet"
                            variant='outlined' 
                            size="large" 
                            sx={{
                                borderColor: '#0cbded',
                                color: '#0cbded',
                                padding: '10px 25px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#42397e',
                                    color: '#42397e',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 5px 15px rgba(12, 189, 237, 0.2)'
                                }
                            }}
                        >
                            Voir nos projets
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}