import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  properties: defineTable({
    title: v.string(),
    location: v.string(),
    price: v.string(),
    imageUrl: v.string(),
    createdAt: v.number(),
  }),
});
