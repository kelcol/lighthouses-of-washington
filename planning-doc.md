# Final Project: Lighthouses of Washington

## Planning Documents

Submitted on: May 21st, 2018    
By: Kelly Colht    
For: WATS-4000 - Building JavaScript Applications    

#### Objectives

This application will allow users to display information about each lighthouse in Washington state as well as weather information for each location. The hope is that this application will make planning visits to lighthouses a little easier. An additional goal of this project is to encourage people to visit lighthouses for recreational and educational purposes, as well as draw attention to conservation of these cultural landmarks.

Venturing anywhere that's outdoors often requires extra planning and preparation. By providing weather data alongside reviews and other information about a particular lighthouse, I hope this site will make it easier for potential visitors to wear the appropriate attire and pack well for the elements they'll encounter.

#### Tech Requirements

This application will be built with the JavaScript framework, Vue.js. Webpack will be used for dependency management and generating static assets for deployment. Development will take place locally on a Linux host machine using NodeJS Git, with Git and GitHub for version control.

Anyone wishing to deploy the site for themselves will be provided with documentation and scripts to easily build the site for development or production purposes.

#### Data Sources

Lighthouse data, including geo-coordinates, will be sourced using the Wikidata Query Service. Retrieval of this data will occur independently of application development, although in the future I would like to automate this step and incorporate ingestion and processing of this data into the application.

The OpenWeather API will be used to retrieve weather data for the coordinates at each site. Currently, I plan to show weather data for only 2-3 days, but would like to eventually give the user more control over the displayed date range. The Yelp Fusion API will be used to add a review widget for each lighthouse one is available for.

#### Design Considerations

I plan to use Bootswatch theming to start off with for prototyping purposes and continue to use it for the final submission if I run out of time. If there is time, I would like to develop more customized styling.

#### Potential Risks

One of the biggest risks I foresee is scope creep. Also, with not much time and a few requirements I'm not very experienced fulfulling, I'm concerned some techniques will not to be learned in time. To ensure this project is completed when it needs to be, I've decided to drop the inclusion of Yelp review data if it seems evident I need to scale the project back. I will also do my best to resist the temptation to add more to the project than is set out here.


#### User Stories

**Person A** just moved to Washington and wants to explore and learn about their new home. They love history and being near water, so have decided to research and visit all the lighthouses in the state. They will use this site to help them decide which lighthouse to visit next and as a jumping off point in their lighthouse research. 

**Person B** would like to plan some fun day trips for their family involving outdoor activities. Since everyone in the family loves the beach and they've invested in multiple federal and state park passes for that year, they've decided to try to visit all the lighthouses in the state and stay in nearby campgrounds. While this application does not have built in support to help them find and book camping reservations, it will make weather and consumer review information available in one convenient place.

**Person C** is an artist who is into plein air painting, especially of beach scenes. As a challenge, they've decided on a new subject to focus on this year, the lighthouses of Washington. Their work relies on having decent enough weather in order to paint, so they would use this application to find out what the weather is like at a particular location on the day they want to visit.