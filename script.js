 
 

    
      require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "19f4f122e7804661b240c0df89635476"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
