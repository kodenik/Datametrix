import React from 'react'

function Marque() {
  return (
    <div className='container' style={{marginTop:'40px'}}>
  <div className='row' style={{marginTop:'50px'}} id='pic'>
<center style={{color:'grey'}}><h5>TRUSTED BY INDUSTRY LEADERS</h5></center>
<marquee behaviour='slide' direction='left' >
  <img src="/images/raven.png" alt="Image 1" style={{marginRight:'20px' ,height:'30px'}}/>
  <img src="/images/intel.png" alt="Image 2" style={{marginRight:'20px',height:'30px'}}/>
  <img src="/images/linkedin.png" alt="Image 3" style={{marginRight:'20px',height:'30px'}}/>
  <img src="/images/sartorius.png" alt="Image 4" style={{marginRight:'20px',height:'30px'}}/>
  <img src="/images/imerit.png" alt="Image 5" style={{marginRight:'20px',height:'30px'}}/>
</marquee>
</div>
</div>

  )
}

export default Marque
