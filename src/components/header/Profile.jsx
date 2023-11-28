import { Box, Typography, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import { PowerSettingsNew } from '@mui/icons-material';

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(false);
    }
    const logout = () => {
        setAccount('');
    }
    return (
        <>
            <Box onClick={handleClick} style={{marginTop:8,cursor:'pointer',}}>
                <Typography>{account}</Typography>
            </Box>
            <Menu

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}

            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>

                <MenuItem onClick={() => { handleClose(); logout(); }}>
                    <PowerSettingsNew fontSize='small' color='primary' />
                    <Typography>Logout</Typography>
                </MenuItem>
            </Menu>
        </>

    )

}
export default Profile;