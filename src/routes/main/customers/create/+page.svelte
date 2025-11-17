<script lang="ts" module>
	const primaryInformationTabValue = 'primary_information';
	const fitnessProfileTabValue = 'fitness_profile';
	const membershipSubscriptionTabValue = 'membership_subscription';
	const confirmationReviewTabValue = 'confirmation_review';
</script>

<script lang="ts">
	import CreateCustomerForm from './CreateCustomerForm.svelte';
	import FitnessProfileForm from './FitnessProfileForm.svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
	import { transformToReadableText } from '@/utils/transform-to-readable-text.util';
	import { Button } from '@/components/ui/button';
	import SubscriptionForm from '../../subscription/SubscriptionForm.svelte';
	import ConfirmationReview from './ConfirmationReview.svelte';

	let activeTab = $state<string>(primaryInformationTabValue);

	let createCustomerFormInvalid = $state(false);

	function proceedToFitnessProfileStep() {
		activeTab = fitnessProfileTabValue;
	}

	function backToPrimaryInformationStep() {
		activeTab = primaryInformationTabValue;
	}

	function backToFitnessProfileStep() {
		activeTab = fitnessProfileTabValue;
	}

	function proceedToMembershipSubscriptionStep() {
		activeTab = membershipSubscriptionTabValue;
	}

	function proceedToConfirmationReviewStep() {
		activeTab = confirmationReviewTabValue;
	}

	function backToMembershipSubscriptionStep() {
		activeTab = membershipSubscriptionTabValue;
	}
</script>

<div class="container">
	<div class="mx-auto mt-6 w-full max-w-2xl">
		<h1 class="mb-2 text-center text-3xl font-bold">Customer Creation</h1>
		<p class="text-center text-sm text-muted-foreground">
			Please fill out the form below to create a new customer.
		</p>

		<div class="mt-6 flex w-full justify-center">
			<Tabs class="w-full" bind:value={activeTab}>
				<TabsList class="mb-1 flex justify-center">
					<TabsTrigger value={primaryInformationTabValue}
						>{transformToReadableText(primaryInformationTabValue)}</TabsTrigger
					>
					<TabsTrigger value={fitnessProfileTabValue}
						>{transformToReadableText(fitnessProfileTabValue)}</TabsTrigger
					>
					<TabsTrigger value={membershipSubscriptionTabValue}
						>{transformToReadableText(membershipSubscriptionTabValue)}</TabsTrigger
					>
					<TabsTrigger value={confirmationReviewTabValue}
						>{transformToReadableText(confirmationReviewTabValue)}</TabsTrigger
					>
				</TabsList>
				<TabsContent
					value={primaryInformationTabValue}
					class="w-full rounded-md border border-border p-4"
				>
					<div class="w-full">
						<CreateCustomerForm bind:invalid={createCustomerFormInvalid} />
						<div class="mt-6 flex">
							<Button
								class="w-full"
								size="lg"
								onclick={proceedToFitnessProfileStep}
								disabled={createCustomerFormInvalid}>Next</Button
							>
						</div>
					</div>
				</TabsContent>
				<TabsContent
					value={fitnessProfileTabValue}
					class="w-full rounded-md border border-border p-4"
				>
					<div class="w-full">
						<div class="mb-4 rounded-md text-sm text-muted-foreground">
							The fitness profile will be used to track the customer's progress and goals. All
							fields are optional.
						</div>
						<FitnessProfileForm />
						<div class="mt-6 flex gap-4">
							<Button
								variant="secondary"
								size="lg"
								class="flex-1"
								onclick={backToPrimaryInformationStep}>Back</Button
							>
							<Button size="lg" class="flex-1" onclick={proceedToMembershipSubscriptionStep}
								>Next</Button
							>
						</div>
					</div>
				</TabsContent>
				<TabsContent
					value={membershipSubscriptionTabValue}
					class="w-full rounded-md border border-border p-4"
				>
					<SubscriptionForm />
					<div class="mt-6 flex gap-4">
						<Button variant="secondary" size="lg" class="flex-1" onclick={backToFitnessProfileStep}
							>Back</Button
						>
						<Button size="lg" class="flex-1" onclick={proceedToConfirmationReviewStep}>Next</Button>
					</div>
				</TabsContent>
				<TabsContent
					value={confirmationReviewTabValue}
					class="w-full rounded-md border border-border p-4"
				>
					<div class="flex w-full flex-col gap-2">
						<h2 class="text-lg font-bold">Confirmation Review</h2>
						<ConfirmationReview />
					</div>

					<div class="mt-6 flex gap-4">
						<Button
							variant="secondary"
							size="lg"
							class="flex-1"
							onclick={backToMembershipSubscriptionStep}>Back</Button
						>
						<Button size="lg" class="flex-1">Create Customer</Button>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	</div>

	<!-- <div class="grid grid-cols-1 md:grid-cols-8 gap-12">
    <div class="col-span-5">
      <div class="bg-background p-8 rounded-md border border-border">
        <div class="flex flex-col gap-4 mb-4">
          <h2 class="text-xl font-bold">Primary Information</h2>
        </div>
        <CreateCustomerForm />

        <Separator class="my-8" />

        <div class="flex flex-col gap-4 mb-4">
          <h2 class="text-xl font-bold">Fitness Profile</h2>
        </div>
        <FitnessProfileForm />
      </div>
    </div>
    <div class="col-span-3">
      <h2 class="text-lg font-bold">Contact Information</h2>
    </div>
  </div> -->
</div>
