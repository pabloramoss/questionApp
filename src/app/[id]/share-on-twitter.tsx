'use client';

import Link from 'next/link';

export default function ShareOnTwittter() {
  return (
    <Link href={`https://twitter.com/intent/tweet?text=${location.href}`} target="_blank">
      Share on Twitter
    </Link>
  );
}
