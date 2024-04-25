const path = require("path");

module.exports = {
    routers: (app,arrayRutas) =>{
     arrayRutas.forEach(({routerName,router}) => {
        app.get(routerName, (req,res) => res.sendfile(path.join(__dirname,"../views",router)) )
     });
    }
}