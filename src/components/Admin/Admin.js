import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import './Admin.css';
export default function Admin() {
  let users = useSelector(state => state.data.data)
  return (
    <div>
      <table>{
        users.map(function (u, index) {
          return (
            <tr >
              <div>
                <tr style={{ fontSize: '20px', fontFamily: 'times-new-roman' }}>
                  <td>FirstName</td>
                  <td >LastName</td>
                  <td>Email</td>
                  <td>Password</td>
                  <td>Type</td>
                </tr>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
                <td>{u.password}</td>
                <td>{u.type}</td>
              </div>

              {/* <td>
                <Link to={'/Signup/'+ u.email}>
                   <button>

                   Edit
                   </button>
                   </Link>
              </td> */}


              {/* <button onClick={function(){
                // let ediited=prompt("Enter new name");
                    // u.firstName=ediited;
                    
                    setUser([...user])
              }}>Edit</button> */}
              {/* <button onClick={function () {
                users.splice(index, 1);
                // setUser([...users])
              }}>Delete</button> */}
            </tr>
          )
        })
      }
      </table>
    </div>
  )
}
