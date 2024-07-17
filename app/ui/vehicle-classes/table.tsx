import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { fetchFilteredVehicles } from '@/app/lib/data';
import VehicleStatus from '@/app/ui/vehicle-classes/published';
import { UpdateVehicle } from './buttons';

export default async function VehicleTable({query,currentPage,}: {query: string;currentPage: number;}) {
  const vehicles = await fetchFilteredVehicles(query, currentPage);
//   console.table(vehicles);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {vehicles?.map((vehicle,index) => (
              <div
                key={index}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className='me-5'>{vehicle.classid}</p>
                      <p>{vehicle.classname}</p>
                    </div>
                  </div>
                  <VehicleStatus status={vehicle.published} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-md">
                      {vehicle.categoryname}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={vehicle.id} /> */}
                    {/* <DeleteInvoice id={vehicle.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Class ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Class Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Published
                </th>
               
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {vehicles?.map((vehicle, index) => (
                <tr key={index}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  
                  <td className="whitespace-nowrap px-3 py-3">
                    {vehicle.classid}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vehicle.classname}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vehicle.categoryname}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <VehicleStatus status={vehicle.published} />
                    
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateInvoice id={vehicle.classId} />
                      <DeleteInvoice id={vehicle.classId} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
