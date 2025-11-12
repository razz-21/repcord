import z from 'zod';
import { GenderSchema, UUIDSchema } from '../common/common.schema';
import { SubscriptionSchema } from '../subscription/subscription.schema';

export const CustomerStatusSchema = z.enum(['active', 'inactive', 'pending', 'archived']);

export const CustomerFitnessGoalSchema = z.enum([
	'lose_weight',
	'gain_muscle',
	'maintain_weight',
	'body_recomposition'
]);

export const CustomerFitnessProfileSchema = z.object({
	goal: CustomerFitnessGoalSchema,
	weight: z.number().optional().nullable(),
	height: z.number().optional().nullable(),
	bodyFatPercentage: z.number().optional().nullable()
});

export const CustomersSchema = z.object({
	_id: UUIDSchema,
	firstname: z.string(),
	lastname: z.string(),
	birthdate: z.string(),
	gender: GenderSchema,
	email: z.string(),
	contact: z.string(),
	address: z.string(),
	fitnessProfile: z.array(CustomerFitnessProfileSchema).default([]),
	subscriptions: z.array(SubscriptionSchema).default([]),
	status: CustomerStatusSchema,
	workspace: UUIDSchema,
	createdAt: z.string(),
	updatedAt: z.string()
});
