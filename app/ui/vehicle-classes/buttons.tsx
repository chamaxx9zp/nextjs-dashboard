import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteVehicle } from '@/app/lib/actions';

export function CreateVehicle() {
  return (
    <Link
      href="/dashboard/vehicle-classes/create"
      className="flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors"
    >
      <PlusIcon className="h-5 me-2" />
      <span className="hidden md:block">Add New</span>
    </Link>
  );
}

export function UpdateVehicle({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/vehicle-classes/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteVehicle({ id }: { id: number }) {
  const deleteVehicleWithId = deleteVehicle.bind(null, id);
 
  return (
    <form action={deleteVehicleWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
