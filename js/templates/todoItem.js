/*
  template in JSX
  React Component
  jsx + data
*/ 

import { toElement } from "./../utils/toElements";

function todoItemTemplate (todo) {
  const template = `
    <section class=" bg-zinc-50 border-l-4 border-purple-400 shadow-sm p-4">
      ${todo}
    </section>`;

  return toElement(template);
}

export { todoItemTemplate };