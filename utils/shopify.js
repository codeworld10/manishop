import Client from 'shopify-buy';


// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'usman-branding.myshopify.com/',
    storefrontAccessToken: 'ad26dd4dcadb39de931866f85b66e852'
  });

  export {client}