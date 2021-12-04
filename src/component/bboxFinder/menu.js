import { useState } from "react";
import { transform } from "ol/proj";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function PositionedMenu(prop) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lastProj, setLastProj] = useState(prop.projection);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (evt) => {
    if (evt.target.id && lastProj !== evt.target.id) {
      let xymin, xymax;
      prop.setProjection(evt.target.id);

      if (evt.target.id) {
        xymin = transform([prop.minX, prop.minY], lastProj, evt.target.id);
        xymax = transform([prop.maxX, prop.maxY], lastProj, evt.target.id);
        prop.setMinX(xymin[0]);
        prop.setMaxX(xymax[0]);
        prop.setMinY(xymin[1]);
        prop.setMaxY(xymax[1]);
      }

      setLastProj(evt.target.id);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {prop.projection}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose} id="EPSG:3857">
          EPSG:3857
        </MenuItem>
        <MenuItem onClick={handleClose} id="EPSG:4326">
          EPSG:4326
        </MenuItem>
      </Menu>
    </div>
  );
}
