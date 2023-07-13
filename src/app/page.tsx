import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const supabaseUrl = 'https://bilfodlqdkporhdmqwqv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

async function getQuestions() {
  const questions = await supabase
    .from('questions')
    .select()
    .then(({ data }) => data as { id: string; text: string }[]);

  return questions;
}

export default async function Home() {
  const questions = await getQuestions();

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
    <div className="grid gap-8">
      <form action={handleSubmit} className="grid gap-4">
        <section className="grid">
          <p className="bg-pink-500 text-white p-4 rounded-t-lg text-xl font-medium">Ask me</p>
          <input
            className="bg-white text-black p-4 rounded-b-lg text-xl"
            name="question"
            placeholder="Ask me anything"
          />
        </section>
        <button
          className="rounded-lg bg-pink-500 text-white p-4 text-xl hover:bg-pink-600 transition-colors w-full"
          type="submit"
        >
          Send question
        </button>
      </form>
      <hr className="opacity-30" />
      <article className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] items-start">
        {questions.map((question) => (
          <Link key={question.id} className="grid" href={`/${question.id}`}>
            <p className="bg-pink-500 text-white p-4 rounded-t-lg text-xl font-medium">Ask me</p>
            <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
          </Link>
        ))}
      </article>
    </div>
  );
}
