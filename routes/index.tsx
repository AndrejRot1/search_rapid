


import { asset } from "$fresh/runtime.ts";


export default function Page() {
  return (
    <p>
      <a href={asset("test_translation.html")}>View brochure</a>
    </p>
  );
}
