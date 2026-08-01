import Testimonial from "../models/Testimonial.js";
import User from "../models/User.js";

// Add a new testimonial (review)
export const addTestimonial = async (req, res) => {
  try {
    const { _id, name, image } = req.user;
    const { rating, testimonial } = req.body;

    if (!testimonial || !rating) {
      return res.json({ success: false, message: "Testimonial content and rating are required" });
    }

    const newTestimonial = await Testimonial.create({
      user: _id,
      name: name || "Anonymous",
      image: image || "",
      rating: Number(rating),
      testimonial,
    });

    res.json({ success: true, message: "Review submitted successfully!", testimonial: newTestimonial });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get list of active testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }).limit(6);
    res.json({ success: true, testimonials });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
