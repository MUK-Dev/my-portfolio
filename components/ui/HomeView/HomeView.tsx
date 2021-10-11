import s from "./HomeView.module.css";

const HomeView = () => {
  return (
    <div className={`row ${s.root}`}>
      <div className={`col s12 m6 center-align ${s.half}`}>
        <h1>M. Usman Khiji</h1>
      </div>
      <div className={`col s12 m6 center-align ${s.half}`}>Illustration</div>
    </div>
  );
};

export default HomeView;
