const Booking = require("../models/bookings");
const Listing = require("../models/listing");

// =====================================
// Show Booking Form
// =====================================

module.exports.renderBookingForm = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  res.render("bookings/new", { listing });
};

// =====================================
// Create Booking
// =====================================

module.exports.createBooking = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  const booking = new Booking(req.body.booking);

  booking.listing = listing._id;
  booking.guest = req.user._id;
  booking.host = listing.owner;

  await booking.save();

  req.flash("success", "Booking request submitted successfully.");

  res.redirect(`/listings/${listing._id}`);
};

// =====================================
// Host Booking Requests
// =====================================

module.exports.renderHostBookings = async (req, res) => {
  const bookings = await Booking.find({
    host: req.user._id,
  })
    .populate("listing")
    .populate("guest");

  res.render("bookings/hostBookings", { bookings });
};

// =====================================
// Guest Bookings
// =====================================

module.exports.renderGuestBookings = async (req, res) => {
  const bookings = await Booking.find({
    guest: req.user._id,
  }).populate("listing");

  res.render("bookings/index", { bookings });
};

// =====================================
// Accept Booking
// =====================================

module.exports.acceptBooking = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    req.flash("error", "Booking not found.");
    return res.redirect("/bookings/host");
  }

  if (!booking.host.equals(req.user._id)) {
    req.flash("error", "Unauthorized action.");
    return res.redirect("/bookings/host");
  }

  booking.status = "Accepted";

  await booking.save();

  req.flash("success", "Booking accepted successfully.");

  res.redirect("/bookings/host");
};

// =====================================
// Reject Booking
// =====================================

module.exports.rejectBooking = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    req.flash("error", "Booking not found.");
    return res.redirect("/bookings/host");
  }

  if (!booking.host.equals(req.user._id)) {
    req.flash("error", "Unauthorized action.");
    return res.redirect("/bookings/host");
  }

  booking.status = "Rejected";

  await booking.save();

  req.flash("success", "Booking rejected successfully.");

  res.redirect("/bookings/host");
};
