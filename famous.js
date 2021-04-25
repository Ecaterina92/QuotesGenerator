const Quotes = [{quote: "I am not a person to be pressured by anybody or any nation", author: "Indira Ghandi"},
                    {quote: "Above all, don't lie to yourself", author: "Fyodor Dostoyevsky"},
                    {quote:"You cannot let your failures define you. You have to let your failures teach you", author: "Barack Obama"},
                    {quote: "Only do what your heart tells you", author: "Princess Diana"}   
               ];


let btn = document.getElementById('btn');
const quote = document.getElementsByClassName('quote');
const author = document.getElementsByClassName('author');

btn.addEventListener('click', function() {
    let randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    quote.textContent = Quotes[randomQuote].quote;
    author.textContent = Quotes[randomQuote].author;
});
