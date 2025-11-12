<script lang="ts" module>
	type StatsCardsProps = {
		totalCustomers: number;
		totalActive: number;
		totalArchived: number;
	};
</script>

<script lang="ts">
	import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

	const { totalCustomers = 0, totalActive = 0, totalArchived = 0 }: StatsCardsProps = $props();
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
	<Card class="gap-1 border-border py-4 shadow-none">
		<CardHeader class="relative mb-1 flex flex-row items-center justify-between px-4">
			<CardTitle class="flex items-center gap-2 text-sm font-normal text-muted-foreground">
				<div class="w-fit rounded-full bg-blue-500 p-1"></div>
				<span>Total Customers</span>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2 px-4">
			<div class="text-2xl font-bold">{totalCustomers}</div>
		</CardContent>
	</Card>

	<Card class="gap-1 border-border py-4 shadow-none">
		<CardHeader class="relative mb-1 flex flex-row items-center justify-between px-4">
			<CardTitle class="flex items-center gap-2 text-sm font-normal text-muted-foreground">
				<div class="w-fit rounded-full bg-green-500 p-1"></div>
				<span>Total Active</span>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2 px-4">
			<div class="text-2xl font-bold">{totalActive}</div>
		</CardContent>
	</Card>

	<Card class="gap-1 border-border py-4 shadow-none">
		<CardHeader class="relative mb-1 flex flex-row items-center justify-between px-4">
			<CardTitle class="flex items-center gap-2 text-sm font-normal text-muted-foreground">
				<div class="w-fit rounded-full bg-red-500 p-1"></div>
				<span>Total Archived</span>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2 px-4">
			<div class="text-2xl font-bold">{totalArchived}</div>
		</CardContent>
	</Card>

	<Card class="gap-1 border-border py-4 shadow-none">
		<CardHeader class="relative mb-1 flex flex-row items-center justify-between px-4">
			<CardTitle class="flex items-center gap-2 text-sm font-normal text-muted-foreground">
				<div class="w-fit rounded-full bg-yellow-500 p-1"></div>
				<span>Total Customers</span>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2 px-4">
			<div class="text-2xl font-bold">1,234</div>
		</CardContent>
	</Card>
</div>
