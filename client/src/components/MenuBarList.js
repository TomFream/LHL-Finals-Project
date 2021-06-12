import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/user/1" style={{ textDecoration: "none", color: "#000000DE" }}>
      <ListItem button>
        <ListItemIcon>
          <AccountBoxOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="MyAccount" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Share" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FiberNewIcon />
      </ListItemIcon>
      <ListItemText primary="New" />
    </ListItem>
    <ListItem button></ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Popular</ListSubheader>
    <Link to="/quiz/1" style={{ textDecoration: "none", color: "#000000DE" }}>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="JavaScript" />
      </ListItem>
    </Link>
    <Link to="/quiz/2" style={{ textDecoration: "none", color: "#000000DE" }}>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="HTML" />
      </ListItem>
    </Link>
    <Link to="/quiz/3" style={{ textDecoration: "none", color: "#000000DE" }}>
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
