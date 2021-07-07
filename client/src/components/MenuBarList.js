import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import { Link } from "react-router-dom";
import LocalPlayIcon from "@material-ui/icons/LocalPlay";

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: "none", color: "lavender" }}>
      <ListItem button>
        <ListItemIcon style={{ color: "lavender" }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main" />
      </ListItem>
    </Link>
    <Link to="/user/1" style={{ textDecoration: "none", color: "lavender" }}>
      <ListItem button>
        <ListItemIcon style={{ color: "lavender" }}>
          <AccountBoxOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="MyAccount" />
      </ListItem>
    </Link>
    <Link to="/playlists" style={{ textDecoration: "none", color: "lavender" }}>
      <ListItem button>
        <ListItemIcon style={{ color: "lavender" }}>
          <LocalPlayIcon />
        </ListItemIcon>
        <ListItemText primary="Playlists" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon style={{ color: "lavender" }}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Share" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "lavender" }}>
        <FiberNewIcon />
      </ListItemIcon>
      <ListItemText primary="New" />
    </ListItem>
    <ListItem button></ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "lavender" }}>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div style={{ color: "lavender" }}>
    <ListSubheader style={{ color: "lavender" }} inset>
      Popular
    </ListSubheader>
    <Link to="/quiz/1" style={{ textDecoration: "none", color: "lavender" }}>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="JavaScript" />
      </ListItem>
    </Link>
    <Link to="/quiz/2" style={{ textDecoration: "none", color: "lavender" }}>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="HTML" />
      </ListItem>
    </Link>
    <Link to="/quiz/3" style={{ textDecoration: "none", color: "lavender" }}>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="SQL" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="React" />
    </ListItem>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Python" />
    </ListItem>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="CSS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Vue" />
    </ListItem>
  </div>
);
