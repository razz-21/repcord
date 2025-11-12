import z from 'zod';
import { UUIDSchema } from '../common/common.schema';

export const SubscriptionTypeSchema = z.enum(['monthly', 'annual']);
export const SubscriptionStatusSchema = z.enum(['active', 'inactive', 'cancelled']);

export const SubscriptionSchema = z.object({
	_id: UUIDSchema,
	customerId: UUIDSchema,
	subscriptionType: SubscriptionTypeSchema,
	price: z.number(),
	subscriptionStartDate: z.string(),
	subscriptionEndDate: z.string(),
	subscriptionStatus: SubscriptionStatusSchema,
	createdAt: z.string(),
	updatedAt: z.string()
});
