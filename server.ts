import express from "express";
import * as fs from "fs";
import { World } from "./generators/WorldGenerator";
import { createEmptyTimeline, getEventCount } from "./utils";
import { Region } from "./generators/RegionGenerator";
const app = express();
const PORT = process.env.PORT || 5000;
global.world = JSON.parse(fs.readFileSync("./data/world.json", "utf8"));
global.people = JSON.parse(fs.readFileSync("./data/people.json", "utf8"));
global.timeline = JSON.parse(fs.readFileSync("./data/timeline.json", "utf8"));


app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

app.get("/generate", (req: express.Request, res: express.Response) => {
    // global.people = [];
    // global.timeline = createEmptyTimeline();
    // global.world = new World({ lifeSpan: 100 });
    // world.eventCount = getEventCount();
    res.json({
        status: "ok",
        data: {
            name: world.name,
            eventCount: world.eventCount,
            peopleCount: people.length,
            regionCount: world.regions.length,
            // timeline, 
        }
    });
});

app.get("/regions", (req:express.Request, res:express.Response) => {
    const regions = [...global.world.regions];
    regions.forEach((r:Region)=>{
        r.reigns.forEach(v =>{
           v.rulerName = global.people[v.rulerId].name;
        });
    });
    
    res.json({
        status : "ok", 
        data : {
            regions, 
            regionCount : global.world.regions.length, 
            worldName : global.world.name, 
        }
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
