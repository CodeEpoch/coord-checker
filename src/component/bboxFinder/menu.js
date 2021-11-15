import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function PositionedMenu(prop) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (evt) => {
    if (evt.target.id) prop.setProjection(evt.target.id);
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
