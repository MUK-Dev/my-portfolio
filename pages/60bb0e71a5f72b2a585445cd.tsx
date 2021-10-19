import s from "../styles/admin.module.css";

const admin = () => {
  return (
    <div className={s.root}>
      <div className={s.sections}>
        <form>
          <h6>Add Frontend Skills</h6>
          <div className="input-field">
            <input
              id="email"
              type="text"
              className="validate white-text"
              onChange={(e) => {}}
            />
          </div>
          <button className="btn waves-effect waves-light">
            Add Frontend Skill
          </button>
        </form>
        <form>
          <h6>Add Backend Skills</h6>
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate white-text"
              onChange={(e) => {}}
            />
          </div>
          <button className="btn waves-effect waves-light">
            Add Backend Skill
          </button>
        </form>
        <form>
          <h6>Add Experience</h6>
          <p>Title</p>
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate white-text"
              onChange={(e) => {}}
            />
          </div>
          <p>Description</p>
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate white-text"
              onChange={(e) => {}}
            />
          </div>
          <button className="btn waves-effect waves-light">
            Add to Experience
          </button>
        </form>
      </div>
    </div>
  );
};

export default admin;
