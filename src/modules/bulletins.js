import axios from 'axios';

let server = 'http://localhost:8080';

export const fetchBulletins = async () => {
    try {
        const response = await axios.get(server + '/bulletin/all')
        return (response.data);
    } catch (error) {
        throw new Error('Failed to load bulletins');
    }
}