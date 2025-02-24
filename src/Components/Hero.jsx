export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400">
        Hi, I'm Aashish Yadav
      </h1>
      <p className="text-xl mt-3 text-gray-700 dark:text-gray-300">
        A full-stack developer and passionate about building various software
        applications.
      </p>
      <a
        href="https://docs.google.com/document/d/1cSe-x7ChZHQTQFnOhYByDvRjYKPUUUpM/export?format=pdf"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download CV
      </a>
    </section>
  );
}
