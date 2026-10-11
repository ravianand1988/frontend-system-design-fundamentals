function createCardElement(title, body) {
  const template = document.getElementById("cardTemplate");
  const element = template.content.cloneNode(true).firstElementChild;
  const [cardTitle, cardBody] = element.querySelectorAll(
    ".card__title, .card__body__content",
  );
  [cardTitle.textContent, cardBody.textContent] = [title, body];
  return element;
}

function getHeading(node) {
  let element = node;
  if (node.textContent.startsWith("/h3")) {
    element = document.createElement("h3");
  } else if (node.textContent.startsWith("/h2")) {
    element = document.createElement("h2");
  } else if (node.textContent.startsWith("/h1")) {
    element = document.createElement("h1");
  }

  element.textContent = node.textContent?.slice(3);
  element.setAttribute("contenteditable", "true");
  element.textContent =
    element.textContent === "" ? "Heading" : element.textContent;
  return element;
}

export { createCardElement, getHeading };
