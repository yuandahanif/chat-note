import { createContext, Dispatch } from "react";

export type note = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
};
const NoteContext = createContext<{
  notes: note[];
  addNotes: (title: string, body: string) => void;
  editNote: (id: string, title: string, body: string) => void;
  deleteNote: (id: string) => void;
  toggleArchiveNote: (id: string) => void;
}>({
  notes: [],
  addNotes: function (title: string, body: string): void {
    throw new Error("Function not implemented.");
  },
  editNote: function (id: string, title: string, body: string): void {
    throw new Error("Function not implemented.");
  },
  deleteNote: function (id: string): void {
    throw new Error("Function not implemented.");
  },
  toggleArchiveNote: function (id: string): void {
    throw new Error("Function not implemented.");
  },
});

export default NoteContext;
