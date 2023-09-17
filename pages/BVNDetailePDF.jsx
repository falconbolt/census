import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 40,
  },
  section: {
    marginBottom: 10,
  },
  image: {
    marginBottom: 10,
    width: 300,
    height: 350,
  },
});

const BVNDetailsPDF = ({ data }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>First Name: {data.bvn_data.firstName}</Text>
          <Text>Middle Name: {data.bvn_data.middleName}</Text>
          <Text>Last Name: {data.bvn_data.lastName}</Text>
          <Text>BVN: {data.bvn_data.bvn}</Text>
          <Text>E-mail: {data.bvn_data.email}</Text>
          <Text>Enrolment Bank: {data.bvn_data.enrollmentBank}</Text>
          <Text>Enrollment Branch: {data.bvn_data.enrollmentBranch}</Text>
          <Text>Gender: {data.bvn_data.gender}</Text>
          <Text>LGA: {data.bvn_data.lgaOfOrigin}</Text>
          <Text>Nationality: {data.bvn_data.nationality}</Text>
          <Text>Phone Number: {data.bvn_data.phoneNumber1}</Text>
          <Text>Registration: {data.bvn_data.registrationDate}</Text>
          <Text>Name: {data.bvn_data.title}</Text>
          <Text>State: {data.bvn_data.stateOfOrigin}</Text>
          <Text>Status: {data.detail}</Text>
          <Text>Address: {data.bvn_data.residentialAddress}</Text>
          <Image style={styles.image} src={data.bvn_data.image} alt="Image" />
          <Text>Date of Birth: {data.bvn_data.dateOfBirth}</Text>
          {/* Render other relevant BVN details */}
        </View>
      </Page>
    </Document>
  );
};

export default BVNDetailsPDF;
