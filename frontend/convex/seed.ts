// convex/seed.ts
import { mutation } from "./_generated/server";

export const seedProperties = mutation(async (ctx) => {
  // Insert demo properties
  await ctx.db.insert("properties", {
    title: "Foreign Investments",
    location: "Middle East",
    price: "1 Cr",
    imageUrl: "https://res.cloudinary.com/dtb0eiltu/image/upload/dubai_investment_disrgp.png",
    createdAt: Date.now(),
  });

  await ctx.db.insert("properties", {
    title: "Modern Apartments",
    location: "Hyderabd, Vizag",
    price: "45 Lakh",
    imageUrl: "https://res.cloudinary.com/dtb0eiltu/image/upload/Modern-Apartments_dzdtal.jpg",
    createdAt: Date.now(),
  });

  await ctx.db.insert("properties", {
    title: "High-rise Apartments",
    location: "Hyderabd, Vizag",
    price: "80 Lakh",
    imageUrl: "https://res.cloudinary.com/dtb0eiltu/image/upload/High-rise_vufv40.png",
    createdAt: Date.now(),
  });

  await ctx.db.insert("properties", {
    title: "Commercial Complex",
    location: "Hyderabad",
    price: "60 Lakh",
    imageUrl: "https://res.cloudinary.com/dtb0eiltu/image/upload/Commercial_Complex_xbqdzz.jpg",
    createdAt: Date.now(),
  });

  await ctx.db.insert("properties", {
    title: "Luxury Villas",
    location: "Hyderabad, Vizag",
    price: "1 Cr",
    imageUrl: "https://res.cloudinary.com/dtb0eiltu/image/upload/Luxury_Villa_pscies.jpg",
    createdAt: Date.now(),
  });

  return "✅ Properties seeded successfully!";
});
