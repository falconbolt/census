import { Container, Card, Row, Grid, Col, Text, Spacer, Link } from "@nextui-org/react";
import React from 'react';
import {Flex} from '../../styles/flex';
import ServiceList from './services-list'


const services = [
    {
      title: 'NIN Search',
      abbreviation: 'DocVerify',
      link: '../services-national_identity',
      message: 'Verify people using their National Identity Number (NIN).',
      cost: '',
      imageLink: '/images/nat-id_logo.jpg',
      id: 1
    },
    {
      title: 'VNIN Search',
      abbreviation: 'BioAuth',
      link: '../services-bvn',
      message: 'Verify people National Identity Number using their Virtual NIN (VNIN).',
      cost: '',
      imageLink: '/images/nat-id_logo.jpg',
      id: 2
    },
    {
      title: 'Phone Number Search ',
      abbreviation: 'BackCheck',
      link: '../services-account',
      message: 'Verify people National Identity Number using their Phone Number.',
      cost: '',
      imageLink: '/images/nat-id_logo.jpg',
      id: 3
    },
    {
      title: 'Document Number Search ',
      abbreviation: 'IDMonitor',
      link: '../services-voters_id',
      message: 'Verify people National Identity Number using their Document Number.',
      cost: '',
      imageLink: '/images/nat-id_logo.jpg',
      id: 4
    },
    {
      title: 'Demographic Info Search ',
      abbreviation: 'KYCComp',
      link: '../services-driver_license',
      message: 'Verify people National Identity Number using their Demographic Info (Name, DOB, Gender).',
      cost: '',
      imageLink: '/images/nat-id_logo.jpg',
      id: 5
    },
    {
      title: 'Biometric Search ',
      abbreviation: 'IDFraudDetect',
      link: '../services-cac',
      message: 'Verify people National Identity Number using their Biometrics (Fingerprint).',
      cost: '',
      imageLink: '/images/nat-id_logo.jpg',
      id: 6
    }
  ];
export const NINServices = () => {  
       return (
          <Flex
             css={{
                'mt': '$5',
                'px': '$6',
                '@sm': {
                   mt: '$10',
                   px: '$16',
                },
             }}
             justify={'center'}
             direction={'column'}
          >
            
    
        <Text blockquote css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold" align={'center'}
             >
              Select National Identification Service you want to use from the list below 
        </Text>
    
       <Container gap={0}>
          <Spacer y={1} />
          <Row gap={1}>
            
    
          <ServiceList services={services} />
          
            
          </Row>
          <Spacer y={3} />
        </Container>
          
          </Flex>
       );
    };    