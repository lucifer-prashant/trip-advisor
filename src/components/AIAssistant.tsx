// src/components/AIAssistant.tsx

"use client" // This directive is required at the very top

import { useState, useRef, useEffect } from "react" // Imports for React hooks

// A simple type definition for our chat messages
interface Message {
	role: "user" | "assistant"
	content: string
}

// The main component function that contains all the logic
const AIAssistant = () => {
	// All the state variables needed for the component to work
	const [isChatOpen, setIsChatOpen] = useState(false)
	const [input, setInput] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [messages, setMessages] = useState<Message[]>([])
	const chatEndRef = useRef<HTMLDivElement>(null)

	// The effect to auto-scroll the chat
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [messages])

	// The function to handle form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!input.trim() || isLoading) return

		const userMessage: Message = { role: "user", content: input }
		const newMessages = [...messages, userMessage]

		setMessages(newMessages)
		setInput("")
		setIsLoading(true)

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: newMessages }),
			})

			const data = await response.json()

			// Check for both network errors and API-level errors from our backend
			if (!response.ok) {
				// Use the error message from our backend if available
				throw new Error(data.error?.message || "An unknown error occurred")
			}

			setMessages((prev) => [...prev, data.message])
		} catch (error) {
			// No more 'any' type here
			// Log the full error for debugging purposes
			console.error("Error submitting chat message:", error)

			// Safely determine the message to show the user
			const errorMessageContent =
				error instanceof Error
					? error.message
					: "Sorry, I couldn't connect. Please try again."

			const errorMessage: Message = {
				role: "assistant",
				content: errorMessageContent,
			}
			setMessages((prev) => [...prev, errorMessage])
		} finally {
			setIsLoading(false)
		}
	}

	// The JSX that defines the HTML structure of the component
	return (
		<div className="fixed bottom-5 left-5 z-50">
			{isChatOpen && (
				<div className="w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col">
					<div className="bg-gray-800 text-white p-3 rounded-t-lg flex justify-between items-center">
						<h3 className="font-bold">TripBot Assistant</h3>
						<button
							onClick={() => setIsChatOpen(false)}
							className="text-2xl leading-none">
							×
						</button>
					</div>
					<div className="flex-1 p-4 overflow-y-auto">
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`my-2 p-2 rounded-lg max-w-[85%] break-words ${
									msg.role === "user"
										? "bg-blue-500 text-white self-end ml-auto"
										: "bg-gray-200 text-gray-800 self-start"
								}`}>
								{String(msg.content)}
							</div>
						))}
						{isLoading && (
							<div className="text-gray-500">TripBot is thinking...</div>
						)}
						<div ref={chatEndRef} />
					</div>
					<form onSubmit={handleSubmit} className="p-2 border-t">
						<div className="flex">
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Ask about your trip..."
								className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								disabled={isLoading}
							/>
							<button
								type="submit"
								className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 disabled:bg-blue-300"
								disabled={isLoading}>
								Send
							</button>
						</div>
					</form>
				</div>
			)}
			{!isChatOpen && (
				<button
					onClick={() => setIsChatOpen(true)}
					className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-blue-700 transition-transform hover:scale-110"
					aria-label="Open AI Assistant">
					✨
				</button>
			)}
		</div>
	)
}

// The export statement that allows other files to use this component
export default AIAssistant
