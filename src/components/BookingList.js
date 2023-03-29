import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function BookingList() {
    // temporary solution, database to be added
    const bookings = [
        {
            bookingId: 1021,
            aircraft: 'OH-CAB',
            firstName: 'Pete',
            lastName: 'Mitchell',
            phone: '0403568306',
            startTime: '2023-02-27T10:20',
            endTime: '2023-02-27T13:00',
        },
        {
            bookingId: 1034,
            aircraft: 'OH-CYZ',
            firstName: 'Tom',
            lastName: 'Kazansky',
            phone: '0401060386',
            startTime: '2023-02-28T15:00',
            endTime: '2023-02-28T19:15',
        }
    ]

    return (
        <div>
          <h2>Bookings</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Aircraft</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.bookingId}>
                  <TableCell>{booking.aircraft}</TableCell>
                  <TableCell>{booking.firstName} {booking.lastName}</TableCell>
                  <TableCell>{booking.startTime}</TableCell>
                  <TableCell>{booking.endTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
}

export default BookingList;