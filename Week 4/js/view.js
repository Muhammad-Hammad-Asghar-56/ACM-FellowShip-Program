export default class view {
  $ = {};
  $$ = {};

  constructor() {
    this.$.Squares = this.#qslst(`[data-id="Square"]`);    
    this.$.Squares = this.#qs(`[data-id="label"]`);
  }

  #qs(selector, parent) {
    const el =
      parent.querySelector(selector) || document.querySelector(selector);
    if (!el) throw new Error("Could nt find element");
  }
  #qslst(selector) {
    const ellst = document.querySelectorAll(selector);
  }
}
