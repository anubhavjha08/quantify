import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen ">
      <h3>Landing page</h3>

      <h1 className="text-3xl p-5 bold">SureSTOCK</h1>

      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.3">
        <Link href="/main/home/dashboard" className="flex items-center">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="ml-2 w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
            />
          </svg>
        </Link>
      </button>


    </div>
  );
}
