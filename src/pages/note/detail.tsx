import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import parser from "html-react-parser";
import NoteContext from "../../contexts/note.context";
import { showFormattedDate } from "../../utils";

const DetailNote = () => {
  let { id } = useParams();
  const { getNote } = useContext(NoteContext);

  const detailMemo = useMemo(() => {
    if (id) {
      return getNote(id);
    }
    return undefined;
  }, [id]);

  return (
    <div className="flex h-full w-full ">
      {detailMemo ? (
        <div className="p-5 py-12">
          <div className="mb-4 flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-slate-700 ">
              {detailMemo.title}
            </h1>
            <span className="text-xs">
              {showFormattedDate(detailMemo.createdAt)}
            </span>
          </div>

          <article className="prose prose-lg prose-slate">
            <p>{parser(detailMemo.body)}</p>
          </article>
        </div>
      ) : (
        <div className="flex h-auto w-full items-center justify-center">
          <span>Id tidak ditemukan</span>
        </div>
      )}
    </div>
  );
};

export default DetailNote;
