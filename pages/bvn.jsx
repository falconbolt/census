import React from 'react'
// Import BVNDetailsPDF component
import BVNDetailsPDF from 'pages/BVNDetailePDF.jsx';


const BVN = ({ bvnDetails }) => {
    return (
      <div>
        <h1>BVN Details PDF</h1>
        <BVNDetailsPDF data={bvnDetails} />
      </div>
    );
  };
  
  export async function getServerSideProps() {
    const bvnDetails = {
    "bvn_data": {
      "firstName": "John",
      "middleName": "Doe",
      "lastName": "Smith",
      "bvn": "12345678901",
      "email": "johndoe@example.com",
      "enrollmentBank": "Bank A",
      "enrollmentBranch": "Branch X",
      "gender": "Male",
      "lgaOfOrigin": "LGA Y",
      "nationality": "Nigerian",
      "phoneNumber1": "+1234567890",
      "registrationDate": "2022-01-01",
      "title": "Mr",
      "stateOfOrigin": "State Z",
      "residentialAddress": "123 ABC Street, City",
      "dateOfBirth": "1990-01-01",
      "image": "/images/bvn.jpg"
    },
    "detail": "Verified"
  };

  return {
    props: {
        bvnDetails,
    },
  };
}

export default BVN