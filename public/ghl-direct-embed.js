<script>
/**
 * GHL Auto Google Sign-In Script - Direct Embed Version
 * Paste this entire code into GHL Settings → White Label → Custom JavaScript
 */

(function() {
    'use strict';
    
    console.log('GHL Auto Google Sign-In Script loaded (Direct Embed)');
    
    // Configuration
    const CONFIG = {
        googleButtonSelectors: [
            'button[data-testid="google-signin"]',
            'button:contains("Sign in with Google")',
            'button:contains("Continue with Google")',
            '.google-signin-button',
            '[class*="google"]',
            'button[class*="google"]',
            'div[class*="google"] button',
            'button'
        ],
        maxWaitTime: 10000,
        checkInterval: 500,
        triggerParams: ['auto_google', 'from_signup', 'google_redirect'],
        triggerReferrers: ['localhost:8080', 'aha-innovations.com']
    };
    
    // Check if auto-signin should be triggered
    function shouldTriggerAutoSignin() {
        const urlParams = new URLSearchParams(window.location.search);
        const referrer = document.referrer;
        
        console.log('Checking auto-signin conditions:', {
            urlParams: Object.fromEntries(urlParams),
            referrer: referrer
        });
        
        // Check URL parameters
        for (const param of CONFIG.triggerParams) {
            if (urlParams.has(param)) {
                console.log(`Auto-signin triggered by URL parameter: ${param}`);
                return true;
            }
        }
        
        // Check referrer
        for (const domain of CONFIG.triggerReferrers) {
            if (referrer.includes(domain)) {
                console.log(`Auto-signin triggered by referrer: ${domain}`);
                return true;
            }
        }
        
        // Check if email is prefilled
        const emailField = document.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            console.log('Auto-signin triggered by prefilled email');
            return true;
        }
        
        return false;
    }
    
    // Find the Google sign-in button
    function findGoogleButton() {
        for (const selector of CONFIG.googleButtonSelectors) {
            let elements;
            
            if (selector.includes(':contains(')) {
                const text = selector.match(/:contains\("([^"]+)"\)/)[1];
                elements = Array.from(document.querySelectorAll('button')).filter(btn => 
                    btn.textContent.includes(text)
                );
            } else {
                elements = document.querySelectorAll(selector);
            }
            
            if (elements.length > 0) {
                for (const element of elements) {
                    if (element.offsetParent !== null) {
                        console.log(`Found Google button with selector: ${selector}`);
                        return element;
                    }
                }
            }
        }
        return null;
    }
    
    // Show loading indicator
    function showLoadingIndicator() {
        const overlay = document.createElement('div');
        overlay.id = 'auto-signin-overlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.8); display: flex; align-items: center;
            justify-content: center; z-index: 10000; font-family: Arial, sans-serif;
        `;
        
        overlay.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 10px; text-align: center; max-width: 400px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #dc2626; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <h3 style="margin: 0 0 10px; color: #333;">Signing you in...</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">Automatically continuing with Google authentication</p>
            </div>
            <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            const existingOverlay = document.getElementById('auto-signin-overlay');
            if (existingOverlay) existingOverlay.remove();
        }, 5000);
    }
    
    // Click the Google button
    function clickGoogleButton(button) {
        console.log('Clicking Google sign-in button');
        showLoadingIndicator();
        
        setTimeout(() => {
            if (button.click) button.click();
            
            const clickEvent = new MouseEvent('click', {
                bubbles: true, cancelable: true, view: window
            });
            button.dispatchEvent(clickEvent);
            
            button.focus();
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true
            });
            button.dispatchEvent(enterEvent);
        }, 1000);
    }
    
    // Main function
    function attemptAutoSignin() {
        if (!shouldTriggerAutoSignin()) {
            console.log('Auto-signin not triggered');
            return;
        }
        
        console.log('Attempting auto Google sign-in...');
        
        let attempts = 0;
        const maxAttempts = CONFIG.maxWaitTime / CONFIG.checkInterval;
        
        const checkForButton = setInterval(() => {
            attempts++;
            console.log(`Looking for Google button (attempt ${attempts}/${maxAttempts})`);
            
            const googleButton = findGoogleButton();
            
            if (googleButton) {
                clearInterval(checkForButton);
                clickGoogleButton(googleButton);
                return;
            }
            
            if (attempts >= maxAttempts) {
                clearInterval(checkForButton);
                console.log('Auto-signin timeout - Google button not found');
            }
        }, CONFIG.checkInterval);
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attemptAutoSignin);
    } else {
        attemptAutoSignin();
    }
    
    setTimeout(attemptAutoSignin, 2000);
})();
</script>
