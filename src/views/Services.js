import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';


function Services() {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
    
      const data = () => {
        return {
          columns: [
            {
              label: 'Departure airline',
              field: 'departureairline',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Departure airline',
              },
            },
            {
              label: 'Departure airport',
              field:  'departureairport',
              width: 270,
            },
            {
              label: 'Departure city',
              field: 'departurecity',
              width: 200,
            },
              {
                label: 'Arival airline',
                field: 'arivalairline',
                width: 200,
              },
              {
                label: 'Arival airport',
                field: 'arivalairport',
                width: 200,
              },
              {
                label: 'Arival city',
                field: 'arivalcity',
                width: 200,
              },
              {
                label: 'Action',
                field: 'action',
                width: 200,
              },
          ],
          rows: [
            {
              departureairline: 'Tiger Nixon',
              departureairport: 'System Architect',
              departurecity: 'Edinburgh',
              arivalairline: '61',
              arivalairport: '2011/04/25',
              arivalcity: '$320',
              clickEvent: () => testClickEvent(1),
            },
            {
              departureairline: 'Tiger Nixon',
              departureairport: 'System Architect',
              departurecity: 'Edinburgh',
              arivalairline: '61',
              arivalairport: '2011/04/25',
              arivalcity: '$320',
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

export default Services;
