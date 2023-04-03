import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { RouterProvider } from "react-router-dom";

import NoteContext from "./contexts/note.context";
import { notes as initNotes } from "./utils";
import router from "./routes/route";

const Main: React.FC = () => {
  const [notes, setNotes] = useState(initNotes);

  const addNotes = (title: string, body: string) =>
    setNotes((notes) => {
      return [
        ...notes,
        {
          id: `notes-${+new Date()}`,
          title: title || "(untitled)",
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ];
    });

  const editNote = (title: string, body: string, id: string) => {
    setNotes((notes) => {
      return [
        ...notes.map((note) => {
          if (note.id === id) {
            note.title = title;
            note.body = body;

            return note;
          }
          return note;
        }),
      ];
    });
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchiveNote = (id: string) => {
    setNotes((state) => {
      const newNotes = state.map((note) => {
        if (note.id == id) {
          note.archived = !note.archived;
        }
        return note;
      });
      return newNotes;
    });
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNotes, deleteNote, editNote, toggleArchiveNote }}
    >
      <RouterProvider router={router} />
    </NoteContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
