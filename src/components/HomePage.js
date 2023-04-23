import { Box, Grid, Typography } from "@mui/material";
import BulletinList from "./BulletinList";
import BookingList from "./BookingList";


export default function HomePage() {
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box margin={'1em'}>
                    <Typography variant="h4" gutterBottom>
                        Bulletins
                    </Typography>
                    <BulletinList />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box margin={'1em'}>
                    <Typography variant="h4" gutterBottom>
                        Bookings
                    </Typography>
                    <BookingList />
                </Box>
            </Grid>
        </Grid>

    );
}