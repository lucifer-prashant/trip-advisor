// src/components/Footer.tsx

const Footer = () => {
	return (
		<footer className="w-full bg-gray-100 border-t border-gray-200 mt-auto">
			<div className="container mx-auto px-6 py-4 text-center text-gray-600">
				<p>
					© {new Date().getFullYear()} TripAdvisor Clone. All Rights Reserved.
				</p>
				<p>Built with Next.js and Firebase</p>
			</div>
		</footer>
	)
}

export default Footer
