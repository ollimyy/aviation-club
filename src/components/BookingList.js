import { useEffect, useState } from "react";
import { fetchBookings, deleteBooking } from "../modules/bookings";
import { Button, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function BookingList() {
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState('Loading');

    const getBookings = async () => {
        try {
            let data = await fetchBookings();
            setBookings(data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to load bookings');
        }
    }
    
    const handleDelete = async (booking) => {
      
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <Card sx={{padding: 3}}>
            <div className="custom-ui">
              <h1>Confirm Cancellation</h1>
              <p>Are you sure you want to cancel this booking?</p>
              <p>Aircraft: {booking.aircraft}</p>
              <p>Start time: {booking.start}</p>
              <p>End time: {booking.end}</p>
              <Button 
                variant="contained"
                sx={{margin: 1}}
                color="success"
                onClick={async () => {
                  try {
                    await deleteBooking(booking.id);
                    const data = await fetchBookings();
                    setBookings(data);
                  } catch (error) {
                    setMessage('Failed to cancel booking.')
                  }
                  onClose();
                }}
              >
                Yes
              </Button>
              <Button 
              variant="contained"
              color="inherit"
              sx={{margin: 1}}
              onClick={onClose}>
                No
              </Button>
            </div>
            </Card>
          );
        }
      });
    };

    const styles = {
        tableHead: {
          backgroundColor: '#757575',
          fontWeight: 'bold',
          color: 'white',
        },
        tableCell: {
          backgroundColor: 'white',
          color: 'black',
        },
      };

    useEffect(() => {
        getBookings();
    }, []);


    if (message.length > 0){
        return(<p>{message}</p>)
    }

    if (bookings.length === 0){
        return(<p>No bookings found</p>)
    }

      return (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.tableHead}>Aircraft</TableCell>
                <TableCell sx={styles.tableHead}>Start</TableCell>
                <TableCell sx={styles.tableHead}>End</TableCell>
                <TableCell sx={styles.tableHead}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell sx={styles.tableCell}>{booking.aircraft}</TableCell>
                  <TableCell sx={styles.tableCell}>{booking.start}</TableCell>
                  <TableCell sx={styles.tableCell}>{booking.end}</TableCell>
                  <TableCell sx={styles.tableCell}>
                    <Button onClick={() => handleDelete(booking)}>Cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}