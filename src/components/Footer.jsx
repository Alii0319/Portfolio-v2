export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Ali Raza</p>
        <p>Backend engineering · Automation · Applied ML</p>
      </div>
    </footer>
  );
}
