import { createClient } from '@supabase/supabase-js';

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

  return (
    <div className="grid gap-8">
      <form className="grid gap-4">
        <section className="grid">
          <p className="bg-pink-500 text-white p-4 rounded-t-lg text-xl font-medium">Ask me</p>
          <input
            className="bg-white text-black p-4 rounded-b-lg text-xl"
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
          <section key={question.id}>
            <p className="bg-pink-500 text-white p-4 rounded-t-lg text-xl font-medium">Ask me</p>
            <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
