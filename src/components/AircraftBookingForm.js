import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

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
        <div style={{margin: '20px'}}>
            <h2>Book an aircraft</h2>
            <FormControl fullWidth style={{marginBottom: '10px'}}>
                <InputLabel id="aircraft-label">Aircraft</InputLabel>
                <Select
                labelId="aircraft-label"
                name="aircraft"
                value={booking.aircraft}
                label="Aircraft"
                onChange={change}
                >
                <MenuItem value="OH-CAB (C152)">OH-CAB (C152)</MenuItem>
                <MenuItem value="OH-CYZ (C172)">OH-CYZ (C172)</MenuItem>
                </Select>
            </FormControl>
            <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={booking.firstName}
                onChange={change}
                style={{marginBottom: '10px'}}
            />
            <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={booking.lastName}
                onChange={change}
                style={{marginBottom: '10px'}}
            />
            <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={booking.phone}
                onChange={change}
                style={{marginBottom: '10px'}}
            />
            <TextField
                fullWidth
                label="Start Time"
                type="datetime-local"
                name="startTime"
                value={booking.startTime}
                onChange={change}
                style={{marginBottom: '10px'}}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                fullWidth
                label="End Time"
                type="datetime-local"
                name="endTime"
                value={booking.endTime}
                onChange={change}
                style={{marginBottom: '10px'}}
                InputLabelProps={{ shrink: true }}
            />
            <Button variant="contained" onClick={addBooking} style={{marginTop: '10px'}}>
                Submit
            </Button>
            <p style={{marginTop: '10px'}}>{message}</p>
            </div>
    )
}

export default AircraftBookingForm;