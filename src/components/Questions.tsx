import Link from 'next/link';

import { getAllQuestions } from '@/utils/supabase';

export default async function Questions() {
  const questions = await getAllQuestions();

  return (
    <article className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] items-start">
      {questions.map((question) => (
        <Link key={question.id} className="grid" href={`/${question.id}`}>
          <p className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-t-lg text-xl font-medium">
            Ask me
          </p>
          <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
        </Link>
      ))}
    </article>
  );
}
