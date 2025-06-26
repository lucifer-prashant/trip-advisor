// src/db/seed.ts
import { db } from "@vercel/postgres"
// import { touristSpots } from "./schema"
import * as dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

const spotsToSeed = [
	{
		name: "Hawa Mahal",
		description: "The iconic 'Palace of Winds' in Jaipur.",
		imageUrl:
			"https://images.unsplash.com/photo-1599661046827-dac2a412cd16?w=400",
		state: "Rajasthan",
	},
	{
		name: "Mehrangarh Fort",
		description: "A majestic fort overlooking the blue city of Jodhpur.",
		imageUrl:
			"https://images.unsplash.com/photo-1603787492367-983907a33162?w=400",
		state: "Rajasthan",
	},
	{
		name: "Baga Beach",
		description: "Famous for its vibrant nightlife, water sports, and shacks.",
		imageUrl:
			"https://images.unsplash.com/photo-1590379912648-a027e0242517?w=400",
		state: "Goa",
	},
	{
		name: "Alleppey Backwaters",
		description: "Experience serene houseboat cruises through tranquil canals.",
		imageUrl:
			"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400",
		state: "Kerala",
	},
]

async function seed() {
	const client = await db.connect()
	console.log("Seeding database...")

	// Create the table if it doesn't exist
	await client.sql`
    CREATE TABLE IF NOT EXISTS tourist_spots (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      description TEXT,
      image_url TEXT NOT NULL,
      state VARCHAR(256) NOT NULL
    );
  `

	for (const spot of spotsToSeed) {
		await client.sql`
      INSERT INTO tourist_spots (name, description, image_url, state)
      VALUES (${spot.name}, ${spot.description}, ${spot.imageUrl}, ${spot.state})
      ON CONFLICT (id) DO NOTHING;
    `
	}

	console.log("Seeding complete!")
}

seed().catch((err) => {
	console.error("Error during seeding:", err)
	process.exit(1)
})
