import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// News table for university news
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  date: text("date").notNull(),
  category: text("category").notNull(),
  categoryColor: text("category_color").notNull(),
  link: text("link").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertNewsSchema = createInsertSchema(news).pick({
  title: true,
  description: true,
  image: true,
  date: true,
  category: true,
  categoryColor: true,
  link: true,
});

// Departments table
export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  link: text("link").notNull()
});

export const insertDepartmentSchema = createInsertSchema(departments).pick({
  name: true,
  description: true,
  icon: true,
  link: true,
});

// Info cards for new students
export const infoCards = pgTable("info_cards", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  link: text("link").notNull()
});

export const insertInfoCardSchema = createInsertSchema(infoCards).pick({
  title: true,
  description: true,
  image: true,
  link: true,
});

// Carousel items
export const carouselItems = pgTable("carousel_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull()
});

export const insertCarouselItemSchema = createInsertSchema(carouselItems).pick({
  title: true,
  description: true,
  image: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;

export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type Department = typeof departments.$inferSelect;

export type InsertInfoCard = z.infer<typeof insertInfoCardSchema>;
export type InfoCard = typeof infoCards.$inferSelect;

export type InsertCarouselItem = z.infer<typeof insertCarouselItemSchema>;
export type CarouselItem = typeof carouselItems.$inferSelect;
