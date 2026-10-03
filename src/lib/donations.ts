// Voluntary donations. Payments happen on the payment provider's own page
// (Stripe Payment Links); this site only links to it.
// Leave a link empty and its button shows "opening soon" instead.
// Every amount is capped at 50 EUR.
export const MAX_EUR = 50;

export const donations = {
  // One-time gifts at fixed amounts.
  once: {
    5: '',
    10: '',
    25: '',
    50: '',
  },
  // A one-time link where the donor types any amount up to MAX_EUR
  // (a Stripe "customers choose what to pay" link with a 50 EUR maximum).
  onceCustom: '',
  // Monthly gifts at fixed amounts, cancellable at any time.
  monthly: {
    5: '',
    10: '',
    25: '',
    50: '',
  },
} as const;

export const amounts = [5, 10, 25, 50] as const;
