import { Box, Grid, Typography } from "@mui/material";
import BulletinList from "./BulletinList";
import BookingList from "./BookingList";
import NotamList from "./NotamList";
import Links from "./Links";


export default function HomePage() {
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box margin={'1em'}>
                    <Typography variant="h4" gutterBottom>
                        Links
                    </Typography>
                    <Links />

                    <Typography variant="h4" gutterBottom>
                        Bookings
                    </Typography>
                    <BookingList />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box margin={'1em'}>
                    <Typography variant="h4" gutterBottom>
                        NOTAMs
                    </Typography>
                    <NotamList />

                    <Typography variant="h4" gutterBottom>
                        Club Bulletins
                    </Typography>
                    <BulletinList />
                </Box>
            </Grid>
        </Grid>

    );
}