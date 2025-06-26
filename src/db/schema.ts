// src/db/schema.ts
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const touristSpots = pgTable("tourist_spots", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }).notNull(),
	description: text("description"),
	imageUrl: text("image_url").notNull(),
	state: varchar("state", { length: 256 }).notNull(),
})
