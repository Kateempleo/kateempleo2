document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Hide the form with a fade out effect
    const form = document.querySelector('.login-form');
    form.style.opacity = '0';
    form.style.transition = 'opacity 0.5s ease';
    
    // After form fades out, show thank you message with flower
    setTimeout(() => {
        form.innerHTML = `
            <div class="thank-you-message">
                <div class="flower">
                    <div class="center"></div>
                    <div class="petals"></div>
                    <div class="stem">
                        <div class="leaf leaf-1"></div>
                        <div class="leaf leaf-2"></div>
                    </div>
                </div>
                <i class="fas fa-check-circle"></i>
                <h2 class="glowing-text">Thank You for Logging In!</h2>
                <p class="wavey-text">
                    <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span>
                    <span>b</span><span>a</span><span>c</span><span>k</span>
                </p>
                <div class="loading-dots">
                    <span>Redirecting</span>
                    <span class="dots">...</span>
                </div>
            </div>
        `;
        form.style.opacity = '1';
    }, 500);
}); 