// src/components/Header.tsx

"use client"

// 1. All the necessary imports are here
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "./FirebaseAuthProvider"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

const Header = () => {
	const { user } = useAuth()

	const handleSignIn = async () => {
		const provider = new GoogleAuthProvider()
		try {
			await signInWithPopup(auth, provider)
		} catch (error: any) {
			// This is the improved error handling
			if (error.code !== "auth/popup-closed-by-user") {
				console.error("Error signing in with Google", error)
			}
		}
	}

	const handleSignOut = async () => {
		try {
			await signOut(auth)
		} catch (error) {
			console.error("Error signing out", error)
		}
	}

	// 2. The full JSX structure is also required
	return (
		<header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
			<nav className="container mx-auto px-6 py-3 flex justify-between items-center">
				{/* Left Side: Logo */}
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/globe.svg"
						alt="Trip Advisor Logo"
						width={40}
						height={40}
					/>
					<span className="text-2xl font-bold text-black hidden sm:block">
						TripAdvisor
					</span>
				</Link>

				{/* Middle: Navigation Links */}
				<div className="hidden md:flex items-center space-x-8 text-sm font-bold text-gray-800">
					<Link href="#" className="hover:text-black">
						Discover
					</Link>
					<Link href="#" className="hover:text-black">
						Trips
					</Link>
					<Link href="#" className="hover:text-black">
						Review
					</Link>
					<Link href="#" className="hover:text-black">
						Forums
					</Link>
				</div>

				{/* Right Side: Auth Button */}
				<div className="flex items-center gap-4">
					<span className="text-sm font-bold hidden sm:block">INR</span>
					{user ? (
						// If user is signed in, show avatar and sign out
						<div className="flex items-center gap-2">
							<Image
								src={user.photoURL || "/default-avatar.png"}
								alt={user.displayName || "User"}
								width={32}
								height={32}
								className="rounded-full"
							/>
							<button
								onClick={handleSignOut}
								className="bg-black text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition-colors">
								Sign out
							</button>
						</div>
					) : (
						// If not signed in, show Sign In button
						<button
							onClick={handleSignIn}
							className="bg-black text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition-colors">
							Sign in
						</button>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Header
