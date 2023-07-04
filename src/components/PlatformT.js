import React from 'react'
import './PlatformT.css'

const PlatformT = () => {
  return (
    <div className='platformt'>
     <div className='platformt__in'>
      <h3 className='head1'>DATA MANAGEMENT</h3>
      <p className='para1'>Manage & Control data Workflows</p>
     </div>
     
     <div className='platformt__in'>
      <h3 className='head1'>AUTOMATION PIPELINES</h3>
      <p className='para1'>Run models in production</p>
     </div>
     
     <div className='platformt__in'>
      <h3 className='head1'>ANNOTATION PLATFORM</h3>
      <p className='para1'>Generate training datasets</p>
     </div>
     <hr/>
     <div className='platformt__inn'>
      <img src='https://dataloop.ai/wp-content/uploads/2023/05/security-menu.svg' alt=''/>
      <h2 className='head1'>SECURITY</h2>
     </div>
     <div className='platformt__in'></div>
     
    </div>
  )
}

export default PlatformT
