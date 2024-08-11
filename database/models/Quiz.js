const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
    },
    questions: [
      {
        title: { type: String, required: true },
        options: [
          {
            text: { type: String, required: true },
            weight: {
              type: Map,
              to: Number,
              required: true,
            },
          },
        ],
      },
    ],
    results: {
      type: Map,
      of: String,
    
    },
  },
  { versionKey: false, timestamps: true }
);

const Quiz = mongoose.model("Quiz", schema);

module.exports = Quiz;
