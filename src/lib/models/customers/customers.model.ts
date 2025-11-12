import type { CustomersSchema, CustomerStatusSchema } from './customers.schema';
import type { z } from 'zod';

export type Customer = z.infer<typeof CustomersSchema>;
export type CustomerStatus = z.infer<typeof CustomerStatusSchema>;
