<script lang="ts">
	import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
	import MainSidebar from './MainSidebar.svelte';
	import Avatar from '@/components/ui/avatar/avatar.svelte';
	import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';

	let { children } = $props();
</script>

<SidebarProvider>
	<MainSidebar />
	<main class="flex-1">
		<div class="flex min-h-screen flex-col">
			<div class="flex items-center justify-between border-b border-border p-2">
				<SidebarTrigger />
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>ER</AvatarFallback>
				</Avatar>
			</div>
			<div class="flex-1 p-6">
				{@render children?.()}
			</div>
		</div>
	</main>
</SidebarProvider>
