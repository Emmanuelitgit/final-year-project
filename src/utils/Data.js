import doctor from "../Componets/images/staff/doctor 1.png";
import lab from "../Componets/images/staff/lab-tool.png";
import pharmacist from "../Componets/images/staff/pharmacist 1.png";
import nurse from "../Componets/images/staff/nurse 1.png";
import accountant from "../Componets/images/staff/accountant 1.png";
import radiographer from "../Componets/images/staff/radiologist 1.png";
import patient from "../Componets/images/staff/patient 1.png";
import appointment from "../Componets/images/staff/appointment.jpg";
import blood from "../Componets/images/staff/blood-bank.avif";
import book from "../Componets/images/staff/book.jpg";
import birth from "../Componets/images/staff/birth 1.jpg";
import drug from "../Componets/images/staff/drug.jpg";
import medicine from "../Componets/images/staff/drug.jpg";
import death from "../Componets/images/staff/death.png";
import operation from "../Componets/images/staff/operation 2.jpg";
import allotment from "../Componets/images/staff/allotment.jpg";
import bed from "../Componets/images/staff/bed.png";






export const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 33300,
      userLost: 234
    },
    {
      id: 6,
      year: 2021,
      userGain: 43300,
      userLost: 234
    },
    {
      id: 7,
      year: 2022,
      userGain: 63300,
      userLost: 234
    }
  ];

  export const friendOptions = [
  {
    key: 'Doctor',
    text: 'Doctor',
    value: 'Doctor',
  },
  {
    key: 'Nurse',
    text: 'Nurse',
    value: 'Nurse',
    // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Admin',
    text: 'Admin',
    value: 'Admin',
    // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Laboratorist',
    text: 'Laboratorist',
    value: 'Laboratorist',
    // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
   {
    key: 'Radiographer',
    text: 'Radiographer',
    value: 'Radiographer',
    // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Pharmacist',
    text: 'Pharmacist',
    value: 'Pharmacist',
    // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
]

export const tableData = {
  columns: [
    {
      label: 'Department Name',
      field: 'name',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Position',
      field: 'position',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Office',
      field: 'office',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Start date',
      field: 'date',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Salary',
      field: 'salary',
      sort: 'asc',
      width: 100
    }
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      date: '2011/04/25',
      salary: '$320'
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: '63',
      date: '2011/07/25',
      salary: '$170'
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: '66',
      date: '2009/01/12',
      salary: '$86'
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: '22',
      date: '2012/03/29',
      salary: '$433'
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: '33',
      date: '2008/11/28',
      salary: '$162'
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: '61',
      date: '2012/12/02',
      salary: '$372'
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      age: '59',
      date: '2012/08/06',
      salary: '$137'
    },
    {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      age: '55',
      date: '2010/10/14',
      salary: '$327'
    },
    {
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      office: 'San Francisco',
      age: '39',
      date: '2009/09/15',
      salary: '$205'
    },
    {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      office: 'Edinburgh',
      age: '23',
      date: '2008/12/13',
      salary: '$103'
    },
    {
      name: 'Jena Gaines',
      position: 'Office Manager',
      office: 'London',
      age: '30',
      date: '2008/12/19',
      salary: '$90'
    },
    {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      office: 'Edinburgh',
      age: '22',
      date: '2013/03/03',
      salary: '$342'
    },
    {
      name: 'Charde Marshall',
      position: 'Regional Director',
      office: 'San Francisco',
      age: '36',
      date: '2008/10/16',
      salary: '$470'
    },
    {
      name: 'Haley Kennedy',
      position: 'Senior Marketing Designer',
      office: 'London',
      age: '43',
      date: '2012/12/18',
      salary: '$313'
    },
    {
      name: 'Tatyana Fitzpatrick',
      position: 'Regional Director',
      office: 'London',
      age: '19',
      date: '2010/03/17',
      salary: '$385'
    },
    {
      name: 'Michael Silva',
      position: 'Marketing Designer',
      office: 'London',
      age: '66',
      date: '2012/11/27',
      salary: '$198'
    },
    {
      name: 'Paul Byrd',
      position: 'Chief Financial Officer (CFO)',
      office: 'New York',
      age: '64',
      date: '2010/06/09',
      salary: '$725'
    },
    {
      name: 'Gloria Little',
      position: 'Systems Administrator',
      office: 'New York',
      age: '59',
      date: '2009/04/10',
      salary: '$237'
    },
    {
      name: 'Bradley Greer',
      position: 'Software Engineer',
      office: 'London',
      age: '41',
      date: '2012/10/13',
      salary: '$132'
    },
    {
      name: 'Dai Rios',
      position: 'Personnel Lead',
      office: 'Edinburgh',
      age: '35',
      date: '2012/09/26',
      salary: '$217'
    },
    {
      name: 'Jenette Caldwell',
      position: 'Development Lead',
      office: 'New York',
      age: '30',
      date: '2011/09/03',
      salary: '$345'
    },
    {
      name: 'Yuri Berry',
      position: 'Chief Marketing Officer (CMO)',
      office: 'New York',
      age: '40',
      date: '2009/06/25',
      salary: '$675'
    },
    {
      name: 'Caesar Vance',
      position: 'Pre-Sales Support',
      office: 'New York',
      age: '21',
      date: '2011/12/12',
      salary: '$106'
    },
    {
      name: 'Doris Wilder',
      position: 'Sales Assistant',
      office: 'Sidney',
      age: '23',
      date: '2010/09/20',
      salary: '$85'
    },
    {
      name: 'Angelica Ramos',
      position: 'Chief Executive Officer (CEO)',
      office: 'London',
      age: '47',
      date: '2009/10/09',
      salary: '$1'
    },
    {
      name: 'Gavin Joyce',
      position: 'Developer',
      office: 'Edinburgh',
      age: '42',
      date: '2010/12/22',
      salary: '$92'
    },
    {
      name: 'Jennifer Chang',
      position: 'Regional Director',
      office: 'Singapore',
      age: '28',
      date: '2010/11/14',
      salary: '$357'
    },
    {
      name: 'Brenden Wagner',
      position: 'Software Engineer',
      office: 'San Francisco',
      age: '28',
      date: '2011/06/07',
      salary: '$206'
    },
    {
      name: 'Fiona Green',
      position: 'Chief Operating Officer (COO)',
      office: 'San Francisco',
      age: '48',
      date: '2010/03/11',
      salary: '$850'
    },
    {
      name: 'Shou Itou',
      position: 'Regional Marketing',
      office: 'Tokyo',
      age: '20',
      date: '2011/08/14',
      salary: '$163'
    },
    {
      name: 'Michelle House',
      position: 'Integration Specialist',
      office: 'Sidney',
      age: '37',
      date: '2011/06/02',
      salary: '$95'
    },
    {
      name: 'Suki Burks',
      position: 'Developer',
      office: 'London',
      age: '53',
      date: '2009/10/22',
      salary: '$114'
    },
    {
      name: 'Prescott Bartlett',
      position: 'Technical Author',
      office: 'London',
      age: '27',
      date: '2011/05/07',
      salary: '$145'
    },
    {
      name: 'Gavin Cortez',
      position: 'Team Leader',
      office: 'San Francisco',
      age: '22',
      date: '2008/10/26',
      salary: '$235'
    },
    {
      name: 'Martena Mccray',
      position: 'Post-Sales support',
      office: 'Edinburgh',
      age: '46',
      date: '2011/03/09',
      salary: '$324'
    },
    {
      name: 'Unity Butler',
      position: 'Marketing Designer',
      office: 'San Francisco',
      age: '47',
      date: '2009/12/09',
      salary: '$85'
    },
    {
      name: 'Howard Hatfield',
      position: 'Office Manager',
      office: 'San Francisco',
      age: '51',
      date: '2008/12/16',
      salary: '$164'
    },
    {
      name: 'Hope Fuentes',
      position: 'Secretary',
      office: 'San Francisco',
      age: '41',
      date: '2010/02/12',
      salary: '$109'
    },
    {
      name: 'Vivian Harrell',
      position: 'Financial Controller',
      office: 'San Francisco',
      age: '62',
      date: '2009/02/14',
      salary: '$452'
    },
    {
      name: 'Timothy Mooney',
      position: 'Office Manager',
      office: 'London',
      age: '37',
      date: '2008/12/11',
      salary: '$136'
    },
    {
      name: 'Jackson Bradshaw',
      position: 'Director',
      office: 'New York',
      age: '65',
      date: '2008/09/26',
      salary: '$645'
    },
    {
      name: 'Olivia Liang',
      position: 'Support Engineer',
      office: 'Singapore',
      age: '64',
      date: '2011/02/03',
      salary: '$234'
    },
    {
      name: 'Bruno Nash',
      position: 'Software Engineer',
      office: 'London',
      age: '38',
      date: '2011/05/03',
      salary: '$163'
    },
    {
      name: 'Sakura Yamamoto',
      position: 'Support Engineer',
      office: 'Tokyo',
      age: '37',
      date: '2009/08/19',
      salary: '$139'
    },
    {
      name: 'Thor Walton',
      position: 'Developer',
      office: 'New York',
      age: '61',
      date: '2013/08/11',
      salary: '$98'
    },
    {
      name: 'Finn Camacho',
      position: 'Support Engineer',
      office: 'San Francisco',
      age: '47',
      date: '2009/07/07',
      salary: '$87'
    },
    {
      name: 'Serge Baldwin',
      position: 'Data Coordinator',
      office: 'Singapore',
      age: '64',
      date: '2012/04/09',
      salary: '$138'
    },
    {
      name: 'Zenaida Frank',
      position: 'Software Engineer',
      office: 'New York',
      age: '63',
      date: '2010/01/04',
      salary: '$125'
    },
    {
      name: 'Zorita Serrano',
      position: 'Software Engineer',
      office: 'San Francisco',
      age: '56',
      date: '2012/06/01',
      salary: '$115'
    },
    {
      name: 'Jennifer Acosta',
      position: 'Junior Javascript Developer',
      office: 'Edinburgh',
      age: '43',
      date: '2013/02/01',
      salary: '$75'
    },
    {
      name: 'Cara Stevens',
      position: 'Sales Assistant',
      office: 'New York',
      age: '46',
      date: '2011/12/06',
      salary: '$145'
    },
    {
      name: 'Hermione Butler',
      position: 'Regional Director',
      office: 'London',
      age: '47',
      date: '2011/03/21',
      salary: '$356'
    },
    {
      name: 'Lael Greer',
      position: 'Systems Administrator',
      office: 'London',
      age: '21',
      date: '2009/02/27',
      salary: '$103'
    },
    {
      name: 'Jonas Alexander',
      position: 'Developer',
      office: 'San Francisco',
      age: '30',
      date: '2010/07/14',
      salary: '$86'
    },
    {
      name: 'Shad Decker',
      position: 'Regional Director',
      office: 'Edinburgh',
      age: '51',
      date: '2008/11/13',
      salary: '$183'
    },
    {
      name: 'Michael Bruce',
      position: 'Javascript Developer',
      office: 'Singapore',
      age: '29',
      date: '2011/06/27',
      salary: '$183'
    },
    {
      name: 'Donna Snider',
      position: 'Customer Support',
      office: 'New York',
      age: '27',
      date: '2011/01/25',
      salary: '$112'
    }
  ]
};

export const adminBoxes = [
  {
  id:1,
  name:"Doctor",
  background:"#192a56",
  image:doctor
},
{
  id:2,
  name:"Nurse",
  background:"purple",
  image:nurse
},
{
  id:3,
  name:"Patient",
  background:"tomato",
  image:patient
},
{
  id:4,
  name:"Pharmacist",
  background:"crimson",
  image:pharmacist
},
{
  id:5,
  name:"Laboratorist",
  background:"#192a56",
  image:lab
},
{
  id:6,
  name:"Accountant",
  background:"brown",
  image:accountant
},
{
  id:7,
  name:"Radiographer",
  background:"teal",
  image:radiographer
},
{
  id:8,
  name:"Appointment",
  background:"steelblue",
  image:appointment
},
{
  id:9,
  name:"Blood Bank",
  background:"rebeccapurple",
  image:blood
},
{
  id:10,
  name:"Medicine",
  background:"slategrey",
  image:medicine
},
{
  id:11,
  name:"Operation Report",
  background:"#FA6775",
  image:operation
},
{
  id:12,
  name:"Birth Report",
  background:"sienna",
  image:birth
},
{
  id:13,
  name:"Death Report",
  background:"rosybrown",
  image:death
},
{
  id:14,
  name:"Bed Allotment",
  background:"#666",
  image:allotment
},
{
  id:15,
  name:"Notice Board",
  background:"cornflowerblue",
  image:book
}

]


export const doctorBoxes = [
  {
    id:6,
    name:"Patient",
    background:"steelblue",
    image:patient
  },
{
  id:7,
  name:"Appointment",
  background:"steelblue",
  image:appointment
},
{
  id:8,
  name:"Prescription",
  background:"steelblue",
  image:medicine
},
{
  id:9,
  name:"Blood Bank",
  background:"rebeccapurple",
  image:blood
},
{
  id:11,
  name:"Operation Report",
  background:"#FA6775",
  image:operation
},
{
  id:12,
  name:"Birth Report",
  background:"sienna",
  image:birth
},
{
  id:13,
  name:"Death Report",
  background:"rosybrown",
  image:death
},
{
  id:14,
  name:"Bed Allotment",
  background:"#666",
  image:allotment
},
{
  id:15,
  name:"Notice Board",
  background:"cornflowerblue",
  image:book
}

]

export const nurseBoxes = [
  {
    id:6,
    name:"Patient",
    background:"steelblue",
    image:patient
  },
{
  id:7,
  name:"Appointment",
  background:"steelblue",
  image:appointment
},
{
  id:9,
  name:"Blood Bank",
  background:"rebeccapurple",
  image:blood
},
{
  id:11,
  name:"Operation Report",
  background:"#FA6775",
  image:operation
},
{
  id:12,
  name:"Birth Report",
  background:"sienna",
  image:birth
},
{
  id:13,
  name:"Death Report",
  background:"rosybrown",
  image:death
},
{
  id:14,
  name:"Bed Allotment",
  background:"#666",
  image:allotment
},
{
  id:15,
  name:"Notice Board",
  background:"cornflowerblue",
  image:book
}
]

export const pharmacistBoxes = [
  {
    id:6,
    name:"Medicine Category",
    background:"steelblue",
    image:patient
  },
{
  id:7,
  name:"Manage Medicine",
  background:"#FA6775",
  image:appointment
},
{
  id:9,
  name:"Provide Medication",
  background:"rebeccapurple",
  image:blood
},
]

export const LaboratoristBoxes = [
  {
    id:6,
    name:"Add Diagnosis Report",
    background:"steelblue",
    image:patient
  },
{
  id:7,
  name:"Manage Blood Bank",
  background:"#FA6775",
  image:appointment
},
{
  id:9,
  name:"Manage Blood Donor",
  background:"rebeccapurple",
  image:blood
},
]

export const accountantBoxes = [
  {
    id:6,
    name:"Invoice/Take Payment",
    background:"steelblue",
    image:patient
  },
{
  id:7,
  name:"View Payment",
  background:"#FA6775",
  image:appointment
},
]

export const radiographerBoxes = [
  {
    id:6,
    name:"Add Diagnosis Report",
    background:"steelblue",
    image:patient
  },
{
  id:7,
  name:"View Reports",
  background:"#FA6775",
  image:appointment
},
]

export const paymentStatus = [
  {
    id:6,
    value:"Paid"
  },
{
  id:7,
  value:"Unpaid"
},
{
  id:8,
  value:"Paid"
},
{
id:9,
value:"Unpaid"
},
{
  id:10,
  value:"Paid"
},
{
id:10,
value:"Unpaid"
},
{
  id:11,
  value:"Paid"
},
{
id:12,
value:"Unpaid"
},
{
  id:13,
  value:"Paid"
},
{
id:14,
value:"Unpaid"
},
]
