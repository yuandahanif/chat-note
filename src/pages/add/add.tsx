import { useNavigate } from "react-router-dom";
import { addNote } from "@utils/network-data";
import { FormEventHandler, useState } from "react";
import Input from "@components/form/input";
import useInput from "@hooks/useInput";

const TITLE_LIMIT = 50;

const AddNote = () => {
  const navigate = useNavigate();
  const [title, setTitleOnChange] = useInput("");

  const [content, setContent] = useState("");

  const onFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await addNote({ title, body: content });
      navigate(0);
    } catch (error) {
      alert("error");
      console.error("error add note:", error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-8 py-16">
      <h1 className="text-3xl">Tambah catatan</h1>
      <form onSubmit={onFormSubmit} className="flex w-full flex-col gap-y-4">
        <label className="flex w-full flex-col">
          <Input
            required
            value={title}
            type="text"
            onChange={setTitleOnChange}
            label="Judul"
            className="min-w-[500px]"
          />
          <div className="flex items-end justify-between">
            <span className="mb-2 text-sm">
              Sisa karakter {TITLE_LIMIT - title.length}
            </span>
          </div>
        </label>

        <label className="flex w-full flex-col">
          <span className="mb-2 text-lg">Konten</span>
          <div
            placeholder="konten disini"
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            className="cursor-text rounded-md border-2 border-red-200 bg-white p-2 px-2 focus:outline-none dark:text-slate-600 "
            contentEditable
          ></div>
        </label>

        <button
          type="submit"
          className="rounded-md  bg-red-300 p-2 px-2 text-white duration-300 hover:bg-red-400"
        >
          Buat
        </button>
      </form>
    </div>
  );
};

export default AddNote;
