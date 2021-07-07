import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import FiberNewIcon from "@material-ui/icons/FiberNew";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="MyAccount" />
    </ListItem>
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
  <div style={{ color: "lavender" }}>
    <ListSubheader inset>Popular</ListSubheader>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="JavaScript" style={{ color: "lavender" }} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="HTML" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="SQL" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="React" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="Python" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="CSS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <AssignmentIcon /> */}</ListItemIcon>
      <ListItemText primary="Vue" />
    </ListItem>
  </div>
);
