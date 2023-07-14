import { ImageResponse } from 'next/server';

import { getQuestion } from '@/utils/supabase';

export const runtime = 'edge';

export const contentType = 'image/png';

export default async function Image({ params: { id } }: { params: { id: string } }) {
  const question = await getQuestion(id);

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
            background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
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
