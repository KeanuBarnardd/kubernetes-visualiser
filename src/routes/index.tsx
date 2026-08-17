import { createFileRoute } from "@tanstack/react-router";
import BackgroundDotGrid from "./-components/background-dot-grid";
import Navbar from "./-components/navbar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="w-screen h-screen p-4">
			<BackgroundDotGrid />
			<Navbar />
		</div>
	);
}
