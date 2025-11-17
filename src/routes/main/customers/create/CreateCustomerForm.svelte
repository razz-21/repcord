<script lang="ts" module>
	import { Input } from '$lib/components/ui/input';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { z } from 'zod';
	import { GenderSchema } from '$lib/models/common/common.schema';
	import { transformToReadableText } from '@/utils/transform-to-readable-text.util';

	export const createCustomerFormSchema = z.object({
		firstname: z.string().min(1, 'First name is required'),
		lastname: z.string().min(1, 'Last name is required'),
		gender: GenderSchema,
		birthdate: z.string().min(1, 'Birthdate is required'),
		email: z.string().refine((val) => val === '' || z.string().email().safeParse(val).success, {
			message: 'Email must be valid'
		}),
		address: z.string().optional()
	});
	export type CreateCustomerFormData = z.infer<typeof createCustomerFormSchema>;

	export type CreateCustomeProps = {
		formData?: CreateCustomerFormData;
		invalid?: boolean;
		touched?: Record<string, boolean>;
		errors?: Record<string, string>;
	};
</script>

<script lang="ts">
	import { markTouched, hasError, getError } from '$lib/utils/form.util';

	let {
		formData = $bindable({
			firstname: '',
			lastname: '',
			gender: undefined as string | undefined,
			birthdate: '',
			email: '',
			address: ''
		} as CreateCustomerFormData),
		invalid = $bindable(false),
		touched = $bindable({} as Record<string, boolean>),
		errors = $bindable({} as Record<string, string>)
	} = $props<{
		formData?: CreateCustomerFormData;
		invalid?: boolean;
		touched?: Record<string, boolean>;
		errors?: Record<string, string>;
	}>();

	let previousGender = $state<string | undefined>(undefined);
	let genderInitialized = $state(false);
	let genderOptions: { label: string; value: string }[] = [
		...GenderSchema.options.map((option) => ({
			label: transformToReadableText(option),
			value: option
		}))
	];

	let computedErrors = $derived.by(() => {
		const result = createCustomerFormSchema.safeParse(formData);
		if (result.success) {
			return {};
		}
		const fieldErrors: Record<string, string> = {};
		result.error.issues.forEach((issue) => {
			const path = issue.path[0] as string;
			if (path && !fieldErrors[path]) {
				fieldErrors[path] = issue.message;
			}
		});
		return fieldErrors;
	});

	let computedInvalid = $derived.by(() => {
		const result = createCustomerFormSchema.safeParse(formData);
		return !result.success;
	});

	function markFieldTouched(fieldName: string) {
		markTouched(touched, fieldName);
	}

	function hasFieldError(fieldName: string): boolean {
		return hasError(touched, computedErrors, fieldName);
	}

	function getFieldError(fieldName: string): string | undefined {
		return getError(touched, computedErrors, fieldName);
	}

	let selectedGenderContent = $derived(
		genderOptions.find((option) => option.value === formData.gender)?.label ?? 'Select a gender'
	);

	$effect(() => {
		errors = computedErrors;
		invalid = computedInvalid;
	});

	$effect(() => {
		if (!genderInitialized) {
			previousGender = formData.gender;
			genderInitialized = true;
			return;
		}

		if (previousGender !== formData.gender) {
			markFieldTouched('gender');
		}
		previousGender = formData.gender;
	});
</script>

<form>
	<div class="flex flex-col gap-4">
		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="firstname"
					>First Name <span class="text-xs text-muted-foreground">*</span></label
				>
				<Input
					id="firstname"
					name="firstname"
					type="text"
					bind:value={formData.firstname}
					aria-invalid={hasFieldError('firstname')}
					onblur={() => markFieldTouched('firstname')}
				/>
				{#if getFieldError('firstname')}
					<p class="text-sm text-destructive">{getFieldError('firstname')}</p>
				{/if}
			</div>
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="lastname"
					>Last Name <span class="text-xs text-muted-foreground">*</span></label
				>
				<Input
					id="lastname"
					name="lastname"
					type="text"
					bind:value={formData.lastname}
					aria-invalid={hasFieldError('lastname')}
					onblur={() => markFieldTouched('lastname')}
				/>
				{#if getFieldError('lastname')}
					<p class="text-sm text-destructive">{getFieldError('lastname')}</p>
				{/if}
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-1 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="gender">Gender</label>
				<Select type="single" bind:value={formData.gender}>
					<SelectTrigger class="w-full" aria-invalid={hasFieldError('gender')}>
						{selectedGenderContent}
					</SelectTrigger>
					<SelectContent class="border-border">
						{#each genderOptions as option (option.value)}
							<SelectItem value={option.value}>{option.label}</SelectItem>
						{/each}
					</SelectContent>
				</Select>
				{#if getFieldError('gender')}
					<p class="text-sm text-destructive">{getFieldError('gender')}</p>
				{/if}
			</div>
			<div class="col-span-1 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="birthdate">Birthdate</label>
				<Input
					id="birthdate"
					name="birthdate"
					type="date"
					bind:value={formData.birthdate}
					aria-invalid={hasFieldError('birthdate')}
					onblur={() => markFieldTouched('birthdate')}
				/>
				{#if getFieldError('birthdate')}
					<p class="text-sm text-destructive">{getFieldError('birthdate')}</p>
				{/if}
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="email">Email</label>
				<Input
					id="email"
					name="email"
					type="email"
					bind:value={formData.email}
					aria-invalid={hasFieldError('email')}
					onblur={() => markFieldTouched('email')}
				/>
				{#if getFieldError('email')}
					<p class="text-sm text-destructive">{getFieldError('email')}</p>
				{/if}
			</div>
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="contact">Contact No.</label>
				<Input id="contact" name="contact" type="tel" />
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-2 flex flex-col gap-2">
				<label class="block text-sm font-medium text-foreground" for="address"
					>Address <span class="text-xs text-muted-foreground"
						>(Street, Barangay, City, Province, Zip Code)</span
					></label
				>
				<Input
					id="address"
					name="address"
					type="text"
					bind:value={formData.address}
					aria-invalid={hasFieldError('address')}
					onblur={() => markFieldTouched('address')}
				/>
				{#if getFieldError('address')}
					<p class="text-sm text-destructive">{getFieldError('address')}</p>
				{/if}
			</div>
		</div>
	</div>
</form>
