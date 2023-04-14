import React from 'react'
import { useSelector } from 'react-redux';
export default function Dashboard() {
  let users = useSelector(state => state.data.cu)
  let user=localStorage.getItem("current user");
  console.log(users);
  return (
    <div>
      {/* console.log({users});
       */}
       
       {users.firstName}
    </div>
  )
}
