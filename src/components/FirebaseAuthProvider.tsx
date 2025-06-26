// src/components/FirebaseAuthProvider.tsx

"use client" // This must be a Client Component

import { auth } from "@/lib/firebase" // Import the 'auth' object we created
import { onAuthStateChanged, User } from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"

// Create a React Context to hold the authentication state.
// It will hold an object with a 'user' property, which can be a Firebase User object or null.
const AuthContext = createContext<{ user: User | null }>({ user: null })

// This is the provider component that will wrap your application.
export const FirebaseAuthProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	// State to store the current user object.
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true) // Add a loading state

	useEffect(() => {
		// onAuthStateChanged is a Firebase listener that triggers whenever
		// the user's sign-in state changes.
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// When the listener fires, we update our state with the new user.
			// 'currentUser' will be the User object if signed in, or null if signed out.
			setUser(currentUser)
			setLoading(false) // Set loading to false once we have the user status
		})

		// This is a cleanup function. When the component unmounts (e.g., user
		// navigates away), it unsubscribes from the listener to prevent memory leaks.
		return () => unsubscribe()
	}, []) // The empty dependency array [] means this effect runs only once on mount.

	// We provide the 'user' state to all children of this component.
	// We also handle the initial loading state.
	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	)
}

// This is a custom hook that makes it easy for other components
// to access the user data without having to use useContext directly.
export const useAuth = () => useContext(AuthContext)
