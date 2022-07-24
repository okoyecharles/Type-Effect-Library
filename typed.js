// TYPED CLASS: Initializes A Type-Like Behaviour to any Element selected

// Note: IP is equivalent to Insertion point

class Typed {
  // Takes in Five (5) parameters with their respective default values
  constructor(selector, {
    strings = [''],
    typeSpeed = 1,
    backSpeed = 1,
    loop = false,
    IPColor = 'rgb(0, 0, 0)',
  }) {
    this.text = document.querySelector(selector);
    this.typeSpeed = 1 / typeSpeed * 1000;
    this.backSpeed = 1 / backSpeed * 1000;
    this.words = strings;
    this.loop = loop;
    this.IPColor = IPColor;
  }

  // START METHOD: Begins the typing effect
  start() {
    const words = this.words;
    const speed = (this.typeSpeed + this.backSpeed) * 2; // Overall typing Speed
    this.text.textContent = this.text.textContent || ' ';

    this.addIP() // Add the Insertion Point
    this.typeOut() // Type out any initial content

    if (this.loop) {
       // Repeat Without End if Loop is true
      this.display()
      setInterval(() => {
        this.display()
      }, speed * words.length);

    } else {
        // Repeat Only Once
      this.display()

        // Re-type In the First String
      setTimeout(() => {
        this.typeIn(words[0])
      }, speed * (words.length + 1))

        // Remove Insertion Point
      setTimeout(() => {
        const IP = document.querySelector(`.${this.IPClass}`)
        IP.style.display = 'none';
      }, speed * (words.length + 1) + 1000);

    }
  }

  // DISPLAY METHOD: Types In and Types Out Each String
  display() {
    const words = this.words;
    const speed = ((this.typeSpeed) + this.backSpeed) * 2;

    words.forEach((word, index) => {
      setTimeout(() => {
        this.typeIn(word)
        this.typeOut()
      }, speed * (index + 1));
    })
  }

  // ANIMATE INSERTION POINT: Dynamically gives the Insertion Point the blinking effect
  animateIP(bool) {
    const IP = document.querySelector(`.${this.IPClass}`)
    const blink = [{
      background: 'transparent'
    }];

    const blinkTiming = {
      duration: 800,
      iterations: Infinity,
    }

    if (bool) {
      IP.animate(blink, blinkTiming);
    } else {
      blinkTiming.iterations = 0;
      IP.animate(blink, blinkTiming);
    }
  }

  // ADD INSERTION POINT: No explanation Needed
  addIP() {
    const text = this.text;
    text.style.position = 'relative';
    text.style.width = 'max-content';

    const IP = document.createElement('div');
    this.IPClass = `IP${Math.floor((Math.random() * (10 ** 17)))}`;
    IP.className = this.IPClass;

    text.append(IP);

    IP.style.content = '';
    IP.style.position = 'absolute';
    IP.style.height = '100%';
    IP.style.transform = 'translateX(100%)';
    IP.style.background = `${this.IPColor}`;
    IP.style.width = '2px';
    IP.style.top = '0';
    IP.style.right = '0';

    this.animateIP(true);
  }

  // TYPE IN: Types the word to the DOM
  typeIn(word) {
    const speed = this.typeSpeed / word.length;
    let letters = '';
    word
      .split('')
      .forEach((letter, index) => {
        setTimeout(() => {
          letters += letter
          this.text.firstChild.textContent = letters
        }, speed * (index + 1));
      })
  }

  // TYPE OUT: Types out any word currently in the DOM
  typeOut() {
    this.animateIP(false)
    const speed = this.backSpeed;

    setTimeout(() => {
      const IP = document.querySelector(`.${this.IPClass}`)

      const word = this.text.innerText;
      let wordArr = word.split('');
      wordArr.forEach((_, index) => {
        setTimeout(() => {
          wordArr.pop()
          this.text.firstChild.textContent = wordArr.join('')
          IP.style.animation = 'none';
        }, (speed / word.length * (index + 1)) + speed)

      })
      IP.style.animation = 'blink 0.8s infinite';
    }, speed)
  }
}

export default Typed