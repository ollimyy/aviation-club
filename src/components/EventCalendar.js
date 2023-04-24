import { isSameDay } from "date-fns";
import Calendar from "react-calendar";
import { fetchUpcomingEvents } from "../modules/events";
import { useEffect, useState } from "react";
import { parseISO } from 'date-fns';

import styles from "../styles/event-calendar.css";
import 'react-calendar/dist/Calendar.css';

export default function EventCalendar() {

    const [value, onChange] = useState(new Date());
    const [message, setMessage] = useState('Loading');
    const [events, setEvents] = useState([]);

    const getUpcomingEvents = async () => {
        try {
            let data = await fetchUpcomingEvents();
            setEvents(data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to load events');
            return (
                <p>{message}</p>
            )
        }
    }
        
    useEffect(() => {
        getUpcomingEvents();
    }, []);

    // https://github.com/wojtekmaj/react-calendar/wiki/Recipes
    function tileClassName({ date }) {

        if (eventDates.find(dDate => isSameDay(dDate, date))) {
            return 'react-calendar__tile event-day';
        }

        return 'react-calendar__tile';
    }
    
    const eventDates = events.map((event) => parseISO(event.start))

    return(
        <div className={styles.calendar}>
            <Calendar
                tileClassName={tileClassName}
                onChange={onChange}
                value={value} 
                />
        </div>
    );
}