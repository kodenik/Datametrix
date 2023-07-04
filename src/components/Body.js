import React from 'react'
import Header1 from './Header1'
// import './body.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image6 from './Image6';
import BlueContent from './BlueContent';
import PowerSlide from './PowerSlide';
import SdtCards from './SdtCards';
import Smart from './Smart';
import Form from './Form'
import Marque from './Marque';
import Standard from './Standard';
import Footer from './Footer';

function Body() {
  return (
    <>
      <Header1></Header1>
       <Image6></Image6>
       <BlueContent></BlueContent>
       <PowerSlide></PowerSlide>
       <Marque></Marque>
       <Standard></Standard>
       <Form></Form>
       <Smart></Smart>
       <SdtCards></SdtCards>
       <Footer></Footer>
      </>

  )
}

export default Body
