import React from 'react';
import { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Folder, Delete, Update, Add } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { tableData } from '../../utils/Data';
import AddMedicineCategory from './AddMedicineCategory';
import ManageMedicineCategory from './ManageMedicineCategory';


const MedicineCategory = () => {

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

              // Define columns based on role
              const columns = [
                  { label: 'ID', field: 'id', sort: 'asc' },
                  { label: 'Category Name', field: 'name', sort: 'asc' },
                  { label: 'Description', field: 'username', sort: 'asc' },
              ];
              if (role === "Pharmacist") {
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
                          <ManageMedicineCategory
                            name={"Medicine Category"}
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
           {role === "Pharmacist"  &&
              <div className='add-btn-container'>
                  <AddMedicineCategory/>
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

export default MedicineCategory;
