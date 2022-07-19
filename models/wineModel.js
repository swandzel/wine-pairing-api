const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  food: {
    type: String,
    required: [true, "Food is required"],
  },
  pairedWines: {
    type: [String],
    required: [true, "Paired wines are required"],
    validate: (pairedWines) =>
      Array.isArray(pairedWines) && pairedWines.length > 0,
  },
  pairingText: {
    type: String,
    required: [true, "Pairing text is required"],
  },
  productMatches: {
    title: {
      type: String,
      required: [true, "Product Matches title is required"],
    },
    description: {
      type: String,
      required: [true, "Product Matches description is required"],
    },
    price: {
      type: String,
      required: [true, "Product Matches price is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Product Matches image url is required"],
    },
    link: {
      type: String,
      required: [true, "Product Matches link is required"],
    },
  },
});

const Wine = mongoose.model("Wine", wineSchema);
module.exports = Wine;
