// src/app/api/chat/route.ts

import { NextResponse } from "next/server"

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

export async function POST(request: Request) {
	try {
		const openRouterKey = process.env.OPENROUTER_API_KEY
		const body = await request.json()
		const { messages } = body

		if (!openRouterKey) {
			throw new Error("OPENROUTER_API_KEY is not set in .env.local")
		}

		if (!messages) {
			return NextResponse.json(
				{ error: "Messages are required" },
				{ status: 400 }
			)
		}

		const systemPrompt =
			"You are a helpful and friendly travel assistant named 'TripBot'. You specialize in providing travel recommendations for India and the world. Keep your answers concise and friendly."
		const allMessages = [{ role: "system", content: systemPrompt }, ...messages]

		const response = await fetch(OPENROUTER_API_URL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${openRouterKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "mistralai/mistral-7b-instruct-free",
				messages: allMessages,
			}),
		})

		if (!response.ok) {
			const errorData = await response.json()
			console.error("OpenRouter API Error:", errorData)
			throw new Error(
				errorData.error?.message || "Failed to get response from OpenRouter"
			)
		}

		const data = await response.json()
		return NextResponse.json({ message: data.choices[0].message })
	} catch (error) {
		// The 'error' object is of type 'unknown'
		// Log the entire error object for better server-side debugging
		console.error("[CHAT_API_ERROR]", error)

		// Type guard to safely determine the error message for the client
		const errorMessage =
			error instanceof Error ? error.message : "An unexpected error occurred."

		return NextResponse.json(
			{ error: { message: errorMessage || "Internal Server Error" } },
			{ status: 500 }
		)
	}
}
