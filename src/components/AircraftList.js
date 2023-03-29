import c152 from '../images/c152.jpg'
import c172 from '../images/c172.jpg'
import { Box, Card, CardContent, CardMedia, Typography} from '@mui/material'

function AircraftList() {
    const fleet = [
        {
            registration: 'OH-CAB',
            type: 'Cessna 152',
            rentPrice: 120,
            image: c152
        },
        {
            registration: 'OH-CYZ',
            type: 'Cessna 172',
            rentPrice: 160,
            image: c172
        }
    ];

    return (
        <Box>
            { fleet.map(aircraft => {
                return(
                    <Card key={ aircraft.registration } sx={{ maxWidth: 345, margin:2 }}>
                        <CardMedia
                            component="img"
                            src={ aircraft.image }
                            alt="Cessna airplane"
                        />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            { aircraft.registration}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            { aircraft.type }
                        </Typography>
                        <Typography variant="body1">
                        { aircraft.rentPrice } e/h ({ (aircraft.rentPrice / 60.00).toFixed(2) } e/min)
                        </Typography>
                    </CardContent>
                    </Card>
                )
            })}
        </Box>
    )
}

export default AircraftList;