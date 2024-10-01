import { integer, json, pgTable, serial, varchar, text, decimal } from "drizzle-orm/pg-core";

// Car Listing Table
export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  tagline: varchar("tagline"), // Optional, so no .nullable() needed
  originalPrice: decimal("originalPrice"), // Optional, so no .nullable() needed
  sellingPrice: decimal("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  make: varchar("make").notNull(),
  model: varchar("model").notNull(),
  year: varchar("year").notNull(),
  driveType: varchar("driveType").notNull(),
  transmission: varchar("transmission").notNull(),
  fuelType: varchar("fuelType").notNull(),
  mileage: integer("mileage").notNull(), // Assuming mileage is required
  engineSize: varchar("engineSize"), // Optional, so no .nullable() needed
  cylinder: varchar("cylinder"), // Optional, so no .nullable() needed
  color: varchar("color").notNull(),
  door: integer("door").notNull(), // Assuming door is an integer
  offerType: varchar("offerType"), // Optional, so no .nullable() needed
  vin: varchar("vin"), // Optional, so no .nullable() needed
  listingDescription: text("listingDescription").notNull(),
  features: json("features"), // Optional, so no .nullable() needed
  postedOn: varchar("postedOn").notNull(),
});

// Car Images Table
export const CarImages = pgTable("car_images", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  carListingId: integer("car_listing_id").notNull().references(() => CarListing.id), // Foreign key reference
});
