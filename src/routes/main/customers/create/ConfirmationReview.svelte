<script lang="ts">
	import { Checkbox } from '@/components/ui/checkbox';
	import { Label } from '@/components/ui/label';
	import { Separator } from '@/components/ui/separator';

	let annualMembershipSubscriptionChecked = $state(true);
	let monthlySubscriptionChecked = $state(true);
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-4 rounded-md border border-border bg-gray-50 p-4">
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">First Name:</span>
				<span class="text-sm font-normal text-muted-foreground">John</span>
			</div>

			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Last Name</span>
				<span class="text-sm font-normal text-muted-foreground">Doe</span>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Gender:</span>
				<span class="text-sm font-normal text-muted-foreground">Male</span>
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Birthdate:</span>
				<span class="text-sm font-normal text-muted-foreground">January 1, 1990</span>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Email:</span>
				<span class="text-sm font-normal text-muted-foreground">john.doe@example.com</span>
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Contact No.:</span>
				<span class="text-sm font-normal text-muted-foreground">+1234567890</span>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Address:</span>
				<span class="text-sm font-normal text-muted-foreground">123 Main St, Anytown, USA</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4 rounded-md border border-border bg-gray-50 p-4">
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Fitness Goal:</span>
				<span class="text-sm font-normal text-muted-foreground">Lose weight</span>
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Weight:</span>
				<span class="text-sm font-normal text-muted-foreground">70 kg</span>
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Height:</span>
				<span class="text-sm font-normal text-muted-foreground">180 cm</span>
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-sm font-medium text-foreground">Body Fat Percentage:</span>
				<span class="text-sm font-normal text-muted-foreground">15%</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4 rounded-md border border-border bg-gray-50 p-4">
		<div class="grid grid-cols-8 gap-4">
			<Label
				for="annual-membership-subscription"
				class="col-span-4 flex cursor-pointer items-center gap-4 rounded-lg border border-border px-3 py-4 has-aria-checked:border-yellow-200 has-aria-checked:bg-yellow-50"
			>
				<Checkbox
					id="annual-membership-subscription"
					name="annual-membership-subscription"
					class="data-[state=checked]:border-yellow-600 data-[state=checked]:bg-yellow-600 data-[state=checked]:text-white dark:data-[state=checked]:border-yellow-700 dark:data-[state=checked]:bg-yellow-700"
					bind:checked={annualMembershipSubscriptionChecked}
				/>
				<div class="flex flex-col gap-1">
					<span class="text-md font-medium">Annual Membership Subscription</span>
				</div>
			</Label>
			<div class="col-span-4 flex flex-col gap-1">
				<div class="flex gap-1">
					<span class="text-sm font-medium text-foreground">Price:</span>
					<span class="text-sm font-normal text-muted-foreground">1000 PHP</span>
				</div>
				<div class="flex gap-1">
					<span class="text-sm font-medium text-foreground">Start Date:</span>
					<span class="text-sm font-normal text-muted-foreground">January 1, 2025</span>
				</div>
				<div class="flex gap-1">
					<span class="text-sm font-medium text-foreground">End Date:</span>
					<span class="text-sm font-normal text-muted-foreground">December 31, 2025</span>
				</div>
			</div>
		</div>

		<Separator class="my-2" />

		<div class="grid grid-cols-8 gap-4">
			<Label
				for="monthly-subscription"
				class="col-span-4 flex cursor-pointer items-center gap-4 rounded-lg border border-border px-3 py-4 has-aria-checked:border-blue-200 has-aria-checked:bg-blue-50"
			>
				<Checkbox
					id="monthly-subscription"
					name="monthly-subscription"
					class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
					bind:checked={monthlySubscriptionChecked}
				/>
				<div class="flex flex-col gap-1">
					<span class="text-md font-medium">Monthly Subscription</span>
				</div>
			</Label>
			<div class="col-span-4 flex flex-col gap-1">
				<div class="flex gap-1">
					<span class="text-sm font-medium text-foreground">Price:</span>
					<span class="text-sm font-normal text-muted-foreground">1000 PHP</span>
				</div>
				<div class="flex gap-1">
					<span class="text-sm font-medium text-foreground">Start Date:</span>
					<span class="text-sm font-normal text-muted-foreground">January 1, 2025</span>
				</div>
				<div class="flex gap-1">
					<span class="text-sm font-medium text-foreground">End Date:</span>
					<span class="text-sm font-normal text-muted-foreground">December 31, 2025</span>
				</div>
			</div>
		</div>
	</div>
</div>
