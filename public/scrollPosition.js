// Store the scroll position when the page is refreshed
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  });
  
  // Restore the scroll position when the page loads
  window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  });
  