import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../../../Componets/Buttons/Button';
import { tableData } from '../../../utils/Data';
import AddNotice from './AddNotice';
import ManageNotice from './ManageNotice';


const NoticeBoard = () => {
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
              { label: 'Title', field: 'name', sort: 'asc' },
              { label: 'Notice', field: 'email', sort: 'asc' },
              { label: 'Date', field: 'email', sort: 'asc' },
            ],
            rows: fetchedData.map(item => ({
              id: item.id,
              name: item.name,
              email: item.address.geo.lng,
              actions: (
                <>
                <ManageNotice
                name={"Notice Board"}
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
            <AddNotice/>
        </div>
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

export default NoticeBoard;