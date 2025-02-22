document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subscribe-btn");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            const plan = button.getAttribute("data-plan");
            alert(`Subscribing to ${plan} plan via Solana Wallet`);

            try {
                const phantom = window.solana;
                if (!phantom) throw new Error("Phantom Wallet not found");
                
                await phantom.connect();
                const publicKey = phantom.publicKey.toString();
                
                console.log(`Connected wallet: ${publicKey}`);
                alert(`Payment successful for ${plan} plan`);

            } catch (error) {
                console.error(error);
                alert("Transaction failed");
            }
        });
    });
});
