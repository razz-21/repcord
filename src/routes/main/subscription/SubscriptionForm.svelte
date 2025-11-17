<script lang="ts" module>
	export type SubscriptionFormData = {
		annualMembershipSubscriptionChecked: boolean;
		annualMembershipSubscriptionPrice: number;
		annualMembershipSubscriptionStartDate: string;
		annualMembershipSubscriptionEndDate: string;
		monthlySubscriptionChecked: boolean;
		monthlySubscriptionPrice: number;
		monthlySubscriptionStartDate: string;
		monthlySubscriptionEndDate: string;
	};
</script>

<script lang="ts">
	import { Checkbox } from '@/components/ui/checkbox';
	import { Input } from '@/components/ui/input';
	import Label from '@/components/ui/label/label.svelte';
	import { Separator } from '@/components/ui/separator';

	let subscriptionFormData = $state<SubscriptionFormData>({
		annualMembershipSubscriptionChecked: false,
		annualMembershipSubscriptionPrice: 0,
		annualMembershipSubscriptionStartDate: '',
		annualMembershipSubscriptionEndDate: '',
		monthlySubscriptionChecked: false,
		monthlySubscriptionPrice: 0,
		monthlySubscriptionStartDate: '',
		monthlySubscriptionEndDate: ''
	});

	$effect(() => {
		if (!subscriptionFormData.annualMembershipSubscriptionChecked) {
			subscriptionFormData.annualMembershipSubscriptionPrice = 0;
			subscriptionFormData.annualMembershipSubscriptionStartDate = '';
			subscriptionFormData.annualMembershipSubscriptionEndDate = '';
		}

		if (!subscriptionFormData.monthlySubscriptionChecked) {
			subscriptionFormData.monthlySubscriptionPrice = 0;
			subscriptionFormData.monthlySubscriptionStartDate = '';
			subscriptionFormData.monthlySubscriptionEndDate = '';
		}
	});
</script>

<form>
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<Label
				for="annual-membership-subscription"
				class="flex cursor-pointer items-start gap-4 rounded-lg border border-border px-3 py-4 has-aria-checked:border-yellow-200 has-aria-checked:bg-yellow-50"
			>
				<Checkbox
					id="annual-membership-subscription"
					name="annual-membership-subscription"
					class="mt-1.5"
					bind:checked={subscriptionFormData.annualMembershipSubscriptionChecked}
				/>
				<div class="flex flex-col gap-1">
					<span class="text-lg font-medium">Annual Membership Subscription</span>
					<span class="text-sm font-normal text-muted-foreground"
						>Pay an annual membership fee to receive discounted rates on gym sessions. Membership
						automatically renews on January 1st each year.</span
					>
				</div>
			</Label>
			<div class="flex flex-col gap-2">
				<label
					class="block text-sm font-medium text-foreground"
					for="annual-membership-subscription-price">Price</label
				>
				<Input
					id="annual-membership-subscription-price"
					name="annual-membership-subscription-price"
					type="number"
					bind:value={subscriptionFormData.annualMembershipSubscriptionPrice}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label
					class="block text-sm font-medium text-foreground"
					for="annual-membership-subscription-start-date">Start Date</label
				>
				<Input
					id="annual-membership-subscription-start-date"
					name="annual-membership-subscription-start-date"
					type="date"
					bind:value={subscriptionFormData.annualMembershipSubscriptionStartDate}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label
					class="block text-sm font-medium text-foreground"
					for="annual-membership-subscription-end-date">End Date</label
				>
				<Input
					id="annual-membership-subscription-end-date"
					name="annual-membership-subscription-end-date"
					type="date"
					bind:value={subscriptionFormData.annualMembershipSubscriptionEndDate}
				/>
			</div>
		</div>
	</div>

	<Separator class="my-8" />

	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<Label
				for="monthly-subscription"
				class="flex cursor-pointer items-start gap-4 rounded-lg border border-border px-3 py-4 has-aria-checked:border-blue-200 has-aria-checked:bg-blue-50"
			>
				<Checkbox
					id="monthly-subscription"
					name="monthly-subscription"
					class="mt-1.5 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
					bind:checked={subscriptionFormData.monthlySubscriptionChecked}
				/>
				<div class="flex flex-col gap-1">
					<span class="text-lg font-medium">Monthly Subscription</span>
					<span class="text-sm font-normal text-muted-foreground"
						>Unlimited gym access on a monthly basis. No per-session fees—just one monthly payment
						for continuous access.</span
					>
				</div>
			</Label>
			<div class="flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="monthly-subscription-price"
					>Price</label
				>
				<Input
					id="monthly-subscription-price"
					name="monthly-subscription-price"
					type="number"
					bind:value={subscriptionFormData.monthlySubscriptionPrice}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label
					class="block text-sm font-medium text-foreground"
					for="monthly-subscription-start-date">Start Date</label
				>
				<Input
					id="monthly-subscription-start-date"
					name="monthly-subscription-start-date"
					type="date"
					bind:value={subscriptionFormData.monthlySubscriptionStartDate}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="monthly-subscription-end-date"
					>End Date</label
				>
				<Input
					id="monthly-subscription-end-date"
					name="monthly-subscription-end-date"
					type="date"
					bind:value={subscriptionFormData.monthlySubscriptionEndDate}
				/>
			</div>
		</div>
	</div>
</form>
