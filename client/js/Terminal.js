class Terminal {
  constructor() {
    this.counter = 0;
    this.reseted = false
  }
  typeWriter(element, text) {
    if(! this.reseted) {
        this.reseted = true;
        element.innerHTML="";
    }
    if (this.counter < text.length) {
      element.innerHTML += text.charAt(this.counter);
      this.counter++;
      setTimeout(() => this.typeWriter(element, text), 50);
    } else {
      this.counter = 0;
    }
  }
}

export default Terminal;
