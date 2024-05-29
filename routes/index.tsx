


import { asset } from "$fresh/runtime.ts";


export default function Page() {
  return (
    <p>
      <a href={asset("/en/shop/Rapid Technic AG.html")}>View brochure</a>
    </p>
  );
}