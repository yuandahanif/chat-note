import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parser from "html-react-parser";
import { showFormattedDate } from "../../utils";
import { getNote, note } from "@utils/network-data";

const DetailNote = () => {
  let { id } = useParams();
  const [note, setNote] = useState<null | note>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const data = await getNote(id);
          if (!data.error) {
            setNote(data.data);
          }
        }
      } catch (error) {
        alert("failed to fetch note");
        console.error("error fetching note: ", error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="flex h-full w-full ">
      {note ? (
        <div className="p-5 py-12">
          <div className="mb-4 flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-slate-700 ">
              {note.title}
            </h1>
            <span className="text-xs">{showFormattedDate(note.createdAt)}</span>
          </div>

          <article className="prose prose-lg prose-slate">
            <p>{parser(note.body)}</p>
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
