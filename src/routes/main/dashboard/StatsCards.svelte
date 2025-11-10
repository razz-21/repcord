<script lang="ts">
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
	<!-- Total Revenue Card -->
	<Card class="border-border bg-linear-to-br from-blue-200/20 to-transparent">
		<CardHeader class="relative flex flex-row items-center justify-between">
			<CardTitle class="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2">
			<div class="text-3xl font-bold">$1,250.00</div>
			<p class="text-xs text-muted-foreground">Engagement exceed targets</p>
		</CardContent>
	</Card>

	<!-- New Customers Card -->
	<Card class="border-border bg-linear-to-br from-green-200/20 to-transparent">
		<CardHeader class="relative">
			<CardTitle class="text-sm font-medium text-muted-foreground">New Customers</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2">
			<div class="text-3xl font-bold">1,234</div>
			<p class="text-xs text-muted-foreground">Acquisition needs attention</p>
		</CardContent>
	</Card>

	<!-- Active Customers Card -->
	<Card class="border-border bg-linear-to-br from-rose-200/20 to-transparent">
		<CardHeader class="relative ">
			<CardTitle class="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2">
			<div class="text-3xl font-bold">45,678</div>
			<p class="text-xs text-muted-foreground">Engagement exceed targets</p>
		</CardContent>
	</Card>

	<!-- Total Payments Card -->
	<Card class="border-border bg-linear-to-br from-yellow-200/20 to-transparent">
		<CardHeader class="relative">
			<CardTitle class="text-sm font-medium text-muted-foreground">Total Payments</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2">
			<div class="text-3xl font-bold">$45,678.00</div>
			<p class="text-xs text-muted-foreground">Meets growth projections</p>
		</CardContent>
	</Card>
</div>
