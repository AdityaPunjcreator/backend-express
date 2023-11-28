const storage = require("node-persist");
storage.init();

exports.addProduct = async (req, res) => {
  const { id, name, price } = req.body;
  try {
    const resp = await storage.setItem(id, { id, name, price });
    res.status(201).send({ message: "product  added successfully", resp });
  } catch (err) {
    res.status(500).send({ message: "error while sending", err });
  }
};

exports.getallProduct = async (req, res) => {
  try {
    const resp = await storage.values();
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};
