import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';
import ManageBloodBank from './ManageBloodBank';
import AddBloodBank from './AddBloodBank';



const BloodBank = ({ admin }) => {
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
                { label: 'Blood Group', field: 'name', sort: 'asc' },
                { label: 'Status', field: 'email', sort: 'asc' },
              ];
              if (role === "Nurse") {
                  columns.push({ label: 'Actions', field: 'actions', sort: 'disabled' });
              }else if (role === "Laboratorist") {
                columns.push({ label: 'Actions', field: 'actions', sort: 'disabled' });
            }

              const transformedData = {
                  columns: columns,
                  rows: fetchedData.map(item => ({
                      id: item.id,
                      name: item.name,
                      email: item.address.geo.lng,
                      username: item.username,
                      actions: (
                          <ManageBloodBank
                            name={"Blood Bank"}
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
          {role === "Nurse"  &&
              <div className='add-btn-container'>
                  <AddBloodBank/>
              </div>
          }
          {role === "Laboratorist"  &&
              <div className='add-btn-container'>
                  <AddBloodBank/>
              </div>
          }
          <MDBDataTable
              striped
              bordered
              searchLabel='Search blood group...'
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

export default BloodBank;
