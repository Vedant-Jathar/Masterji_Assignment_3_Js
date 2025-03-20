let new_quote_btn = document.getElementById('new_quote_btn')
let random_quote = document.getElementById('random_quote')
let author = document.getElementById('author')
let copy_btn = document.getElementById('copy_btn')
let share_on_twitter = document.getElementById('share_on_twitter')
let main_div = document.getElementById('main_div')
let url = "https://api.freeapi.app/api/v1/public/quotes/quote/random"

let bg_images_arr = ["url('bg_images/bg1.jpg')", "url('bg_images/bg2.jpg')", "url('bg_images/bg3.jpg')", "url('bg_images/bg4.jpg')", "url('bg_images/bg5.jpg')",]

window.onload = function () {
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            random_quote.innerText = data.data.content
            author.innerText = data.data.author

            main_div.style.backgroundImage = bg_images_arr[Math.floor(Math.random() * 5)]
            main_div.style.backgroundSize = "cover"
            main_div.style.backgroundPosition = "center"

            let encoded_random_quote_text = encodeURIComponent((random_quote.innerText).trim())
            share_on_twitter.href = `https://twitter.com/intent/tweet?text=${encoded_random_quote_text}&url=`

        })
}

new_quote_btn.addEventListener('click', function () {
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            random_quote.innerText = data.data.content
            author.innerText = data.data.author

            main_div.style.backgroundImage = bg_images_arr[Math.floor(Math.random() * 5)]
            main_div.style.backgroundSize = "cover"
            main_div.style.backgroundPosition = "center"

            let encoded_random_quote_text = encodeURIComponent((random_quote.innerText).trim())
            share_on_twitter.href = `https://twitter.com/intent/tweet?text=${encoded_random_quote_text}&url=`

        })
})

copy_btn.addEventListener('click', function () {
    navigator.clipboard.writeText(random_quote.innerText)
})

// quote_string="Vedant is a good boy"
// let quote_string = random_quote.innerText
// let quote_array = quote_string.split("")

// while (quote_array.includes(' ')) {
//     let index_of_space = quote_array.indexOf(" ")
//     quote_array.splice(index_of_space, 1, "%20")
// }

// let modified_quote_string = quote_array.join('')

// console.log(modified_quote_string);

