interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ children, onClick, type = 'button' }: Props) {
  return (
    <button
      className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 text-xl hover:opacity-80 transition-colors w-full"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
