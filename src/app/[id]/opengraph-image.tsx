import { createClient } from '@supabase/supabase-js';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const contentType = 'image/png';
const supabaseUrl = 'https://bilfodlqdkporhdmqwqv.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export default async function Image({ params: { id } }: { params: { id: string } }) {
  const question = await supabase
    .from('questions')
    .select()
    .eq('id', id)
    .single()
    .then(({ data }) => data as { id: string; text: string });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            background: 'hotpink',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>QuestionApp</p>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>{question.text}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
