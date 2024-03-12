import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';
import AddPrescription from './AddPrescription';
import ManagePrescription from './ManagePrescription';
import PaymentStatus from '../Buttons/ActionBtn';
import ActionBtn from '../Buttons/ActionBtn';
import { Link, useNavigate } from "react-router-dom"



const PrescriptionList = () => {

    const navigate = useNavigate()

    const handleClickPay = () => {
        const confirmed = window.confirm("This will change the payment status to paid");
        if (confirmed) {
            // Do something if the user confirms
        } else {
            // Do something if the user cancels
        }
    }

    const handleClickStatus = () => {
      const confirmed = window.confirm("This will change the medication status to item collected");
      if (confirmed) {
          // Do something if the user confirms
      } else {
          // Do something if the user cancels
      }
  }

    const handleView = (id) => {
        navigate(`/medication/${id}`)
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
                { label: 'Doctor', field: 'username', sort: 'asc' },
                { label: 'Patient', field: 'email', sort: 'asc' },
                { label: 'Medication', field: 'email', sort: 'asc' },
                { label: 'Date', field: 'name', sort: 'asc' },
              ];
              if (role === "Doctor") {
                  columns.push({ label: 'Actions', field: 'actions', sort: 'disabled' });
              }
              if (role === "Pharmacist") {
                columns.push({ label: 'Payment', field: 'payment', sort: 'disabled' });
              }

              if (role === "Pharmacist") {
                columns.push({ label: 'Status', field: 'status', sort: 'disabled' });
              }

              if (role === "Pharmacist") {
                columns.push({ label: 'View', field: 'view', sort: 'disabled' });
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
                            handleClick={handleClickPay}
                           />
                          } 
                        </div>
                    ),
                    
                    view: (
                        <div>
                          <ActionBtn
                          value={"view"}
                          id={item.id}
                          backgroundColor={"#0390fc"}
                          icon={"Folder"}
                          handleClick={() => handleView(item.id)}
                        />
                        </div>
                      ),

                      status: (
                        <div>
                       {item.username !== "Bret" &&
                          <ActionBtn
                          value={"Item Collected"}
                          id={item.id}
                          backgroundColor={"blue"}
                          icon={"Folder"}
                        />
                       }
                         {item.username === "Bret" &&
                          <ActionBtn
                          value={"Waiting Confirmation"}
                          id={item.id}
                          backgroundColor={"#3279a8"}
                          icon={"Folder"}
                          handleClick={handleClickStatus}
                        />
                       }
                        </div>
                      ),
  
                      actions: (
                          <ManagePrescription
                            name={"Prescription"}
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
                  <AddPrescription/>
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

export default PrescriptionList;