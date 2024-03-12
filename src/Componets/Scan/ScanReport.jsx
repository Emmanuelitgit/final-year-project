import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import ManageRequest from "./ManageRequest";
import ActionBtn from '../Buttons/ActionBtn';
import { Link, useNavigate } from "react-router-dom"



const ScanReport = () => {

  const navigate = useNavigate()

  const handleView = (id) =>{
    navigate(`/reports/${id}`)
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
                { label: 'Scan Name', field: 'username', sort: 'asc' },
              ];
              if (role === "Doctor") {
                  columns.push({ label: 'Actions', field: 'actions', sort: 'disabled' });
              }

              if (role === "Radiographer") {
                columns.push({ label: 'Payment', field: 'payment', sort: 'disabled' });
              }

              if (role === "Radiographer") {
                columns.push({ label: 'Status', field: 'status', sort: 'disabled' });
              }

              if (role === "Radiographer") {
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
                        backgroundColor={"orange"}
                      />
                     }
                      </div>
                    ),

                    action: (
                      <div>
                        <ActionBtn
                        value={"View"}
                        id={item.id}
                        backgroundColor={"blue"}
                        icon={"Folder"}
                        handleClick={() => handleView(item.id)}
                      />
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

export default ScanReport;