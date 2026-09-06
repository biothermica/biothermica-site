/**
 * Hides HTML elements after their expiration date.
 *
 * Add the `data-hide-me-on="YYYY-MM-DD"` attribute to any element
 * that should be hidden after the specified date.
 *
 * Example:
 *   <img
 *     data-hide-me-on="2026-09-01"
 *     src="/media/biothermica-au-congres-genial-de-lAIMQ.jpeg"
 *     ...
 *   />
 *
 * The element is hidden when the page loads and the expiration date
 * has already passed.
 *
 * Use this functionality to display the specific event image or content
 *  that has to be hidden when event date is passed.
 */
document.querySelectorAll('[data-hide-me-on]').forEach((element) => {
  const expiryDate = element.dataset.hideMeOn;

  // Parse as a local date to avoid timezone issues
  const [year, month, day] = expiryDate.split('-').map(Number);
  const expiry = new Date(year, month - 1, day);

  // Today, with the time removed
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (expiry < today) {
    element.style.display = 'none';
  }

});
