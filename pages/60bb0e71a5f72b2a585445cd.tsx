import { Response } from "@components/common/customElements";
import { AdminForms } from "@components/ui";
import s from "../styles/admin.module.css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const responsesCollectionRef = collection(db, "responses");
  const responses = [];

  try {
    const responsesData = await getDocs(query(responsesCollectionRef));
    responsesData.docs.map((d) => responses.push(d.data()));
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      responses,
    },
    revalidate: 4 * 60 * 60,
  };
};

const admin = ({
  responses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={s.root}>
      <section>
        <AdminForms />
      </section>
      <section className={s.responses}>
        {responses.length > 0 ? (
          responses.map(({ email, name, message }) => (
            <Response email={email} name={name} message={message} />
          ))
        ) : (
          <h5>No Responses</h5>
        )}
      </section>
    </div>
  );
};

export default admin;
