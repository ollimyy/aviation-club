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

export const saveBooking = async (booking) => {
    try {
        await axios.post(server + '/booking/add', booking)
    } catch (error) {
        throw new Error('Failed to save booking')
    }
}

export const deleteBooking = async (bookingId) => {
    try {
        await axios.delete(`${server}/booking/${bookingId}`)
    } catch (error) {
        throw new Error('Failed to delete booking')
    }
}