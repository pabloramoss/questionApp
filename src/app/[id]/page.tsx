import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Abstract this function to a file called src\app\utils\supabase.ts
const supabaseUrl = 'https://bilfodlqdkporhdmqwqv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

async function getQuestion(id: string) {
  const question = await supabase
    .from('questions')
    .select()
    .eq('id', id)
    .single()
    .then(({ data }) => data as { id: string; text: string });

  return question;
}

export default async function Question({ params: { id } }: { params: { id: string } }) {
  const question = await getQuestion(id);

  return (
    <article className="grid gap-4">
      <Link href="/">← Go back</Link>
      <section className="grid">
        <p className="bg-pink-500 text-white p-4 rounded-t-lg text-xl font-medium">Ask me</p>
        <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
      </section>
    </article>
  );
}
