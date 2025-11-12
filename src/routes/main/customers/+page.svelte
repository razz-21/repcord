<script lang="ts">
	import type { Customer } from '@/models/customers';
	import CustomersTable from './CustomersTable.svelte';
	import { columns } from './customers-columns';
	import Button from '@/components/ui/button/button.svelte';
	import { PlusIcon } from 'lucide-svelte';
	import StatsCards from './StatsCards.svelte';

	const samepleCustomers: Customer[] = [
		{
			_id: '1',
			firstname: 'John',
			lastname: 'Doe',
			birthdate: '1990-01-01',
			gender: 'male',
			email: 'john.doe@example.com',
			contact: '1234567890',
			address: '123 Main St, Anytown, USA',
			fitnessProfile: [],
			subscriptions: [],
			status: 'active',
			workspace: '1',
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01'
		},
		{
			_id: '2',
			firstname: 'Jane',
			lastname: 'Smith',
			birthdate: '1990-01-01',
			gender: 'female',
			email: 'jane.smith@example.com',
			contact: '1234567890',
			address: '123 Main St, Anytown, USA',
			fitnessProfile: [],
			subscriptions: [],
			status: 'pending',
			workspace: '1',
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01'
		}
	];
</script>

<section class="container mx-auto flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<h1 class="text-3xl font-bold">Customers</h1>
		<div class="flex items-center gap-2">
			<Button type="button">
				<PlusIcon class="size-4" />
				Add Customer
			</Button>
		</div>
	</div>

	<StatsCards totalCustomers={0} totalActive={0} totalArchived={0} />

	<CustomersTable {columns} data={samepleCustomers} />
</section>
