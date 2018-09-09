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

SELECT DISTINCT ?lighthouse ?lighthouseLabel

                ?height_psv ?heightunit_psvLabel ?height_psn ?heightunit_psnLabel

                ?fheight_psv ?fheightunit_psvLabel ?fheight_psn ?fheightunit_psnLabel
                ?range_psv ?rangeunit_psvLabel

                ?lon ?lat

                ?image ?nighttime_view ?inception ?service_entry ?service_retirement ?native_label ?heritage_designation ?heritage_designationLabel ?NRHP_reference_number ?GeoNames_ID ?ARLHS_Lighthouse_ID ?USCG_Lighthouse_ID ?MarineTraffic_Lighthouse_ID ?GNIS_ID ?significant_event ?significant_eventLabel ?light_characteristic_of_lighthouse ?located_in_the_administrative_territorial_entity ?located_in_the_administrative_territorial_entityLabel ?Online_List_of_Lights_id ?located_in_protected_area ?located_in_protected_areaLabel

WHERE {
  ?lighthouse (wdt:P31/wdt:P279*) wd:Q39715.
  ?lighthouse wdt:P131 wd:Q1223.

 # height
  OPTIONAL {
    ?lighthouse (p:P2048/psv:P2048) ?heightnode_psv.
    ?heightnode_psv wikibase:quantityAmount ?height_psv.
    ?heightnode_psv wikibase:quantityUnit ?heightunit_psv.
  }
  OPTIONAL {
    ?lighthouse (p:P2048/psn:P2048) ?heightnode_psn.
    ?heightnode_psn wikibase:quantityAmount ?height_psn.
    ?heightnode_psn wikibase:quantityUnit ?heightunit_psn.
  }

  # focal height
  OPTIONAL {
    ?lighthouse (p:P2923/psv:P2923) ?fheightnode_psv.
    ?fheightnode_psv wikibase:quantityAmount ?fheight_psv.
    ?fheightnode_psv wikibase:quantityUnit ?fheightunit_psv.
  }
  # focal height - normalized
  OPTIONAL {
    ?lighthouse (p:P2923/psn:P2923) ?fheightnode_psn.
    ?fheightnode_psn wikibase:quantityAmount ?fheight_psn.
    ?fheightnode_psn wikibase:quantityUnit ?fheightunit_psn.
  }

  # range - only non-normalized
  OPTIONAL {
    ?lighthouse (p:P2929/psv:P2929) ?rangenode_psv.
    ?rangenode_psv wikibase:quantityAmount ?range_psv.
    ?rangenode_psv wikibase:quantityUnit ?rangeunit_psv.
  }

  OPTIONAL {
      ?lighthouse p:P625 ?coordinate.
      ?item p:P625 ?coordinate.
      ?coordinate ps:P625 ?coord.
      ?coordinate psv:P625 ?coordinate_node.
      ?coordinate_node wikibase:geoLongitude ?lon.
      ?coordinate_node wikibase:geoLatitude ?lat.
      }


  OPTIONAL { ?lighthouse wdt:P18 ?image. }
  OPTIONAL { ?lighthouse wdt:P3451 ?nighttime_view. }

  OPTIONAL { ?lighthouse wdt:P571 ?inception. }
  OPTIONAL { ?lighthouse wdt:P729 ?service_entry. }
  OPTIONAL { ?lighthouse wdt:P730 ?service_retirement. }
  OPTIONAL { ?lighthouse wdt:P649 ?NRHP_reference_number. }
  OPTIONAL { ?lighthouse wdt:P1566 ?GeoNames_ID. }
  OPTIONAL { ?lighthouse wdt:P2980 ?ARLHS_Lighthouse_ID. }
  OPTIONAL { ?lighthouse wdt:P3723 ?USCG_Lighthouse_ID. }
  OPTIONAL { ?lighthouse wdt:P590 ?GNIS_ID. }
  OPTIONAL { ?lighthouse wdt:P793 ?significant_event. }
  OPTIONAL { ?lighthouse wdt:P1030 ?light_characteristic_of_lighthouse. }
  OPTIONAL { ?lighthouse wdt:P2929 ?lighthouse_range. }
  OPTIONAL { ?lighthouse wdt:P3601 ?MarineTraffic_Lighthouse_ID. }
  OPTIONAL { ?lighthouse wdt:P1435 ?heritage_designation. }
  OPTIONAL { ?lighthouse wdt:P3223 ?Online_List_of_Lights_id. }
  OPTIONAL { ?lighthouse wdt:P3018 ?located_in_protected_area. }

SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en".
                        ?lighthouse rdfs:label ?LighthouseID.
                        ?lighthouseLabel rdfs:label ?Name.
                        ?height_psn rdfs:label ?Height }
}
ORDER BY ?lighthouseLabel
```


# Scratchpad

    getCoords: function(lighthouse) {
      let coords = lighthouse.coordinate_location;
      this.coords = coords.slice(6,-1).split(" ");
      this.lat = Math.ceil(this.coords[0]);
      this.long = Math.ceil(this.coords[1]);
      console.log(this.lat, this.long);
    }

    Q47574