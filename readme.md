# Story Maker
Story maker is a small personal project. The idea is to generate a fictional world with its geography, characters & events. Everything is temporary for now. It may stay in this state forever or may grow (I have ideas). 

# Usage 
### CLI
For now, the project is only usable via CLI. 
Basically, if there is a number between square brackets [0], you can enter it to see further details. 
To go back to the beginning, type "back". 

## Geography
A world has a name and is constituted of regions. 
Regions have a name, a climate and a changing number of reigns. 

## People
In StoryMaker a person is made of : 
- a name 
- a birth date
- a death date 
- a role (ex : "ruler")


## Events
At this time, there is no way to see a list of events, but I am implementing a timeline feature. 
You can however type the "save" command to generate json files in **data/** folder. The timeline.json folder will contain every event registerd.
Existing events are : 
- Birth
- Death
- Beginning of a reign 
- End of Reign 
- Battles (not really implemented yet)