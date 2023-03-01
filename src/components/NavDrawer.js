import { React, useState, useContext, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from '@mui/icons-material/House';
import HailIcon from '@mui/icons-material/Hail';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import { Navigate, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";



function NavDrawer(props) {
    let navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    return (
      <div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer 
          elevation = {24}
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {}}
        >
          <div >
            <Box
                sx={{ width:200  }}>
            <Box textAlign="center" p={2} >
              <Typography variant="h4" color='primary'>{props.title}</Typography>
            </Box>
            <Divider  />

            <List>
              <ListItemButton color = 'secondary' onClick={() => navigate("/")}>
              <HouseIcon color = 'darkGold' sx={{ml:1, mr:2}}/>
              <Divider  orientation="vertical" flexItem sx={{ mr:2}} />
                <ListItemText primary={'Home'} />
              </ListItemButton>

              <ListItemButton onClick={() => navigate("/alumni")}>
              <HailIcon color = 'darkGold' sx={{ml:1, mr:2}}/>
              <Divider  orientation="vertical" flexItem sx={{ mr:2}} />
                <ListItemText primary={'Alumni'} />
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/scholorship")}>
              <MenuBookIcon color = 'darkGold' sx={{ml:1, mr:2}}/>
              <Divider  orientation="vertical" flexItem sx={{ mr:2}} />
                <ListItemText primary={'Scholorship'} />
              </ListItemButton>
              <ListItemButton onClick={() => navigate("/photos")}>
              <PhotoLibraryIcon color = 'darkGold' sx={{ml:1, mr:2}}/>
              <Divider  orientation="vertical" flexItem sx={{ mr:2}} />
                <ListItemText primary={'Photos'} />
              </ListItemButton>
              {/* <ListItemButton onClick={() => navigate("/calander")}>
              <CalendarMonthIcon color = 'darkGold' sx={{ml:1, mr:2}}/>
              <Divider  orientation="vertical" flexItem sx={{ mr:2}} />
                <ListItemText primary={'Calander'} />
              </ListItemButton> */}
              <ListItemButton onClick={() => navigate("/members")}>
              <GroupsIcon color = 'darkGold' sx={{ml:1, mr:2}}/>
              <Divider  orientation="vertical" flexItem sx={{ mr:2}} />
                <ListItemText primary={'Members'} />
              </ListItemButton>
            </List>
            </Box>
          </div>
        </Drawer>
      </div>
    );
  }
export default NavDrawer;