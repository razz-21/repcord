<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import LoginForm from './LoginForm.svelte';

	function handleLogin() {
		goto(resolve('/main'));
	}
</script>

<div class="flex min-h-[calc(100vh-80px)] items-center justify-center py-8">
	<LoginForm onLogin={handleLogin} />
</div>
