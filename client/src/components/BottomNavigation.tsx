import { Link, useLocation } from "wouter";

export default function BottomNavigation() {
  const [location] = useLocation();

  return (
    <nav className="bottom-nav md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-medium">
      <div className="grid grid-cols-4 h-16">
        <Link href="/">
          <a className={`flex flex-col items-center justify-center ${
            location === "/" ? "text-primary" : "text-neutral-gray"
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </a>
        </Link>

        <Link href="/search">
          <a className={`flex flex-col items-center justify-center ${
            location === "/search" ? "text-primary" : "text-neutral-gray"
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-xs mt-1">Search</span>
          </a>
        </Link>

        <Link href="/saved">
          <a className={`flex flex-col items-center justify-center ${
            location === "/saved" ? "text-primary" : "text-neutral-gray"
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs mt-1">Saved</span>
          </a>
        </Link>

        <Link href="/profile">
          <a className={`flex flex-col items-center justify-center ${
            location === "/profile" ? "text-primary" : "text-neutral-gray"
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
