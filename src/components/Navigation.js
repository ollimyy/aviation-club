import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, ListItemText, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Navigation({pages}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return(
        <Box>
            <AppBar position="sticky" color="primary">
                <Toolbar sx={{ display: 'flex', justifyContent: {xs: 'space-between', sm: 'flex-start'}}}>
                    <Typography variant="h6" noWrap marginRight="1em" sx={{ fontFamily: 'Oswald', fontWeight: '400' }}>
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
                        <IconButton onClick={handleOpen} color="inherit">
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