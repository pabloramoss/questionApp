'use client';
import { ToastContainer, toast } from 'react-toastify';

import Button from '@/components/Button';
import 'react-toastify/dist/ReactToastify.css';

export default function CopyQuestionToClipborad() {
  async function handleClick() {
    toast('Copy to clipboard!');

    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());

    await navigator.clipboard.write([new ClipboardItem({ [image.type]: image })]);
  }

  return (
    <>
      <Button onClick={handleClick}>Copy to clipboard</Button>
      <ToastContainer autoClose={2000} hideProgressBar={true} position="top-center" theme="dark" />
    </>
  );
}
