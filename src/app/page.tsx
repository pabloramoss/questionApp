import Form from '@/components/Form';
import Questions from '@/components/Questions';

export default async function Home() {
  return (
    <div className="grid gap-8">
      <Form />
      <hr className="opacity-30" />
      <Questions />
    </div>
  );
}
