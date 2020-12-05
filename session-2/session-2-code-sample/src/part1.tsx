import React from "react";

// 1. Side effect гэж ву вэ **(What is a side effect?)**
//    - Clean up функц шаардлагагүй react компонент **(useEffect without cleanup)**
//    - Clean up функц шаардлагатай react компонент **(useEffect with cleanup)**

export default function Part1() {
  return (
    <>
      <section>
        <ul>
          <li>1. Fetching data</li>
          <li>2. Setting up subscriptions - (update states)</li>
          <li>
            3. Interacting with browser/dom apis - (window resize event,
            document.title, fetch)
          </li>
          <li>4. Run code when a state/prop changes </li>
        </ul>
      </section>

      <section>
        <b>- Clean up функц шаардлагагүй react компонент</b>
        <ul>
          <li>1. Network requests - fetch data from external api</li>
          <li>2. Manual dom mutations - hide/show element</li>
          <li>3. Writing logs</li>
        </ul>
      </section>

      <section>
        <b>- Clean up функц шаардлагатай react компонент</b>
        <div>
          For example, let’s say we have a ChatAPI module that lets us subscribe
          to a friend’s online status. In a React class, you would typically set
          up a subscription in componentDidMount, and clean it up in
          componentWillUnmount.
        </div>
      </section>
    </>
  );
}
