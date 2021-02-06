

const path = require("path");
// For HTML Routing
module.exports = (app) => {
//   // => HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content
// return from notes.html
    app.get("/notes", function (_req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // return from index.html
    app.get("*", (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};