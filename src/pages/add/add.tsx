import { useContext } from "react";
import AddNoteForm from "../../components/form/addNote";
import NoteContext from "../../contexts/note.context";

const AddNote = () => {
  const { addNotes } = useContext(NoteContext);

  const onSubmit = (title: string, body: string) => {
    addNotes(title, body);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-8 py-16">
      <h1 className="text-3xl">Tambah catatan</h1>
      <AddNoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddNote;
