<script lang="ts" module>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { z } from 'zod';

	const schema = z.object({
		email: z.string().email()
	});
</script>

<script lang="ts">
	let email = $state('');
	let isSubmitting = $state(false);
	let attemptedSubmit = $state(false);

	let { onResetPassword }: { onResetPassword?: (detail: { email: string }) => void } = $props();

	function isValidEmail(value: string) {
		// Basic email pattern; replace with a stricter validator if needed
		return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
	}

	function isFormValid() {
		return schema.safeParse({ email }).success;
	}

	async function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		attemptedSubmit = true;
		if (!isFormValid()) return;

		isSubmitting = true;
		try {
			onResetPassword?.({ email });
			goto(resolve('/reset-password'));
			// Placeholder submission; wire up to your action/fetch when backend is ready
			await new Promise((r) => setTimeout(r, 700));
			email = '';
			attemptedSubmit = false;
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div
	class="mx-auto flex w-full max-w-md flex-col rounded-lg border border-gray-200 bg-white p-10 shadow-sm"
>
	<h1 class="text-4xl font-semibold tracking-tight text-foreground">Forgot your password?</h1>
	<p class="mt-2 text-muted-foreground">A code will be sent to your email to help reset password</p>

	<form class="mt-8 space-y-6" onsubmit={onSubmit}>
		<div class="space-y-2">
			<label for="email" class="mb-2 block text-sm font-medium text-foreground">Email Address</label
			>
			<div class="relative">
				<Input
					id="email"
					type="email"
					placeholder="Enter your email address"
					bind:value={email}
					aria-invalid={!isValidEmail(email) && (email.length > 0 || attemptedSubmit)}
				/>
				{#if (email.length > 0 || attemptedSubmit) && !isValidEmail(email)}
					<p class="mt-1 text-sm text-destructive">Please enter a valid email address</p>
				{/if}
			</div>
		</div>

		<div class="pt-0">
			<Button type="submit" class="w-full font-medium" disabled={!isFormValid() || isSubmitting}>
				Reset password
			</Button>
		</div>
	</form>

	<a
		href={resolve('/login')}
		class="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:underline"
	>
		<ArrowLeft class="h-4 w-4" />
		<span>Back to login</span>
	</a>
</div>
