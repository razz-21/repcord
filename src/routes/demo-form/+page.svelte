<script lang="ts">
    import type { PageData } from './$types';
    import Button from '$lib/components/ui/button/button.svelte';

    let { data }: { data: PageData } = $props();
    const { form } = data;
</script>

<div class="mx-auto max-w-md space-y-6">
    <h1 class="text-2xl font-semibold">Demo Form</h1>

    {#if form.message}
        <p class="rounded-md bg-green-50 p-3 text-sm text-green-700">{form.message}</p>
    {/if}

    <form method="POST" class="space-y-5">
        <div class="space-y-2">
            <label for="name" class="text-sm font-medium">Name</label>
            <input
                id="name"
                name="name"
                class="w-full rounded-md border border-[var(--input)] bg-transparent px-3 py-2 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Your name"
                bind:value={form.data.name}
            />
            {#if form.errors.name}
                <p class="text-xs text-red-600">{form.errors.name}</p>
            {/if}
        </div>

        <div class="space-y-2">
            <label for="email" class="text-sm font-medium">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                class="w-full rounded-md border border-[var(--input)] bg-transparent px-3 py-2 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="you@example.com"
                bind:value={form.data.email}
            />
            {#if form.errors.email}
                <p class="text-xs text-red-600">{form.errors.email}</p>
            {/if}
        </div>

        <div class="space-y-2">
            <label for="age" class="text-sm font-medium">Age</label>
            <input
                id="age"
                name="age"
                type="number"
                min="0"
                class="w-full rounded-md border border-[var(--input)] bg-transparent px-3 py-2 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="18"
                bind:value={form.data.age}
            />
            {#if form.errors.age}
                <p class="text-xs text-red-600">{form.errors.age}</p>
            {/if}
        </div>

        <div class="pt-2">
            <Button type="submit" class="w-full">Submit</Button>
        </div>
    </form>
</div>


