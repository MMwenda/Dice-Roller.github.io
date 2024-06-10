function rollDice(){
     const numofDice = document.getElementById("numofDice").value;
     const diceResult = document.getElementById("diceResult");
     const diceImages = document.getElementById("diceImages");
     const values = [];
     const images = [];

     for(let i = 0; i < numofDice; i++){
     const value = Math.floor(Math.random() * 6) + 1;
     values.push(value);

     images.push(`<img src="assets/${value}.png">`)
     }

     diceResult.textContent = `Dice: ${values.join(', ')}`;
     diceImages.innerHTML = images.join("");
}

// textContent is used when you want to set plain text content, without any HTML formatting. It's a good choice when you're setting text that doesn't contain any HTML tags. In this case, diceResult is likely displaying a simple text result, such as "dice: 1, 2, 3", so textContent is suitable.

// On the other hand, innerHTML is used when you want to set HTML content, which can include tags and formatting. It's a good choice when you're setting content that contains HTML tags. In this case, diceImages is likely displaying a set of images, which are represented as HTML <img> tags, so innerHTML is suitable.