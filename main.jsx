import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Nithish</h1>
        <p className="text-gray-400 mt-4">Frontend Developer</p>
      </section>

      {/* ABOUT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Passionate developer who builds responsive and modern websites.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="p-10">
        <h2 className="text-3xl text-center font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-400 mt-2">Description here</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-400 mt-2">Description here</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-2">your@email.com</p>
      </section>

    </div>
  );
}
