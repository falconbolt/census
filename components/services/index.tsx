import { Container, Card, Row, Grid, Col, Text, Spacer, Link } from "@nextui-org/react";
import ServiceList from './services-list'
import {Flex} from '../styles/flex';


const services = [
   {
     title: 'National Identity Services',
     abbreviation: 'DocVerify',
     link: '../services-national_identity',
     message: 'Verify individuals\' national identity for security and identification purposes',
     imageLink: '/images/nat-id_logo.jpg',
     id: 1
   },
   {
     title: 'BVN Verification',
     abbreviation: 'BioAuth',
     link: '../services-bvn',
     message: 'Verify Bank Verification Numbers (BVN) to ensure secure banking transactions',
     imageLink: '/images/bvn-logo.jpg',
     id: 2
   },
   {
     title: 'Bank Account ',
     abbreviation: 'BackCheck',
     link: '../services-account',
     message: 'Verify the authenticity and ownership of bank accounts to prevent fraud and secure financial transactions',
     imageLink: '/images/account-logo.jpg',
     id: 3
   },
   {
     title: 'Voter ID ',
     abbreviation: 'IDMonitor',
     link: '../services-voters_id',
     message: 'Verify individuals\' voter IDs to ensure fair and transparent electoral processes and prevent voter fraud',
     imageLink: '/images/voter-logo.jpg',
     id: 4
   },
   {
     title: 'Driver License ',
     abbreviation: 'KYCComp',
     link: '../services-driver_license',
     message: 'Verify the validity and authenticity of driver licenses to ensure safe and legal driving practices',
     imageLink: '/images/driver-logo.jpg',
     id: 5
   },
   {
     title: 'Company Registration ',
     abbreviation: 'IDFraudDetect',
     link: '../services-cac',
     message: 'Verify the legitimacy of companies to facilitate trustworthy business transactions and partnerships',
     imageLink: '/images/cac-logo.jpg',
     id: 6
   }
 ];


export const Services = () => {

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
          Pick a service you want to use from the list below 
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
