<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '@/components/ui/dropdown-menu';
	import { ArchiveIcon, EllipsisVerticalIcon, EyeIcon } from 'lucide-svelte';
	import DropdownMenuGroup from '@/components/ui/dropdown-menu/dropdown-menu-group.svelte';
	import DropdownMenuLabel from '@/components/ui/dropdown-menu/dropdown-menu-label.svelte';
	import type { Customer } from '@/models/customers';

	let { customer }: { customer: Customer } = $props();
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} type="button" variant="ghost" size="icon" class="relative size-8 p-0">
				<span class="sr-only">Open menu</span>
				<EllipsisVerticalIcon class="size-4" />
			</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="border-border">
		<DropdownMenuGroup>
			<DropdownMenuLabel>Actions</DropdownMenuLabel>
			<DropdownMenuItem>
				<EyeIcon class="size-4" />
				<span>View</span>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<ArchiveIcon class="size-4" />
				<span>Archive</span>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
