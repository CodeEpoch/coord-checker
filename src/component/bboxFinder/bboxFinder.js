import React, { useState, useRef, useEffect } from "react";
import CoordTrans from "../coordTrans/coordTrans";
import PositionedMenu from "./menu";
import { get as getProjection, getTransform } from "ol/proj";

// ol stuff
import "ol/ol.css";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { transform } from "ol/proj";
import { toStringXY } from "ol/coordinate";
import { fromExtent } from "ol/geom/Polygon";
import { applyTransform } from "ol/extent";

//css
import Button from "@material-ui/core/Button";
import { Box, TextField } from "@material-ui/core";

function BBoxFind() {
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [projection, setProjection] = useState("EPSG:4326");
  const [selectedCoord, setSelectedCoord] = useState();
  const [minX, setMinX] = useState(-64.4136974478633);
  const [maxY, setMaxY] = useState(45.9488267828191);
  const [maxX, setMaxX] = useState(0);
  const [minY, setMinY] = useState(0);

  // get ref to div element - OpenLayers will render into this div
  const mapElement = useRef();
  // init map
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // init map
    const initialMap = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        initalFeaturesLayer,
      ],
      target: mapElement.current,
      view: new View({
        projection: "EPSG:3857",
        center: [0, 0],
        zoom: 2,
      }),
    });

    initialMap.on("click", handleMouseClick);

    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
  }, []);

  function createBBox(extent, fromTrans = false) {
    // [xmin,xmax,ymin,ymax]
    let xymin, xymax;
    if (fromTrans) {
    } else {
      xymin = transform([extent.minX, extent.minY], projection, "EPSG:3857");
      xymax = transform([extent.maxX, extent.maxY], projection, "EPSG:3857");

      extent = [xymin[0], xymin[1], xymax[0], xymax[1]]; // [left, bottom, right, top]
    }
    const geojsonObject = {
      type: "FeatureCollection",
      crs: {
        type: "name",
        properties: {
          name: "EPSG:3857",
        },
      },
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [xymin[0], xymax[1]],
                [xymax[0], xymax[1]],
                [xymax[0], xymin[1]],
                [xymin[0], xymin[1]],
                [xymin[0], xymax[1]],
              ],
            ],
          },
        },
      ],
    };

    const layer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojsonObject),
      }),
    });
    map.removeLayer(featuresLayer);
    map.addLayer(layer);
    setFeaturesLayer(layer);

    let geom = fromExtent(layer.getSource().getExtent());
    geom.scale(3);
    map.getView().fit(geom, { size: map.getSize() });
  }

  // mouse move handler
  const handleMouseClick = (event) => {
    console.log(transform(event.coordinate, "EPSG:3857", "EPSG:4326"));
    // setSelectedCoord(transform(event.coordinate, "EPSG:3857", "EPSG:4326"));
  };

  const handleSubmit = (extent) => {
    let msg = "";
    Object.keys(extent).forEach((key) => {
      if (extent[key] !== "" || extent[key] === 0) {
        extent[key] = Number(extent[key]);
      } else {
        msg += `${key} `;
      }
    });
    if (msg !== "") {
      alert(msg + "isn't looking right.");
      return;
    }

    createBBox(extent);
  };

  // https://openlayers.org/en/latest/examples/reprojection-by-code.html
  function reproject(code, bbox) {
    console.log(code, bbox);
    const newProj = getProjection(code);
    const fromLonLat = getTransform("EPSG:4326", newProj);

    let worldExtent = [bbox[1], bbox[2], bbox[3], bbox[0]];
    newProj.setWorldExtent(worldExtent);

    // approximate calculation of projection extent,
    // checking if the world extent crosses the dateline
    if (bbox[1] > bbox[3]) {
      worldExtent = [bbox[1], bbox[2], bbox[3] + 360, bbox[0]];
    }
    const extent = applyTransform(worldExtent, fromLonLat, undefined, 8);
    newProj.setExtent(extent);
    const newView = new View({
      projection: newProj,
    });
    map.setView(newView);
    newView.fit(extent);
  }

  return (
    <div>
      <div ref={mapElement} className="map"></div>
      <CoordTrans
        curProj={projection}
        extent={[minX, minY, maxX, maxY]}
        minX={minX}
        maxX={maxX}
        minY={minY}
        maxY={maxY}
        reproject={reproject}
      />

      <div className="bot-bar">
        <div className="clicked-coord-label">
          <p>{selectedCoord ? toStringXY(selectedCoord, 5) : ""}</p>
        </div>

        {/* BBox extent */}
        <div className="coords-input">
          <PositionedMenu
            projection={projection}
            setProjection={setProjection}
            minX={minX}
            maxX={maxX}
            minY={minY}
            maxY={maxY}
            setMinX={setMinX}
            setMaxX={setMaxX}
            setMinY={setMinY}
            setMaxY={setMaxY}
          />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              flexDirection: "row",
              display: "flex",
            }}
            autoComplete="off"
            width="500"
          >
            {/* Coord Inputs */}
            <div>
              {/* top left */}
              <div>
                <TextField
                  id="outlined-basic"
                  label="Min X"
                  variant="outlined"
                  size="small"
                  value={minX}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "-?[0-9]*.[0-9]*",
                  }}
                  onChange={(evt) => {
                    evt.target.validity.valid
                      ? setMinX(evt.target.value)
                      : console.log("error");
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Max Y"
                  variant="outlined"
                  size="small"
                  value={maxY}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "-?[0-9]*.[0-9]*",
                  }}
                  onChange={(evt) => {
                    evt.target.validity.valid
                      ? setMaxY(evt.target.value)
                      : console.log("error");
                  }}
                />
              </div>
              <br />
              {/* bottom right */}
              <div>
                <TextField
                  id="outlined-basic"
                  label="Max X"
                  variant="outlined"
                  size="small"
                  value={maxX}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "-?[0-9]*.[0-9]*",
                  }}
                  onChange={(evt) => {
                    evt.target.validity.valid
                      ? setMaxX(evt.target.value)
                      : console.log("error");
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Min Y"
                  variant="outlined"
                  size="small"
                  value={minY}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "-?[0-9]*.[0-9]*",
                  }}
                  onChange={(evt) => {
                    evt.target.validity.valid
                      ? setMinY(evt.target.value)
                      : console.log("error");
                  }}
                />
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
              onClick={() => {
                handleSubmit({ minX, maxY, maxX, minY });
              }}
            >
              Create BBox
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default BBoxFind;
