import type {
	SubscriptionSchema,
	SubscriptionStatusSchema,
	SubscriptionTypeSchema
} from './subscription.schema';
import type { z } from 'zod';

export type Subscription = z.infer<typeof SubscriptionSchema>;
export type SubscriptionType = z.infer<typeof SubscriptionTypeSchema>;
export type SubscriptionStatus = z.infer<typeof SubscriptionStatusSchema>;
