<script lang="ts">
	import { ChartContainer, ChartTooltip, type ChartConfig } from '$lib/components/ui/chart';
	import { Area, AreaChart } from 'layerchart';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { curveNatural } from 'd3-shape';
	import { SvelteDate } from 'svelte/reactivity';

	type ChartDataPoint = {
		date: Date;
		dateLabel: string;
		customers: number;
	};

	// Generate sample data for the last 30 days
	const generateData = (): ChartDataPoint[] => {
		const data: ChartDataPoint[] = [];
		const today = new SvelteDate(new Date());

		// Base pattern: higher on weekdays, lower on weekends
		const baseWeekday = 120;
		const baseWeekend = 80;

		for (let i = 29; i >= 0; i--) {
			const date = new SvelteDate(today);
			date.setDate(date.getDate() - i);
			date.setHours(0, 0, 0, 0); // Normalize time

			const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
			const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

			// Generate realistic customer count with some variation
			const base = isWeekend ? baseWeekend : baseWeekday;
			const variation = Math.floor(Math.random() * 40) - 20; // ±20 variation
			const customers = Math.max(30, base + variation); // Minimum 30 customers

			data.push({
				date: date,
				dateLabel: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
				customers: customers
			});
		}

		return data;
	};

	const chartData = $state(generateData());

	const chartConfig: ChartConfig = {
		customers: {
			label: 'Customers',
			color: 'hsl(var(--chart-1))'
		}
	};
</script>

<Card class="border-border">
	<CardHeader>
		<CardTitle>Gym Visits</CardTitle>
		<CardDescription>Customers visiting the gym per day (Last 30 days)</CardDescription>
	</CardHeader>
	<CardContent>
		<ChartContainer config={chartConfig} class="h-[300px] w-full">
			<AreaChart
				legend
				data={chartData}
				x={(d: ChartDataPoint) => d.date}
				y={(d: ChartDataPoint) => d.customers}
				props={{
					area: {
						curve: curveNatural,
						'fill-opacity': 0.4,
						line: { class: 'stroke-1' },
						motion: 'tween'
					},
					grid: { x: false },
					xAxis: { rule: false },
					yAxis: { rule: false }
				}}
			>
				{#snippet marks({ series, getAreaProps })}
					<defs>
						<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stop-color="var(--chart-4)" stop-opacity={1.0} />
							<stop offset="95%" stop-color="var(--chart-4)" stop-opacity={0.1} />
						</linearGradient>
					</defs>
					{#each series as s, i (s.key)}
						<Area {...getAreaProps(s, i)} fill="url(#fillDesktop)" />
					{/each}
				{/snippet}
				{#snippet tooltip()}
					<ChartTooltip
						labelFormatter={(v: Date) => {
							return v.toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric'
							});
						}}
						indicator="line"
					/>
				{/snippet}
			</AreaChart>
		</ChartContainer>
	</CardContent>
</Card>
