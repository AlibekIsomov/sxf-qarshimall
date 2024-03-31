document.addEventListener("DOMContentLoaded", function() {
    // Show loading indicator
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';
  
    // Load content
    setTimeout(() => {
      // Hide loading indicator
      loadingOverlay.style.display = 'none';
  
      // Show content
      const content = document.getElementById('content');
      content.style.display = 'block';
    }, 3000); // Example delay of 3 seconds
  });
  