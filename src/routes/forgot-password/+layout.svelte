<script lang="ts">
	import recordLogo from '$lib/assets/logos/repcord-logo.svg';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col bg-gray-50">
	<div class="flex items-center border-b border-gray-200 bg-white px-2 py-4">
		<div class="mx-auto flex min-w-[1280px] items-center gap-2">
			<img src={recordLogo} alt="Record Logo" class="h-10 w-10" />
			<span class="text-lg font-bold">RepCord</span>
		</div>
	</div>
	{@render children()}
</div>
