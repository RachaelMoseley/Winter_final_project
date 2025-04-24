// We use express to create our servers endpoitns, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our enivornment variables
import "dotenv/config";

// We import our index.js so that we can query our database
import * as db from "./db/index.js";

// Create an instance of express
const requestHandler = express();
// Storing our port value from the .env file
const port = process.env.PORT;

// The middleware express.json() parses incoming JSON requests and puts the parsed data in req.body
requestHandler.use(express.json());


//GET template
requestHandler.get("/api/v1/water-quality-data", (req, res) => {
    res.send("Hello World!");
});

// GET water quality data
requestHandler.get("/api/v1/water-quality-data", async (req, res) => {
    const dbResponse = await db.query("select * from water_quality limit 5");
    console.log(dbResponse);
    res.send(dbResponse);
});


// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


