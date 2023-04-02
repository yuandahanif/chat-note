import { useMemo, useState } from "react";
import { getInitialData } from "./utils";

function App() {
  const [notes, setNotes] = useState(getInitialData());

  const noteMemo = useMemo(() => {
    const filteredData = notes.sort((p, n) => {
      const p_date = new Date(p.createdAt).getTime();
      const n_date = new Date(n.createdAt).getTime();
      return n_date - p_date;
    });
    return filteredData;
  }, [notes]);

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl bg-main-darak shadow-md">
      <aside className="relative flex h-full max-h-screen w-1/3 flex-col gap-y-5 overflow-y-auto border-r p-2 pb-10 pt-0">
        <div className=" flex flex-col">
          <div className="sticky left-0 right-0 top-0 mb-2 flex justify-between border-b-2 bg-main-darak pb-3 pt-4">
            <h2 className="text-xl font-semibold">Catatanku</h2>

            <div>
              <button title="Tambah Catatan">
                <svg
                  aria-label="Tambah"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-x-2 gap-y-5">
            {noteMemo.map((note) => (
              <div
                key={note.id}
                className="rounded-md p-1 duration-300 hover:bg-[#313131]"
              >
                <div>
                  <button className="hover:underline" type="button">
                    <span className="line-clamp-1 text-lg font-medium">
                      {note.title}
                    </span>
                  </button>
                  <div>
                    <p className="line-clamp-1 text-sm">{note.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="w-2/3 ">ini main</main>
    </div>
  );
}

export default App;
