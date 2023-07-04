import React from 'react'
import './standard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Standard() {
  return (
    <div className='Container' >
  <div className='row'>
    <div className='col-md-4' style={{marginTop:'20px'}}>
      <p style={{fontSize:'50px',textAlign:'right',marginRight:'100px'}}>STANDARD</p>
      <p style={{textAlign:'left',margintop:'-10px'}}>
        “We love working with Dataloop; their data 
        management platform allows us to 
        simultaneously ensure multiple projects 
        are labeled, tasked and QA'd regardless of
        where our workforce is based.”</p>
        <div class='chip'>
        <p><img src="/images/paul.png"/>
         Paul Jacob<br/>
         Data Quality Program<br/>
         Manager
         </p>
        </div>
  </div>
  <div className='col-md-4' style={{marginTop:'20px'}}>
      {/* <h1 style={{fontSize:'80px'}}>FORESIGHT</h1> */}
      <img src="/images/Foresight.svg" style={{width:'230px',marginTop:'27px'}} />
      <p style={{textAlign:'left',marginTop:'20px'}}>
      “The team at Dataloop provide a powerful 
      platform with a suite of tools. Thanks to 
      Dataloop, we're able to successfully test 
      our algorithms and improve our ADAS and 
      autonomous driving features"</p>
        <div class='chip'>
        <p><img src="/images/david.jpeg"/>
         David Lempert<br/>
         Head of R&D
         </p>
        </div>
  </div>
  <div className='col-md-4' style={{marginTop:'20px'}}>
      <img src='/images/elbit.svg' style={{marginRight:'20px',width:'100px',marginTop:'27px'}}/>
      <p style={{textAlign:'left',marginTop:'20px'}}>
      “Data accuracy is critical to the <br/>
      development of our autonomous systems.
       Dataloop provides our team with a <br/>
       powerful and intuitive platform that allows <br/>
       us to create top quality and accurate 
       datasets”</p>
        <div class='chip' style={{marginTop:'25px'}}>
        <p><img src="/images/Ido.png" />
        Ido Ariav<br/>
        Deep Learning Lead
         </p>
        </div>
  </div>

</div>
</div>

  )
}

export default Standard
