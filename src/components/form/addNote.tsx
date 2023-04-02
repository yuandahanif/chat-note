import { FormEventHandler, useState } from "react";

const TITLE_LIMIT = 50;

const AddNoteForm: React.FC<{
  onSubmit: (title: string, content: string) => void;
}> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    onSubmit(title, content);
  };

  return (
    <form onSubmit={onFormSubmit} className="flex w-full flex-col gap-y-4">
      <label className="flex w-full flex-col">
        <div className="flex items-end justify-between">
          <span className="mb-2 text-lg">Judul</span>
          <span className="mb-2 text-sm">
            Sisa karakter {TITLE_LIMIT - title.length}
          </span>
        </div>
        <input
          type="text"
          maxLength={TITLE_LIMIT}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border-2 border-red-200 p-2 px-2 focus:outline-none"
        />
      </label>
      <label className="flex w-full flex-col">
        <span className="mb-2 text-lg">Konten</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="rounded-md border-2 border-red-200 p-2 px-2 focus:outline-none"
          rows={10}
        ></textarea>
      </label>

      <button
        type="submit"
        className="rounded-md  bg-red-300 p-2 px-2 text-white duration-300 hover:bg-red-400"
      >
        Buat
      </button>
    </form>
  );
};

export default AddNoteForm;
