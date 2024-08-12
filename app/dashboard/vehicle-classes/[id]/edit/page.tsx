// page.tsx

import EditVehicleForm from '@/app/ui/vehicle-classes/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchVehicleById, fetchVehicleTypes } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  // Fetch vehicle data and vehicle types
  const [vehicle, vehicleTypes] = await Promise.all([
    fetchVehicleById(id),
    fetchVehicleTypes(),
  ]);

  // Handle case where vehicle is not found
  if (!vehicle) {
    notFound();
  }
  // console.table(vehicle);
  // console.table(vehicleTypes);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Vehicles', href: '/dashboard/vehicles' },
          {
            label: 'Edit Vehicle',
            href: `/dashboard/vehicles/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditVehicleForm vehicle={vehicle} vehicleTypes={vehicleTypes} />
    </main>
  );
}
