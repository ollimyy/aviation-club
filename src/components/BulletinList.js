import { Card, CardHeader, Box, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchBulletins } from "../modules/bulletins";


export default function BulletinList() {



    const [bulletins, setBulletins] = useState([]);
    const [message, setMessage] = useState('Loading');

    const getBulletins = async () => {
        try {
            let data = await fetchBulletins();
            setBulletins(data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to load bulletins');
        }
    }

    useEffect(() => {
        getBulletins();
    }, []);

    if (message.length > 0){
        return(<p>{message}</p>)
    }

    if (bulletins.length === 0){
        return(<p>No bulletins found</p>)
    }

    return(
        <Box>
            {bulletins.map((bulletin) => (
                <Card key={bulletin.id} sx={{ margin: '1em'}}>
                    <CardHeader title={bulletin.title} subheader={bulletin.date} />
                    <CardContent>
                        <Typography>
                            {bulletin.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}