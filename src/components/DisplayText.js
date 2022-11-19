import { useState } from "react";

function DisplayText({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <div>
        <button onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </button>
      </div>
    </p>
  );
}

export default function Content() {
  return (
    <div className="display-text-conatainer">
      <div className="display-text-header">
        <h1>Welcome to Display Text</h1>
      </div>

      <div className="display-text-wrapper">
        <DisplayText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </DisplayText>
      </div>
    </div>
  );
}
