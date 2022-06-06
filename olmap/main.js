(function () {
  var map = new ol.Map({
    target: 'map',

    layers: [
      new ol.layer.Group({
        title: 'Подложка',
        layers: [
              new ol.layer.Tile({
              source: new ol.source.OSM()
            })
        ]
      }),
      new ol.layer.Group({
        title: 'Название рабочей области',
        fold: 'open',
        layers: [
          new ol.layer.Group({
            title: 'Название хранилища',
            fold: 'open',
            layers: [
              new ol.layer.Image({
                title: 'Слой 1',
                source: new ol.source.ImageArcGISRest({
                  ratio: 1,
                  params: { LAYERS: 'show:0' },
                  url:
                    'https://ons-inspire.esriuk.com/arcgis/rest/services/Administrative_Boundaries/Countries_December_2016_Boundaries/MapServer'
                })
              }),

              new ol.layer.Image({
                title: 'Слой 2',
                source: new ol.source.ImageArcGISRest({
                  ratio: 1,
                  params: { LAYERS: 'show:0' },
                  url:
                    'https://ons-inspire.esriuk.com/arcgis/rest/services/Census_Boundaries/Census_Merged_Local_Authority_Districts_December_2011_Boundaries/MapServer'
                })
              }),

            ]
          })
        ]
      })
    ],

    view: new ol.View({
      center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
      zoom: 2
    })
  });


  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });

  var toc = document.getElementById('layers');
  ol.control.LayerSwitcher.renderPanel(map, toc, { reverse: true });
  map.addControl(sidebar);
})();

(function () {

  const gauthdata = {
    login: 'geoserver',
    password: '123'
  }

  // fetch('http://localhost:8080/geoserver/rest/workspaces/SDB_NYC/datastores/SDB_NYC/featuretypes.json', {
  //     mode: 'no-cors',
  //     method: "GET",
  //     credentials: 'include',
  //     headers: {
  //       'Authorization': `Basic ${gauthdata.login}:${gauthdata.password}`
  //     }
  // })
  // .then((res) => {
  //   return res.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

  // async function getLayers() {
  //   let response = await fetch('http://localhost:8080/geoserver/rest/workspaces/SDB_NYC/datastores/SDB_NYC/featuretypes.json', {
  //     mode: 'no-cors',
  //     method: "GET",
  //     credentials: 'include',
  //     headers: {
  //       'Authorization': `Basic ${gauthdata.login}:${gauthdata.password}`
  //     }
  //   });
  
  //   const data = await response.json();
  //   console.log(data);
  // };

  // getLayers();

})();