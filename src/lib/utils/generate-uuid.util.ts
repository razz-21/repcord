import { v7 as uuidv7 } from 'uuid';

/**
 * Generates a UUID v7 (time-ordered UUID)
 * UUID v7 includes a timestamp component, making it time-ordered
 * which is better for database indexing and sorting
 */
export function generateUUID(): string {
	return uuidv7();
}
