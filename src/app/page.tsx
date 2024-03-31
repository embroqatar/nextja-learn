import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10">Home Page</h1>
      <hr className="mb-5" />
      <Link
        href="/about"
        className="mt-5 bg-blue-400 p-3 rounded-lg border-none"
      >
        About Page
      </Link>
    </div>
  );
};

export default Home;
