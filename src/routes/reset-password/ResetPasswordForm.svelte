<script lang="ts" module>
	const schema = z
		.object({
			pin: z
				.number()
				.min(100000, 'PIN must be exactly 6 digits')
				.max(999999, 'PIN must be exactly 6 digits'),
			password: z
				.string()
				.min(8, 'Password must be at least 8 characters')
				.max(32, 'Password must be at most 32 characters'),
			confirmPassword: z
				.string()
				.min(8, 'Password must be at least 8 characters')
				.max(32, 'Password must be at most 32 characters')
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords do not match',
			path: ['confirmPassword']
		});
</script>

<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { z } from 'zod';

	let pin = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let isSubmitting = $state(false);

	let errors: { pin?: string; password?: string; confirmPassword?: string } = $state({});
	let attemptedSubmit = $state(false);

	$effect(() => {
		const result = schema.safeParse({ pin, password, confirmPassword });
		const newErrors: { pin?: string; password?: string; confirmPassword?: string } = {};
		if (!result.success) {
			for (const issue of result.error.issues) {
				const key = issue.path[0] as 'pin' | 'password' | 'confirmPassword';
				if (!newErrors[key]) newErrors[key] = issue.message;
			}
		}
		errors = newErrors;
	});

	function isFormValid() {
		return schema.safeParse({ pin, password, confirmPassword }).success;
	}

	async function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		attemptedSubmit = true;

		if (!isFormValid()) return;
		isSubmitting = true;

		try {
			// Placeholder submission. Replace with real action/fetch when backend is ready.
			await new Promise((r) => setTimeout(r, 800));
			// Reset fields on success
			pin = '';
			password = '';
			confirmPassword = '';
			errors = {};
			attemptedSubmit = false;
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div
	class="mx-auto flex w-full max-w-md flex-col rounded-lg border border-gray-200 bg-white p-10 shadow-sm"
>
	<h1 class="text-4xl font-semibold tracking-tight text-foreground">Reset Password</h1>
	<p class="mt-2 text-muted-foreground">
		Please enter your password reset pin and set a new password
	</p>

	<form class="mt-8 space-y-6" onsubmit={onSubmit}>
		<div class="space-y-2">
			<label for="pin" class="mb-2 block text-sm font-medium text-foreground"
				>Password Reset Pin</label
			>
			<div class="relative">
				<Input
					id="pin"
					type="number"
					inputmode="numeric"
					pattern="\\d*"
					placeholder="123456"
					bind:value={pin}
					aria-invalid={Boolean(errors.pin) && (pin.length > 0 || attemptedSubmit)}
				/>
				{#if (pin.length > 0 || attemptedSubmit) && errors.pin}
					<p class="mt-1 text-sm text-destructive">{errors.pin}</p>
				{/if}
			</div>
		</div>

		<div class="space-y-2">
			<label for="new-password" class="mb-2 block text-sm font-medium text-foreground"
				>New Password</label
			>
			<div class="relative">
				<Input
					id="new-password"
					type="password"
					placeholder="••••••••"
					bind:value={password}
					aria-invalid={Boolean(errors.password) && (password.length > 0 || attemptedSubmit)}
				/>
				{#if (password.length > 0 || attemptedSubmit) && errors.password}
					<p class="mt-1 text-sm text-destructive">{errors.password}</p>
				{/if}
			</div>
		</div>

		<div class="space-y-2">
			<label for="confirm-password" class="mb-2 block text-sm font-medium text-foreground"
				>Re-type New Password</label
			>
			<div class="relative">
				<Input
					id="confirm-password"
					type="password"
					placeholder="••••••••"
					bind:value={confirmPassword}
					aria-invalid={Boolean(errors.confirmPassword) &&
						(confirmPassword.length > 0 || attemptedSubmit)}
				/>
				{#if (confirmPassword.length > 0 || attemptedSubmit) && errors.confirmPassword}
					<p class="mt-1 text-sm text-destructive">{errors.confirmPassword}</p>
				{/if}
			</div>
		</div>

		<div class="pt-2">
			<Button type="submit" class="w-full font-medium" disabled={!isFormValid() || isSubmitting}>
				Reset Password
			</Button>
		</div>
	</form>
</div>
