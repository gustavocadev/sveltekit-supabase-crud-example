import { fail, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const createSmoothieSchema = z.object({
	title: z.string(),
	method: z.string(),
	rating: z.number()
});

export const actions = {
	create: async ({ locals, request }) => {
		const form = await superValidate(request, createSmoothieSchema);

		if (!form.valid) {
			console.log(form.data);
			return fail(500, {
				form
			});
		}

		const smoothies = await locals.supabase.from('smoothies').insert({
			title: form.data.title,
			method: form.data.method,
			rating: form.data.rating
		});

		return smoothies;
	}
} satisfies Actions;
