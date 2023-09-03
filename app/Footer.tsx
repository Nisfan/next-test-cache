import React from "react";
import { myAction } from "./actions";

export default function Footer() {
  return (
    <div>
      Footer
      <form action={myAction}>
        <input type="text" name="name" />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}
