import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import IconButton from "@components/buttons/iconButton";
import NoteListItem from "@components/list/note_item";
import {
  archiveNote,
  deleteNote,
  getAccessToken,
  getActiveNotes,
  getArchivedNotes,
  note,
  unarchiveNote,
} from "@utils/network-data";
import SimpleProfile from "@components/profile/simple_profile";
import ThemeSwitcher from "@components/theme/swticher.theme";
import MainLayout from "@layouts/main.layout";
import LanguageSwitcher from "@components/language/language.switcher";
import useLocalization from "@hooks/useLocalization";

function App() {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = useLocalization();
  const [accseToken] = useState(getAccessToken());
  const [notes, setNotes] = useState<null | note[]>(null);
  const [refetch, setRefetch] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();

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
  }, [notes, filterName]);

  const openNote = (id: string) => {
    navigate(`/note/${id}`);
  };

  const toggleArchivefilter = () => {
    setFilter((s) => {
      return s == "archived" ? "unarchived" : "archived";
    });
  };

  const onDelete = async (id: string) => {
    try {
      await deleteNote(id);
      setRefetch((s) => !s);
    } catch (error) {
      console.error(error);
      alert("error deleting note");
    }
  };

  const toggleArchive = async (id: string, isArchived: boolean) => {
    try {
      if (isArchived) {
        await unarchiveNote(id);
      } else {
        await archiveNote(id);
      }
      setRefetch((s) => !s);
    } catch (error) {
      console.error(error);
      alert("error archive note");
    }
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
        const data = await (filter == "unarchived"
          ? getActiveNotes()
          : getArchivedNotes());

        if (!data.error) {
          setNotes(data.data);
        }
      } catch (error) {
        alert("failed to fetch note");
        console.error("error fetching note: ", error);
      }
    };

    getData();
  }, [filter, refetch]);

  return (
    <MainLayout>
      <aside className="relative flex h-auto max-h-screen w-full flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r p-2 pt-0 md:w-1/3">
        <div className=" flex grow flex-col pb-2">
          <div className="sticky left-0 right-0 top-0 z-50 mb-2 flex justify-between border-b-2 bg-white pb-3 pt-4 dark:bg-gray-800">
            <h2 className="text-xl font-semibold">
              {filter == "unarchived" ? t("myNote") : t("myArchive")}
            </h2>

            <div className="mr-3 flex gap-3 ">
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
                      onArchive={() => toggleArchive(note.id, note.archived)}
                    />
                  )
              )
            ) : (
              <div className="my-auto flex h-auto w-full grow items-center justify-center">
                <span>{t("emptyNote")}</span>
              </div>
            )}
          </div>
        </div>

        <SimpleProfile />
      </aside>

      <main className="hidden max-h-screen flex-col overflow-y-auto md:flex md:w-2/3">
        <div className="sticky left-0 right-0 top-0 z-50 mb-2 flex gap-x-2 border-b-2 px-8 pb-3 pt-4">
          <div className="ml-auto mr-6">
            <label className="flex items-center rounded-md border-2 border-red-200 p-2 px-2 focus:outline-none dark:border-white">
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
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <Outlet />
      </main>
    </MainLayout>
  );
}

export default App;
