import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';
import AddResult from './AddResult';
import ManageResult from './ManageResult';


const ResultList = ({admin}) => {

  const role = localStorage.getItem("role");

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
              { label: 'Laboratorist', field: 'email', sort: 'asc' },
              { label: 'Patient', field: 'username', sort: 'asc' },
              { label: 'Type', field: 'username', sort: 'asc' },
              { label: 'Test Name', field: 'username', sort: 'asc' },
              ...(role === "Laboratorist" ? [{ label: 'Actions', field: 'actions', sort: 'disabled' }] : [])
            ],
         
            rows: fetchedData.map(item => ({
              id: item.id,
              name: item.name,
              email: item.address.geo.lng,
              username: item.username,
              actions:(
                <>
                <ManageResult
                 name={"Result"}
                 id={item.id}
                />
                </>
              )
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
        {role === "Laboratorist" && 
        <div className='add-btn-container'>
          <AddResult/>
        </div>
        }
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

export default ResultList;