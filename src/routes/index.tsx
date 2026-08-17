import { createFileRoute } from "@tanstack/react-router";
import BackgroundDotGrid from "./-components/background-dot-grid";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="w-screen h-screen">
			<BackgroundDotGrid />
		</div>
	);
}
