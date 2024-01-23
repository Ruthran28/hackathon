import React from 'react'

import myvideo from './Apartment.mp4'
import './Home.css'
const Home = () => {
  return (
    <div>
       <div className='overlay'></div>
        <video src={myvideo} autoPlay loop muted/>
        <div className='content'>
            <h1> Welcome <br/> AuroTech  Apartment</h1>
            <p> Apartment buildings also offer security and utility services. The building authority maintains the security and utility facilities, which can be a benefit for tenants. However, there are also some restrictions that come with living in an apartment. For example, tenants may not be allowed to renovate their apartments, paint them, extent living areas, or make more rooms. Additionally, most apartments have depreciation and are not always a good investment.
            </p>
            
            <br/>
            <button type='submit' className='btn'>Read more</button>
        </div>
    </div>
  )
}

export default Home