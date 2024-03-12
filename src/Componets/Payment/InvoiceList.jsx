import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';
import AddInvoice from "./AddInvoice";
import ManageInvoice from "./ManageInvoice";
import ActionBtn from '../Buttons/ActionBtn';



const InvoiceList = () => {

    const handleClick = () =>{
       alert("This will change the payment status to paid")
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
                { label: 'Invoice ID', field: 'id', sort: 'asc' },
                { label: 'Title', field: 'email', sort: 'asc' },
                { label: 'Amount', field: 'username', sort: 'asc' },
                { label: 'Patient', field: 'username', sort: 'asc' },
                { label: 'Date', field: 'username', sort: 'asc' },
               ];

               columns.push({ label: 'Status', field: 'status', sort: 'disabled' })

              if (role === "Accountant") {
                  columns.push({ label: 'Actions', field: 'actions', sort: 'disabled' });
              }

              const transformedData = {
                  columns: columns,
                  rows: fetchedData.map(item => ({
                      id: item.id,
                      name: item.name,
                      email: 25,
                      username: item.username,

                      status: (
                        <ActionBtn
                         value={"Paid"}
                         handleClick={handleClick}
                         />
                    ),
                      actions: (
                          <ManageInvoice
                          name={"Invoice"}
                          id={item.id}
                          patient={item.name}
                          age={25}
                          sex={item.username}
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
          {role === "Accountant"  &&
              <div className='add-btn-container'>
                  <AddInvoice/>
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

export default InvoiceList;