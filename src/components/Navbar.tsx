import Link from "next/link";
import { useRouter } from "next/router";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="mx-auto flex gap-4 py-4">
      <Link
        href="/"
        className={`${
          router.pathname == "/" ? "text-blue-700" : "text-gray-500"
        } rounded-md px-2 py-1 font-medium hover:bg-gray-100`}
      >
        Home
      </Link>
      <Link
        href="/add"
        className={`${
          router.pathname == "/add" ? "text-blue-700" : "text-gray-500"
        } rounded-md px-2 py-1 font-medium hover:bg-gray-100`}
      >
        Add new
      </Link>
    </nav>
  );
}

export default Navbar;
