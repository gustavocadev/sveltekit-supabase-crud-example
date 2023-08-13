<script lang="ts">
	import { enhance } from '$app/forms';

	export let smoothie: {
		created_at: string;
		title: string;
		method: string;
		rating: number;
		id: number;
	};
</script>

<section class="bg-base-200 rounded p-4 flex flex-col gap-4">
	<h3 class="font-bold text-xl">{smoothie.title}</h3>
	<p>{smoothie.method}</p>
	<div>{smoothie.rating}</div>
	<div class="flex gap-4">
		<a class="btn btn-primary" href={`/${smoothie.id}`}>Editar</a>
		<form action="?/delete" method="post" use:enhance class="">
			<input type="hidden" name="id" value={smoothie.id} />
			<button class="btn btn-error" type="submit">Delete</button>
		</form>
	</div>
</section>
