import { useEffect, useState } from "react";
import { fetchBookings } from "../modules/bookings";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


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

    useEffect(() => {
        getBookings();
    }, []);

    if (message.length > 0){
        return(<p>{message}</p>)
    }

    if (bookings.length === 0){
        return(<p>No bookings found</p>)
    }

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

      return (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={styles.tableHead}>Aircraft</TableCell>
                <TableCell sx={styles.tableHead}>Start</TableCell>
                <TableCell sx={styles.tableHead}>End</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell sx={styles.tableCell}>{booking.aircraft}</TableCell>
                  <TableCell sx={styles.tableCell}>{booking.start}</TableCell>
                  <TableCell sx={styles.tableCell}>{booking.end}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}