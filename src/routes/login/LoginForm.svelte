<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Eye, EyeOff } from 'lucide-svelte';
	import { resolve } from '$app/paths';

	let { onLogin }: { onLogin?: () => void } = $props();

	let email = $state('');
	let password = $state('');
	let showPassword = $state(false);
	let rememberMe = $state(false);

	function handleLogin() {
		onLogin?.();
	}
</script>

<div
	class="mx-auto flex w-full max-w-md flex-col rounded-lg border border-gray-200 bg-white p-10 shadow-sm"
>
	<h1 class="mb-2 text-3xl font-bold text-foreground">Login</h1>
	<p class="mb-6 text-base text-foreground">Hi, Welcome back 👋</p>

	<div class="mb-4">
		<label for="email" class="mb-2 block text-sm font-medium text-foreground"> Email </label>
		<Input
			id="email"
			type="email"
			placeholder="E.g. johndoe@email.com"
			bind:value={email}
			class="w-full"
		/>
	</div>

	<div class="mb-4">
		<label for="password" class="mb-2 block text-sm font-medium text-foreground"> Password </label>
		<div class="relative">
			<Input
				id="password"
				type={showPassword ? 'text' : 'password'}
				placeholder="Enter your password"
				bind:value={password}
				class="w-full pr-10"
			/>
			<button
				type="button"
				class="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
				onclick={() => (showPassword = !showPassword)}
				aria-label={showPassword ? 'Hide password' : 'Show password'}
			>
				{#if showPassword}
					<EyeOff class="h-5 w-5" />
				{:else}
					<Eye class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	<div class="mb-6 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<Checkbox id="remember" bind:checked={rememberMe} />
			<label for="remember" class="cursor-pointer text-sm font-medium text-foreground">
				Remember Me
			</label>
		</div>
		<a href={resolve('/forgot-password')} class="text-sm text-blue-600 hover:underline">
			Forgot Password?
		</a>
	</div>

	<Button type="button" onclick={handleLogin} class="w-full text-base font-medium">Login</Button>
</div>
