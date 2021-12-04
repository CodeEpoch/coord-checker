import * as React from "react";
import { transform, transformExtent } from "ol/proj";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";

import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";

export default function CoordTrans(prop) {
  const [state, setState] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [msg, setMsg] = React.useState("Copied");
  const [searchProj, setSearchProj] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // const projections = Object.keys(PROJS);
  const projections = [
    ["EPSG:3857", "WGS 84 / Pseudo-Mercator", [85.06, -180, -85.06, 180]],
    ["EPSG:4326", "WGS 84 ", [90, -180, -90, 180]],
  ];

  function search(query) {
    fetch("https://epsg.io/?format=json&q=" + query)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const results = json["results"];
        if (results && results.length > 0) {
          console.log("results.length", results);
          let searchResults = [];
          for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if (result) {
              const code = result["code"];
              const name = result["name"];
              const proj4def = result["proj4"];
              const bbox = result["bbox"];
              if (
                code &&
                code.length > 0 &&
                proj4def &&
                proj4def.length > 0 &&
                bbox &&
                bbox.length === 4
              ) {
                console.log("bbox", bbox);
                searchResults.push({ code, name, proj4def, bbox });
              }
            }
          }
          setSearchResults(searchResults);
        } else {
          setSearchResults([]);
        }
      });
  }

  function copy(name, content) {
    console.log("copy", content);
    navigator.clipboard.writeText(content);
    setMsg("Copied " + name);
    setOpenSnackbar(true);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  function projTransform(newProjCode, proj4def = null) {
    if (prop.curProj && newProjCode) {
      if (proj4def) {
        proj4.defs(newProjCode, proj4def);
        register(proj4);
      }
      return transformExtent(prop.extent, prop.curProj, newProjCode);
    }
  }
  // prop.reproject(newProjCode, bbox)
  //
  const content = (name, newProjCode, extent, bbox) => (
    <div key={newProjCode}>
      <ListItem>
        <Tooltip title={name} placement="left">
          {/* <ListItemText
            primary={newProjCode}
            secondary={`[${extent.join(", ")}]`}
          /> */}
          <div>
            <div className="item-head">
              <span className="prim">{newProjCode}</span>
              <span className="quick-icons">
                <IconButton
                  onClick={() => copy(newProjCode, extent)}
                  style={{ padding: 0, fontSize: "17px" }}
                >
                  <i className="icon-copy" style={{ paddingLeft: 5 }}></i>
                </IconButton>
                <IconButton
                  onClick={() => prop.reproject(newProjCode, bbox)}
                  style={{ padding: 0, fontSize: "17px" }}
                >
                  <i className="icon-globe" style={{ paddingLeft: 5 }}></i>
                </IconButton>
              </span>
            </div>
            <p className="secnd">{`[${extent.join(", ")}]`}</p>
          </div>
        </Tooltip>
      </ListItem>
      <Divider />
    </div>
  );

  const drawerContent = () => (
    <Box sx={{ width: 250 }}>
      <List>
        {searchResults.length !== 0
          ? searchResults.map((result, index) =>
              content(
                result["name"],
                "EPSG:" + result["code"],
                projTransform("EPSG:" + result["code"], result["proj4def"]),
                result["bbox"]
              )
            )
          : projections.map((proj, index) =>
              content(proj[1], proj[0], projTransform(proj[0]))
            )}
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
        <div style={{ margin: 10 }}>
          {/* search */}
          <i className="material-icons" style={{ marginRight: 10 }}>
            search
          </i>
          <TextField
            id="project-search"
            size="small"
            style={{ width: 150 }}
            value={searchProj}
            onChange={(evt) => {
              setSearchProj(evt.target.value);
              search(evt.target.value);
            }}
          />
        </div>
        {/* footnote */}
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          style={{ marginLeft: 10 }}
        >
          Result extent: [xMin, yMax, xMax, yMin]
        </Typography>
        {/* projections */}
        {drawerContent()}

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleClose}
          message={msg}
        />
      </Drawer>
    </div>
  );
}
