import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function NotamList() {

    const [notamData, setNotamData] = useState([]);
    const [error, setError] = useState(false);

    const fetchUrl = async () => {
        try {
            // api key only for 100 calls, if broken check key first
            // https://applications.icao.int/dataservices/default.aspx
            const response = await fetch('')
            const json = await response.json();

            setNotamData(json);
        } catch {
            setError(true);
        }
    }

    useEffect(() => { fetchUrl() }, []);

    // format like ddMONyy hhMM example 01JAN23 1200
    function formatDate(date) {
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        
        var day = date.getUTCDate();
        var month = months[date.getUTCMonth()];
        var year = date.getUTCFullYear().toString().substr(-2);
        var hours = ('0' + date.getUTCHours()).slice(-2);
        var minutes = ('0' + date.getUTCMinutes()).slice(-2);
        
        var formattedDate = day + month + year + ' ' + hours + minutes;
        return formattedDate;
    }

    if (notamData.length > 0) {
        return (
          <Card sx={{margin: 2}}>
            <CardContent>
                <Typography variant="h5" sx={{ marginBottom: 4}}>{notamData[0].location}</Typography>
                {notamData.map((notam, index) => {

                    const start = new Date(notam.startdate);
                    const end = new Date(notam.enddate);

                    const startFormatted = formatDate(start);
                    const endFormatted = formatDate(end);

                    const isLastItem = index === notamData.length - 1;

                return (


                    <Box key={notam.id}>
                        <Typography>
                            {notam.message}
                        </Typography>
                        <Typography sx={{ marginBottom: isLastItem ? 0 : 4 }}>
                            <span style={{ fontWeight: 'bold' }}>FROM:</span> {startFormatted}
                            <span style={{ fontWeight: 'bold' }}> TO:</span> {endFormatted}
                        </Typography>
                    </Box>  
                );
                })}
            </CardContent>
          </Card>
        );
    } else if(error){
        return <p>Failed to load NOTAMs. Check up to date NOTAMs at <a href="https://www.ais.fi/ais/bulletins/envfrm-fr.htm" target="_blank" rel="noreferrer">ais.fi</a>.</p>
    } else {
        return <p>NIL</p>;
    }
      
}