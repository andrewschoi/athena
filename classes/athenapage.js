class AthenaPage {
  #pageInstance;

  constructor(pageInstance) {
    this.#pageInstance = pageInstance;
    this.#pageInstance.on("domcontentloaded", async () => {
      await this._initTaskBox();
    });
  }

  async highlightSelectors(selectors) {
    return selectors.forEach(async (selector) => {
      const handles = await this.#pageInstance.$$(selector);
      handles.forEach(async (h) =>
        this.#pageInstance.evaluateHandle((el) => {
          el.style.color = "red";
        }, h)
      );
    });
  }

  async _initTaskBox() {
    this.#pageInstance.evaluate(() => {
      let element = document.createElement("input");
      element.type = "text";
      element.placeholder = "Enter task here...";
      element.id = "task-box-input";
      element.style.position = "absolute";
      element.style.top = "0px";
      element.style.right = "0px";
      element.style.zIndex = "9999"; // set this to a high number
      document.body.appendChild(element);
    });
  }
}

module.exports = {
  AthenaPage,
};
