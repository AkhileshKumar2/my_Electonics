import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { Link } from "react-router-dom";

//import MenuIcon from "@mui/icons-material/Menu";
//This fuction contains the method of HomeIcon
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton> */}

            <Box
              sx={{
                "& > :not(style)": {},
              }}
            >
              <Link to="/">
                <Button variant="contained">
                  <HomeIcon />
                </Button>
              </Link>
            </Box>
            <Link to="/aboutus">
              <Button variant="contained">About Us</Button>
            </Link>

            <Link to="/visitus">
              <Button variant="contained">Visit Us</Button>
            </Link>

            <Link to="/contactus">
              <Button variant="contained">Contact us</Button>
            </Link>

            <div>
              <Button
                variant="contained"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Our Services
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Maintenance</MenuItem>
                <MenuItem onClick={handleClose}>New Devices</MenuItem>
                <MenuItem onClick={handleClose}>Sell Your Old Devices</MenuItem>
              </Menu>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
