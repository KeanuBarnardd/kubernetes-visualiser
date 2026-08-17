export default function BackgroundDotGrid() {
	return (
		<div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--foreground),transparent_85%)_2px,transparent_2px)] bg-size-[30px_30px]" />
	);
}
