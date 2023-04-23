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

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Aircraft</TableCell>
                        <TableCell>Start</TableCell>
                        <TableCell>End</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell>{booking.aircraft}</TableCell>
                            <TableCell>{booking.start}</TableCell>
                            <TableCell>{booking.end}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}