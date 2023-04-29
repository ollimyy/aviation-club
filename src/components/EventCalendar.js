import { format, isSameDay } from "date-fns";
import Calendar from "react-calendar";
import { fetchUpcomingEvents } from "../modules/events";
import { useEffect, useState } from "react";
import { parseISO } from 'date-fns';
import "../styles/event-calendar.css";
import 'react-calendar/dist/Calendar.css';
import { Box, Typography } from "@mui/material";

export default function EventCalendar() {

    const [value, onChange] = useState(new Date());
    const [message, setMessage] = useState('Loading');
    const [events, setEvents] = useState([]);
    const [activeDateEvents, setActiveDateEvents] = useState([]);
    const [activeDateEventsTitle, setActiveDateEventsTitle] = useState('');

    const getUpcomingEvents = async () => {
        try {
            let data = await fetchUpcomingEvents();
            setEvents(data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to load events');
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

    // when user clicks a date
    const onClickDay = (date) => {
        
        setActiveDateEventsTitle(format(date, 'dd.MM.yyyy'));
        
        // find all events on that day
        const matchingEvents = events.filter((event) => isSameDay(parseISO(event.start), date));

        if (matchingEvents.length > 0) {
            
            setActiveDateEvents(matchingEvents);
            
        } else {
            setActiveDateEvents([
                {
                    description: 'No events on this day.',
                    location: '',
                    title: '',
                    id: 0,
                    start: ''
            }]);
        }
    }

    return(
        <Box sx={{padding: 2}}>
            {message}
            <Calendar
                tileClassName={tileClassName}
                onChange={onChange}
                value={value} 
                onClickDay={onClickDay}
                />
            <Box>
                <Typography variant="h6">
                    {activeDateEventsTitle}
                </Typography>
                {activeDateEvents.map((event) => {
                    return(
                    <Box key={event.id} sx={{marginTop: 2, maxWidth: 340}}>
                        <Typography>
                            {event.start.slice(-5)}
                        </Typography>
                        <Typography fontWeight="bold">
                            {event.title}
                        </Typography>
                        <Typography fontStyle="italic" gutterBottom>
                             {event.location}
                        </Typography>
                        <Typography>
                            {event.description}
                        </Typography>
                    </Box>
                    );
                })}
            </Box>
        </Box>
    );
}