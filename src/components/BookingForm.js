import { useState, useEffect } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { fetchAircraft } from "../modules/aircraft";


export default function BookingForm() {

  const [booking, setBooking] = useState({
    start: '',
    end: '',
    aircraft: ''
  })
  const [aircraft, setAircraft] = useState([]);
  const [message, setMessage] = useState('Loading');
  const [rentPrice, setRentPrice] = useState([]);

  const getAircraft = async () => {
    try {
        let data = await fetchAircraft();
        setAircraft(data);
        setMessage('');
    } catch (error) {
        setMessage('Failed to load aircraft');
    }

    }
    useEffect(() => {
        getAircraft();
    }, []);

    if (message.length > 0){
        return(<p>{message}</p>)
    }

    if (aircraft.length === 0){
        return(<p>No aircraft found.</p>)
    }


    const changeAircraft = (e) => {
      setBooking({
        ...booking,
        aircraft: e.target.value,
      });
      const selectedAircraft = aircraft.find((a) => a.registration === e.target.value);
      setRentPrice('Rent price: ' + selectedAircraft.rent_price * 60 + ' €/h');
    }

  const changeTime = (e, field) => {
    setBooking({
      ...booking,
      [field]: e
    });
  }
  
  console.log(booking)

  return (
    <Box sx={{marginTop: 3, maxWidth: 1400}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Paper sx={{padding: 2, maxWidth: 500}}>
          <Typography variant="h4" sx={{marginBottom: 2}}>Book an aircraft</Typography>
          <FormControl full fullWidth sx={{'& .MuiTextField-root': {marginBottom: 4}}}>

            <InputLabel id="aircraft-select-label">Aircraft</InputLabel>
            <Select
              labelId="aircraft-select-label"
              label="Aircraft"
              value={booking.aircraft}
              sx={{marginBottom: 2}}
              onChange={changeAircraft}
              required
              >
                {aircraft.map((aircraft) => {
                  return(
                  <MenuItem key={aircraft.registration} value={aircraft.registration}>
                    {aircraft.registration} ({aircraft.model})
                    </MenuItem>
                  );
                })}
              </Select>
              <Typography sx={{marginBottom: 2}}>{rentPrice}</Typography>
            <DateTimePicker
              label="Start time"
              value={booking.start}
              onChange={(e) => changeTime(e, 'start')}
              renderInput={ (params) => <TextField {...params} required fullWidth />}
            />

            <DateTimePicker 
              label="End time"
              value={booking.end}
              onChange={(e) => changeTime(e, 'end')}
              renderInput={ (params) => <TextField {...params} required fullWidth />}
            />
            <Button variant="contained" >Submit</Button>
          </FormControl>
          
        </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{maxWidth: 300, marginLeft: 3}}>
          <Typography variant="body">Please note that fuel is included in the price and will be billed per minute of airtime, 
            with taxi time also included. < br/>< br/>
            Before the end of your booking, the aircraft log must be signed by the pilot in command (PIC). 
            This is important to ensure the next booking can use the aircraft promptly. < br/>< br/>
            Additionally, we kindly ask that the aircraft be returned in a clean condition and emptied of personal items. < br/>< br/>
            Thank you for your cooperation.
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}