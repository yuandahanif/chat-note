import {
  ChangeEventHandler,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import IconButton from "@components/buttons/iconButton";
import NoteListItem from "@components/list/note_item";
import NoteContext from "./contexts/note.context";
import { getAccessToken, getActiveNotes, note } from "@utils/network-data";

function App() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [accseToken] = useState(getAccessToken());
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState<null | note[]>(null);

  const [filter, setFilter] = useState<"unarchived" | "archived">("unarchived");
  const [filterName, setFilterName] = useState<string>(
    searchParams.get("q") || ""
  );

  const noteMemo = useMemo(() => {
    if (notes == null) return [];
    let filteredData = notes.sort((p, n) => {
      const p_date = new Date(p.createdAt).getTime();
      const n_date = new Date(n.createdAt).getTime();
      return n_date - p_date;
    });

    if (filterName != "") {
      filteredData = filteredData.filter((note) => {
        return note.title
          .toLocaleLowerCase()
          .includes(filterName.toLocaleLowerCase());
      });
    }

    return filteredData;
  }, [notes, filter, filterName]);

  const openNote = (id: string) => {
    navigate(`/note/${id}`);
  };

  const toggleArchivefilter = () => {
    setFilter((s) => {
      return s == "archived" ? "unarchived" : "archived";
    });
  };

  const onDelete = (id: string) => {
    // deleteNote(id);
  };

  const toggleArchive = (id: string) => {
    // toggleArchiveNote(id);
  };

  const toggleCreateNoteForm = () => {
    navigate(`/note/add`);
  };

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterName(e.target.value);
    setSearchParams(`q=${e.target.value}`);
  };

  useEffect(() => {
    if (!accseToken) {
      navigate("/");
    }
  }, [accseToken]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getActiveNotes();
        if (!data.error) {
          setNotes(data.data);
        }
      } catch (error) {
        alert("failed to fetch active note");
        console.error("error fetching active note: ", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl bg-main-white shadow-md">
      <aside className="relative flex h-auto max-h-screen w-full flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r p-2 pb-5 pt-0 md:w-1/3">
        <div className=" flex grow flex-col">
          <div className="sticky left-0 right-0 top-0 z-50 mb-2 flex justify-between border-b-2 bg-main-white pb-3 pt-4">
            <h2 className="text-xl font-semibold">
              {filter == "unarchived" ? "Catatanku" : "Arsip catatanku"}
            </h2>

            <div className="mr-3 flex gap-3">
              <IconButton
                onClick={() => toggleArchivefilter()}
                title="Arsip Catatan"
                isActive={filter == "archived"}
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
              </IconButton>

              <IconButton onClick={toggleCreateNoteForm} title="Tambah Catatan">
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
              </IconButton>
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
                      id={note.id}
                      active_id={id || ""}
                      created_at={note.createdAt}
                      onDetailClick={() => openNote(note.id)}
                      onDelete={() => onDelete(note.id)}
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

      <main className="hidden max-h-screen flex-col overflow-y-auto md:flex md:w-2/3">
        <div className="sticky left-0 right-0 top-0 z-50 mb-2 flex justify-between border-b-2 bg-main-white pb-3 pt-4">
          <div className="ml-auto mr-6">
            <label className="flex items-center rounded-md border-2 border-red-200 p-2 px-2 focus:outline-none">
              <input
                type="text"
                value={filterName}
                onChange={onSearch}
                className="inline-flex min-w-[400px] bg-transparent focus:outline-none"
              />

              <IconButton
                title="Arsip Catatan"
                onClick={() => {}}
                isActive={true}
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </IconButton>
            </label>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default App;
