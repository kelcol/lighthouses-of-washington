# To-do

## Data things
- [X] Remove extra property fields from single value fields in wikidata lighthouse entries (to prevent dupes)
- [ ] Write script to retrieve new data whenever page is loaded

## UI things
- [ ] Add content to About page or remove
- [ ] Style lighthouse list
- [ ] Tidy layout


## Javascripty things
- [X] Standardize coordinates to format used by OpenWeather API (strip all after decimal point)
- [X] Make lighthouse list functional
- [X] Show only to"Featured/Selected" lighthouse
- [X] Add widget showing weather data for selected loc
- [ ] Display nighttime view if image is available and it's after dark at user loc
- [ ] Make coords and date more readable
- [X] Hyperlink identifiers to authority's resource page

## SPARQL QUERY
```
#List of all the lighthouses in Washington State
#defaultView:Table
PREFIX psv: <http://www.wikidata.org/prop/statement/value/>
PREFIX psn: <http://www.wikidata.org/prop/statement/value-normalized/>

SELECT DISTINCT ?item ?itemLabel

                ?height_psn ?heightUnit_psnLabel

                ?heightFocal_psn ?heightFocalUnit_psnLabel

                ?range_psv ?rangeUnit_psvLabel

                ?lat ?lon

                ?image ?nighttime_view ?inception ?service_entry ?service_retirement ?native_label ?heritage_designation ?heritage_designationLabel ?NRHP_reference_number ?GeoNames_ID ?ARLHS_Lighthouse_ID ?USCG_Lighthouse_ID ?MarineTraffic_Lighthouse_ID ?GNIS_ID ?significant_event ?significant_eventLabel ?light_characteristic_of_lighthouse ?located_in_the_administrative_territorial_entity ?located_in_the_administrative_territorial_entityLabel ?Online_List_of_Lights_id ?located_in_protected_area ?located_in_protected_areaLabel

WHERE {
  ?item (wdt:P31/wdt:P279*) wd:Q39715.
  ?item wdt:P131 wd:Q1223.

 # height
  OPTIONAL {
    ?item (p:P2048/psv:P2048) ?heightnode_psv.
    ?heightnode_psv wikibase:quantityAmount ?height_psv.
    ?heightnode_psv wikibase:quantityUnit ?heightUnit_psv.
  }
  OPTIONAL {
    ?item (p:P2048/psn:P2048) ?heightnode_psn.
    ?heightnode_psn wikibase:quantityAmount ?height_psn.
    ?heightnode_psn wikibase:quantityUnit ?heightUnit_psn.
  }

  # focal height
  OPTIONAL {
    ?item (p:P2923/psv:P2923) ?heightFocalnode_psv.
    ?heightFocalnode_psv wikibase:quantityAmount ?heightFocal_psv.
    ?heightFocalnode_psv wikibase:quantityUnit ?heightFocalUnit_psv.
  }
  # focal height - normalized
  OPTIONAL {
    ?item (p:P2923/psn:P2923) ?heightFocalnode_psn.
    ?heightFocalnode_psn wikibase:quantityAmount ?heightFocal_psn.
    ?heightFocalnode_psn wikibase:quantityUnit ?heightFocalUnit_psn.
  }

  # range - only non-normalized
  OPTIONAL {
    ?item (p:P2929/psv:P2929) ?rangenode_psv.
    ?rangenode_psv wikibase:quantityAmount ?range_psv.
    ?rangenode_psv wikibase:quantityUnit ?rangeUnit_psv.
  }

  OPTIONAL {
      ?item p:P625 ?coordinate.
      ?item p:P625 ?coordinate.
      ?coordinate ps:P625 ?coord.
      ?coordinate psv:P625 ?coordinate_node.
      ?coordinate_node wikibase:geoLongitude ?lon.
      ?coordinate_node wikibase:geoLatitude ?lat.
      }

  OPTIONAL { ?item wdt:P18 ?image. }
  OPTIONAL { ?item wdt:P3451 ?nighttime_view. }
  OPTIONAL { ?item wdt:P571 ?inception. }
  OPTIONAL { ?item wdt:P729 ?service_entry. }
  OPTIONAL { ?item wdt:P730 ?service_retirement. }
  OPTIONAL { ?item wdt:P649 ?NRHP_reference_number. }
  OPTIONAL { ?item wdt:P1566 ?GeoNames_ID. }
  OPTIONAL { ?item wdt:P2980 ?ARLHS_Lighthouse_ID. }
  OPTIONAL { ?item wdt:P3723 ?USCG_Lighthouse_ID. }
  OPTIONAL { ?item wdt:P590 ?GNIS_ID. }
  OPTIONAL { ?item wdt:P793 ?significant_event. }
  OPTIONAL { ?item wdt:P1030 ?light_characteristic_of_lighthouse. }
  OPTIONAL { ?item wdt:P3601 ?MarineTraffic_Lighthouse_ID. }
  OPTIONAL { ?item wdt:P1435 ?heritage_designation. }
  OPTIONAL { ?item wdt:P3223 ?Online_List_of_Lights_id. }
  OPTIONAL { ?item wdt:P3018 ?located_in_protected_area. }

SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en".}
}
ORDER BY ?itemLabel
```


# Scratchpad

    getCoords: function(lighthouse) {
      let coords = lighthouse.coordinate_location;
      this.coords = coords.slice(6,-1).split(" ");
      this.lat = Math.ceil(this.coords[0]);
      this.long = Math.ceil(this.coords[1]);
      console.log(this.lat, this.long);
    }
