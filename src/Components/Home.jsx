import React, { useState } from 'react';
import style from '../CSS/Calender.module.css';
import NavbarShared from '../SharedComp/NavbarShared'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, InputGroup, Button } from 'react-bootstrap';
import { Dropdown, Row , Col } from 'react-bootstrap';


const CalendarTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [selectedMonthName, setSelectedMonthName] = useState('Month');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => {
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
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
  };

  const prevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  const handleMonthChange = (monthIndex) => {
    setCurrentMonth(monthIndex);
    setSelectedMonthName(monthNames[monthIndex]);
  };



    // Function to handle navigation to the previous year
    const handlePreviousYear = () => {
      setCurrentYear(currentYear - 1); // Decrement the current year by 1
    };
  
    // Function to handle navigation to the next year
    const handleNextYear = () => {
      setCurrentYear(currentYear + 1); // Increment the current year by 1
    };
  

    

  return (
    <>
      <NavbarShared />
      <div className='mt-3'>

          <div style={{
             marginTop:'65vh',
            display: 'flex',
            justifyContent: 'center',
            width:'20vh',  /* Align horizontally */
            alignItems: 'flex-end', /* Align vertically at the bottom */
            marginLeft:'30vh',
           
          }}>
            <h1 
            style={{
              fontFamily:'fantasy'
            }}
            >
              
              {monthNames[currentMonth]}
              
              <h1 style={{
                justifyContent: 'center',
                fontFamily:'fantasy',
                fontSize:'10vh' 
              }}>
              {currentYear}
              </h1>
               </h1>
          </div>
          <div style={{ marginLeft: '80vh',marginTop:'-75vh' }}>
        <Navbar collapseOnSelect expand="lg" className='year'>
          <Container>
          <Navbar.Brand style={{ fontWeight: '600', marginLeft:'28vh' }}>Year</Navbar.Brand>
          
              <Nav className="me-auto">
                <InputGroup className="">
                  <Button variant="outline-secondary"
                  style={{
                    border:'none'
                  }}
                  onClick={handlePreviousYear}>
                    &lt;
                  </Button>
                  <Nav.Link style={{ fontWeight: '600' }} >
                  {currentYear} {/* Display the current year */}
                  </Nav.Link>
                  <Button variant="outline-secondary"
                   style={{
                    border:'none'
                  }}
                  onClick={handleNextYear}>
                    &gt;
                  </Button>
                </InputGroup>
              </Nav>
          


            <Navbar.Brand style={{ fontWeight: '600' }}>Month</Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                 <Dropdown>
                   <Dropdown.Toggle 
                   style={{
                    border:'none',
                    backgroundColor:'rgb(55, 55, 55)'
                   }}
                   id="dropdown-basic">
                    {selectedMonthName}
                   </Dropdown.Toggle>
           
                   <Dropdown.Menu>
                     {monthNames.map((month, index) => (
                       <Dropdown.Item key={index} onClick={() => handleMonthChange(index)}>
                         {month}
                       </Dropdown.Item>
                     ))}
                   </Dropdown.Menu>
                 </Dropdown>
               </Nav>
             </Navbar.Collapse>
          </Container>
        </Navbar>
    
      </div>

      <div style={{ marginTop: '50px' }}></div>

      <div className={style.calendarContainer}>
        <div className={style.calendar}>
          <h2 className={style.title}>
            {/* <button onClick={prevMonth} className={style.button}>
              &lt;
            </button>
            {monthNames[currentMonth]} {currentYear}
            <button onClick={nextMonth} className={style.button}>
              &gt;
            </button> */}
          </h2>
          
          <div className={style.tableWrapper}>
            <table className={style.calendarTable}>
              <thead>
              <tr style={{ padding: '2vh', textAlign: 'center' }}>
                 {daysOfWeek.map((day, index) => (
                   <th key={day} style={{ color: index === 0 || index === daysOfWeek.length - 1 ? 'red' : 'black' }}>
                     {day}<hr></hr>
                   </th>
                 ))}
              </tr>

              </thead>
              
              <tbody>
                
                {(() => {
                  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
                  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
                  const blanks = Array(firstDayOfMonth).fill(null);
                  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
                  let dayIndex = 0;

                  return [...Array(6)].map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {daysOfWeek.map((_, columnIndex) => {
                      if (rowIndex === 0 && columnIndex < firstDayOfMonth) {
                        return (
                          <td key={`empty-${columnIndex}`} style={{ borderBottom: '1px solid black' }}></td>
                        );
                      } else if (dayIndex < daysInMonth) {
                        const day = days[dayIndex];
                        dayIndex++;
                  
                        return (
                          <td
                            key={day}
                            className={isSameDay(selectedDate, new Date(currentYear, currentMonth, day)) ? style.currentDate : ''}
                            onClick={() => handleDateClick(day)}
                            style={{
                              padding: '2vh',
                              textAlign: 'center',
                              borderBottom: '1px solid black',
                              color: columnIndex === 0 || columnIndex === daysOfWeek.length - 1 ? 'red' : 'black'
                            }}
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

      </div>
     
    </>
  );
};

export default CalendarTable;
