import AdminForm from "@components/common/viewTypes/AdminForm";
import s from "./AdminForms.module.css";

const AdminForms = () => {
  return (
    <section className={s.forms}>
      <AdminForm type="Frontend" />
      <AdminForm type="Backend" />
      <AdminForm type="Experience" />
    </section>
  );
};

export default AdminForms;
