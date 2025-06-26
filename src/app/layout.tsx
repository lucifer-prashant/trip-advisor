// src/app/layout.tsx

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FirebaseAuthProvider } from "@/components/FirebaseAuthProvider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AIAssistant from "@/components/AIAssistant" // <-- Is this import here?

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Trip Planner",
	description: "Plan your next adventure",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
				<FirebaseAuthProvider>
					<Header />
					<main className="flex-grow container mx-auto p-4">{children}</main>
					<Footer />
				</FirebaseAuthProvider>
				<AIAssistant /> {/* <-- Is this component tag here? */}
			</body>
		</html>
	)
}
