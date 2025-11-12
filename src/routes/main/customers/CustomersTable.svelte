<script lang="ts" module>
	import { createSvelteTable, FlexRender } from '@/components/ui/data-table';
	import { TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
	import Table from '@/components/ui/table/table.svelte';
	import {
		getCoreRowModel,
		getPaginationRowModel,
		type ColumnDef,
		type PaginationState,
		type Updater
	} from '@tanstack/table-core';

	type CustomersTableProps<TData, TValue> = {
		columns: ColumnDef<TData, TValue>[];
		data: TData[];
	};
</script>

<script lang="ts" generics="TData, TValue">
	import TableHeader from '@/components/ui/table/table-header.svelte';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
	import type { CustomerStatus } from '@/models/customers';
	import InputGroup from '@/components/ui/input-group/input-group.svelte';
	import InputGroupInput from '@/components/ui/input-group/input-group-input.svelte';
	import InputGroupAddon from '@/components/ui/input-group/input-group-addon.svelte';
	import { SearchIcon } from 'lucide-svelte';
	import Button from '@/components/ui/button/button.svelte';

	let { columns, data }: CustomersTableProps<TData, TValue> = $props();

	let customerStatuses = $state<{ label: string; value: CustomerStatus }[]>([
		{ label: 'Active', value: 'active' },
		{ label: 'Inactive', value: 'inactive' },
		{ label: 'Pending', value: 'pending' },
		{ label: 'Archived', value: 'archived' }
	]);
	let selectedCustomerStatus = $state<CustomerStatus | undefined>(undefined);
	let customerStatusTriggerContent = $derived(
		customerStatuses.find((status) => status.value === selectedCustomerStatus)?.label ?? 'All'
	);

	let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get pagination() {
				return pagination;
			}
		},
		onPaginationChange: (updater: Updater<PaginationState>) => {
			if (typeof updater === 'function') {
				pagination = updater(pagination);
			} else {
				pagination = updater;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel()
	});
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-2">
		<InputGroup class="w-2/8">
			<InputGroupInput type="text" placeholder="Search by name" />
			<InputGroupAddon>
				<SearchIcon class="size-4 text-muted-foreground" />
			</InputGroupAddon>
		</InputGroup>
		<Select bind:value={selectedCustomerStatus} type="single" name="customer-status">
			<SelectTrigger class="w-1/8 bg-white">
				{customerStatusTriggerContent}
			</SelectTrigger>
			<SelectContent class="border-border">
				{#each customerStatuses as status (status.value)}
					<SelectItem value={status.value}>{status.label}</SelectItem>
				{/each}
			</SelectContent>
		</Select>
	</div>
	<div class="flex flex-col">
		<div class="rounded-md border border-border">
			<Table>
				<TableHeader class="bg-gray-200">
					{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
						<TableRow class="border-b border-border">
							{#each headerGroup.headers as header (header.id)}
								<TableHead>{header.column.columnDef.header}</TableHead>
							{/each}
						</TableRow>
					{/each}
				</TableHeader>
				<TableBody>
					{#each table.getRowModel().rows as row (row.id)}
						<TableRow data-state={row.getIsSelected() && 'selected'} class="border-b border-border">
							{#each row.getVisibleCells() as cell (cell.id)}
								<TableCell>
									<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
								</TableCell>
							{/each}
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={columns.length} class="h-24 text-center">No results.</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</div>

		<div class="flex items-center justify-between">
			<div class="text-sm text-muted-foreground">
				Page {pagination.pageIndex + 1} of {table.getPageCount()}
			</div>
			<div class="flex items-center space-x-2 py-4">
				<Button
					type="button"
					variant="outline"
					size="sm"
					disabled={!table.getCanPreviousPage()}
					onclick={() => table.previousPage()}>Previous</Button
				>
				<Button
					type="button"
					variant="outline"
					size="sm"
					disabled={!table.getCanNextPage()}
					onclick={() => table.nextPage()}>Next</Button
				>
			</div>
		</div>
	</div>
</div>
