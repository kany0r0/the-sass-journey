window.onload = function () {
  // let's start by querying our DOM node tree for the node(s) we want
  let elements = document.querySelectorAll('.rolling-text');

  elements.forEach((element) => {
    // in the Element node object retrieve the inner text
    let innerText = element.innerText;
    element.innerText = '';
    // This div container will hold our span of letters
    let textContainer = document.createElement('div');

    for (let letter of innerText) {
      // We create the span container to wrap our letters
      let span = document.createElement('span');
      // For any space character in the text replace with '\xa0'
      span.innerText = letter.replace(/\s/g, '\xa0');
      // each letter's span should added a 'letter' class
      span.classList.add('letter');
      // at the end of this loop all letters should be within this container
      textContainer.append(span);
    }

    // add our prepared letters to the DOM
    element.appendChild(textContainer);
    // this is the duplicate text that will rise from under
    let clone = textContainer.cloneNode(true);
    // add it to our DOM
    element.appendChild(clone);
  });
};
