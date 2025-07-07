ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([663529.637039, 5918947.050848, 696455.412677, 5940752.983696]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BARRIOSSELECCIONADOS_1 = new ol.format.GeoJSON();
var features_BARRIOSSELECCIONADOS_1 = format_BARRIOSSELECCIONADOS_1.readFeatures(json_BARRIOSSELECCIONADOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BARRIOSSELECCIONADOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOSSELECCIONADOS_1.addFeatures(features_BARRIOSSELECCIONADOS_1);
var lyr_BARRIOSSELECCIONADOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOSSELECCIONADOS_1, 
                style: style_BARRIOSSELECCIONADOS_1,
                popuplayertitle: 'BARRIOS SELECCIONADOS',
                interactive: true,
                title: '<img src="styles/legend/BARRIOSSELECCIONADOS_1.png" /> BARRIOS SELECCIONADOS'
            });
var format_MiradorEmpalizadadePenco_2 = new ol.format.GeoJSON();
var features_MiradorEmpalizadadePenco_2 = format_MiradorEmpalizadadePenco_2.readFeatures(json_MiradorEmpalizadadePenco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MiradorEmpalizadadePenco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiradorEmpalizadadePenco_2.addFeatures(features_MiradorEmpalizadadePenco_2);
cluster_MiradorEmpalizadadePenco_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MiradorEmpalizadadePenco_2
});
var lyr_MiradorEmpalizadadePenco_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MiradorEmpalizadadePenco_2, 
                style: style_MiradorEmpalizadadePenco_2,
                popuplayertitle: 'Mirador Empalizada de Penco',
                interactive: true,
                title: '<img src="styles/legend/MiradorEmpalizadadePenco_2.png" /> Mirador Empalizada de Penco'
            });
var format_Monumentoalautaro_3 = new ol.format.GeoJSON();
var features_Monumentoalautaro_3 = format_Monumentoalautaro_3.readFeatures(json_Monumentoalautaro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Monumentoalautaro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumentoalautaro_3.addFeatures(features_Monumentoalautaro_3);
cluster_Monumentoalautaro_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Monumentoalautaro_3
});
var lyr_Monumentoalautaro_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Monumentoalautaro_3, 
                style: style_Monumentoalautaro_3,
                popuplayertitle: 'Monumento a lautaro',
                interactive: true,
                title: '<img src="styles/legend/Monumentoalautaro_3.png" /> Monumento a lautaro'
            });
var format_ParqueMiradorLosPinos_4 = new ol.format.GeoJSON();
var features_ParqueMiradorLosPinos_4 = format_ParqueMiradorLosPinos_4.readFeatures(json_ParqueMiradorLosPinos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ParqueMiradorLosPinos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueMiradorLosPinos_4.addFeatures(features_ParqueMiradorLosPinos_4);
var lyr_ParqueMiradorLosPinos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueMiradorLosPinos_4, 
                style: style_ParqueMiradorLosPinos_4,
                popuplayertitle: 'Parque Mirador Los Pinos',
                interactive: true,
                title: '<img src="styles/legend/ParqueMiradorLosPinos_4.png" /> Parque Mirador Los Pinos'
            });
var format_EstatuaQuijotemetalreciclado_5 = new ol.format.GeoJSON();
var features_EstatuaQuijotemetalreciclado_5 = format_EstatuaQuijotemetalreciclado_5.readFeatures(json_EstatuaQuijotemetalreciclado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_EstatuaQuijotemetalreciclado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstatuaQuijotemetalreciclado_5.addFeatures(features_EstatuaQuijotemetalreciclado_5);
cluster_EstatuaQuijotemetalreciclado_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EstatuaQuijotemetalreciclado_5
});
var lyr_EstatuaQuijotemetalreciclado_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EstatuaQuijotemetalreciclado_5, 
                style: style_EstatuaQuijotemetalreciclado_5,
                popuplayertitle: 'Estatua Quijote metal reciclado',
                interactive: true,
                title: '<img src="styles/legend/EstatuaQuijotemetalreciclado_5.png" /> Estatua Quijote metal reciclado'
            });
var format_LagunaLoMendez_6 = new ol.format.GeoJSON();
var features_LagunaLoMendez_6 = format_LagunaLoMendez_6.readFeatures(json_LagunaLoMendez_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LagunaLoMendez_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagunaLoMendez_6.addFeatures(features_LagunaLoMendez_6);
var lyr_LagunaLoMendez_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LagunaLoMendez_6, 
                style: style_LagunaLoMendez_6,
                popuplayertitle: 'Laguna Lo Mendez',
                interactive: true,
                title: '<img src="styles/legend/LagunaLoMendez_6.png" /> Laguna Lo Mendez'
            });
var format_MonumentonacionalSitiomemoria_7 = new ol.format.GeoJSON();
var features_MonumentonacionalSitiomemoria_7 = format_MonumentonacionalSitiomemoria_7.readFeatures(json_MonumentonacionalSitiomemoria_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MonumentonacionalSitiomemoria_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonumentonacionalSitiomemoria_7.addFeatures(features_MonumentonacionalSitiomemoria_7);
cluster_MonumentonacionalSitiomemoria_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MonumentonacionalSitiomemoria_7
});
var lyr_MonumentonacionalSitiomemoria_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MonumentonacionalSitiomemoria_7, 
                style: style_MonumentonacionalSitiomemoria_7,
                popuplayertitle: 'Monumento nacional. Sitio memoria',
                interactive: true,
                title: '<img src="styles/legend/MonumentonacionalSitiomemoria_7.png" /> Monumento nacional. Sitio memoria'
            });
var format_HumedalPichirume_8 = new ol.format.GeoJSON();
var features_HumedalPichirume_8 = format_HumedalPichirume_8.readFeatures(json_HumedalPichirume_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_HumedalPichirume_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumedalPichirume_8.addFeatures(features_HumedalPichirume_8);
var lyr_HumedalPichirume_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumedalPichirume_8, 
                style: style_HumedalPichirume_8,
                popuplayertitle: 'Humedal Pichirume',
                interactive: true,
                title: '<img src="styles/legend/HumedalPichirume_8.png" /> Humedal Pichirume'
            });
var format_CerroAmarillo_9 = new ol.format.GeoJSON();
var features_CerroAmarillo_9 = format_CerroAmarillo_9.readFeatures(json_CerroAmarillo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CerroAmarillo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CerroAmarillo_9.addFeatures(features_CerroAmarillo_9);
var lyr_CerroAmarillo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CerroAmarillo_9, 
                style: style_CerroAmarillo_9,
                popuplayertitle: 'Cerro Amarillo',
                interactive: true,
                title: '<img src="styles/legend/CerroAmarillo_9.png" /> Cerro Amarillo'
            });
var format_ParqueZooConcepcion_10 = new ol.format.GeoJSON();
var features_ParqueZooConcepcion_10 = format_ParqueZooConcepcion_10.readFeatures(json_ParqueZooConcepcion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ParqueZooConcepcion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZooConcepcion_10.addFeatures(features_ParqueZooConcepcion_10);
var lyr_ParqueZooConcepcion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZooConcepcion_10, 
                style: style_ParqueZooConcepcion_10,
                popuplayertitle: 'Parque Zoo Concepcion',
                interactive: true,
                title: '<img src="styles/legend/ParqueZooConcepcion_10.png" /> Parque Zoo Concepcion'
            });
var format_ComplejodeportivoCoronel_11 = new ol.format.GeoJSON();
var features_ComplejodeportivoCoronel_11 = format_ComplejodeportivoCoronel_11.readFeatures(json_ComplejodeportivoCoronel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ComplejodeportivoCoronel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplejodeportivoCoronel_11.addFeatures(features_ComplejodeportivoCoronel_11);
cluster_ComplejodeportivoCoronel_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ComplejodeportivoCoronel_11
});
var lyr_ComplejodeportivoCoronel_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ComplejodeportivoCoronel_11, 
                style: style_ComplejodeportivoCoronel_11,
                popuplayertitle: 'Complejo deportivo Coronel',
                interactive: true,
                title: '<img src="styles/legend/ComplejodeportivoCoronel_11.png" /> Complejo deportivo Coronel'
            });
var format_ParqueAlfredoSalgado_12 = new ol.format.GeoJSON();
var features_ParqueAlfredoSalgado_12 = format_ParqueAlfredoSalgado_12.readFeatures(json_ParqueAlfredoSalgado_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ParqueAlfredoSalgado_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlfredoSalgado_12.addFeatures(features_ParqueAlfredoSalgado_12);
var lyr_ParqueAlfredoSalgado_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlfredoSalgado_12, 
                style: style_ParqueAlfredoSalgado_12,
                popuplayertitle: 'Parque Alfredo Salgado',
                interactive: true,
                title: '<img src="styles/legend/ParqueAlfredoSalgado_12.png" /> Parque Alfredo Salgado'
            });
var format_ComplejodeportivoLota_13 = new ol.format.GeoJSON();
var features_ComplejodeportivoLota_13 = format_ComplejodeportivoLota_13.readFeatures(json_ComplejodeportivoLota_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ComplejodeportivoLota_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplejodeportivoLota_13.addFeatures(features_ComplejodeportivoLota_13);
cluster_ComplejodeportivoLota_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ComplejodeportivoLota_13
});
var lyr_ComplejodeportivoLota_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ComplejodeportivoLota_13, 
                style: style_ComplejodeportivoLota_13,
                popuplayertitle: 'Complejo deportivo Lota',
                interactive: true,
                title: '<img src="styles/legend/ComplejodeportivoLota_13.png" /> Complejo deportivo Lota'
            });
var format_HumedalLosBatros_14 = new ol.format.GeoJSON();
var features_HumedalLosBatros_14 = format_HumedalLosBatros_14.readFeatures(json_HumedalLosBatros_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_HumedalLosBatros_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumedalLosBatros_14.addFeatures(features_HumedalLosBatros_14);
var lyr_HumedalLosBatros_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumedalLosBatros_14, 
                style: style_HumedalLosBatros_14,
                popuplayertitle: 'Humedal Los Batros',
                interactive: true,
                title: '<img src="styles/legend/HumedalLosBatros_14.png" /> Humedal Los Batros'
            });
var format_EstadioMunicipalEsterRoa_15 = new ol.format.GeoJSON();
var features_EstadioMunicipalEsterRoa_15 = format_EstadioMunicipalEsterRoa_15.readFeatures(json_EstadioMunicipalEsterRoa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_EstadioMunicipalEsterRoa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadioMunicipalEsterRoa_15.addFeatures(features_EstadioMunicipalEsterRoa_15);
var lyr_EstadioMunicipalEsterRoa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadioMunicipalEsterRoa_15, 
                style: style_EstadioMunicipalEsterRoa_15,
                popuplayertitle: 'Estadio Municipal Ester Roa',
                interactive: true,
                title: '<img src="styles/legend/EstadioMunicipalEsterRoa_15.png" /> Estadio Municipal Ester Roa'
            });
var format_LagunalasTresPascualas_16 = new ol.format.GeoJSON();
var features_LagunalasTresPascualas_16 = format_LagunalasTresPascualas_16.readFeatures(json_LagunalasTresPascualas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LagunalasTresPascualas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagunalasTresPascualas_16.addFeatures(features_LagunalasTresPascualas_16);
var lyr_LagunalasTresPascualas_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LagunalasTresPascualas_16, 
                style: style_LagunalasTresPascualas_16,
                popuplayertitle: 'Laguna las Tres Pascualas',
                interactive: true,
                title: '<img src="styles/legend/LagunalasTresPascualas_16.png" /> Laguna las Tres Pascualas'
            });
var format_CatedraldeConcepcin_17 = new ol.format.GeoJSON();
var features_CatedraldeConcepcin_17 = format_CatedraldeConcepcin_17.readFeatures(json_CatedraldeConcepcin_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CatedraldeConcepcin_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatedraldeConcepcin_17.addFeatures(features_CatedraldeConcepcin_17);
cluster_CatedraldeConcepcin_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CatedraldeConcepcin_17
});
var lyr_CatedraldeConcepcin_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CatedraldeConcepcin_17, 
                style: style_CatedraldeConcepcin_17,
                popuplayertitle: 'Catedral de Concepción',
                interactive: true,
                title: '<img src="styles/legend/CatedraldeConcepcin_17.png" /> Catedral de Concepción'
            });
var format_BarrioEstacin_18 = new ol.format.GeoJSON();
var features_BarrioEstacin_18 = format_BarrioEstacin_18.readFeatures(json_BarrioEstacin_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BarrioEstacin_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarrioEstacin_18.addFeatures(features_BarrioEstacin_18);
var lyr_BarrioEstacin_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarrioEstacin_18, 
                style: style_BarrioEstacin_18,
                popuplayertitle: 'Barrio Estación',
                interactive: true,
                title: '<img src="styles/legend/BarrioEstacin_18.png" /> Barrio Estación'
            });
var format_PlazadePenco_19 = new ol.format.GeoJSON();
var features_PlazadePenco_19 = format_PlazadePenco_19.readFeatures(json_PlazadePenco_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PlazadePenco_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlazadePenco_19.addFeatures(features_PlazadePenco_19);
cluster_PlazadePenco_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PlazadePenco_19
});
var lyr_PlazadePenco_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PlazadePenco_19, 
                style: style_PlazadePenco_19,
                popuplayertitle: 'Plaza de Penco',
                interactive: true,
                title: '<img src="styles/legend/PlazadePenco_19.png" /> Plaza de Penco'
            });
var format_MinaChiflondelDIablo_20 = new ol.format.GeoJSON();
var features_MinaChiflondelDIablo_20 = format_MinaChiflondelDIablo_20.readFeatures(json_MinaChiflondelDIablo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MinaChiflondelDIablo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinaChiflondelDIablo_20.addFeatures(features_MinaChiflondelDIablo_20);
cluster_MinaChiflondelDIablo_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MinaChiflondelDIablo_20
});
var lyr_MinaChiflondelDIablo_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MinaChiflondelDIablo_20, 
                style: style_MinaChiflondelDIablo_20,
                popuplayertitle: 'Mina Chiflon del DIablo',
                interactive: true,
                title: '<img src="styles/legend/MinaChiflondelDIablo_20.png" /> Mina Chiflon del DIablo'
            });
var format_EstadiodeTom_21 = new ol.format.GeoJSON();
var features_EstadiodeTom_21 = format_EstadiodeTom_21.readFeatures(json_EstadiodeTom_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_EstadiodeTom_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadiodeTom_21.addFeatures(features_EstadiodeTom_21);
cluster_EstadiodeTom_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EstadiodeTom_21
});
var lyr_EstadiodeTom_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EstadiodeTom_21, 
                style: style_EstadiodeTom_21,
                popuplayertitle: 'Estadio de Tomé',
                interactive: true,
                title: '<img src="styles/legend/EstadiodeTom_21.png" /> Estadio de Tomé'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BARRIOSSELECCIONADOS_1.setVisible(true);lyr_MiradorEmpalizadadePenco_2.setVisible(true);lyr_Monumentoalautaro_3.setVisible(true);lyr_ParqueMiradorLosPinos_4.setVisible(true);lyr_EstatuaQuijotemetalreciclado_5.setVisible(true);lyr_LagunaLoMendez_6.setVisible(true);lyr_MonumentonacionalSitiomemoria_7.setVisible(true);lyr_HumedalPichirume_8.setVisible(true);lyr_CerroAmarillo_9.setVisible(true);lyr_ParqueZooConcepcion_10.setVisible(true);lyr_ComplejodeportivoCoronel_11.setVisible(true);lyr_ParqueAlfredoSalgado_12.setVisible(true);lyr_ComplejodeportivoLota_13.setVisible(true);lyr_HumedalLosBatros_14.setVisible(true);lyr_EstadioMunicipalEsterRoa_15.setVisible(true);lyr_LagunalasTresPascualas_16.setVisible(true);lyr_CatedraldeConcepcin_17.setVisible(true);lyr_BarrioEstacin_18.setVisible(true);lyr_PlazadePenco_19.setVisible(true);lyr_MinaChiflondelDIablo_20.setVisible(true);lyr_EstadiodeTom_21.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BARRIOSSELECCIONADOS_1,lyr_MiradorEmpalizadadePenco_2,lyr_Monumentoalautaro_3,lyr_ParqueMiradorLosPinos_4,lyr_EstatuaQuijotemetalreciclado_5,lyr_LagunaLoMendez_6,lyr_MonumentonacionalSitiomemoria_7,lyr_HumedalPichirume_8,lyr_CerroAmarillo_9,lyr_ParqueZooConcepcion_10,lyr_ComplejodeportivoCoronel_11,lyr_ParqueAlfredoSalgado_12,lyr_ComplejodeportivoLota_13,lyr_HumedalLosBatros_14,lyr_EstadioMunicipalEsterRoa_15,lyr_LagunalasTresPascualas_16,lyr_CatedraldeConcepcin_17,lyr_BarrioEstacin_18,lyr_PlazadePenco_19,lyr_MinaChiflondelDIablo_20,lyr_EstadiodeTom_21];
lyr_BARRIOSSELECCIONADOS_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_MiradorEmpalizadadePenco_2.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_Monumentoalautaro_3.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_ParqueMiradorLosPinos_4.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_EstatuaQuijotemetalreciclado_5.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_LagunaLoMendez_6.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_MonumentonacionalSitiomemoria_7.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_HumedalPichirume_8.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_CerroAmarillo_9.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Atrac_Tur': 'Atrac_Tur', });
lyr_ParqueZooConcepcion_10.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Descrip': 'Descrip', });
lyr_ComplejodeportivoCoronel_11.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_ParqueAlfredoSalgado_12.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_ComplejodeportivoLota_13.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_HumedalLosBatros_14.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Descrip': 'Descrip', });
lyr_EstadioMunicipalEsterRoa_15.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Video': 'Video', });
lyr_LagunalasTresPascualas_16.set('fieldAliases', {'id': 'id', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Barrio_Aso': 'Barrio_Aso', });
lyr_CatedraldeConcepcin_17.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_BarrioEstacin_18.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', });
lyr_PlazadePenco_19.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Descrip': 'Descrip', });
lyr_MinaChiflondelDIablo_20.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Descrip': 'Descrip', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Atract_Tur': 'Atract_Tur', });
lyr_EstadiodeTom_21.set('fieldAliases', {'id': 'id', 'Barrio_Aso': 'Barrio_Aso', 'Atrac_Tur': 'Atrac_Tur', 'Tipo': 'Tipo', 'Coords': 'Coords', 'Descrip': 'Descrip', });
lyr_BARRIOSSELECCIONADOS_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_MiradorEmpalizadadePenco_2.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_Monumentoalautaro_3.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_ParqueMiradorLosPinos_4.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_EstatuaQuijotemetalreciclado_5.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_LagunaLoMendez_6.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_MonumentonacionalSitiomemoria_7.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_HumedalPichirume_8.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_CerroAmarillo_9.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Atrac_Tur': 'TextEdit', });
lyr_ParqueZooConcepcion_10.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Descrip': 'TextEdit', });
lyr_ComplejodeportivoCoronel_11.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_ParqueAlfredoSalgado_12.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_ComplejodeportivoLota_13.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_HumedalLosBatros_14.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Descrip': 'TextEdit', });
lyr_EstadioMunicipalEsterRoa_15.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Video': 'ExternalResource', });
lyr_LagunalasTresPascualas_16.set('fieldImages', {'id': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Barrio_Aso': 'TextEdit', });
lyr_CatedraldeConcepcin_17.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_BarrioEstacin_18.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', });
lyr_PlazadePenco_19.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Descrip': 'TextEdit', });
lyr_MinaChiflondelDIablo_20.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Atract_Tur': 'TextEdit', });
lyr_EstadiodeTom_21.set('fieldImages', {'id': 'TextEdit', 'Barrio_Aso': 'TextEdit', 'Atrac_Tur': 'TextEdit', 'Tipo': 'TextEdit', 'Coords': 'TextEdit', 'Descrip': 'TextEdit', });
lyr_BARRIOSSELECCIONADOS_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_MiradorEmpalizadadePenco_2.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_Monumentoalautaro_3.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_ParqueMiradorLosPinos_4.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_EstatuaQuijotemetalreciclado_5.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_LagunaLoMendez_6.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_MonumentonacionalSitiomemoria_7.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_HumedalPichirume_8.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_CerroAmarillo_9.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', });
lyr_ParqueZooConcepcion_10.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Descrip': 'inline label - always visible', });
lyr_ComplejodeportivoCoronel_11.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_ParqueAlfredoSalgado_12.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_ComplejodeportivoLota_13.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_HumedalLosBatros_14.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Descrip': 'inline label - always visible', });
lyr_EstadioMunicipalEsterRoa_15.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_LagunalasTresPascualas_16.set('fieldLabels', {'id': 'no label', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Barrio_Aso': 'inline label - always visible', });
lyr_CatedraldeConcepcin_17.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_BarrioEstacin_18.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', });
lyr_PlazadePenco_19.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Descrip': 'inline label - always visible', });
lyr_MinaChiflondelDIablo_20.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Atract_Tur': 'inline label - always visible', });
lyr_EstadiodeTom_21.set('fieldLabels', {'id': 'no label', 'Barrio_Aso': 'inline label - always visible', 'Atrac_Tur': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coords': 'inline label - always visible', 'Descrip': 'inline label - always visible', });
lyr_EstadiodeTom_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});