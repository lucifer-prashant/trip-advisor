// src/app/page.tsx

import IndiaMap from "@/components/IndiaMap" // Assuming this is the correct path

export default function HomePage() {
	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold text-gray-800">
				Plan Your Next Adventure
			</h1>
			<p className="text-lg text-gray-600 mt-2">
				Zoom, pan, and hover over a state to begin exploring
			</p>

			{/* The map component takes center stage */}
			<div className="mt-8">
				<IndiaMap />
			</div>
		</div>
	)
}
