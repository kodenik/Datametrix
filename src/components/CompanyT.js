import React from 'react'
import './CompanyT.css'
import { Link } from 'react-router-dom';
const CompanyT = () => {
  return (
    <div className='companyt'>
     <div className='companyt__in'>
        {/* <p>About us</p> */}
        <Link to="/about" className='aboutus' style={{marginBottom:'5px'}}>Aboutus</Link>
        </div> 
     <div className='companyt__in'>
        <p>News</p>
        </div> 
     <div className='companyt__in'>
        <p>Careers</p>
        </div> 
     <div className='companyt__in'>
        <p>Become a Partner</p>
        </div> 
     <div className='companyt__in'>
        <p> Contact us</p>
        </div> 
     <div className='companyt__in'>
        <p>Request a demo</p>
        </div> 
    </div>
  )
}

export default CompanyT
