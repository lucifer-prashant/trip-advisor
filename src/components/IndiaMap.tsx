// src/components/IndiaMap.tsx

"use client"

import React, { useState, useCallback, useMemo, memo } from "react"
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from "react-simple-maps"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import { StateDetailDrawer } from "./StateDetailDrawer" // <-- IMPORT the drawer component

// --- TYPE DEFINITIONS ---
interface GeographyProperties {
	NAME_1?: string
	state_name?: string
	[key: string]: unknown
}

interface GeographyObject {
	rsmKey: string
	properties: GeographyProperties
}

interface MapStyle {
	default: {
		fill: string
		stroke: string
		strokeWidth: number
		outline: string
		cursor: string
	}
	hover: {
		fill: string
		stroke: string
		strokeWidth: number
		outline: string
		cursor: string
	}
	pressed: {
		fill: string
		stroke: string
		strokeWidth: number
		outline: string
	}
}

const INDIA_GEO_JSON_URL =
	"https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States"

// --- MEMOIZED GEOGRAPHY ---
// We add `handleStateClick` to its props and call it via `onClick`
const MemoizedGeography = memo(function MemoizedGeography({
	geo,
	hoveredState,
	mapStyles,
	handleMouseEnter,
	handleMouseLeave,
	handleStateClick, // <-- ADD THIS PROP
}: {
	geo: GeographyObject
	hoveredState: string
	mapStyles: MapStyle
	handleMouseEnter: (geo: GeographyObject) => void
	handleMouseLeave: () => void
	handleStateClick: (geo: GeographyObject) => void // <-- DEFINE ITS TYPE
}) {
	const stateName =
		geo.properties.NAME_1 || geo.properties.state_name || "Unknown State"
	const isHovered = hoveredState === stateName

	return (
		<Geography
			key={geo.rsmKey}
			geography={geo}
			data-tooltip-id="state-tooltip"
			data-tooltip-content={stateName}
			onMouseEnter={() => handleMouseEnter(geo)}
			onMouseLeave={handleMouseLeave}
			onClick={() => handleStateClick(geo)} // <-- BIND THE CLICK EVENT
			style={{
				default: {
					...mapStyles.default,
					fill: isHovered ? mapStyles.hover.fill : mapStyles.default.fill,
				},
				hover: mapStyles.hover,
				pressed: mapStyles.pressed,
			}}
		/>
	)
})

MemoizedGeography.displayName = "MemoizedGeography"

// --- MAIN INDIA MAP COMPONENT ---
const IndiaMap = () => {
	const [hoveredState, setHoveredState] = useState("")
	// --- NEW STATE TO MANAGE THE DRAWER ---
	const [selectedState, setSelectedState] = useState<GeographyObject | null>(
		null
	)

	const mapStyles: MapStyle = useMemo(
		() => ({
			default: {
				fill: "#DCE1E3",
				stroke: "#FFFFFF",
				strokeWidth: 0.5,
				outline: "none",
				cursor: "pointer",
			},
			hover: {
				fill: "#007BFF",
				stroke: "#FFFFFF",
				strokeWidth: 0.5,
				outline: "none",
				cursor: "pointer",
			},
			pressed: {
				fill: "#0056b3",
				stroke: "#FFFFFF",
				strokeWidth: 0.5,
				outline: "none",
			},
		}),
		[]
	)

	const handleMouseEnter = useCallback((geo: GeographyObject) => {
		const stateName =
			geo.properties.NAME_1 || geo.properties.state_name || "Unknown State"
		setHoveredState(stateName)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setHoveredState("")
	}, [])

	// --- NEW HANDLER FOR CLICKING A STATE ---
	const handleStateClick = useCallback((geo: GeographyObject) => {
		setSelectedState(geo) // Set the selected state to open the drawer
	}, [])

	// --- NEW HANDLER FOR CLOSING THE DRAWER ---
	const handleCloseDrawer = useCallback(() => {
		setSelectedState(null) // Clear the state to close the drawer
	}, [])

	const renderGeographies = useCallback(
		({ geographies }: { geographies: GeographyObject[] }) => {
			return geographies.map((geo) => (
				<MemoizedGeography
					key={geo.rsmKey}
					geo={geo}
					hoveredState={hoveredState}
					mapStyles={mapStyles}
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
					handleStateClick={handleStateClick} // <-- PASS THE CLICK HANDLER DOWN
				/>
			))
		},
		[
			hoveredState,
			mapStyles,
			handleMouseEnter,
			handleMouseLeave,
			handleStateClick,
		]
	)

	return (
		<div
			style={{
				width: "100%",
				maxWidth: "800px",
				border: "1px solid #E0E0E0",
				borderRadius: "8px",
				backgroundColor: "#f9f9f9",
			}}>
			<Tooltip
				id="state-tooltip"
				place="top"
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.9)",
					color: "#fff",
					borderRadius: "6px",
					padding: "8px 12px",
					zIndex: 1000,
				}}
			/>
			<ComposableMap
				projection="geoMercator"
				projectionConfig={{ scale: 900, center: [82, 22] }}
				width={800}
				height={600}
				style={{ width: "100%", height: "auto" }}>
				<ZoomableGroup center={[82, 22]} zoom={1} minZoom={0.7} maxZoom={5}>
					<Geographies geography={INDIA_GEO_JSON_URL}>
						{renderGeographies}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
			{/* --- RENDER THE DRAWER AND CONTROL IT WITH STATE --- */}
			<StateDetailDrawer
				isOpen={!!selectedState}
				onClose={handleCloseDrawer}
				stateName={selectedState?.properties.NAME_1 || null}
			/>
		</div>
	)
}

export default React.memo(IndiaMap)
