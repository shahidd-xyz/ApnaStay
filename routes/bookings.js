const express = require("express");
const router = express.Router({ mergeParams: true });

const bookingsController = require("../controllers/bookings");
const { isLoggedIn } = require("../middleware");

// =====================================
// Booking Form
// =====================================

// Show booking form
router.get("/new", isLoggedIn, bookingsController.renderBookingForm);

// Create booking
router.post("/", isLoggedIn, bookingsController.createBooking);

// =====================================
// Guest Bookings
// =====================================

// My Bookings
router.get("/my-bookings", isLoggedIn, bookingsController.renderGuestBookings);

// =====================================
// Host Booking Requests
// =====================================

// All booking requests
router.get("/host", isLoggedIn, bookingsController.renderHostBookings);

// Accept booking
router.patch(
  "/:bookingId/accept",
  isLoggedIn,
  bookingsController.acceptBooking,
);

// Reject booking
router.patch(
  "/:bookingId/reject",
  isLoggedIn,
  bookingsController.rejectBooking,
);

module.exports = router;
