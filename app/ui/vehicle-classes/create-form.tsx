import { VehicleCategoryName } from '@/app/lib/definitions';
import Link from 'next/link';
import { CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createVehicle } from '@/app/lib/actions';

export default function VehicleForm({vehicleTypes}: {vehicleTypes: VehicleCategoryName[]}) {
  return (
    <form action={createVehicle}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Vehicle Name */}
        <div className="mb-4">
          <label htmlFor="classname" className="mb-2 block text-sm font-medium">
            Enter a vehicle name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="classname"
                name="classname"
                type="string"
                step="0.01"
                placeholder="Enter a vehicle name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
        </div>

        {/* Vehicle Category Type */}
        <div className="mb-4">
          <label htmlFor="categoryname" className="mb-2 block text-sm font-medium">
            Choose vehicle type
          </label>
          <div className="relative">
            <select
              id="categoryname"
              name="categoryname"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a vehicle type
              </option>
              {vehicleTypes.map((type) => (
                <option key={type.classid} value={type.categoryname}>
                  {type.categoryname}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Published Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the published status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="not-published"
                  name="published"
                  type="radio"
                  value="not published"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="not-published"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  not published <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="published"
                  name="published"
                  type="radio"
                  value="published"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="published"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  published <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/vehicle-classes"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
