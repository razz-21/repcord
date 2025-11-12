<script lang="ts">
	import type { Customer } from '@/models/customers';
	import type { Component } from 'svelte';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import CircleXIcon from '@lucide/svelte/icons/circle-x';
	import LoaderIcon from '@lucide/svelte/icons/loader';
	import ArchiveIcon from '@lucide/svelte/icons/archive';

	type Props = {
		status: Customer['status'];
	};

	let { status }: Props = $props();

	const Icon = $derived(getStatusIcon());

	function getStatusIcon() {
		switch (status) {
			case 'active':
				return CircleCheckIcon;
			case 'inactive':
				return CircleXIcon;
			case 'pending':
				return LoaderIcon;
			case 'archived':
				return ArchiveIcon;
		}
	}

	function getColorClass() {
		switch (status) {
			case 'active':
				return 'fill-green-500 text-white';
			case 'inactive':
				return 'fill-red-500 text-white';
			case 'pending':
				return '';
			case 'archived':
				return 'fill-gray-500 text-white';
		}
	}
</script>

<div
	class="flex w-fit items-center gap-1 rounded-full border border-gray-200 px-2 py-1 text-xs text-muted-foreground"
>
	<Icon class="size-3 {getColorClass()}" />
	<span class="capitalize">{status}</span>
</div>
