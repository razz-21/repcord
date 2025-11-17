import type {
	CustomerFitnessGoalSchema,
	CustomersSchema,
	CustomerStatusSchema
} from './customers.schema';
import type { z } from 'zod';

export type Customer = z.infer<typeof CustomersSchema>;
export type CustomerStatus = z.infer<typeof CustomerStatusSchema>;
export type CustomerFitnessGoal = z.infer<typeof CustomerFitnessGoalSchema>;
