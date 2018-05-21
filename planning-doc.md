# WATS-4000: Final Project Planning Documents

##Lighthouses of Washington

#### Summary

I propose to build a website aggregating data related to lighthouses in Washington State.

#### Website Mission

The mission of this website is to encourage people to visit lighthouses in Washington state for recreational and educational purposes, as well as draw attention to the need to preserve and maintain these cultural landmarks so that future generations can enjoy them.

Venturing anywhere that's outdoors often requires extra planning and preparation. By providing weather data alongside reviews and other informaiton about a particular lighthouse, I hope this site will make it easier for potential visitors to wear the appropriate attire and pack well for the elements they'll encounter.

#### Development Objectives

This site will be built using Vue.js and will employ Webpack for dependency management and ease of deployment. Development will take place locally on a Linux host machine and will use Git for version control.

Anyone wishing to deploy the site for themselves will be provided with documentation and scripts to easily build the site for development or production purposes.

#### Data Sources

The Wikidata Query Service will be used to obtain basic information about each lighthouses, including geo-coordinates. Retrieval of this data will occur independently of development on the site but I would like to eventually incorporate a script which will perform this action at the request of the user.

The OpenWeather API will be used to retrieve weather data for the coordinates at each site. Currently, I plan to show weather data for only 2-3 days, but would like to eventually give the user more control over the date range show. The Yelp Fusion API will be used to add a review widget for each lighthouse one is available for.

#### Design Considerations

While design is not where I would like to dedicate a lot of my energy for this project, I would still like to provide enough to have a minimalistic, easy to use, nice enough looking website. I plan to use Bootswatch theming to start off with for prototyping purposes and continue to use it for the final submission if I run out of time.

#### Potential Risks

One of the biggest risks I foresee is scope creep. Also, with not much time and a few requirements I'm not very experienced fulfulling, I'm concerned about getting stuck in places. To ensure this project is completed on time, I've decided to drop the inclusion of Yelp review data if it seems evident I need to scale the project back. I will also resist the temptation to add more to the project than is set out here.
