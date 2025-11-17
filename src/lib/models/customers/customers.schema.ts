import z from 'zod';
import { GenderSchema, UUIDSchema } from '../common/common.schema';
import {
	MembershipSubscriptionSchema,
	MonthlySubscriptionSchema
} from '../subscription/subscription.schema';

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
	gender: GenderSchema,
	birthdate: z.string(),
	email: z.string(),
	contact: z.string(),
	address: z.string(),
	fitnessProfile: z.array(CustomerFitnessProfileSchema).default([]),
	membershipSubscriptions: z.array(MembershipSubscriptionSchema).default([]),
	monthlySubscriptions: z.array(MonthlySubscriptionSchema).default([]),
	status: CustomerStatusSchema,
	workspace: UUIDSchema,
	createdAt: z.string(),
	updatedAt: z.string()
});
