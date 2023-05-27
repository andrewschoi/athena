type InteractableTagName = "INPUT" | "BUTTON" | "A" | "IMG";

/*****************************************************************************/
const _inputHandler = async (element: Element | HTMLElement) => {
  if (element.tagName !== "INPUT") return false;
};

const _btnHandler = async (element: Element | HTMLElement) => {
  if (element.tagName !== "BUTTON") return false;
};

const _hrefHandler = async (element: Element | HTMLElement) => {
  if (element.tagName !== "A") return false;
};

const _imgHandler = async (element: Element | HTMLElement) => {
  if (element.tagName !== "INPUT") return false;
};

const isForwardElement = async (element: Element | HTMLElement) => {
  if (element.tagName === "INPUT") {
    return await _inputHandler(element);
  }
  if (element.tagName === "BUTTON") {
    return await _btnHandler(element);
  }
  if (element.tagName === "A") {
    return await _hrefHandler(element);
  }
  if (element.tagName === "IMG") {
    return await _imgHandler(element);
  }

  return false;
};

document.querySelectorAll("button, a, input, img").forEach(async (element) => {
  if (await isForwardElement(element)) element.classList.add("highlight");
});

/*****************************************************************************/
