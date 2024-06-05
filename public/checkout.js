// This is your test publishable API key.
const stripe = Stripe("pk_test_1y7kuAfVrQhXynntgaQrXt796TDmBcIVTVknoO1jqtlVZ9TM0XdDe9227hYSxBjQRU9p9CYqAu9WCwbQQN8gNrHEA00pnnAeURF");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}