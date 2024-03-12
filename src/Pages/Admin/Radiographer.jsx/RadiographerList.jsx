import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../../../Componets/Buttons/Button';
import { tableData } from '../../../utils/Data';
import AddStaff from '../Add Staff/AddStaff';
import ManageStaff from '../Add Staff/ManageStaff';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getStaff } from '../../../store/manageData';


const RadiographerList = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const role = location.pathname.split("/")[2].replace("-list", "");
  
  const [data, setData] = useState({ columns: [], rows: [] });
  const staffData = useSelector(state => state.data?.staff) || []; 

  useEffect(() => {
    dispatch(getStaff({ role: role }));
  }, [dispatch, role]); 

    useEffect(() => {
      const fetchData = async () => {
        try {
          // const response = await fetch('https://jsonplaceholder.typicode.com/users');
          // if (!response.ok) {
          //   throw new Error('Failed to fetch data');
          // }
          // const fetchedData = await response.json();
  
          const transformedData = {
            columns: [
              { label: 'ID', field: 'id', sort: 'asc',  },
              { label: 'Radiographer Name', field: 'name', sort: 'asc' },
              { label: 'Email', field: 'email', sort: 'asc' },
              { label: 'Phone', field: 'phone', sort: 'asc' },
              { label: 'Actions', field: 'actions', sort: 'disabled'},
            ],
            rows: staffData.map(item => ({
              id: item.id,
              name: item.name,
              email: item.email,
              phone: item.phone,
              actions: (
                <>
                <ManageStaff
                name={"Radiographer"}
                id={item.staff_id}
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
    }, [staffData]);
    
  return (
    <div className='main-border'>
        <div className='add-btn-container'>
           <AddStaff
           name={"Radiographer"}
           />
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
        />
    </div>
  );
}

export default RadiographerList;