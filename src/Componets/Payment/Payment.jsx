import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';

const PatientList = () => {
    const [data, setData] = useState({ columns: [], rows: [] });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const fetchedData = await response.json();
  
          const transformedData = {
            columns: [
              { label: 'ID', field: 'id', sort: 'asc',  },
              { label: 'Date', field: 'name', sort: 'asc' },
              { label: 'Amount', field: 'email', sort: 'asc' },
              { label: 'Payment Type', field: 'username', sort: 'asc' },
              { label: 'Transaction ID', field: 'username', sort: 'asc' },
              { label: 'Invoice ID', field: 'username', sort: 'asc' },
              { label: 'Method', field: 'username', sort: 'asc' },
              { label: 'Patient', field: 'username', sort: 'asc' },
            ],
            rows: fetchedData.map(item => ({
              id: item.id,
              name: item.name,
              email: item.address.geo.lng,
              username: item.username,
            })),
          };
  
          setData(transformedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className='main-border'>
       <MDBDataTable
        striped
        bordered
        searchLabel='Search name...'
        className='table-component'
        data={data}
        theadColor='black'
        theadTextWhite
        noBottomColumns
        searching
        displayEntries
        info
        />
    </div>
  );
}

export default PatientList;