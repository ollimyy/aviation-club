import axios from 'axios';

let server = 'http://localhost:8080';

export const fetchAircraft = async () => {
    try {
        const response = await axios.get(server + '/aircraft/all')
        return (response.data);
    } catch (error) {
        throw new Error('Failed to load aircraft');
    }
}