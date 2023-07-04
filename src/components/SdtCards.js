import React from 'react'
import './SdtCards.css'

function SdtCards() {
  return (
    <div className='container'>
  <div className='row card1-container'>
    <div className='col-md-4 card1'>
      <p>
        <img src="/images/icon-1.svg" className="card1-img-top" alt="Image" />
       <strong> SeeTree X Dataloop
        <p className='card-description' style={{marginLeft:'60px'}}>Case Study</p></strong>
        <p>How SeeTree Optimizes Disease Detection with AI Data Management</p>
      </p>
      <p className='card-link'>Learn More <i className="fas fa-arrow-right"></i></p>
    </div>
    <div className='col-md-4 card1'>
      <p>
        <img src="/images/icon-3.svg" className="card1-img-top" alt="Image" />
        <strong> Dataloops - a Book
        <p className='card-description'  style={{marginLeft:'55px'}}>by Eran Shlomo</p></strong>
        <p>Dive into the first chapter of our CEO’s book and get a deeper understanding of the data principles behind AI.</p>
      </p>
      <p className='card-link'>Learn More <i className="fas fa-arrow-right"></i></p>
    </div>
    <div className='col-md-4 card1'>
      <p>
        <img src="/images/icon-2.svg" className="card1-img-top" alt="Image" />
        <strong> Teaching Machines
        <p className='card-description'  style={{marginLeft:'55px'}}>to Learn Like <br/>Humans</p></strong>
        <p>the first part of our “Computer Vision Use Case Breakdown series”</p>
      </p>
      <p className='card-link'>Learn More <i className="fas fa-arrow-right"></i></p>
    </div>
  </div>
</div>

  )
}

export default SdtCards
