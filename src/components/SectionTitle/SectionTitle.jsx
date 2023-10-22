import React from "react";

export default function SectionTitle({ title }) {
  return (
    <div class="bordered-text">
      <div class="border-l left-border"></div>
      <div class="text">{title}</div>
      <div class="border-r right-border"></div>
    </div>
  );
}
