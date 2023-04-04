import { useNavigate } from "react-router-dom";
import AddNoteForm from "@components/form/addNote";
import { addNote } from "@utils/network-data";

const AddNote = () => {
  const navigate = useNavigate();
  const onSubmit = async (title: string, body: string) => {
    try {
      // FIXME: rerender
      await addNote({ title, body });
      navigate("/note");
    } catch (error) {
      alert("error");
      console.error("error add note:", error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-8 py-16">
      <h1 className="text-3xl">Tambah catatan</h1>
      <AddNoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddNote;
