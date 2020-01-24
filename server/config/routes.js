// const routes = require('../controllers/MODELSNAME');
const path = require('path');
module.exports = function(app) {
    // app.get('/ROUTE', routes.ROUTEFUNCTION)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}