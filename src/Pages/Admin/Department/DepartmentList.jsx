import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../../../Componets/Buttons/Button';
import { tableData } from '../../../utils/Data';
import AddDepartment from "./AddDepartment";
import ManageDepartment from "./ManageDepartment"

const DatatablePage = () => {
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
              { label: 'Department Name', field: 'name', sort: 'asc' },
              { label: 'Description', field: 'username', sort: 'asc' },
              { label: 'Actions', field: 'actions', sort: 'disabled'},
            ],
            rows: fetchedData.map(item => ({
              id: item.id,
              name: item.name,
              username: item.username,
              email: item.email,
              actions: (
                <>
                <ManageDepartment
                name={"Department"}
                id={item.id}
                />
                </>
              ),
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
        <div className='add-btn-container'>
        <AddDepartment/>
        </div>
       <MDBDataTable
        striped
        bordered
        searchLabel='Search a name'
        className='table-component'
        data={data}
        theadColor='black'
        theadTextWhite
        noBottomColumns
        searching
        displayEntries
        info
        responsive
        />
    </div>
  );
}

export default DatatablePage;