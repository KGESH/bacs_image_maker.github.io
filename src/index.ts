const index = () => {
  const element = document.createElement("div");
  element.innerHTML = "hello, world!";
  return element;
}

document.body.appendChild(index());
