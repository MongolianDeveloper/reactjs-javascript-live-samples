import React, { useEffect, useState } from "react";

// 3. Өгөгдөл харьцуулах **(How does a referential equality work?)**
//    - Primitive жишээ **(A sample with primitive data types)**
//    - Non primitive жишээ **(A sample with non primitive data types)**

/*
  true === true // true
  false === false // true

  1 === 1 // true
  'a' === 'a' // true

  {} === {} // false
  [] === [] // false

  () => {} === () => {} // false
  const z = {}
  z === z // true
  object.is ?
*/

type PropsType = { bar: () => void; baz: number[] };

const Foo: React.FC<PropsType> = ({ bar, baz }) => {
  const buzz = (options: PropsType) => {
    console.log(options);
  };

  useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]);

  return <div>foobar</div>;
};

export default function Part3() {
  const [testVar, setTestVar] = useState(0);

  // Primitive жишээ **(A sample with primitive data types)**
  // const bar = "bar value";
  // const baz = 3;

  //    - Non primitive жишээ **(A sample with non primitive data types)**
  // const bar = () => {};
  // const baz = [1, 2, 3];

  const bar = React.useCallback(() => {}, []); // func
  const baz = React.useMemo(() => [1, 2, 3], []); // any -> object, func, number, string, array

  console.log("rendering part3...");

  return (
    <>
      <Foo bar={bar} baz={baz} />
      <button onClick={() => setTestVar((value) => value + 1)}>
        change test variable
      </button>
    </>
  );
}
