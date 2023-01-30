import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../axiosClient'
import Table from '../UiNeeded/Table/Table'
import { useSelector, useDispatch } from 'react-redux'
import { Add_Users } from '../../Stores/actions'
import Button from '../UiNeeded/Button/Button'

import './Users.css'

const Users = () => {
  const [page, setpage] = useState(1)
  const store = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    axiosClient.get(`users?page=${page}`).then((res) => {
      dispatch({
        type: Add_Users,
        payload: res.data
      })
      // console.log(res.data.page)
    })
  }, [page])

  const hanldeDynPage = () => {
    console.log("Page",page);
    if(page==1)
    {
      setpage(page+1)
    }
    else{
      setpage(page-1);
    }

  }
  const tableData = [
    [
      "ID",
      (item) => {
        return item.id;
      },
    ],
    [
      "Email",
      (item) => {
        return item.email;
      },
    ],
    [
      "First Name",
      (item) => {
        return item.first_name;
      },
    ],
    [
      "Last Name",
      (item) => {
        return item.last_name;
      },
    ],
  ];

  return (
    <div className='body'>
      <div className='Top'>
        <Table tableData={tableData} apiData={store?.data} />
      </div>
      <div className='Bottom'>
        <Button disabled={page==1} onClick={hanldeDynPage} label="<" />
        <Button disabled={page==2} onClick={hanldeDynPage} label=">" />
      </div>



    </div>
  )
}

export default Users