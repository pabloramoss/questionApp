import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

import CopyQuestionToClipboard from './copy-to-clipboard';
import ShareOnTwittter from './share-on-twitter';

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
      <div className="flex justify-between">
        <Link href="/">← Go back</Link>
        <ShareOnTwittter />
      </div>
      <section className="grid">
        <p className="bg-gradient-to-r from-blue-500 to-cyan-500  text-white p-4 rounded-t-lg text-xl font-medium">
          Ask me
        </p>
        <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
      </section>
      <CopyQuestionToClipboard />
    </article>
  );
}
