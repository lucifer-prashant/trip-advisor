// src/app/actions/tourist-spots.ts
"use server" // This is a Server Action!

import { db } from "@/db"
import { touristSpots } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getSpotsForState(stateName: string) {
	try {
		const spots = await db.query.touristSpots.findMany({
			where: eq(touristSpots.state, stateName),
		})
		// The data is already in the right format, just need to rename imageUrl
		return spots.map((spot) => ({ ...spot, image: spot.imageUrl }))
	} catch (error) {
		console.error("Database Error:", error)
		return []
	}
}
