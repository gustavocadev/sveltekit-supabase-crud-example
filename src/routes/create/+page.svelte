<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="max-w-lg mx-auto">
	<h2 class="text-3xl font-bold">Create</h2>

	<form action="?/create" method="post" class="flex flex-col gap-4" use:enhance>
		<div class="flex flex-col gap-2">
			<label for="">Title</label>
			<input type="text" class="input bg-base-200" name="title" />
		</div>

		<div class="flex flex-col gap-2">
			<label for="">Method</label>
			<input type="text" class="input bg-base-200" name="method" />
		</div>

		<div class="flex flex-col gap-2">
			<label for="">Rating</label>
			<input type="number" class="input bg-base-200" name="rating" />
		</div>

		<button class="btn btn-primary">Create Smoothie Recipe</button>
	</form>
</div>
