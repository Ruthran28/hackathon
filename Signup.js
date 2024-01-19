import React,{useState} from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import {
    FormInput,
    FormGroup,
    Button,
    Form,
  } from 'semantic-ui-react'

const Signup = () => {
  
    
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [aadhaar, setaadhaar] = useState('')
    const [email, setemail] = useState('')
    const [room, setroom] = useState('')
    const [address, setaddress] = useState('')
    const [blockname, setblockname] = useState('')
    const [password, setpassword] = useState('')
  
     const nav=useNavigate()
 const postdata=async()=>{

    await axios.post('http://localhost:2718/api/register',{ name,phone,aadhaar,room,password,address,email,blockname}).then(res=>{

   if(res.data ==="exist"){

    alert(res.data==="email is already exist")
   }
   else if(res.data==="room already booked"){

    alert("room already booked")
   }else if(res.data==="success"){
    nav('/home')

   }


    })

 }
 

  
  return (
    <Form>
    <FormGroup >

      <FormInput label='First name' placeholder='enter the name '  value={name} onChange={e=>setname(e.target.name)} />

      <FormInput label='phone' placeholder='enter the phone number'  value={phone} onChange={e=>setphone(e.target.value)}/>

      <FormInput label='Address' placeholder='Address' value={address} onChange={e=>setaddress(e.target.value)} />

      <FormInput label='room' placeholder='Address' value={room} onChange={e=>setroom(e.target.value)} onKeyup={this.Form.handleChange}/>

      <FormInput label='email' placeholder='email' value={email} onChange={e=>setemail(e.target.value)} />

      <FormInput label='password' placeholder='password' value={password} onChange={e=>setpassword(e.target.value)} />

      <FormInput label='aadhaar' placeholder='aadhaar' value={aadhaar} onChange={e=>setaadhaar(e.target.value)} />

      <FormInput label='blockname' placeholder='blockname' value={blockname} onChange={e=>setblockname(e.target.value)} />
    </FormGroup>
    <Button type='submit' onClick={postdata}>Submit</Button>
  </Form>
  )
  
}


export default Signup