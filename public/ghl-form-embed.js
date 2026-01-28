// Custom GHL Form Embedding Script

// Function to initialize the form
function initGHLForm() {
  // Find all GHL form iframes
  const iframes = document.querySelectorAll('iframe[data-form-id]');
  
  // Process each iframe
  iframes.forEach(iframe => {
    // Get the form ID
    const formId = iframe.getAttribute('data-form-id');
    
    // Skip if no form ID
    if (!formId) return;
    
    // Add message listener for iframe communication
    window.addEventListener('message', function(event) {
      // Check if the message is from the GHL form
      if (event.data && event.data.type === 'ghl-form-height') {
        // Find the iframe that matches the source
        const targetIframe = document.querySelector(`iframe[src*="${event.data.formId}"]`);
        
        // Update the iframe height if found
        if (targetIframe) {
          targetIframe.style.height = `${event.data.height}px`;
        }
      }
    });
    
    // Force transparent background on the iframe
    iframe.style.backgroundColor = 'transparent';
    
    // Add load event listener
    iframe.addEventListener('load', function() {
      try {
        // Try to access the iframe content (may fail due to cross-origin policy)
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        // Apply styles to make background transparent
        const style = iframeDoc.createElement('style');
        style.textContent = `
          body, html, .container, .row, .col, form, .form-group, .form-control {
            background-color: transparent !important;
            background: transparent !important;
          }
        `;
        iframeDoc.head.appendChild(style);
      } catch (e) {
        console.log('Cannot access iframe content due to cross-origin policy');
      }
    });
  });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGHLForm);

// Also initialize when the window loads (as a fallback)
window.addEventListener('load', initGHLForm);
