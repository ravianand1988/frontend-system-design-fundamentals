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

function getMarkdown(node) {
  console.log("node: ", node);
  let elem = node;
  const hashText = node.textContent;
  let newText = "";
  if (hashText.startsWith("#")) {
    console.log("hash text: ", hashText);
    const trimmedText = hashText.trim();
    console.log("trimmed: ", trimmedText);
    switch (trimmedText) {
      case "#":
        elem = document.createElement("h1");
        newText = node.textContent.slice(2);
        break;
      case "##":
        elem = document.createElement("h2");
        newText = node.textContent.slice(3);
        break;
      case "###":
        elem = document.createElement("h3");
        newText = node.textContent.slice(2);
        break;
    }
  }

  elem.textContent = newText;
  elem.setAttribute("contenteditable", true);
  elem.textContent = elem.textContent === "" ? " test" : elem.textContent;
  return elem;
}

// : (...args: any[]) => void
function debounce(fun, delay) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => fun(...args), delay);
  };
}

export { createCardElement, debounce, getHeading, getMarkdown };
