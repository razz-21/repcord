import z from 'zod';

export const UUIDSchema = z.uuid();

export const GenderSchema = z.enum(['male', 'female', 'other']);
