import express from "express";
import { World } from "./generators/WorldGenerator";
import { createEmptyTimeline, getEventCount } from "./utils";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

app.get("/generate", (req:express.Request, res:express.Response)=>{
    global.people = [];
    global.timeline = createEmptyTimeline();
    global.world = new World({ lifeSpan: 100 });
    world.eventCount = getEventCount();
    res.send("World generated");
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
