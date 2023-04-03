import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import DetailNoteCard from "../../components/card/detail_note";
import NoteContext from "../../contexts/note.context";

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
    <div className="flex h-full">
      {detailMemo ? (
        <DetailNoteCard
          title={detailMemo.title}
          createdAt={detailMemo.createdAt}
          body={detailMemo.body}
        />
      ) : (
        <div className="flex h-auto w-full items-center justify-center">
          <span>Id tidak ditemukan</span>
        </div>
      )}
    </div>
  );
};

export default DetailNote;
