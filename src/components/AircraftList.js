import { useEffect, useState } from "react";
import { fetchAircraft } from "../modules/aircraft.js";
import { Card, CardHeader, CardMedia, CardContent, Typography, Grid, Box } from "@mui/material";


export default function AircraftList() {

    const [aircraft, setAircraft] = useState([]);
    const [message, setMessage] = useState('Loading');

    const getAircraft = async () => {
        try {
            let data = await fetchAircraft();
            setAircraft(data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to load aircraft');
        }

    }
    useEffect(() => {
        getAircraft();
    }, []);

    if (message.length > 0){
        return(<p>{message}</p>)
    }

    if (aircraft.length === 0){
        return(<p>No aircraft found.</p>)
    }

    return (
        <Box sx={{marginTop: '1em'}}>
            <Typography variant="h4" sx={{ marginTop: '1em', marginBottom: '1em' }}>
                Our Fleet:
            </Typography>
            <Grid container spacing={{xs:2, lg: 3, xl: 5}} sx={{justifyContent: 'center'}}>
                {aircraft.map((aircraft) => (
                    <Grid sm={12} md={6} lg={4} key={aircraft.registration} item>
                        <Card>
                            <CardMedia
                                component="img"
                                height="400"
                                image={'http://localhost:8080/download/' + aircraft.image}
                                />
                            <CardHeader title={aircraft.registration} subheader={aircraft.manufacturer + ' ' + aircraft.model}/>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <div>
                                    <Typography>Manufacture year:</Typography>
                                    <Typography>Engine:</Typography>
                                    <Typography>Seating Capacity:</Typography>
                                    <Typography sx={{fontWeight: 'bold', marginTop: '2em'}}>Rent Price (incl. fuel):</Typography>
                                </div>
                                <div>
                                    <Typography>{aircraft.year}</Typography>
                                    <Typography>{aircraft.engine}</Typography>
                                    <Typography>{aircraft.seating_capacity}</Typography>
                                    <Typography sx={{fontWeight: 'bold', marginTop: '2em'}}>
                                        {Math.round(aircraft.rent_price * 60) + ' €/h'}</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}