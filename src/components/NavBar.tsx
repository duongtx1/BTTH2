import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search, ShoppingCart, Person, Menu } from "@mui/icons-material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = (
    <List
      style={{
        display: isMobile ? "block" : "flex",
        gap: isMobile ? "0" : "20px",
      }}
    >
      <ListItemButton>
        <ListItemText
          primary="Products"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="Offers"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="Best Sellers"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="Reviews"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="About"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
    </List>
  );

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#FBFAF1", boxShadow: "none", color: "#333" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Left section - Logo */}
        <img src={logo} alt="Brand Logo" style={{ height: "60px" }} />

        {/* Middle Section - Menu */}
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
            {/* Drawer for Mobile View */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                style={{ width: 250 }}
              >
                <List>
                  <ListItemButton>
                    <ListItemText primary="Products" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Offers" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Best Sellers" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Reviews" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="About" />
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          menuItems // Render the horizontal list for larger screens
        )}

        {/* Right Section - Search and Cart */}
        <Box style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <InputBase
            placeholder="Search"
            startAdornment={<Search style={{ color: "#999" }} />}
            style={{
              backgroundColor: "#F0ECE1",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
          />
          <Link to="/admin">
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Link>
          <Link to="/signin">
            <IconButton>
              <Person />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
