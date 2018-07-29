# To-do

## Data things
- [X] Remove extra property fields from single value fields in wikidata lighthouse entries (to prevent dupes)
- [ ] Write script to retrieve new data whenever page is loaded

## UI things
- [ ] Add content to About page or remove
- [ ] Style lighthouse list
- [ ] Tidy layout


## Javascripty things
- [ ] Standardize coordinates to format used by OpenWeather API (strip all after decimal point)
- [ ] Make lighthouse list functional
- [ ] Show only to"Featured/Selected" lighthouse
- [ ] Add widget showing weather data for selected loc
- [ ] Display nighttime view if image is available and it's after dark at user loc
- [ ] Make coords and date more readable
- [ ] Hyperlink identifiers to authority's resource page

## SPARQL QUERY
```
#List of all the lighthouses in Washington State
#defaultView:Table
SELECT DISTINCT ?itemLabel?image ?nighttime_view ?coordinate_location ?located_in_protected_area ?located_in_protected_areaLabel ?inception ?service_entry ?service_retirement ?height ?lighthouse_range ?focal_height ?manufacturer ?manufacturerLabel ?architect ?architectLabel ?native_label ?heritage_designation ?heritage_designationLabel ?NRHP_reference_number ?GeoNames_ID ?ARLHS_Lighthouse_ID ?USCG_Lighthouse_ID ?MarineTraffic_Lighthouse_ID ?GNIS_ID WHERE {
  ?item (wdt:P31/wdt:P279*) wd:Q39715.
  ?item wdt:P131 wd:Q1223.
  ?item wdt:P625 ?coord.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  OPTIONAL { ?item wdt:P18 ?image. }
  OPTIONAL { ?item wdt:P3451 ?nighttime_view. }
  OPTIONAL { ?item wdt:P625 ?coordinate_location. }
  OPTIONAL { ?item wdt:P3018 ?located_in_protected_area. }
  OPTIONAL { ?item wdt:P571 ?inception. }
  OPTIONAL { ?item wdt:P729 ?service_entry. }
  OPTIONAL { ?item wdt:P730 ?service_retirement. }
  OPTIONAL { ?item wdt:P649 ?NRHP_reference_number. }
  OPTIONAL { ?item wdt:P1566 ?GeoNames_ID. }
  OPTIONAL { ?item wdt:P2980 ?ARLHS_Lighthouse_ID. }
  OPTIONAL { ?item wdt:P3723 ?USCG_Lighthouse_ID. }
  OPTIONAL { ?item wdt:P590 ?GNIS_ID. }
}
ORDER BY ?itemLabel
```