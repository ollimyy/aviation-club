import { Grid, Box, Button, Typography, IconButton } from '@mui/material';import FlightIcon from '@mui/icons-material/Flight';
import MapIcon from '@mui/icons-material/Map';
import WeatherIcon from '@mui/icons-material/Cloud';



export default function Links() {

    return (
        <Box sx={{ margin: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Button
                component="a"
                href="https://www.ais.fi/fi"
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: '100%',
                  maxWidth: '200px',
                  height: '100px',
                  backgroundColor: 'yellow',
                  textTransform: 'none',
                  padding: '0px',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  C
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconButton
                component="a"
                href="https://lentopaikat.fi/"
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: '100%',
                  maxWidth: '200px',
                  height: '100px',
                  backgroundColor: '#1F4C99',
                  borderRadius: '0px',
                  padding: '0px',
                }}
              >
                <FlightIcon
                  sx={{
                    color: 'white',
                    fontSize: '48px',
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconButton
                component="a"
                href="https://aviamaps.com/map?pilot&lang=fi#p=4.93/65.69/26"
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: '100%',
                  maxWidth: '200px',
                  height: '100px',
                  backgroundColor: 'black',
                  borderRadius: '0px',
                  padding: '0px',
                }}
              >
                <MapIcon
                  sx={{
                    color: 'white',
                    fontSize: '48px',
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={6} sm={3}>
              <IconButton
                component="a"
                href="https://ilmailusaa.fi/"
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: '100%',
                  maxWidth: '200px',
                  height: '100px',
                  backgroundColor: '#27632E',
                  borderRadius: '0px',
                  padding: '0px',
                }}
              >
                <WeatherIcon
                  sx={{
                    color: 'white',
                    fontSize: '48px',
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      );
}