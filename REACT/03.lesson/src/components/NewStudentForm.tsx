import { useState } from "react";
import axios from "axios";

export const NewStudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0); // arba: const [studentAge, setStudentAge] = useState<null | number>(null);
  // tada:  <input type="number" value={studentAge ?? ""} />

  const [newStudent, setNewStudent] = useState([]);

  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/create-student", {
        firstName,
        lastName,
        age,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    // backende turi buti suinstaliotas cors
  };

  console.log({ firstName, lastName, age });

  return (
    <form onSubmit={handleStudentSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input
        value={age}
        onChange={(e) => setAge(+e.target.value)}
        type="number"
      />
      <button>Add</button>
    </form>
  );
};
