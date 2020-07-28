import React, { useContext, useEffect } from 'react';
import PatientContext from '../../context/patient/PatientContext';
import BookingContext from '../../context/booking/BookingContext'; 
import BookingForm from '../appointment/BookingForm';
import Bookings from '../appointment/Bookings';

const Patient = () => {
    const bookingContext = useContext( BookingContext);
    const patientContext = useContext(PatientContext)
    const { bookings } = bookingContext
    const { logout } = patientContext;

    const onClick = () => {
        logout();
    }
    return (
        <div className='container'>
        <button className='btn' style={{float:'right'}} onClick={onClick}> Log out</button> 
           { bookings.length !== 0 ? 
           bookings.map(( booking => 
           <Bookings booking={booking} />)) 
           : <BookingForm/> }
        </div>
    )
}

export default Patient;
