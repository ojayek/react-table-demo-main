import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Table from './TableContainer';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const Url = 'http://localhost:58148/api/Contact/GetContactList';
  useEffect(() => {
    axios(Url)
      // axios("http://api.tvmaze.com/search/shows?q=girls")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  const columns = useMemo(() => [
    {
      Header: 'صورت جلسات',
      columns: [
        {
          Header: 'عنوان',
          accessor: 'Prsnum',
        },
        {
          Header: 'شماره',
          accessor: 'Nam',
        },
        {
          Header: 'شماره جلسه',
          accessor: 'NamKhanevadegi',
        },
        {
          Header: 'شرکت کنندگان',
          accessor: 'Sharh_Onvan"',
          Cell: ({ cell: { value } }) =>
            value ? <a href={value}>{value}</a> : '-',
        },
        {
          Header: 'محل تشکیل',
          accessor: 'Proj_Name',
          Cell: ({ cell: { value } }) => value || '-',
        },
        {
          Header: 'تاریخ',
          accessor: 'Moavenat',
        },
        {
          Header: 'تاریخ',
          accessor: 'NumBuild',
          Cell: ({ cell: { value } }) => value || '-',
        },
        {
          Header: 'Null',
          accessor: 'Email',
          Cell: ({ cell: { value } }) => value || '-',
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <h1>
        <center>کلیه جلصات</center>
      </h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
