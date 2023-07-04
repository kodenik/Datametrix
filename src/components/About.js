import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Smart from './Smart';
    import Footer from './Footer'


    const About = () => {
    return (
        <>
       <div className='container'>
        <div className='row'>
            <div className='col-md-6'  style={{backgroundImage:"linear-gradient(to top ,#008B8B,#008B8B",paddingTop:"8%"}}>
                <h1 style={{color:'white'}}>About DataMetrix</h1>
                <p style={{fontWeight: "400",color: 'white',
    fontFamily: "var(--font-family), sans-serif"}}><span >Our mission is to develop the tools and methodologies for enabling accurate, efficient and scalable human-machine communication over data.</span></p>
            </div>
            <div className='col-md-6'  style={{backgroundImage:"linear-gradient(to top ,#008B8B,#008B8B",paddingTop:"8%"}}>
              {/* <img src="https://dataloop.ai/wp-content/uploads/2019/09/data-ops-main.png" height="400px"></img> */}

              <img decoding="async" width="300" height="300" src="https://dataloop.ai/wp-content/uploads/2019/09/data-ops-main.png" class="attachment-full size-full wp-image-5305" alt="" loading="lazy" srcset="https://dataloop.ai/wp-content/uploads/2019/09/data-ops-main.png 458w, https://dataloop.ai/wp-content/uploads/2019/09/data-ops-main-300x250.png 300w" sizes="(max-width: 458px) 100vw, 458px" style={{marginLeft:'150px'}}></img>
                                </div>
                               <center> <h2 style={{marginTop:"100px"}}>The Data Operating System for AI</h2></center>
                               
                               <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <br/>

            <br/>            Dataloop is a technology company that builds data infrastructure and a data operating system for AI companies. Businesses of every size – from startups to public companies – use our cloud platform to accelerate the development and deployment of AI into production.
            </div>
            <div className='col-md-6' style={{paddingTop:"50px"}}>The Dataloop platform offers a new data development stack – combining data application extendability sitting atop our platform, and that consists of a full data lifecycle management system for unstructured data. Enabling AI teams to visualize, collaborate and explore datasets, build data pipeline automation processing and weave human and machine intelligence. Our cloud based infrastructure provides scalability, security and reliability.
            </div>
            {/* <br/>

            <br/>
            <br/>   <br/> */}
            <div className='container' style={{marginTop:"100px"}}>
        <div className='row'>
            <div className='col-md-12'  style={{backgroundImage:"linear-gradient(to top ,lightgrey,white",paddingTop:"8%"}}>
                <center><h3>Leadership Team</h3>
                <p >The Dataloop leadership team is comprised of passionate visionaries, technologists and seasoned experts 
                          committed to building an exceptional company and to powering global AI market leaders.</p>
                          </center>
                        
                
                  


                        <div className='container' >
                        <div className='row' style={{ paddingTop:"50px"}}>
                        <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><img width="150" height="150" style={{borderRadius:"50%"}}  src="./images/yoge.jpeg" ></img><br/><br/><span style={{paddingLeft:"50px"}}>M.Yogee</span></div>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><img  width="150" height="150" style={{borderRadius:"50%"}}  src="./images/Sneha Photo.JPG"></img><br/><br/><span style={{paddingLeft:"50px"}}>K.Sneha</span></div>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><img width="150" height="150"style={{borderRadius:"50%"}}  src="./images/shivani.jpeg"></img><br/><br/><span style={{paddingLeft:"50px"}}>L.Shivani</span></div>
                            
                        </div>
                        <div className='row' style={{ paddingTop:"50px"}}>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><img  width="150" height="150" style={{borderRadius:"50%"}} src="./images/chandra.jpg"></img><br/><br/><span style={{paddingLeft:"10px"}}>S.Chandra Sekhar</span></div>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><img  width="150" height="150" style={{borderRadius:"50%"}}  src="./dinesh.jpeg"></img><br/><br/><span style={{paddingLeft:"50px"}} >O.Dinesh</span></div>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><img width="150" height="150"  style={{borderRadius:"50%"}}  src="./images/harish.png"></img><br/><br/><span style={{paddingLeft:"50px"}}>C.Harish</span></div>
                        </div>
                    </div>
                    
<div className='container' >
                        <div className='row' style={{ paddingTop:"50px",paddingBottom:"10px"}}>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><br/></div>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",paddipngTop:"40px"}}><img width="150" height="150" style={{borderRadius:"50%"}}  src="./images/k.jpeg"></img><br/><br/><span style={{paddingLeft:"50px"}}>B.Nikhil</span></div>
                            <div className='col-md-4' style={{backgroundColor:"white",paddingLeft:"120px",addipngTop:"40px"}}><br/></div>
                        </div>
                        </div>

         

                        
    
                           </div></div>
                           
            </div>            
                </div>
                </div>            
        </div>
       </div>
       <Smart></Smart>
       {/* <Footer></Footer> */}


        
        </>
    )
    }

    export default About