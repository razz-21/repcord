export function markTouched(touched: Record<string, boolean>, fieldName: string): void {
	touched[fieldName] = true;
}

export function isTouched(touched: Record<string, boolean>, fieldName: string): boolean {
	return !!touched[fieldName];
}

export function hasError(
	touched: Record<string, boolean>,
	errors: Record<string, string>,
	fieldName: string
): boolean {
	return isTouched(touched, fieldName) && !!errors[fieldName];
}

export function getError(
	touched: Record<string, boolean>,
	errors: Record<string, string>,
	fieldName: string
): string | undefined {
	return isTouched(touched, fieldName) ? errors[fieldName] : undefined;
}
