import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchVehicleTypes } from '@/app/lib/data';
import VehicleForm from '@/app/ui/vehicle-classes/create-form';

 
export default async function Page() {
  const vehicleTypes = await fetchVehicleTypes();
  // console.log(vehicleTypes);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      /> 
      <VehicleForm vehicleTypes={vehicleTypes}/>
    </main>
  );
}