import { fail, type Actions, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async ({ locals, params }) => {
	const smoothie = await locals.supabase.from('smoothies').select().eq('id', params.id).single();
	return smoothie;
};

const updateSmoothieSchema = z.object({
	title: z.string(),
	method: z.string(),
	rating: z.number()
});

export const actions = {
	update: async ({ locals, request, params }) => {
		const form = await superValidate(request, updateSmoothieSchema);

		if (!form.valid) {
			return fail(500, {
				form
			});
		}

		await locals.supabase
			.from('smoothies')
			.update({
				title: form.data.title,
				method: form.data.method,
				rating: form.data.rating
			})
			.eq('id', params.id);

		throw redirect(303, '/');
	}
} satisfies Actions;
