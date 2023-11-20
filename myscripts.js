const text = document.querySelector('.spiner');
text.innerHTML = text.innerHTML.split('').map((char, i) =>
`<span style="transform:rotate(${i * 14.9}deg)">${char}</span>`
).join("");



