import * as React from "react";
import { transform } from "ol/proj";

import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function CoordTrans() {
  const [state, setState] = React.useState(false);
  const projections = ["EPSG:3857", "EPSG:4326"];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const drawerContent = () => (
    <Box sx={{ width: 250 }}>
      <List>
        {projections.map((text, index) => (
          <div key={text}>
            <ListItem>
              <ListItemText primary={text} secondary={"[x,y,x,y]"} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="coord-trans-butt">
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 10 }}
        onClick={toggleDrawer(true)}
      >
        Translate coordinates
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        {drawerContent()}
      </Drawer>
    </div>
  );
}
