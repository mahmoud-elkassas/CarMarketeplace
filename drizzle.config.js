/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://CarMarketplace_owner:SAIfJvcP1jg8@ep-orange-field-a5kyj5er-pooler.us-east-2.aws.neon.tech/CarMarketplace?sslmode=require',
  },
};
