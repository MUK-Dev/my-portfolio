import { collection, addDoc } from "firebase/firestore";
import { FormEvent } from "react";
import { db } from "../firebase";

const postResponse = async (
  event: FormEvent,
  email: string,
  name: string,
  message: string
) => {
  event.preventDefault();
  const responsesCollectionRef = collection(db, "responses");
  try {
    await addDoc(responsesCollectionRef, { email, name, message });
  } catch (err) {
    console.log(err);
  }
};

export default postResponse;
