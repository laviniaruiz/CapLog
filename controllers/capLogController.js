// Load the capLog model
const CapLog = require("../models/CapLogModels");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
  try {
    // Use the capLog model to interact with the database
    // find will get all documents from the capLog collection
    const capLog = await CapLog.find();
    console.log(capLog);

    // Looks in the views folder for "capLog/Index" and passes { capLog } data to the view (kind of like a server props object)
    res.render("capLog/Index", { capLog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
  try {
    const caplog = await CapLog.findById(req.params.id);
    res.render("capLog/Show", { caplog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /capLog/new
module.exports.new = (req, res) => {
  res.render("capLog/New");
};

// POST /capLog
module.exports.create = async (req, res) => {
  console.log("POST /capLog");
  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    // use the model to interact with db and create a new document in the capLog collection
    const result = await CapLog.create(req.body);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/capLog");
};

// DELETE /capLog/:name
module.exports.delete = async(req, res) => {
  try {
    console.log("DELETE /capLog/:id");
    await CapLog.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect("/capLog");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /capLog/:name/edit
module.exports.edit = async (req, res) => {
  console.log("GET /capLog/:id/edit");
  try {
    // const capLog = await CapLog.findById(req.params.id);
    const caplog = await CapLog.findByIdAndUpdate(req.params.id, req.body);
    res.render("capLog/Edit", { caplog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// PUT /capLog/:id
module.exports.update = async (req, res) => {
  console.log("PUT /capLog/:id");
  console.log(req.body);

  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  try {
    // pass the id to find the document in the db and the form data (req.body) to update it
    console.log('inside update')
    console.log(req.body)
    await CapLog.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/capLog/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.seed = async (req, res) => {
  console.log("POST /capLog/seed");
  try {
    await CapLog.deleteMany({}); // Keep empty to delete everything
    CapLog.create(capLog);
    res.redirect("/capLog");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.clear = async (req, res) => {
  console.log("DELETE /capLog/clear");
  try {
    await CapLog.deleteMany({});
    res.redirect("/capLog");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};