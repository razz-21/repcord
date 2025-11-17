<script lang="ts">
	import { Checkbox } from '@/components/ui/checkbox';
	import { Input } from '@/components/ui/input';
	import { Label } from '@/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
	import { CustomerFitnessGoalSchema } from '@/models/customers';
	import { transformToReadableText } from '@/utils/transform-to-readable-text.util';

	const fitnessGoalOptions: { label: string; value: string }[] =
		CustomerFitnessGoalSchema.options.map((goal) => ({
			label: transformToReadableText(goal),
			value: goal
		}));
</script>

<form>
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<label class="block text-sm font-medium text-foreground" for="goal">Fitness Goal</label>
			<RadioGroup class="grid grid-cols-4 gap-4">
				{#each fitnessGoalOptions as option (option.value)}
					<Label
						for={option.value}
						class="align-center col-span-2 flex w-full cursor-pointer items-start gap-2 rounded-lg border border-border px-3 py-4 has-aria-checked:border-yellow-200 has-aria-checked:bg-yellow-50"
					>
						<RadioGroupItem value={option.value} id={option.value} />
						<span>{option.label}</span>
					</Label>
				{/each}
			</RadioGroup>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="weight">Weight (kg)</label>
				<Input id="weight" name="weight" type="number" />
			</div>
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="height">Height (cm)</label>
				<Input id="height" name="height" type="number" />
			</div>
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="height"
					>Body Fat Percentage (%)</label
				>
				<Input id="body-fat-percentage" name="body-fat-percentage" type="number" />
			</div>
		</div>
	</div>
</form>
