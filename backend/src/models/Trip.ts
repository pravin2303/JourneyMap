import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  name: String,
  destination: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  itinerary: Array,
  locations: Array,
  budget: Object,
});

export default mongoose.model("Trip", tripSchema);