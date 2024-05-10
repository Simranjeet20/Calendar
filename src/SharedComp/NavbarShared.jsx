import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/image/nav.jpg'
import img1 from '../assets/image/navtext.png'
import style from '../CSS/Index.module.css'

function Navshared() {
  return (
    <div className={style.nav} >
    
    <Navbar collapseOnSelect expand="lg" className='mx-4'>
        <Navbar.Brand href="/" style={{fontWeight:'600'}}>
          <img src={img}  height={'40px'}/>
          {' '}
            
           <img src={img1} height={'30px'}/>
           </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">Aboutus</Nav.Link>
            
          </Nav>
          {/* <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
           
          </Nav> */}
        </Navbar.Collapse>
    </Navbar>
      
    </div>
  );
}

export default Navshared;