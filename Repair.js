import React,{useState} from 'react'
import './Repair.css'
const Repair = () => {
  
    
   const [tenantname, setTenantName] = useState('');
  const [roomnum, setRoomNum] = useState('');
  const [typeofcomplaint, setTypeOfComplaint] = useState('');
  const [complaintdetails, setComplaintDetails] = useState('');

  return (
    <div>
      <h2>Complaint Form</h2>
      <form >
        <label>
          Tenant Name:
          <input
            type="text"
            value={tenantname}
            onChange={(e) => setTenantName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Room Number:
          <input
            type="text"
            value={roomnum}
            onChange={(e) => setRoomNum(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Type of Complaint:
          <input
            type="text"
            value={typeofcomplaint}
            onChange={(e) => setTypeOfComplaint(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Complaint Details:
          <textarea
            value={complaintdetails}
            onChange={(e) => setComplaintDetails(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
   
  )
}

export default Repair