# Typing Effect Library

> An open-source Typing-effect Library I created. That enables potential users to add a typing effect to mere DOM Elements.

## Tool Preview
Here is a preview

https://user-images.githubusercontent.com/102174805/180654050-bc75119b-5224-4e08-9659-dbf218c28549.mp4



## How To Use
Below is a brief tutorial on how to use this Tool.
- [x] To Begin a new typing effect Initialize the class as follows
```javascript
import Typed from "./typed.js";

const newText = new Typed()
```
---
- [x] The First Parameter should be the selector of the text element ( In my case a span with a class of `auto-text` ).
**Note:** Elements are selected with the `querySelector` method.
```javascript
const newText = new Typed('.auto-text')
```
---
- [x] The Second Parameter is an object that takes in five Key-Value pairs (one mandatory, four optional) as shown below.
```javascript
  {
     // Mandatory. array of strings to be typed
    strings: [],
     // typing-in speed. default value is one
    typeSpeed: number,
     // typing-out speed. default value is one
    backSpeed: number,
     // occur once or forever. default value is false
    loop: boolean,
     // color of insertion point. default value is black
    IPColor: string,
  }
```
Your code should look similar to below
```javascript
const newText = new Typed('.auto-text', {
  strings: [
    'first string',
    'second string',
  ]
}
```
---
- [x] Customize Your Page! 😁


## Built With

  - [x] HTML
  - [x] CSS
  - [x] JavaScript

## Live [⇗](https://okoyecharles.github.io/Type-Effect-Library/)

[Click here to see the Tool on the Live on The Web](https://okoyecharles.github.io/Type-Effect-Library/)


## Taking Actions
**Instructions on how to access this tool locally:** 
> To Access my project locally please follow the instructions listed below
- Enter this url: [https://github.com/OkoyeCharles/Type-Effect-Library](https://github.com/OkoyeCharles/Type-Effect-Library) in your web browser.
- Once opened navigate to the top left level of the project a green code download button will be visible on the righthand side.
- Select download Zip option from drop down menu.
- Once the download is complete you will be able to access the tool locally 😀. 

## Authors

👤 **Okoye Charles**

- GitHub: [@okoyecharles](https://github.com/okoyecharles)
- Twitter: [@okoyecharles_](https://twitter.com/okoyecharles_)
- LinkedIn: [Charles Okoye](https://linkedin.com/in/charles-okoye-633374236/)


## 🤝 Contributing

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement". Remember to support the project with a star. 
