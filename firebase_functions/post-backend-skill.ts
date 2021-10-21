import { collection, addDoc } from "firebase/firestore";
import { FormEvent } from "react";
import { db } from "../firebase";

const postBackendSkill = async (event: FormEvent, skill: string) => {
  event.preventDefault();
  const backendCollectionRef = collection(db, "backend-skills");
  try {
    await addDoc(backendCollectionRef, { skill });
  } catch (err) {
    console.log(err);
  }
};

export default postBackendSkill;
