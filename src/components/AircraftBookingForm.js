import React, { useState } from 'react';

function AircraftBookingForm() {
    const [booking, setValues] = useState({ 
        aircraft: '',
        firstName: '',
        lastName: '',
        phone: '',
        startTime: '',
        endTime: '',
    });

    const [message, setMessage] = useState('');

    //temporary solution, doesn't actually add anything, database to be added
    const addBooking = (e) => {

        e.preventDefault();

        //if any field is empty show message
        if (!(booking.firstName && booking.lastName && booking.phone && booking.startTime && booking.endTime)) {
            setMessage('Please fill all the fields.');
        
        //reset all user input fields when clicking submit
        } else {
            console.log(booking);
            setValues( { firstName: '', lastName: '', phone: '', startTime: '', endTime: '' } );
            setMessage('');
        }
    }


    const change = (e) => {
        setValues({
        ...booking, [e.target.name]: e.target.value
        });
    };

    return (
        <div>
        <h2>Book an aircraft</h2>
        <form>
            <label htmlFor="aircraft">aircraft:</label><br />
            <select name="aircraft" value={ booking.aircraft } onChange={ (e) => change(e) }>
                <option value="OH-CAB (C152)">OH-CAB (C152)</option>
                <option value="OH-CYZ (C172)">OH-CYZ (C172)</option>
            </select><br />

            <label htmlFor="firstName">first name:</label><br />
            <input type="text" name="firstName" value={ booking.firstName } onChange={ (e) => change(e) }/><br />
        
            <label htmlFor="lastName">last name:</label><br />
            <input type="text" name="lastName" value={ booking.lastName } onChange={ (e) => change(e) }/><br />
        
            <label htmlFor="phone">phone number:</label><br />
            <input type="text" name="phone" value={ booking.phone } onChange={ (e) => change(e) }/><br />
        
            <label htmlFor="startTime">start time:</label><br />
            <input type="datetime-local" name="startTime" value={ booking.startTime } onChange={ (e) => change(e) }/><br />

            <label htmlFor="endTime">end time:</label><br />
            <input type="datetime-local" name="endTime" value={ booking.endTime } onChange={ (e) => change(e) }/><br />

            
            <input type="submit" value="Submit" onClick={ (e) => addBooking(e) }/>
            </form>
        <p>{ message }</p>
        </div>
    )
}

export default AircraftBookingForm;