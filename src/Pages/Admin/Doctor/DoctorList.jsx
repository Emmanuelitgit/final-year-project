import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Button from '../../../Componets/Buttons/Button';
import AddStaff from '../Add Staff/AddStaff';
import ManageStaff from '../Add Staff/ManageStaff';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getStaff } from '../../../store/manageData';

const DoctorList = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const role = location.pathname.split("/")[2].replace("-list", "");
  
  const [data, setData] = useState({ columns: [], rows: [] });
  const staffData = useSelector(state => state.data?.staff) || []; 

  useEffect(() => {
    dispatch(getStaff({ role: role }));
  }, [dispatch, role]); 

  useEffect(() => {
    const transformedData = {
      columns: [
        { label: 'ID', field: 'id', sort: 'asc' },
        { label: 'Doctor Name', field: 'name', sort: 'asc' },
        { label: 'Department Name', field: 'department', sort: 'asc' },
        { label: 'Email', field: 'email', sort: 'asc' },
        { label: 'Actions', field: 'actions', sort: 'disabled' },
      ],
      rows: staffData.map(item => ({
        id: item.staff_id,
        name: item.name,
        department: item?.department,
        email: item.email,
        actions: (
          <ManageStaff
            name={"Doctor"}
            id={item.staff_id}
          />
        ),
      })),
    };

    setData(transformedData);
  }, [staffData]);

  return (
    <div className='main-border'>
      <div className='add-btn-container'>
        <AddStaff
          name={"Doctor"}
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

export default DoctorList;
