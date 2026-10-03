// Where each kind of call is booked. Bookings themselves live in the scheduling
// service (calendar, invites, reminders); this site only links to it.
// Leave a link empty and its button shows "opening soon" instead.
export const booking = {
  // Free 10-minute call for individuals.
  person: '',
  // 30-minute call for companies; requests are confirmed by hand.
  company: '',
};
