import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">Fashion E-commerce</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/stylist">
              <a>AI Stylist</a>
            </Link>
          </li>
          <li>
            <Link href="/feed">
              <a>Social Feed</a>
            </Link>
          </li>
          <li>
            <Link href="/closet">
              <a>My Closet</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}