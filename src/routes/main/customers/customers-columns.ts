import { renderComponent } from '@/components/ui/data-table';
import type { Customer } from '@/models/customers';
import type { ColumnDef } from '@tanstack/table-core';
import StatusBadge from './CustomerStatusBadge.svelte';
import CustomerTableActions from './CustomerTableActions.svelte';

export const columns: ColumnDef<Customer>[] = [
	{
		header: 'Firstname',
		accessorKey: 'firstname',
		cell: ({ row }) => row.original.firstname
	},
	{
		header: 'Lastname',
		accessorKey: 'lastname',
		cell: ({ row }) => row.original.lastname
	},
	{
		header: 'Email',
		accessorKey: 'email',
		cell: ({ row }) => row.original.email
	},
	{
		header: 'Birthdate',
		accessorKey: 'birthdate',
		cell: ({ row }) => row.original.birthdate
	},
	{
		header: 'Status',
		accessorKey: 'status',
		cell: ({ row }) => {
			return renderComponent(StatusBadge, {
				status: row.original.status
			});
		}
	},
	{
		header: 'Created At',
		accessorKey: 'createdAt',
		cell: ({ row }) => row.original.createdAt
	},
	{
		header: 'Updated At',
		accessorKey: 'updatedAt',
		cell: ({ row }) => row.original.updatedAt
	},
	{
		header: 'Actions',
		accessorKey: 'actions',
		cell: ({ row }) => {
			return renderComponent(CustomerTableActions, {
				customer: row.original as unknown as Customer
			});
		}
	}
];
