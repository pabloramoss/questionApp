export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm mt-8">
      <p>
        Made with{' '}
        <span aria-label="love" role="img">
          ❤️
        </span>{' '}
        by{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://www.linkedin.com/in/pabloramoss/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Pablo Ramos
        </a>
      </p>
      <p>
        <a
          className="text-blue-500 hover:underline"
          href="https://github.com/pabloramoss/questionApp"
          rel="noopener noreferrer"
          target="_blank"
        >
          Source Code
        </a>
      </p>
    </footer>
  );
}
