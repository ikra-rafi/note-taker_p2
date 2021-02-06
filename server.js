// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const fs = require("fs");
const express = require('express');
const path = require("path");

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./develop/public'));


//app.use(express.static(__dirname + "/Develop/public"));
require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);



// Tells node that we are creating an "express" server
const dbJson = require("./develop/db/db.json");



// node server.js to see what port is listening on.

// app.use(express.static("./Develop/index.html"));
// app.use("/api", apiRoutes);
// app.use("./Develop/routes/htmlRoutes.js");





// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

