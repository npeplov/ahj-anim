export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.showDiv = this.showDiv.bind(this);
    this.addAnim = this.addAnim.bind(this);
  }

  init() {
    this.gui.collapseButton.addEventListener('click', this.showDiv);
    this.gui.collapseButton.addEventListener('mouseover', this.addAnim);
  }

  showDiv() {
    this.gui.collapseDiv.classList.toggle('hidden');
  }

  addAnim() {
    this.gui.collapseButton.classList.add('anim');
    this.gui.collapseButton.removeEventListener('mouseover', this.addAnim);
  }
}
