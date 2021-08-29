// Imports
import quotes from '../data/quotes.js'

// Selecting DOM elements
const quoteGeneratorBtn = document.querySelector('.quote-generator-btn')
const elQuoteTitle = document.querySelector('.quote-title')
const elQuote = document.querySelector('.quote')
const elAuthor = document.querySelector('.author')

let index = -1

// Quote Generator
function quoteGenerator() {
  if (index < quotes.length - 1)
    index++
  else
    index = 0

    elQuoteTitle.textContent = quotes[index].title
    elQuote.textContent = quotes[index].quote
    elAuthor.textContent = quotes[index].author
}

// "quoteGenerator" function works every 3 seconds
setInterval(() => {
  quoteGenerator()
}, 3000)


// Events
quoteGeneratorBtn.addEventListener('click', quoteGenerator)