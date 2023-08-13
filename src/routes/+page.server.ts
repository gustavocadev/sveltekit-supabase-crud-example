import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

export const load = async ({ locals }) => {
	const smoothies = await locals.supabase.from('smoothies').select();

	return smoothies;
};

const deleteSmoothieSchema = z.object({
	id: z.number()
});

export const actions = {
	delete: async ({ request, locals }) => {
		const form = await superValidate(request, deleteSmoothieSchema);

		if (!form.valid) {
			console.log(form.data);
			return fail(500, {
				form
			});
		}

		await locals.supabase.from('smoothies').delete().eq('id', form.data.id);

		return {
			form
		};
	}
};
