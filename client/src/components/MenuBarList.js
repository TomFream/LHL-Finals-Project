import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import FiberNewIcon from '@material-ui/icons/FiberNew';

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
    <ListItem button>
      {/* <ListItemIcon> */}
        {/* <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" /> */}
    </ListItem>
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
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="JavaScript" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="HTML" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="SQL" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="React" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Python" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="CSS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Vue" />
    </ListItem>
  </div>
);