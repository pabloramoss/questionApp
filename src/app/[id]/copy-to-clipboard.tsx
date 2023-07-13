'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CopyQuestionToClipborad() {
  async function handleClick() {
    toast('Copy to clipboard!');

    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());

    await navigator.clipboard.write([new ClipboardItem({ [image.type]: image })]);
  }

  return (
    <>
      <button
        className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 text-xl hover:opacity-80 transition-colors w-full"
        type="button"
        onClick={handleClick}
      >
        Copy to clipboard
      </button>
      <ToastContainer autoClose={2000} hideProgressBar={true} position="top-center" theme="dark" />
    </>
  );
}
