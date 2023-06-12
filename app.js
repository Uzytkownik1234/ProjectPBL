/*const API_KEY = "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"
const submitButton = document.querySelector("#submitSearch")
const outputElement = document.querySelector("#output")
const inputElement = document.querySelector("input")


async function getMessage() {
    console.log("clicked")
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Podaj przepis na" + inputElement.value}]
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content
    }   catch (error){
        console.error(error)
    }

}

submitButton.addEventListener("click", getMessage)

function clearInput() {
    inputElement.value = ""
}

submitButton.addEventListener("click", clearInput)
*/
const submitButton = document.querySelector('#submitSearch');
const outputElement = document.querySelector('#output');
const inputElement = document.querySelector('input');

async function getMessage() {
  console.log('clicked');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: inputElement.value
    })
  };

  try {
    const response = await fetch('/get-message', options);
    const data = await response.json();
    console.log(data);
    outputElement.textContent = data.message;
  } catch (error) {
    console.error(error);
  }
}

submitButton.addEventListener('click', getMessage);

function clearInput() {
  inputElement.value = '';
}

submitButton.addEventListener('click', clearInput);