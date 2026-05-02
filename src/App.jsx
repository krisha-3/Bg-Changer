import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <h1
        className="fixed flex flex-wrap justify-center top-12 inset-x-0 text-5xl font-extrabold font-serif text-pink-700"
        style={{ textShadow: "2px 2px 8px #c026d3" }}
      >
        Background Changer
      </h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-olive-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-olive-300 duration-200 hover:bg-olive-500 hover:text-olive-700 hover:shadow-lg bg-olive-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Reset
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-violet-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-violet-300 duration-200 hover:bg-violet-500 hover:text-violet-700 hover:shadow-lg bg-violet-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Violet
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-indigo-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-indigo-300 duration-200 hover:bg-indigo-500 hover:text-indigo-700 hover:shadow-lg bg-indigo-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Indigo
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-blue-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-blue-300 duration-200 hover:bg-blue-500 hover:text-blue-700 hover:shadow-lg bg-blue-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Blue
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-green-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-green-300 duration-200 hover:bg-green-500 hover:text-green-700 hover:shadow-lg bg-green-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Green
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-yellow-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-yellow-300 duration-200 hover:bg-yellow-500 hover:text-yellow-700 hover:shadow-lg bg-yellow-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Yellow
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-orange-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-orange-300 duration-200 hover:bg-orange-500 hover:text-orange-700 hover:shadow-lg bg-orange-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Orange
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-red-700 px-2 py-2 rounded-xl m-0.5">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-6 py-2 rounded-xl shadow-sm text-red-300 duration-200 hover:bg-red-500 hover:text-red-700 hover:shadow-lg bg-red-600 border-b-4 active:border-b-0 active:translate-y-1"
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
