
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
        bookings.map(booking => {
            return (
                <div key={ booking.bookingId }>
                    <table>
                        <thead>
                            <tr>
                                <th>aircraft:</th>
                                <th>name:</th>
                                <th>from:</th>
                                <th>to:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ booking.aircraft }</td>
                                <td>{ booking.firstName } { booking.lastName }</td>
                                <td>{ booking.startTime }</td>
                                <td>{ booking.endTime }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
    )
}

export default BookingList;