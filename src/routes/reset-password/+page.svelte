<script lang="ts">
	import ResetPasswordForm from './ResetPasswordForm.svelte';
</script>

<section class="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-8">
	<div
		class="mb-2 w-full max-w-md rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
	>
		A reset PIN has been sent to your email. Please check your inbox and spam folder.
	</div>

	<ResetPasswordForm />
</section>
