import { Box, Grid, Typography } from "@mui/material";
import UpcomingEventList from "./UpcomingEventList";
import EventCalendar from "./EventCalendar";



export default function EventsPage() {
    
    return (
        <Box sx={{marginTop: '1.5em'}}>
            <Grid container spacing={2} flexWrap="wrap-reverse">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{margin: '0.5em'}}>
                        Upcoming events
                    </Typography>
                    <UpcomingEventList />
                </Grid>
                <Grid item xs={12} md={6}>
                    <EventCalendar />
                </Grid>
            </Grid>
        </Box>
    );
}