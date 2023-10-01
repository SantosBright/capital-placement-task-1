import "./styles.css";

type Props = {};

const TabNav = (props: Props) => {
  return (
    <header>
      <div className="tab-nav">
        <button>
          <span>Program Details</span>
        </button>
        <button className="selected">
          <span>Application Form</span>
        </button>
        <button className="">
          <span>Workflow</span>
        </button>
        <button className="">
          <span>Preview</span>
        </button>
      </div>
    </header>
  );
};

export default TabNav;
