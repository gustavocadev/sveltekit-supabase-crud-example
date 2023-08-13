<script lang="ts">
	import { enhance } from '$app/forms';
	export let data;
</script>

<div class="max-w-lg mx-auto">
	<h2 class="text-3xl font-bold">Update</h2>

	<form action="?/update" method="post" class="flex flex-col gap-4" use:enhance>
		<div class="flex flex-col gap-2">
			<label for="">Title</label>
			<input type="text" class="input bg-base-200" name="title" bind:value={data.data.title} />
		</div>

		<div class="flex flex-col gap-2">
			<label for="">Method</label>
			<input type="text" class="input bg-base-200" name="method" bind:value={data.data.method} />
		</div>

		<div class="flex flex-col gap-2">
			<label for="">Rating</label>
			<input type="number" class="input bg-base-200" name="rating" bind:value={data.data.rating} />
		</div>

		<button class="btn btn-primary" type="submit">Update Smoothie Recipe</button>
	</form>
</div>
