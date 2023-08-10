import { Link } from "react-router-dom";
import { SidebarItems } from "./SidebarItems";
import { Home, Logout, Book } from "@mui/icons-material";
import {
  Box,
  List,
  Drawer,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";

export const Sidebar = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ width: "calc(100% - 250px)" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Book Summary</Typography>
          <Link
            to={"/"}
            onClick={() => sessionStorage.setItem("isLoggedIn", false)}
          >
            <Logout />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <Link to={"/home"}>
          <img src="/logo.png" alt="Logo" />
        </Link>
        <br />
        <List>
          <SidebarItems
            icon={<Home color="primary" />}
            text="Home"
            link="/home"
          />
          <SidebarItems
            icon={<Book color="primary" />}
            text="Books"
            link="/books"
          />
        </List>
      </Drawer>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        {children}
      </Container>
    </Box>
  );
};
