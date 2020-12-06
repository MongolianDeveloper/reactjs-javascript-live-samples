import React, { useEffect } from "react";

// 9. useEffect ашиглах зөвлөгөөнүүд
//    - Функцыг useEffect-н dependency-д зарлаж өгөх хэрэгтэй юу **(Is it safe to omit functions from the list of dependencies)**

export default function Part9_4() {
  useEffect(() => {
    const returnInitialValue = () => {
      return "test value";
    };
    returnInitialValue();
  }, []);

  return (
    <div>
      <a
        href="https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies"
        target="_blank"
      >
        click here to see sample codes
      </a>
    </div>
  );
}
