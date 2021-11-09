# Dad Joke Generator

Click <a href="https://neil-tarar.com/dad-joke-generator">here</a> for the app.

## Requirements:

- axios.js (you can call it in your html file)
- <a href="https://sv443.net/jokeapi/v2/">API Documentation</a>

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

<br>

## Description:

<br>
I converted previously written Flask version of the app into React.
Basically this is a practice to use axios while making API requests directly from the browser.

This API does not require a key therefore I allowed the request to be made on the client side through the browser.

<strong>However</strong> if it was an API that required a key, in order to protect the key, best practice would be making the request on the server side by hiding the key in a `.env` file.

Finally I scaled 'viewport' in the html to 0.8 to make it fit into most mobile phone screens.

```html
<meta name="viewport" content="width=device-width, initial-scale=0.8" />
```

<br>

## Using the API

<br>

API allows you to filter content based on 'nsfw', 'religious', 'political' etc. In addition you can search jokes based on a category such as 'programming', 'pun', 'dark' etc.

```javascript
axios
  .get(`https://v2.jokeapi.dev/joke/${jokeType}?blacklistFlags=nsfw&format=txt`)
  .then((response) => {
    let result = response.data;
  });
```

Then based on your choice you can assign the textContent of any section on your html through DOM.
