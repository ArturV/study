import { useState } from "react";

export const NoteForm = (props: any) => {
  // props - viskas kas patenka i ta forma
  const [note, setNote] = useState(""); // setNote - nustatome reiksme
  const [notes, setNotes] = useState<string[]>([]);
  const [areNotesShown, setAreNotesShown] = useState(true); // true ar false

  console.log({ note, notes });
  // state setinimas yra pradinio lygio, nekartoti projektuose ir nanaudoti "any" tipo
  return (
    <>
      {props.children}

      <input value={note} onChange={(e) => setNote(e.target.value)} />
      <input
        checked={areNotesShown}
        type="checkbox"
        onChange={(e) => setAreNotesShown(e.target.checked)}
      />

      <button
        onClick={() => {
          setNotes([...notes, note]); // paspaudus mygtuka ideda i masyva
          setNote(""); // istustiname input po kliko
        }}
      >
        Click
      </button>
      <p>{note}</p>
      {areNotesShown && notes.map((curNote, i) => <p key={i}>{curNote}</p>)}
    </>
  );
};
