import React from 'react'

const Table = ({data}) => {
  return (
   <>
   
   <center>
        <div style={{width:"90vw", overflowX:"scroll" ,height:"70vh"}}>
        <table border={1}>
          <thead style={{position:""}}>
          <tr>
            <th>Agent</th>
            <th>User Type</th>
            <th> Policy Mode</th>
            <th> Producer </th>
            <th> Policy Number </th>
            <th> Premium Amount Written </th>
            <th> Premium Amount </th>
            <th> Policy Type</th>
            <th> Company Name</th>
            <th> Category Name</th>
            <th> Policy Start Date</th>
            <th> Policy End Date</th>
            <th> CSR</th>
            <th> Account Name</th>
            <th> Email </th>
            <th> Gender</th>
            <th> FirstName</th>
            <th> City</th>
            <th> Account Type</th>
            <th> Phone</th>
            <th> Address</th>
            <th> State</th>
            <th> Zip</th>
            <th> DOB</th>
            <th> Primary</th>
            <th> Application ID</th>
            <th> Agency Id</th>
            <th> Has Active</th>
            <th> Client Policy</th>
          </tr>
          </thead>
          <tbody>
{data &&
            data.message.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.agent}</td>
                  <td>{e.userType}</td>
                  <td>{e.policy_mode}</td>
                  <td>{e.producer}</td>
                  <td>{e.policy_number}</td>
                  <td>{e.premimum_amount_written}</td>
                  <td>{e.premium_amount}</td>
                  <td>{e.policy_type}</td>
                  <td>{e.company_name}</td>
                  <td>{e.company_name}</td>
                  <td>{e.policy_start_date}</td>
                  <td>{e.policy_end_date}</td>
                  <td>{e.csr}</td>
                  <td>{e.account_name}</td>
                  <td>{e.email}</td>
                  <td>{e.gender}</td>
                  <td>{e.firstname}</td>
                  <td>{e.city}</td>
                  <td>{e.account_type}</td>
                  <td>{e.phone}</td>
                  <td>{e.address}</td>
                  <td>{e.state}</td>
                  <td>{e.zip}</td>
                  <td>{e.dob}</td>
                  <td>{e.primary}</td>
                  <td>{e.Application_ID}</td>
                  <td>{e.agency_id}</td>
                  <td>{e.hasActive}</td>
                  <td>{e.ClientPolicy}</td>
                   
                </tr>
              );
            })}
 </tbody>
        </table>
        </div>
      </center>
   
   </>
  )
}

export default Table