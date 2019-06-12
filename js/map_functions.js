var heatmap = new ol.layer.Heatmap({
  source: new ol.source.Vector({
    url: 'cities.json',
    format: new ol.format.GeoJSON()
  })
});