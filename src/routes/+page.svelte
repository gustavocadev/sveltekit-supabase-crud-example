<script lang="ts">
	import SmoothieCard from '$lib/components/SmoothieCard.svelte';

	export let data;
</script>

{#if !data.error}
	<div class="grid grid-cols-3 gap-4">
		{#each data.data as smoothie}
			<SmoothieCard {smoothie} />
		{/each}
	</div>
{:else}
	<p class="text-red-500">{data.error}</p>
{/if}
