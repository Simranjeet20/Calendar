import React, { useState } from 'react';
import style from '../CSS/Calender.module.css';
import NavbarShared from '../SharedComp/NavbarShared'
import Calender from '../Components/Calender'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CalendarTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  return (
    <>
     <NavbarShared />
    <div className='mt-5'></div>
    <div style={{marginLeft:'80vh'}}>
    <Navbar collapseOnSelect expand="lg"  className='year'>
      <Container>
      <Navbar.Brand style={{fontWeight:'600'}}>
         Year
         
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/home">2024</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" className='month' >
      <Container>

        <Navbar.Brand style={{fontWeight:'600'}}>
         Month</Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/home">Jan</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/features">Feb</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/aboutus">March</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/home">April</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/features">May</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/aboutus">June</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/home">July</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/features">August</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/aboutus">Sept</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/home">Oct</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/features">Nov</Nav.Link>
            <Nav.Link style={{fontWeight:'600'}}  className='mx-2' href="/aboutus">Dec</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
    <div style={{marginTop:'50px'}}>

    </div>

    <div className={style.calendarContainer}>
    <div className={style.calendar}>
      <h2 className={style.title}>
        <button onClick={prevMonth} className={style.button}>
          &lt;
        </button>
        {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        <button onClick={nextMonth} className={style.button}>
          &gt;
        </button>
      </h2>
      <hr></hr>
      <div className={style.tableWrapper}>
        <table className={style.calendarTable}>
          <thead>
            <tr>
              {daysOfWeek.map(day => <th key={day}>{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {(() => {
              const daysInMonth = getDaysInMonth(selectedDate);
              const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
              const blanks = Array(firstDayOfMonth).fill(null);
              const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
              let dayIndex = 0;

              return [...Array(6)].map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {daysOfWeek.map((_, columnIndex) => {
                    if (rowIndex === 0 && columnIndex < firstDayOfMonth) {
                      return <td key={`empty-${columnIndex}`}  style={{  borderBottom: '1px solid black' }}></td>;
                    } else if (dayIndex < daysInMonth) {
                      const day = days[dayIndex];
                      dayIndex++;
                      
                      return (
                        <td
                          key={day}
                          className={isSameDay(selectedDate, new Date()) && selectedDate.getDate() === day ? style.currentDate : ''}
                          onClick={() => handleDateClick(day)}
                          style={{ padding: '2vh',textAlign:'center', borderBottom: '1px solid black' }}
                        >
                          {day}
                        </td>
                      );
                    } else {
                      return <td key={`empty-${columnIndex}`}></td>;
                    }
                  })}
                </tr>
              ));
            })()}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>
  );
};

export default CalendarTable;
