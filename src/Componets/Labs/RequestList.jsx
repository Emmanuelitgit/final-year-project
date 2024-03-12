import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';
import AddRequest from "./AddRequest";
import ManageRequest from "./ManageRequest";
import ActionBtn from '../Buttons/ActionBtn';
import { useDispatch, useSelector } from 'react-redux';
import { handleResultModal } from '../../store/modalState';
import AddResult from './AddResult';


const RequestList = () => {

  const dispatch = useDispatch();

  const handleOpen = () =>{
    dispatch(handleResultModal())
  }

  const handleClick = () => {
    const confirmed = window.confirm("This will change the payment status to paid");
    if (confirmed) {
        // Do something if the user confirms
    } else {
        // Do something if the user cancels
    }
}

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

              const columns = [
                { label: 'ID', field: 'id', sort: 'asc',  },
                { label: 'Date', field: 'name', sort: 'asc' },
                { label: 'Doctor', field: 'email', sort: 'asc' },
                { label: 'Patient', field: 'username', sort: 'asc' },
                { label: 'Type', field: 'username', sort: 'asc' },
                { label: 'Test Name', field: 'username', sort: 'asc' },
              ];
              if (role === "Doctor") {
                  columns.push({ label: 'Actions', field: 'actions', sort: 'disabled' });
              }

              if (role === "Laboratorist") {
                columns.push({ label: 'Payment', field: 'payment', sort: 'disabled' });
              }

              if (role === "Laboratorist") {
                columns.push({ label: 'Status', field: 'status', sort: 'disabled' });
              }

              if (role === "Laboratorist") {
                columns.push({ label: 'Action', field: 'action', sort: 'disabled' });
              }
           

              const transformedData = {
                  columns: columns,
                  rows: fetchedData.map(item => ({
                      id: item.id,
                      name: item.name,
                      email: item.address.geo.lng,
                      username: item.username,

                      payment: (
                        <div>
                          { item.username !== "Bret" &&
                            <ActionBtn
                            value={"Paid"}
                            id={item.id}
                            backgroundColor={"#27ae60"}
                           />
                          }

                          { item.username === "Bret" &&
                            <ActionBtn
                            value={"Unpaid"}
                            id={item.id}
                            backgroundColor={"red"}
                            handleClick={handleClick}
                           />
                          } 
                        </div>
                    ),

                    status: (
                      <div>
                     {item.username !== "Bret" &&
                        <ActionBtn
                        value={"Ready"}
                        id={item.id}
                        backgroundColor={"orange"}
                      />
                     }

                      {item.username === "Bret" &&
                        <ActionBtn
                        value={"Wating"}
                        id={item.id}
                        backgroundColor={"#5b32a8"}
                      />
                     }
                      </div>
                    ),

                    action: (
                      <div>
                     {item.username !== "Bret" &&
                        <ActionBtn
                        value={"Add Result"}
                        id={item.id}
                        backgroundColor={"blue"}
                        icon={"Folder"}
                        handleClick={handleOpen}
                      />
                     }
                       {item.username === "Bret" &&
                        <ActionBtn
                        value={"Waiting Payment"}
                        id={item.id}
                        backgroundColor={"#3279a8"}
                        icon={"Folder"}
                      />
                     }
                      </div>
                    ),

                      actions: (
                          <ManageRequest
                            name={"Request"}
                            id={item.id}
                           />
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
          {role === "Doctor"  &&
              <div className='add-btn-container'>
                  <AddRequest/>
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
          <AddResult/>
      </div>
  );
}

export default RequestList;