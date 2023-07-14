import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { supabase } from '@/utils/supabase';

import Button from './Button';

export default function Form() {
  // Nextjs Server Action
  async function handleSubmit(formData: FormData) {
    'use server';

    const question = formData.get('question');
    const id = Date.now().toString();

    await supabase.from('questions').insert({ text: question, id });

    // After insert the new question, we need to revalidate the cache
    // so the new question is displayed in the page

    revalidatePath('/');
    redirect(`/${id}`);
  }

  return (
    <form action={handleSubmit} className="grid gap-4">
      <section className="grid">
        <p className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-t-lg text-xl font-medium">
          Ask me
        </p>
        <input
          className="bg-white text-black p-4 rounded-b-lg text-xl"
          name="question"
          placeholder="Ask me anything"
        />
      </section>
      <Button type="submit">Send question</Button>
    </form>
  );
}
