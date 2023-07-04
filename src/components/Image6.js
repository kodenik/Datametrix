import React, { useEffect, useState } from 'react'
import Header from './Header'
import './image6.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Image6() {
    const [activeTab, setActiveTab] = useState('');
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName === activeTab ? '' : tabName);
    };
    // const [activeHeader, setActiveHeader] = useState(null);

//   const handleHeaderClick = (header) => {
//     setActiveHeader((prevHeader) => (prevHeader === header ? null : header));
//   };

//   const [activeHeader, setActiveHeader] = useState('dataManagement');

//   const handleHeaderClick = (header) => {
//     setActiveHeader(header);
//   };



const [activeHeader, setActiveHeader] = useState(''); 
  

  useEffect(() => {
    // Save activeHeader value to localStorage
    localStorage.setItem('activeHeader', activeHeader);
  }, [activeHeader]);
  
  useEffect(() => {
    // Retrieve activeHeader value from localStorage if available
    const storedActiveHeader = localStorage.getItem('activeHeader');
    if (storedActiveHeader) {
      setActiveHeader(storedActiveHeader);
    }
  }, []);


  const handleHeaderClick = (header) => {
    setActiveHeader(activeHeader === header ? null : header);
  };
  useEffect(() => {
    const slideDownCard = () => {
      setActiveHeader('dataManagement');
    };

    const timer = setTimeout(slideDownCard, 900);

    return () => clearTimeout(timer);
  }, [])
  return (
    <><>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div style={{ marginLeft: '150px' }}>
                          <p style={{ fontSize: '50px' }}><strong>The Data <br />Engine For AI</strong></p>

                          <p>Covering the entire data management cycle, from data labeling, automating data<br />
                              ops, deploying production <br />
                              pipelines, and weaving the human-in-the-loop.</p>
                          <button type="button" className="btn" id="btn">
                              Book A Demo
                          </button>&nbsp;
                          <button type="button" className="btn" id="btn1">
                              Get Started For Free
                          </button>
                      </div>
                  </div>
                  <div className="col-md-5">
                 
                  <div className="other-div card " style={{width:'350px',marginTop:'50px'}} id='d'>
          <div
            className={`header-container ${activeHeader === 'dataManagement' ? 'active' : ''}`}
            onClick={() => handleHeaderClick('dataManagement')}
          >
            <img src='/images/icon-1.svg' alt="Logo" className="logo" id='i'/>
            <h5>DATA MANAGEMENT</h5>
          </div>
          {activeHeader === 'dataManagement' && (
            <p style={{padding:'22px'}}>
              Manage, collaborate, distribute and utilize your<br></br> data operations,
              all integrated seamlessly and<br></br> managed via single point of access
           
            <div className="learn-more-container">
            <p className="p2">Learn More <FontAwesomeIcon icon={faArrowRight}/></p>
          </div> </p>
          )}
          
        </div>
                
          <div className="other-div2 card" style={{width:'350px',marginTop:'20px'}} id='d'>
          <div
            className={`header-container ${activeHeader === 'automationPipelines' ? 'active' : ''}`}
            onClick={() => handleHeaderClick('automationPipelines')}
          >
            <img src='/images/icon-3.svg' alt="Logo" className="logo" />
            <h5>AUTOMATION PIPELINES</h5>
          </div>
          {activeHeader === 'automationPipelines' && (
            <p style={{padding:'22px'}}>
              Build custom automation pipelines<br></br> within our serverless environment, to<br></br> reach production faster and<br></br> scale your AI indefinitely
              <div className="learn-more-container">
            <p className="p2">Learn More <i className="fas fa-arrow-right"></i></p>
          </div>
            </p>
          )}
          
        </div>

        <div className="other-div1 card" style={{width:'350px',marginTop:'20px'}} id='d'>
          <div
            className={`header-container ${activeHeader === 'annotationPlatform' ? 'active' : ''}`}
            onClick={() => handleHeaderClick('annotationPlatform')}
          >
            <img src='/images/icon-2.svg' alt="Logo" className="logo" />
            <h5>ANNOTATION PLATFORM</h5>
          </div>
          {activeHeader === 'annotationPlatform' && (
            <p style={{padding:'22px'}}>
              An end-to-end, cloud-based annotation<br></br> platform, hosting multitude applications<br></br> and automation tools to produce <br></br>high-quality datasets more efficiently
              
              <div className="learn-more-container" >
            <p className="p2">Learn More <FontAwesomeIcon icon={faArrowRight}/></p>
          </div>
            </p>
          )}
        </div>
      </div>
      <div className="col-md-1">
                      <img src="/images/square.svg" alt="Image" style={{ width: '120px' }} />
                  </div>

      </div>
          </div>
      </><br></br><br></br><br></br><div className="container">
              <div className="row">
                  <div className="col-md-1">
                      <img src="/images/green-thingy.png" alt="Image" style={{ width: '120px' }} />
                  </div>
                  <div className="col-md-10">
                      <center><h2>Accelerating AI across all industries</h2>
                          <p>Specializing in high volumes, high variance and complex data - we <br />help a wide range of AI teams automate their data management</p>
                      </center></div>
                  <div className="col-md-1">
                      <img src="/images/circle-yellow.png" alt="Image" style={{ width: '120px' }} />
                  </div>
              </div>
          </div><div className="container">
              <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <img src="/images/retail1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
                              <div className="card">
                                  <div className="card-body">
                                      <p className="card-title">RETAIL</p>

                                  </div>

                              </div>
                          </div>
                          <div className="col-md-4 mb-3">
                              <img src="/images/drones-aerial.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
                              <div className="card">
                                  <div className="card-body">
                                      <p className="card-title">DRONES & AERIAL IMAGERY</p>

                                  </div>

                              </div>
                          </div>
                          <div className="col-md-4 mb-3">
                              <img src="/images/Robotics1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
                              <div className="card">
                                  <div className="card-body">
                                      <p className="card-title">ROBOTICS</p>

                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-1"></div>
              </div>
          </div><div className="container">
              <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <img src="/images/autonomous-vehicles1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
                              <div className="card">
                                  <div className="card-body">
                                      <h5 className="card-title">AUTONOMOUS VEHICLES</h5>

                                  </div>

                              </div>
                          </div>
                          <div className="col-md-4 mb-3">
                              <img src="/images/precision-agriculture1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
                              <div className="card">
                                  <div className="card-body">
                                      <h5 className="card-title">PRECISION AGRICULTURE</h5>

                                  </div>

                              </div>
                          </div>
                          <div className="col-md-4 mb-3">
                              <img src="/images/media-content1.jpg" className="card-img-top" alt="Image" style={{ width: '100%' }} />
                              <div className="card">
                                  <div className="card-body">
                                      <h5 className="card-title">MEDIA & CONTENT</h5>

                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-1"></div>
              </div>
          </div></>

      
      

  )
}

export default Image6
