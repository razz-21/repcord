<script lang="ts">
	import {
		Root as SidebarRoot,
		Header as SidebarHeader,
		Content as SidebarContent,
		Group as SidebarGroup,
		Footer as SidebarFooter,
		SidebarMenuItem,
		SidebarMenuButton,
		SidebarMenu,
		SidebarGroupLabel
	} from '@/components/ui/sidebar';
	import ChartAreaIcon from '@lucide/svelte/icons/chart-area';
	import UsersRoundIcon from '@lucide/svelte/icons/users-round';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
	import UsersIcon from '@lucide/svelte/icons/users';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import UserIcon from '@lucide/svelte/icons/user';
	import UserCircleIcon from '@lucide/svelte/icons/user-circle';
	import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
	import {
		Root as PopoverRoot,
		Trigger as PopoverTrigger,
		Content as PopoverContent,
		Close as PopoverClose
	} from '@/components/ui/popover';
	import repcordLogo from '$lib/assets/logos/repcord-logo.svg';
	import { LogOutIcon } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const appNavigationItems = [
		{
			label: 'Dashboard',
			href: '#',
			icon: ChartAreaIcon
		},
		{
			label: 'Customers',
			href: '#',
			icon: UsersRoundIcon
		},
		{
			label: 'Payments',
			href: '#',
			icon: CreditCardIcon
		},
		{
			label: 'Reports',
			href: '#',
			icon: ClipboardListIcon
		},
		{
			label: 'Users',
			href: '#',
			icon: UsersIcon
		},
		{
			label: 'Settings',
			href: '#',
			icon: SettingsIcon
		}
	];

  function handleLogout() {
    goto(resolve('/login'));
  }
</script>

<SidebarRoot class="border-r border-border">
	<SidebarHeader>
		<div class="flex items-center gap-2">
			<img src={repcordLogo} alt="RepCord Logo" class="h-10 w-10" />
			<span class="text-lg font-bold">RepCord</span>
		</div>
	</SidebarHeader>
	<SidebarContent>
		<SidebarGroup>
			<SidebarGroupLabel>Application</SidebarGroupLabel>
			<SidebarMenu>
				{#each appNavigationItems as item}
					<SidebarMenuItem>
						<SidebarMenuButton>
							{#snippet child({ props })}
								<a href={item.href} {...props}>
									<item.icon />
									<span>{item.label}</span>
								</a>
							{/snippet}
						</SidebarMenuButton>
					</SidebarMenuItem>
				{/each}
			</SidebarMenu>
		</SidebarGroup>
	</SidebarContent>
	<SidebarFooter>
		<PopoverRoot>
			<PopoverTrigger
				class="flex w-full items-center gap-2 rounded-md p-2 text-left transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
			>
				<Avatar class="size-8">
					<AvatarImage src="https://github.com/shadcn.png" alt="User" />
					<AvatarFallback>sh</AvatarFallback>
				</Avatar>
				<div class="min-w-0 flex-1">
					<div class="truncate text-sm font-medium">shadcn</div>
					<div class="truncate text-xs text-muted-foreground">m@example.com</div>
				</div>
				<ChevronsUpDownIcon class="size-4 shrink-0 text-muted-foreground" />
			</PopoverTrigger>
			<PopoverContent side="top" align="start" sideOffset={8} class="w-56 border-border p-2">
				<div class="py-1">
					<PopoverClose
						class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
						role="menuitem"
					>
						<UserIcon class="size-4" />
						<span>Profile</span>
					</PopoverClose>
					<PopoverClose
						class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
						role="menuitem"
					>
						<UserCircleIcon class="size-4" />
						<span>Account</span>
					</PopoverClose>
					<PopoverClose
						class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
						role="menuitem"
            onclick={handleLogout}
					>
						<LogOutIcon class="size-4" />
						<span>Logout</span>
					</PopoverClose>
				</div>
			</PopoverContent>
		</PopoverRoot>
	</SidebarFooter>
</SidebarRoot>
