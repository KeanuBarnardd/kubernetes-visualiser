<script lang="ts">
import "./layout.css";
import favicon from "$lib/assets/favicon.svg";
import Button from "$lib/components/ui/button/button.svelte";

let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>


<div class="flex flex-col min-h-screen ">
	<nav>
		Hello this is the docs
		<Button>Hello this is a button</Button>
	</nav>
	<main class="flex-1">
		{@render children()}
	</main>
</div>
