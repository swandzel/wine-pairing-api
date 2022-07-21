const Wine = require("../models/wineModel.js");

const getWine = async (req, res) => {
  const { food } = req.query;

  try {
    const wine = await Wine.findOne({ food });

    if (!wine) {
      res.status(200).json({
        status: "not found",
        data: {
          message: `Could not find a wine pairing for ${food}`,
        },
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: wine,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

const postWine = async (req, res) => {
  try {
    const newWine = await Wine.create(req.body);

    res.status(201).json({
      status: "success",
      data: newWine,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { getWine, postWine };
