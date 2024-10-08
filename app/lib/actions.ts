'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });
   
const CreateInvoice = FormSchema.omit({ id: true, date: true });

// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  //  throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

const VehicleSchema = z.object({
  classid: z.number().optional(),
  classname: z.string(),
  categoryname: z.string(),
  published: z.enum(['not published', 'published']),
});

const CreateVehicle = VehicleSchema.omit({ classid: true });

const UpdateVehicle = VehicleSchema.omit({ classid: true });

export async function createVehicle(formData: FormData) {
  const { classname, categoryname, published } = CreateVehicle.parse({
    classname: formData.get('classname'),
    categoryname: formData.get('categoryname'),
    published: formData.get('published'),
  });

  await sql`
    INSERT INTO vehicles (classname, categoryname, published)
    VALUES (${classname}, ${categoryname}, ${published})
  `;

  revalidatePath('/dashboard/vehicle-classes');
  redirect('/dashboard/vehicle-classes');
}

export async function updateVehicle(id: number, formData: FormData) {
  const { classname, categoryname, published } = UpdateVehicle.parse({
    classname: formData.get('classname'),
    categoryname: formData.get('categoryname'),
    published: formData.get('published'),
  });

  try {
    await sql`
        UPDATE vehicles
        SET classname = ${classname}, categoryname = ${categoryname}, published = ${published}
        WHERE classid = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Vehicle.' };
  }

  revalidatePath('/dashboard/vehicle-classes');
  redirect('/dashboard/vehicle-classes'); 
}

export async function deleteVehicle(id: number) {
  //  throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM vehicles WHERE classid = ${id}`;
    revalidatePath('/dashboard/vehicle-classes');
    return { message: 'Deleted Vehicle.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}


// authentication function

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}