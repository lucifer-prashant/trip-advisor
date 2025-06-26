// src/app/actions/tourist-spots.ts
"use server"

import { db } from "@/db"
import { touristSpots } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getSpotsForState(stateName: string) {
	try {
		console.log(`[SERVER ACTION] Fetching spots for state: ${stateName}`) // <-- ADD THIS
		const spots = await db.query.touristSpots.findMany({
			where: eq(touristSpots.state, stateName),
		})
		console.log(`[SERVER ACTION] Found ${spots.length} spots.`) // <-- AND THIS
		return spots.map((spot) => ({ ...spot, image: spot.imageUrl }))
	} catch (error) {
		console.error("Database Error:", error)
		return []
	}
}
