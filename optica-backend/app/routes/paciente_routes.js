const { ObjectID } = require("mongodb");

module.exports = function (app, db) {
  app.post("/pacientes", async (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    try {
      db("optica").runCommand({
        insert: "paciente",
        documents: [note],
      });
      console.log(result)
      res.send(result.ops[0]);
    } catch (err) {
      console.log(err);
      res.send({ error: "An error has occurred" });
    }
  });
};
