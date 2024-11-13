// Adding variables for checkboxes 
/// Gender variables 
var female = L.geoJson(female, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.Sex} (${props.Age})<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

var male = L.geoJson(male, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#2986cc',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.Sex} (${props.Age})<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#2986cc'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#2986cc'
            });
        });
    }
})

var unknown = L.geoJson(unknown, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#5a7485',
            weight: 1,
            fillColor: '#240436',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.Sex} (${props.Age})<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'brown'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#240436'
            });
        });
    }
})
/// Projects variables
var LANCS = L.geoJson(LANCS, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFFFFF',
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
                fillColor: '#FFFFFF'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
    }
})

var LANE = L.geoJson(LANE, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFFFFF',
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
                fillColor: '#FFFFFF'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
    }
})

/// Ethnicity variables
var white = L.geoJson(white, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#000000',
            weight: 1,
            fillColor: '#ffe39f',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                    <b>${props.Informant}</b> (<b>${props.Sex}</b>)
					<br>Ethnicity: ${props.Ethnicity}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffe39f'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffe39f'
            });
        });
    }
})

var black = L.geoJson(black, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FF0000',
            weight: 1,
            fillColor: '#000000',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                    <b>${props.Informant}</b> (<b>${props.Sex}</b>)
					<br>Ethnicity: ${props.Ethnicity}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000000'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000000'
            });
        });
    }
})

/// Occupation variables
var clerical = L.geoJson(clerical, {
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
                <br>Occupation: ${props.Occupation}<br> (<b>${props.Sex}</b>)
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

var farming = L.geoJson(farming, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#284409',
            weight: 1,
            fillColor: '#98c0e0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Occupation: ${props.Occupation}<br> (<b>${props.Sex}</b>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#98c0e0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#98c0e0'
            });
        });
    }
})

var occupation = L.geoJson(occupation, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#284409',
            weight: 1,
            fillColor: '#198754',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Occupation: ${props.Occupation}<br> (<b>${props.Sex}</b>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#198754'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#198754'
            });
        });
    }
})

/// Age
var age = L.geoJson(age, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#dc3545',
            weight: 1,
            fillColor: '#FFA500',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.Sex}</b>)
                <br>Age: ${props.Age}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFA500'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFA500'
            });
        });
    }
})

/// education
var education = L.geoJson(education, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#0D98BA',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.Sex}</b>)
                <br>Education: ${props.Education_level}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
    }
})