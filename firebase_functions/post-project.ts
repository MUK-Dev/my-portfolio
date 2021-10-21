import { collection, addDoc } from "firebase/firestore";
import { FormEvent } from "react";
import { db } from "../firebase";

const postProject = async (
  event: FormEvent,
  title: string,
  description: string
) => {
  event.preventDefault();
  const projectsCollectionRef = collection(db, "projects");
  try {
    await addDoc(projectsCollectionRef, { title, description });
  } catch (err) {
    console.log(err);
  }
};

export default postProject;
