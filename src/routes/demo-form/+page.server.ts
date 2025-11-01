import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { z } from 'zod';
import { zod4 } from 'sveltekit-superforms/adapters';

const schema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	age: z.coerce.number().int().min(18, { message: 'You must be 18 or older' }).max(120)
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(schema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(schema));
		if (!form.valid) {
			return { form };
		}

		// Normally you would persist data here.
		// We set a success message to demonstrate a valid submission.
		form.message = 'Form submitted successfully!';
		return { form };
	}
};
