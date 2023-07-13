'use client';

export default function CopyQuestionToClipborad() {
  async function handleClick() {
    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());

    await navigator.clipboard.write([new ClipboardItem({ [image.type]: image })]);

    alert('Copied to clipboard');
  }

  return (
    <button
      className="rounded-lg bg-pink-500 text-white p-4 text-xl hover:bg-pink-600 transition-colors w-full"
      type="button"
      onClick={handleClick}
    >
      Copy to clipboard
    </button>
  );
}
