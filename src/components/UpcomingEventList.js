import { Box, Card, CardContent, Typography } from "@mui/material";
import { fetchUpcomingEvents } from "../modules/events";
import { useEffect, useState } from "react";

export default function UpcomingEventList() {

    const [events, setEvents] = useState([]);
    const [message, setMessage] = useState('Loading');

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

    if (message.length > 0){
        return(<p>{message}</p>)
    }

    if (events.length === 0){
        return(<p>No events found.</p>)
    }


    return (
        <Box sx={{  }}>
          {events.map((event) => (
            <Card key={event.id} sx={{ maxWidth: 400, margin: '1em',  position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography gutterBottom>
                    {event.start}
                </Typography>
                <Typography gutterBottom variant="h5">
                  {event.title}
                </Typography>
                <Typography>
                  {event.description}
                </Typography>
                <Typography sx={{marginTop: '2em'}}>
                    {event.location}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      );
}