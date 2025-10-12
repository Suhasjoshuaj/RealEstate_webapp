import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to add a property
export const addProperty = mutation({
  args: {
    title: v.string(),
    location: v.string(),
    price: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const propertyId = await ctx.db.insert("properties", {
      title: args.title,
      location: args.location,
      price: args.price,
      imageUrl: args.imageUrl,
      createdAt: Date.now(),
    });
    return propertyId;
  },
});

// Query to list all properties
export const listProperties = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("properties").order("desc").collect();
  },
});
