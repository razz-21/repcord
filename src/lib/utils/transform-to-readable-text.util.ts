export function transformToReadableText(text: string) {
	return text
		?.toString()
		.replace(/[_-]/g, ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase());
}
