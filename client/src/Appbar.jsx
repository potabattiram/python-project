import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

export default function Appbar() {
  const [open, setOpen] = React.useState(false);

  function toggleDrawer() {
    return open ? setOpen(false) : setOpen(true);
  }

  const navLinks = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Reports",
      link: "/reports",
    },
    {
      name: "Analytics",
      link: "/analytics",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ style: { width: "25%" } }}
      >
        <List>
          {navLinks.map((value) => {
            return (
              <Link to={value.link} onClick={() => setOpen(false)} style={{color:'black',textTransform:'none'}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={value.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
