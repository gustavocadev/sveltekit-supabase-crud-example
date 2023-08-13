<script>
	import '../app.postcss';
</script>

<nav class="flex flex-col justify-center items-center gap-4 p-2 bg-[#19A692]">
	<h1 class="text-2xl font-bold">Supa Smoothies</h1>
	<div class="flex gap-4">
		<a href="/" class="link">Home</a>
		<a href="/create/" class="link">Create New smoothie</a>
	</div>
</nav>
<main class="container mx-auto py-4">
	<slot />
</main>
