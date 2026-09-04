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
