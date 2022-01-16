import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

import "./CryptoText.css"

const Example = (props) => {
  const { result, dencrypt } = useDencrypt();
// const values = [
//   "What Does Code Arena Do ?",
//   "What Does Code Actually Arena Do ?",
//   "What Does Code Arena Do ?",
//   "What Does Code Actually Do ?",
// ];

const values = props.textArray;

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return <p class="x-sign">{result}</p>;
};

export default Example;
