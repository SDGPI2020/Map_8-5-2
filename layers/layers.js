var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Age16andover_1 = new ol.format.GeoJSON();
var features_Age16andover_1 = format_Age16andover_1.readFeatures(json_Age16andover_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age16andover_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age16andover_1.addFeatures(features_Age16andover_1);
var lyr_Age16andover_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age16andover_1, 
                style: style_Age16andover_1,
                interactive: true,
    title: 'Age: 16 and over<br />\
    <img src="styles/legend/Age16andover_1_0.png" /> No Data<br />\
    <img src="styles/legend/Age16andover_1_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age16andover_1_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age16andover_1_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age16andover_1_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age16andover_1_5.png" /> >15%<br />'
        });
var format_Age1619_2 = new ol.format.GeoJSON();
var features_Age1619_2 = format_Age1619_2.readFeatures(json_Age1619_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age1619_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age1619_2.addFeatures(features_Age1619_2);
var lyr_Age1619_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age1619_2, 
                style: style_Age1619_2,
                interactive: true,
    title: 'Age: 16-19<br />\
    <img src="styles/legend/Age1619_2_0.png" /> No Data<br />\
    <img src="styles/legend/Age1619_2_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age1619_2_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age1619_2_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age1619_2_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age1619_2_5.png" /> >15%<br />'
        });
var format_Age2024_3 = new ol.format.GeoJSON();
var features_Age2024_3 = format_Age2024_3.readFeatures(json_Age2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age2024_3.addFeatures(features_Age2024_3);
var lyr_Age2024_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age2024_3, 
                style: style_Age2024_3,
                interactive: true,
    title: 'Age: 20-24<br />\
    <img src="styles/legend/Age2024_3_0.png" /> No Data<br />\
    <img src="styles/legend/Age2024_3_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age2024_3_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age2024_3_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age2024_3_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age2024_3_5.png" /> >15%<br />'
        });
var format_Age2529_4 = new ol.format.GeoJSON();
var features_Age2529_4 = format_Age2529_4.readFeatures(json_Age2529_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age2529_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age2529_4.addFeatures(features_Age2529_4);
var lyr_Age2529_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age2529_4, 
                style: style_Age2529_4,
                interactive: true,
    title: 'Age: 25-29<br />\
    <img src="styles/legend/Age2529_4_0.png" /> No Data<br />\
    <img src="styles/legend/Age2529_4_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age2529_4_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age2529_4_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age2529_4_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age2529_4_5.png" /> >15%<br />'
        });
var format_Age3034_5 = new ol.format.GeoJSON();
var features_Age3034_5 = format_Age3034_5.readFeatures(json_Age3034_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age3034_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age3034_5.addFeatures(features_Age3034_5);
var lyr_Age3034_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age3034_5, 
                style: style_Age3034_5,
                interactive: true,
    title: 'Age: 30-34<br />\
    <img src="styles/legend/Age3034_5_0.png" /> No Data<br />\
    <img src="styles/legend/Age3034_5_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age3034_5_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age3034_5_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age3034_5_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age3034_5_5.png" /> >15%<br />'
        });
var format_Age3544_6 = new ol.format.GeoJSON();
var features_Age3544_6 = format_Age3544_6.readFeatures(json_Age3544_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age3544_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age3544_6.addFeatures(features_Age3544_6);
var lyr_Age3544_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age3544_6, 
                style: style_Age3544_6,
                interactive: true,
    title: 'Age: 35-44<br />\
    <img src="styles/legend/Age3544_6_0.png" /> No Data<br />\
    <img src="styles/legend/Age3544_6_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age3544_6_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age3544_6_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age3544_6_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age3544_6_5.png" /> >15%<br />'
        });
var format_Age4554_7 = new ol.format.GeoJSON();
var features_Age4554_7 = format_Age4554_7.readFeatures(json_Age4554_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age4554_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age4554_7.addFeatures(features_Age4554_7);
var lyr_Age4554_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age4554_7, 
                style: style_Age4554_7,
                interactive: true,
    title: 'Age: 45-54<br />\
    <img src="styles/legend/Age4554_7_0.png" /> No Data<br />\
    <img src="styles/legend/Age4554_7_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age4554_7_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age4554_7_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age4554_7_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age4554_7_5.png" /> >15%<br />'
        });
var format_Age5559_8 = new ol.format.GeoJSON();
var features_Age5559_8 = format_Age5559_8.readFeatures(json_Age5559_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age5559_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age5559_8.addFeatures(features_Age5559_8);
var lyr_Age5559_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age5559_8, 
                style: style_Age5559_8,
                interactive: true,
    title: 'Age: 55-59<br />\
    <img src="styles/legend/Age5559_8_0.png" /> No Data<br />\
    <img src="styles/legend/Age5559_8_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age5559_8_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age5559_8_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age5559_8_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age5559_8_5.png" /> >15%<br />'
        });
var format_Age6064_9 = new ol.format.GeoJSON();
var features_Age6064_9 = format_Age6064_9.readFeatures(json_Age6064_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age6064_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age6064_9.addFeatures(features_Age6064_9);
var lyr_Age6064_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age6064_9, 
                style: style_Age6064_9,
                interactive: true,
    title: 'Age: 60-64<br />\
    <img src="styles/legend/Age6064_9_0.png" /> No Data<br />\
    <img src="styles/legend/Age6064_9_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age6064_9_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age6064_9_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age6064_9_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age6064_9_5.png" /> >15%<br />'
        });
var format_Age6574_10 = new ol.format.GeoJSON();
var features_Age6574_10 = format_Age6574_10.readFeatures(json_Age6574_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Age6574_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Age6574_10.addFeatures(features_Age6574_10);
var lyr_Age6574_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Age6574_10, 
                style: style_Age6574_10,
                interactive: true,
    title: 'Age: 65-74<br />\
    <img src="styles/legend/Age6574_10_0.png" /> No Data<br />\
    <img src="styles/legend/Age6574_10_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Age6574_10_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Age6574_10_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Age6574_10_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Age6574_10_5.png" /> >15%<br />'
        });
var format_AgeOver75_11 = new ol.format.GeoJSON();
var features_AgeOver75_11 = format_AgeOver75_11.readFeatures(json_AgeOver75_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgeOver75_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgeOver75_11.addFeatures(features_AgeOver75_11);
var lyr_AgeOver75_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgeOver75_11, 
                style: style_AgeOver75_11,
                interactive: true,
    title: 'Age: Over 75<br />\
    <img src="styles/legend/AgeOver75_11_0.png" /> No Data<br />\
    <img src="styles/legend/AgeOver75_11_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/AgeOver75_11_2.png" /> 4%-6%<br />\
    <img src="styles/legend/AgeOver75_11_3.png" /> 6%-10%<br />\
    <img src="styles/legend/AgeOver75_11_4.png" /> 10%-15%<br />\
    <img src="styles/legend/AgeOver75_11_5.png" /> >15%<br />'
        });
var format_White_12 = new ol.format.GeoJSON();
var features_White_12 = format_White_12.readFeatures(json_White_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_White_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_White_12.addFeatures(features_White_12);
var lyr_White_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_White_12, 
                style: style_White_12,
                interactive: true,
    title: 'White<br />\
    <img src="styles/legend/White_12_0.png" /> No Data<br />\
    <img src="styles/legend/White_12_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/White_12_2.png" /> 4%-6%<br />\
    <img src="styles/legend/White_12_3.png" /> 6%-10%<br />\
    <img src="styles/legend/White_12_4.png" /> 10%-15%<br />\
    <img src="styles/legend/White_12_5.png" /> >15%<br />'
        });
var format_BlackorAfricanAmerican_13 = new ol.format.GeoJSON();
var features_BlackorAfricanAmerican_13 = format_BlackorAfricanAmerican_13.readFeatures(json_BlackorAfricanAmerican_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlackorAfricanAmerican_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlackorAfricanAmerican_13.addFeatures(features_BlackorAfricanAmerican_13);
var lyr_BlackorAfricanAmerican_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlackorAfricanAmerican_13, 
                style: style_BlackorAfricanAmerican_13,
                interactive: true,
    title: 'Black or African American<br />\
    <img src="styles/legend/BlackorAfricanAmerican_13_0.png" /> No Data<br />\
    <img src="styles/legend/BlackorAfricanAmerican_13_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/BlackorAfricanAmerican_13_2.png" /> 4%-6%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_13_3.png" /> 6%-10%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_13_4.png" /> 10%-15%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_13_5.png" /> >15%<br />'
        });
var format_AmericanIndianAlaskaNative_14 = new ol.format.GeoJSON();
var features_AmericanIndianAlaskaNative_14 = format_AmericanIndianAlaskaNative_14.readFeatures(json_AmericanIndianAlaskaNative_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmericanIndianAlaskaNative_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmericanIndianAlaskaNative_14.addFeatures(features_AmericanIndianAlaskaNative_14);
var lyr_AmericanIndianAlaskaNative_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmericanIndianAlaskaNative_14, 
                style: style_AmericanIndianAlaskaNative_14,
                interactive: true,
    title: 'American Indian & Alaska Native<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_14_0.png" /> No Data<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_14_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_14_2.png" /> 4%-6%<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_14_3.png" /> 6%-10%<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_14_4.png" /> 10%-15%<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_14_5.png" /> >15%<br />'
        });
var format_Asian_15 = new ol.format.GeoJSON();
var features_Asian_15 = format_Asian_15.readFeatures(json_Asian_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asian_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asian_15.addFeatures(features_Asian_15);
var lyr_Asian_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Asian_15, 
                style: style_Asian_15,
                interactive: true,
    title: 'Asian<br />\
    <img src="styles/legend/Asian_15_0.png" /> No Data<br />\
    <img src="styles/legend/Asian_15_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Asian_15_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Asian_15_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Asian_15_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Asian_15_5.png" /> >15%<br />'
        });
var format_PacificIslanderorHawaiian_16 = new ol.format.GeoJSON();
var features_PacificIslanderorHawaiian_16 = format_PacificIslanderorHawaiian_16.readFeatures(json_PacificIslanderorHawaiian_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PacificIslanderorHawaiian_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PacificIslanderorHawaiian_16.addFeatures(features_PacificIslanderorHawaiian_16);
var lyr_PacificIslanderorHawaiian_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PacificIslanderorHawaiian_16, 
                style: style_PacificIslanderorHawaiian_16,
                interactive: true,
    title: 'Pacific Islander or Hawaiian <br />\
    <img src="styles/legend/PacificIslanderorHawaiian_16_0.png" /> No Data<br />\
    <img src="styles/legend/PacificIslanderorHawaiian_16_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/PacificIslanderorHawaiian_16_2.png" /> 4%-6%<br />\
    <img src="styles/legend/PacificIslanderorHawaiian_16_3.png" /> 6%-10%<br />\
    <img src="styles/legend/PacificIslanderorHawaiian_16_4.png" /> 10%-15%<br />\
    <img src="styles/legend/PacificIslanderorHawaiian_16_5.png" /> >15%<br />'
        });
var format_Other_17 = new ol.format.GeoJSON();
var features_Other_17 = format_Other_17.readFeatures(json_Other_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_17.addFeatures(features_Other_17);
var lyr_Other_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Other_17, 
                style: style_Other_17,
                interactive: true,
    title: 'Other<br />\
    <img src="styles/legend/Other_17_0.png" /> No Data<br />\
    <img src="styles/legend/Other_17_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Other_17_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Other_17_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Other_17_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Other_17_5.png" /> >15%<br />'
        });
var format_Twoormore_18 = new ol.format.GeoJSON();
var features_Twoormore_18 = format_Twoormore_18.readFeatures(json_Twoormore_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Twoormore_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Twoormore_18.addFeatures(features_Twoormore_18);
var lyr_Twoormore_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Twoormore_18, 
                style: style_Twoormore_18,
                interactive: true,
    title: 'Two or more<br />\
    <img src="styles/legend/Twoormore_18_0.png" /> No Data<br />\
    <img src="styles/legend/Twoormore_18_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Twoormore_18_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Twoormore_18_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Twoormore_18_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Twoormore_18_5.png" /> >15%<br />'
        });
var format_Hispanic_19 = new ol.format.GeoJSON();
var features_Hispanic_19 = format_Hispanic_19.readFeatures(json_Hispanic_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hispanic_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hispanic_19.addFeatures(features_Hispanic_19);
var lyr_Hispanic_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hispanic_19, 
                style: style_Hispanic_19,
                interactive: true,
    title: 'Hispanic<br />\
    <img src="styles/legend/Hispanic_19_0.png" /> No Data<br />\
    <img src="styles/legend/Hispanic_19_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Hispanic_19_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Hispanic_19_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Hispanic_19_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Hispanic_19_5.png" /> >15%<br />'
        });
var format_Male2064_20 = new ol.format.GeoJSON();
var features_Male2064_20 = format_Male2064_20.readFeatures(json_Male2064_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Male2064_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Male2064_20.addFeatures(features_Male2064_20);
var lyr_Male2064_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Male2064_20, 
                style: style_Male2064_20,
                interactive: true,
    title: 'Male: 20-64<br />\
    <img src="styles/legend/Male2064_20_0.png" /> No Data<br />\
    <img src="styles/legend/Male2064_20_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Male2064_20_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Male2064_20_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Male2064_20_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Male2064_20_5.png" /> >15%<br />'
        });
var format_Female2064_21 = new ol.format.GeoJSON();
var features_Female2064_21 = format_Female2064_21.readFeatures(json_Female2064_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Female2064_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Female2064_21.addFeatures(features_Female2064_21);
var lyr_Female2064_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Female2064_21, 
                style: style_Female2064_21,
                interactive: true,
    title: 'Female: 20-64<br />\
    <img src="styles/legend/Female2064_21_0.png" /> No Data<br />\
    <img src="styles/legend/Female2064_21_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Female2064_21_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Female2064_21_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Female2064_21_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Female2064_21_5.png" /> >15%<br />'
        });
var format_Disabled_22 = new ol.format.GeoJSON();
var features_Disabled_22 = format_Disabled_22.readFeatures(json_Disabled_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disabled_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disabled_22.addFeatures(features_Disabled_22);
var lyr_Disabled_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Disabled_22, 
                style: style_Disabled_22,
                interactive: true,
    title: 'Disabled<br />\
    <img src="styles/legend/Disabled_22_0.png" /> No Data<br />\
    <img src="styles/legend/Disabled_22_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Disabled_22_2.png" /> 4%-6%<br />\
    <img src="styles/legend/Disabled_22_3.png" /> 6%-10%<br />\
    <img src="styles/legend/Disabled_22_4.png" /> 10%-15%<br />\
    <img src="styles/legend/Disabled_22_5.png" /> >15%<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Age16andover_1.setVisible(true);lyr_Age1619_2.setVisible(true);lyr_Age2024_3.setVisible(true);lyr_Age2529_4.setVisible(true);lyr_Age3034_5.setVisible(true);lyr_Age3544_6.setVisible(true);lyr_Age4554_7.setVisible(true);lyr_Age5559_8.setVisible(true);lyr_Age6064_9.setVisible(true);lyr_Age6574_10.setVisible(true);lyr_AgeOver75_11.setVisible(true);lyr_White_12.setVisible(true);lyr_BlackorAfricanAmerican_13.setVisible(true);lyr_AmericanIndianAlaskaNative_14.setVisible(true);lyr_Asian_15.setVisible(true);lyr_PacificIslanderorHawaiian_16.setVisible(true);lyr_Other_17.setVisible(true);lyr_Twoormore_18.setVisible(true);lyr_Hispanic_19.setVisible(true);lyr_Male2064_20.setVisible(true);lyr_Female2064_21.setVisible(true);lyr_Disabled_22.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Age16andover_1,lyr_Age1619_2,lyr_Age2024_3,lyr_Age2529_4,lyr_Age3034_5,lyr_Age3544_6,lyr_Age4554_7,lyr_Age5559_8,lyr_Age6064_9,lyr_Age6574_10,lyr_AgeOver75_11,lyr_White_12,lyr_BlackorAfricanAmerican_13,lyr_AmericanIndianAlaskaNative_14,lyr_Asian_15,lyr_PacificIslanderorHawaiian_16,lyr_Other_17,lyr_Twoormore_18,lyr_Hispanic_19,lyr_Male2064_20,lyr_Female2064_21,lyr_Disabled_22];
lyr_Age16andover_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age1619_2.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age2024_3.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age2529_4.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age3034_5.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age3544_6.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age4554_7.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age5559_8.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age6064_9.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age6574_10.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_AgeOver75_11.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_White_12.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_BlackorAfricanAmerican_13.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_AmericanIndianAlaskaNative_14.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Asian_15.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_PacificIslanderorHawaiian_16.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Other_17.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Twoormore_18.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Hispanic_19.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Male2064_20.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Female2064_21.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Disabled_22.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'Unemployme': 'Unemployme', 'Age_16-19': 'Age: 16-19', 'Age_20-24': 'Age: 20-24', 'Age_25-29': 'Age: 25-29', 'Age_30-34': 'Age: 30-34', 'Age_35-44': 'Age: 35-44', 'Age_45-54': 'Age: 45-54', 'Age_55-59': 'Age: 55-59', 'Age_60-64': 'Age: 60-64', 'Age_60-64_': 'Age: 60-64', 'Age_65-74': 'Age: 65-74', 'Age_Over 7': 'Age: Over 75', 'White_Alon': 'White', 'Black_Alon': 'Black or African American', 'American_I': 'American Indian & Alaska Native', 'Asian_Alon': 'Asian', 'PI_Alone_U': 'Pacific Islander or Hawaiian ', 'Other_Unem': 'Other Race', 'Two_or_Mor': 'Two or More ', 'Hispanic_A': 'Hispanic', 'Hispanic_1': 'Hispanic_1', 'Male_20-64': 'Male: 20-64', 'Female_20-': 'Female: 20-64', 'Disabled_U': 'Disabled ', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Over 16': 'Unemployment: Over 16 ', });
lyr_Age16andover_1.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age1619_2.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'TextEdit', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age2024_3.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'TextEdit', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age2529_4.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'TextEdit', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age3034_5.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'TextEdit', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age3544_6.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'TextEdit', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age4554_7.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'TextEdit', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age5559_8.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'TextEdit', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age6064_9.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'TextEdit', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age6574_10.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'TextEdit', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_AgeOver75_11.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'TextEdit', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_White_12.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'TextEdit', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_BlackorAfricanAmerican_13.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'TextEdit', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_AmericanIndianAlaskaNative_14.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'TextEdit', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Asian_15.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'TextEdit', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_PacificIslanderorHawaiian_16.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'TextEdit', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Other_17.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'TextEdit', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Twoormore_18.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'TextEdit', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Hispanic_19.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'TextEdit', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Male2064_20.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'TextEdit', 'Female_20-': 'Hidden', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Female2064_21.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'TextEdit', 'Disabled_U': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Disabled_22.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'Unemployme': 'Hidden', 'Age_16-19': 'Hidden', 'Age_20-24': 'Hidden', 'Age_25-29': 'Hidden', 'Age_30-34': 'Hidden', 'Age_35-44': 'Hidden', 'Age_45-54': 'Hidden', 'Age_55-59': 'Hidden', 'Age_60-64': 'Hidden', 'Age_60-64_': 'Hidden', 'Age_65-74': 'Hidden', 'Age_Over 7': 'Hidden', 'White_Alon': 'Hidden', 'Black_Alon': 'Hidden', 'American_I': 'Hidden', 'Asian_Alon': 'Hidden', 'PI_Alone_U': 'Hidden', 'Other_Unem': 'Hidden', 'Two_or_Mor': 'Hidden', 'Hispanic_A': 'Hidden', 'Hispanic_1': 'Hidden', 'Male_20-64': 'Hidden', 'Female_20-': 'Hidden', 'Disabled_U': 'TextEdit', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Over 16': 'Hidden', });
lyr_Age16andover_1.set('fieldLabels', {});
lyr_Age1619_2.set('fieldLabels', {'Age_16-19': 'header label', });
lyr_Age2024_3.set('fieldLabels', {'Age_20-24': 'header label', });
lyr_Age2529_4.set('fieldLabels', {'Age_25-29': 'header label', });
lyr_Age3034_5.set('fieldLabels', {'Age_30-34': 'header label', });
lyr_Age3544_6.set('fieldLabels', {'Age_35-44': 'header label', });
lyr_Age4554_7.set('fieldLabels', {'Age_45-54': 'header label', });
lyr_Age5559_8.set('fieldLabels', {'Age_55-59': 'header label', });
lyr_Age6064_9.set('fieldLabels', {'Age_60-64': 'header label', });
lyr_Age6574_10.set('fieldLabels', {'Age_65-74': 'header label', });
lyr_AgeOver75_11.set('fieldLabels', {'Age_Over 7': 'header label', });
lyr_White_12.set('fieldLabels', {'White_Alon': 'header label', });
lyr_BlackorAfricanAmerican_13.set('fieldLabels', {'Black_Alon': 'header label', });
lyr_AmericanIndianAlaskaNative_14.set('fieldLabels', {'American_I': 'header label', });
lyr_Asian_15.set('fieldLabels', {'Asian_Alon': 'header label', });
lyr_PacificIslanderorHawaiian_16.set('fieldLabels', {'PI_Alone_U': 'header label', });
lyr_Other_17.set('fieldLabels', {'Other_Unem': 'header label', });
lyr_Twoormore_18.set('fieldLabels', {'Two_or_Mor': 'header label', });
lyr_Hispanic_19.set('fieldLabels', {'Hispanic_A': 'header label', });
lyr_Male2064_20.set('fieldLabels', {'Male_20-64': 'header label', });
lyr_Female2064_21.set('fieldLabels', {'Female_20-': 'header label', });
lyr_Disabled_22.set('fieldLabels', {'Disabled_U': 'header label', });
lyr_Disabled_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});