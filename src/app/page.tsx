// src/app/page.tsx

import IndiaMap from "@/components/IndiaMap"

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-4 sm:p-8">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800">
					Plan Your Next Adventure
				</h1>
				<p className="text-lg text-gray-600 mt-2">
					Zoom, pan, and hover over a state to begin exploring
				</p>
			</div>

			{/* The map component will now take up the available width */}
			<div className="w-full max-w-4xl">
				<IndiaMap />
			</div>
		</main>
	)
}
