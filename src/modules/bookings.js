import axios from 'axios';

let server = 'http://localhost:8080';

export const fetchBookings = async () => {
    try {
        const response = await axios.get(server + '/booking/all')
        return (response.data);
    } catch (error) {
        throw new Error('Failed to load bookings');
    }
}