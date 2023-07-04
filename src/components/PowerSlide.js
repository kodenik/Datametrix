import React from 'react'
import { Link } from 'react-router-dom'
 import './powerslide.css'
import SlideshowPower from './SlideshowPower'
export default function PowerSlide() {
  return (
    <div>
      <div className='container'>
        <div className='row' style={{marginRight:'30px'}}>
            <div className='col-md-4' style={{color:'#008b8b'}}>
            <p style={{fontSize:'30px'}}><strong>POWERING AI<br/>TEAMS ACROSS<br/> THE GLOBE</strong></p>
            <p>Helping companies create AI-driven<br/>
               products, from development to large-scale<br/> 
               production<br/><br/>
            <Link>See it in action </Link></p>
            </div>

            <div className='col-md-4' >
            <p style={{fontSize:'30px',color:'red'}}><strong>70,000+</strong></p>
            <p style={{color:'blue',marginTop:'10px'}}>Pipelines cycles per month</p>
            <br/>
            <p style={{fontSize:'30px',color:'#00de93',marginTop:'20px'}}><strong>20,000+</strong></p>
            <p style={{color:'blue',marginTop:'6px'}}>Monthly SDK installs</p>
            <br/>
            <p style={{fontSize:'30px',color:'#ffd33a',marginTop:'20px'}}><strong>4,000+</strong></p>
            <p style={{color:'blue',marginTop:'6px'}}>Managed projects</p>
            </div>
            <div className='col-md-4' >
                
                <SlideshowPower></SlideshowPower>
                </div>


            </div>
        </div>
      </div>
   
  )
}