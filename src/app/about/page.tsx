import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="mt-5">
        <Link href="/" className=" bg-blue-400 p-3 rounded-lg border-none">
          Home Page
        </Link>
      </div>
      <hr className="mt-5" />
      <h1 className="text-5xl mb-10">About Page</h1>
    </div>
  );
};

export default About;
