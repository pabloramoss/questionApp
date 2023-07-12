const QUESTIONS = [
  { id: '1', text: '¿How old are you?' },
  { id: '2', text: '¿What do you do for a living?' },
];

export default async function Home() {
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
      <article className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
        {QUESTIONS.map((question) => (
          <section key={question.id}>
            <p className="bg-pink-500 text-white p-4 rounded-t-lg text-xl font-medium">Ask me</p>
            <p className="bg-white text-black p-4 rounded-b-lg text-xl">{question.text}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
