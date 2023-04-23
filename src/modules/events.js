import axios from 'axios';

let server = 'http://localhost:8080';

export const fetchUpcomingEvents = async () => {
    try {
        const response = await axios.get(server + '/event/upcoming')
        return (response.data);
    } catch (error) {
        throw new Error('Failed to load events');
    }
}