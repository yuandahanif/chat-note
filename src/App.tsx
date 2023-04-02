import { useMemo, useState } from "react";
import NoteListItem from "./components/list/note_item";
import { getInitialData } from "./utils";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [noteId, setNoteId] = useState<number | null>(null);
  const [filter, setFilter] = useState<"unarchived" | "archived">("unarchived");

  const noteMemo = useMemo(() => {
    let filteredData = notes.sort((p, n) => {
      const p_date = new Date(p.createdAt).getTime();
      const n_date = new Date(n.createdAt).getTime();
      return n_date - p_date;
    });

    filteredData = filteredData.filter((note) => {
      return note.archived == (filter == "archived");
    });

    return filteredData;
  }, [notes, filter]);

  const openNote = (id: number) => {
    setNoteId(id);
  };

  const toggleArchivefilter = () => {
    setNoteId(null);

    setFilter((s) => {
      return s == "archived" ? "unarchived" : "archived";
    });
  };

  const deleteNote = (id: number) => {
    setNotes((state) => {
      const newNotes = state.filter((note) => note.id != id);
      return newNotes;
    });
  };

  const toggleArchive = (id: number) => {
    setNotes((state) => {
      const newNotes = state.map((note) => {
        if (note.id == id) {
          note.archived = !note.archived;
        }
        return note;
      });

      return newNotes;
    });
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl bg-main-white shadow-md">
      <aside className="relative flex h-auto max-h-screen w-full flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r p-2 pb-5 pt-0 md:w-1/3">
        <div className=" flex flex-col grow">
          <div className="sticky left-0 right-0 top-0 z-50 mb-2 flex justify-between border-b-2 bg-main-white pb-3 pt-4">
            <h2 className="text-xl font-semibold">
              {filter == "unarchived" ? "Catatanku" : "Arsip catatanku"}
            </h2>

            <div className="mr-3 flex gap-3">
              <button
                onClick={() => toggleArchivefilter()}
                title="Arsip Catatan"
                className="duration-300 hover:text-[#F4BFBF]"
              >
                <svg
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
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </button>
              <button
                title="Tambah Catatan"
                className="duration-300 hover:text-[#F4BFBF]"
              >
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

          <div className="flex h-auto grow flex-col gap-x-2 gap-y-2">
            {noteMemo.length > 0 ? (
              noteMemo.map(
                (note) =>
                  note.archived == (filter == "archived") && (
                    <NoteListItem
                      key={note.id}
                      title={note.title}
                      body={note.body}
                      created_at={note.createdAt}
                      onDetailClick={() => openNote(note.id)}
                      onDelete={() => deleteNote(note.id)}
                      onArchive={() => toggleArchive(note.id)}
                    />
                  )
              )
            ) : (
              <div className="my-auto flex h-auto w-full grow items-center justify-center">
                <span>Tidak ada catatan.</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      <main className="hidden flex-col md:flex md:w-2/3">
        {noteId == null && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span className="text-xl">
              Tulis catatanmu seolah kamu menulis surat cinta untuk dirinya.
            </span>

            <button
              type="button"
              className="mt-10 flex items-center gap-3 rounded-md bg-red-300 p-3 text-white duration-300 hover:bg-red-400"
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
        )}

        {noteId != null && (
          <div className="p-5">
            <h1>Detail Module</h1>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptatibus quis rerum repellendus explicabo unde minima.
                Repellendus distinctio sit exercitationem illum et amet
                consectetur, officiis suscipit vero quo possimus iste doloribus
                laboriosam voluptatibus laborum nihil, repellat ullam alias
                consequuntur. Dolore fugit nisi eaque dignissimos unde, sapiente
                nemo ad neque impedit commodi quod soluta animi saepe iste quasi
                excepturi dicta tempora. Nulla laboriosam, corporis
                exercitationem quam nisi debitis iste amet sapiente voluptatum
                incidunt cupiditate commodi necessitatibus magni sed impedit
                eius vel facilis iusto. Qui voluptate vel minus velit
                temporibus. Non perspiciatis molestiae voluptatibus reiciendis
                maiores corporis voluptas doloribus obcaecati quae? Voluptas.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
