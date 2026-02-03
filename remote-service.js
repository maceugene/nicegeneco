// 1. ADD THE STYLES (CSS) 
const style = document.createElement('style');
style.textContent = `
    .remote-popup {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
        border-top: 5px solid #0b3d91;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        font-family: system-ui, -apple-system, sans-serif;
        transform: translateY(150%); /* Hidden by default */
    }
    .popup-header {
        background: #0b3d91;
        color: white;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
    }
    .popup-controls button {
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: 8px;
        font-size: 14px;
        opacity: 0.8;
    }
    .popup-body { padding: 20px; }
    .popup-body p { font-size: 14px; text-align: justify; color: #333; margin-bottom: 15px; line-height: 1.5; }
    .popup-btn {
        display: block;
        text-align: center;
        background: #0f6cd9;
        color: white;
        padding: 10px;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        transition: 0.3s;
    }
    .popup-btn:hover { background: #0b3d91; }
    
    /* Launcher and Blinking Arrow */
    .popup-launcher-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        z-index: 9998;
        text-align: right;
    }
    .popup-launcher {
        background: #0b3d91;
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        font-weight: 600;
        display: inline-block;
    }
    .blinking-arrow {
        color: #89fc05;
        font-size: 24px;
        display: block;
        margin-bottom: 5px;
        margin-right: 25px;
        animation: blink-arrow 1s infinite;
    }
    @keyframes blink-arrow {
        0% { opacity: 1; transform: translateY(0); }
        50% { opacity: 0.2; transform: translateY(5px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 480px) { .remote-popup { width: 90%; right: 5%; left: 5%; } 
                // <button onclick="closePopup()" title="Close"><i class="fas fa-times"></i></button>
    }
`;
document.head.appendChild(style);

// 2. ADD THE HTML STRUCTURE
const popupHTML = `
<div id="remote-popup" class="remote-popup">
    <div class="popup-header">
        <span><i class="fas fa-desktop"></i> Special Service for you...</span>
        <div class="popup-controls">
            <button onclick="minimizePopup()" title="Minimize"><i class="fas fa-minus"></i></button>
            
        </div>
    </div>
    <div id="popup-content" class="popup-body">
        <p><strong>Hi, do you care about Remote System Configuration and Software Installation services? </strong></p>
        <p>Welcome to NICEGENE TECHNOLOGIES, your emerging IT solutions provider in the heart of Lagos. </p>
        <p>Through our Remote services, we setup your system and intall softwares remotely for you. Our expert team provides comprehensive setups directly to your device via secure remote technology. Connect with us today to explore our interesting & innovative IT solutions tailored to your needs. </p>
        <a href="https://nicegeneco.com/contact/" class="popup-btn">Contact Us Now</a>
    </div>
</div>
<div id="popup-launcher-container" class="popup-launcher-container">
    <i class="fas fa-arrow-down blinking-arrow"></i>
    <div class="popup-launcher" onclick="showPopup()">
        <i class="fas fa-headset"></i> Remote Support
    </div>
</div>`;
document.body.insertAdjacentHTML('beforeend', popupHTML);

// 3. LOGIC (FUNCTIONS)
window.closePopup = function() {
    document.getElementById('remote-popup').style.display = 'none';
    document.getElementById('popup-launcher-container').style.display = 'none';
};

window.minimizePopup = function() {
    document.getElementById('remote-popup').style.transform = 'translateY(150%)';
    setTimeout(() => {
        document.getElementById('popup-launcher-container').style.display = 'block';
    }, 300);
};

window.showPopup = function() {
    document.getElementById('remote-popup').style.transform = 'translateY(0)';
    document.getElementById('popup-launcher-container').style.display = 'none';
};

// Start in minimized state after 2 seconds
setTimeout(() => {
    document.getElementById('popup-launcher-container').style.display = 'block';
}, 2000);