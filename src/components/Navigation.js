import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, ListItemText, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Navigation() {

    const pages = [
        { text: 'Home', path: '/' },
        { text: 'Make a booking', path: '/new-booking' },
        { text: 'Aircraft', path: '/aircraft' },
        { text: 'Events', path: '/events' },
      ];

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return(
        <Box>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" noWrap marginRight="1em">
                        Helsinki East Aviation Club
                    </Typography>

                    <Box sx={{display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" noWrap>
                            {pages.map((page) => (
                                <Button key={page.text} component={Link} to={page.path} color="inherit">
                                    {page.text}
                                </Button>
                            ))}
                        </Typography>
                    </Box>

                    <Box sx={{display: { sm: 'none'}}}>
                        <IconButton onClick={handleOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={open} onClick={handleClose}>
                <List>
                {pages.map((page) => (
                    <ListItem key={page.text}>
                        <ListItemButton component={Link} to={page.path}>
                            <ListItemText primary={page.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </Box>
    );
}