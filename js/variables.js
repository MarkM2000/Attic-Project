// Adding variables for checkboxes 
/// Projects variables
var LANCS = L.geoJson(LANCS, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#000066',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.Project}</b>)
                <br>County: ${props.County}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
    }
})

var LANE = L.geoJson(LANE, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#000066',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.Project}</b>)
                <br>County: ${props.County}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
    }
})

/// Ethnicity variables
var white = L.geoJson(white, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#000066',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Ethnicity: ${props.Ethnicity}<br> (${props.Sex}<br>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
    }
})

var black = L.geoJson(black, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#000066',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Ethnicity: ${props.Ethnicity}<br> (${props.Sex}<br>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
    }
})