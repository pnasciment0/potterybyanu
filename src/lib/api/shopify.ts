import axios from "axios";

const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

const shopifyClient = axios.create({
  baseURL: `https://${SHOPIFY_STORE_URL}/admin/api/2024-01/`,
  headers: {
    "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

// Example: Fetch products
export const getProducts = async () => {
  try {
    const response = await shopifyClient.get("products.json");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

