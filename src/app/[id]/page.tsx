import Link from 'next/link';

import { getQuestion } from '@/utils/supabase';

import CopyQuestionToClipboard from './copy-to-clipboard';

export default async function Question({ params: { id } }: { params: { id: string } }) {
  const question = await getQuestion(id);

  return (
    <article className="grid gap-4">
      <Link href="/">← Go back</Link>
      <section className="grid">
        <p className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-t-lg text-xl font-medium">
          Ask me
        </p>
        <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
      </section>
      <CopyQuestionToClipboard />
    </article>
  );
}
