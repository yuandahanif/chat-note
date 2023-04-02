import { useMemo, useState } from "react";
import NoteListItem from "./components/list/note_item";
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

  const deleteNote = (id: number) => {
    setNotes((state) => {
      const newNotes = state.filter((note) => note.id != id);
      return newNotes;
    });
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl bg-main-white shadow-md">
      <aside className="relative flex h-full max-h-screen w-full flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r p-2 pb-10 pt-0 md:w-1/3">
        <div className=" flex flex-col">
          <div className="sticky left-0 right-0 top-0 z-50 mb-2 flex justify-between border-b-2 bg-main-white pb-3 pt-4">
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

          <div className="flex flex-col gap-x-2 gap-y-2">
            {noteMemo.map((note) => (
              <NoteListItem
                key={note.id}
                title={note.title}
                body={note.body}
                onDelete={() => deleteNote(note.id)}
              />
            ))}
          </div>
        </div>
      </aside>

      <main className="hidden flex-col md:flex md:w-2/3">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-36 w-36 text-red-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <span className="text-xl">
            Tulis catatanmu seolah kau menulis surat cinta untuk dirinya.
          </span>

          <button
            type="button"
            className="mt-10 flex items-center gap-3 rounded-md bg-red-200 p-3 text-white duration-300 hover:bg-red-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>

            <span>Mulai Menulis</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
