const pacientesRoutes = require("./paciente_routes");
module.exports = function (app, db) {
    pacientesRoutes(app, db);
};
