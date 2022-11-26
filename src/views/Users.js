import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';


function Users() {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
    
      const data = () => {
        return {
          columns: [
            {
              label: 'First Name',
              field: 'Firstname',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
              },
            },
            {
              label: 'Last name',
              field:  'Lastname',
              width: 270,
            },
            {
              label: 'Email',
              field: 'Email',
              width: 200,
            },
            {
                label: 'Gender',
                field: 'Gender',
                width: 200,
              },
              {
                label: 'Country',
                field: 'Country',
                width: 200,
              },
              {
                label: 'Service activated',
                field: 'Serviceactivated',
                width: 200,
              },
              {
                label: 'Service activation status',
                field: 'Serviceactivationstatus',
                width: 200,
              },
          ],
          rows: [
            {
              Firstname: 'Tiger Nixon',
              Lastname: 'System Architect',
              Email: 'Edinburgh',
              Gender: '61',
              Country: '2011/04/25',
              Serviceactivated: '$320',
              Serviceactivationstatus: '$320',
              clickEvent: () => testClickEvent(1),
            },
            {
                Firstname: 'Tiger Nixon',
                Lastname: 'System Architect',
                Email: 'Edinburgh',
                Gender: '61',
                Country: '2011/04/25',
                Serviceactivated: '$320',
                Serviceactivationstatus: '$320',
                clickEvent: () => testClickEvent(1),
              },
          ],
        };
      };

  return (
    <>
      <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable striped bordered hover scrollX data={data()} materialSearch />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
    </>
  );
}

export default Users;
