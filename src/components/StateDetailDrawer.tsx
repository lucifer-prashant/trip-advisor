// src/components/StateDetailDrawer.tsx

"use client"

import React, { useState, useEffect } from "react"
import { TouristSpot } from "@/services/api" // Import type from our new service
import { getSpotsForState } from "@/services/api" // Import the fetch function

// A simple 'X' icon component
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		stroke="currentColor"
		fill="currentColor"
		strokeWidth="0"
		viewBox="0 0 512 512"
		height="1em"
		width="1em"
		{...props}>
		<path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
	</svg>
)

// A simple loading spinner component
const Spinner = () => (
	<div className="flex justify-center items-center h-full">
		<div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
	</div>
)

interface StateDetailDrawerProps {
	isOpen: boolean
	onClose: () => void
	stateName: string | null
}

export const StateDetailDrawer = ({
	isOpen,
	onClose,
	stateName,
}: StateDetailDrawerProps) => {
	const [places, setPlaces] = useState<TouristSpot[]>([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// This function runs whenever the drawer is opened for a specific state
		if (isOpen && stateName) {
			const fetchPlaces = async () => {
				setIsLoading(true)
				const spots = await getSpotsForState(stateName)
				setPlaces(spots)
				setIsLoading(false)
			}
			fetchPlaces()
		}
	}, [isOpen, stateName]) // Dependencies: re-run when these change

	return (
		<div
			className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
				isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}>
			<div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
			<div
				className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}>
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-4 border-b">
						<h2 className="text-2xl font-bold text-gray-800">
							{stateName || "Select a State"}
						</h2>
						<button
							onClick={onClose}
							className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-label="Close panel">
							<CloseIcon className="w-6 h-6" />
						</button>
					</div>
					<div className="flex-grow p-4 overflow-y-auto">
						{isLoading ? (
							<Spinner />
						) : places.length > 0 ? (
							<ul className="space-y-4">
								{places.map((place) => (
									<li
										key={place.id}
										className="flex items-center p-3 space-x-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 cursor-pointer">
										<img
											src={place.image}
											alt={place.name}
											className="w-24 h-24 object-cover rounded-md"
										/>
										<div className="flex-1">
											<h3 className="font-semibold text-lg text-gray-900">
												{place.name}
											</h3>
											<p className="text-sm text-gray-600">
												{place.description}
											</p>
										</div>
									</li>
								))}
							</ul>
						) : (
							<div className="text-center text-gray-500 mt-10">
								<h3 className="text-xl font-semibold">No data available</h3>
								<p>Top tourist spots for {stateName} will be added soon!</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
