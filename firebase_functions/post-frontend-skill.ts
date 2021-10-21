import { collection, addDoc } from "firebase/firestore";
import { FormEvent } from "react";
import { db } from "../firebase";

const postFrontendSkill = async (event: FormEvent, skill: string) => {
  event.preventDefault();
  const frontendCollectionRef = collection(db, "frontend-skills");
  try {
    await addDoc(frontendCollectionRef, { skill });
  } catch (err) {
    console.log(err);
  }
};

export default postFrontendSkill;
