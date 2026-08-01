import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    location: { type: String, default: "Customer" },
    image: { type: String, default: "" },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    testimonial: { type: String, required: true }
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
