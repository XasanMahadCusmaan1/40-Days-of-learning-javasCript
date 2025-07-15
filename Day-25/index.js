// - 1. What is fetch() API and Syntax
// - 2. Using async/await with fetch()
// - 3. HTTP Methods
// - 4. fetch() Usage: Getting Resources
// - 5. fetch() Usage: Query Params
// - 6. fetch() Usage: Creating Resource
// - 7. fetch() Usage: Custom Headers
// - 8. fetch() Usage: Updating an Entire Resource
// - 9. fetch() Usage: Updating a Part of the Resource
// - 10. fetch() Usage: Deleting Resource
// - 11. Creating a Request Object
// - 12. Handling Response
// - 13. Handling Errors
// - 14. Canceling a Request
// - 15. Tasks and Assignments

// task solving

// 1. Use fetch() to retrieve a list of users from
// https://jsonplaceholder.typicode.com/users
// and log the names to the console

async function fetchUsers(url) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();

// 2. Fetch all posts by userId=1 from
// https://jsonplaceholder.typicode.com/posts?userId=1
// and display the titles in the DOM

const titlesContainer = document.querySelector(".titles__container");

async function fetchPosts() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const data = await res.json();
    data.forEach((tit) => {
      const title = document.createElement("h3");
      title.textContent = tit.title;
      titlesContainer.appendChild(title);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

// 3. Send a POST request to
// https://jsonplaceholder.typicode.com/posts
// with a new post (title, body, userId).
// Show the response in console

async function sendPost() {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hassan",
        body: "lorem ipsum",
        userId: 1000,
      }),
    });
    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

sendPost();

// 4. Update the post with ID = 1 by sending a PUT
// request with a new title and body.
// Use the same endpoint

async function putRequest() {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "Hi Gys my name is g i live in tronto",
      }),
    });
    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

putRequest();

// 5. Send a PATCH request to update just the
// title of post ID = 1

async function patchRequest() {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hey i patched the title",
      }),
    });

    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

patchRequest();

// 6. Send a DELETE request to remove post with
// ID = 1. Log the status of the response

async function deleteRequest() {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
    console.log(req.status);
  } catch (error) {
    console.log(error);
  }
}

deleteRequest();

// 7. Send a POST request to
// https://jsonplaceholder.typicode.com/posts
// with Content-Type: application/json
// in headers. Log the response

async function sendPostReq(postData) {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const userData = {
  userId: 10,
  body: "Hello i am post request",
  title: "I am the last post request",
};

sendPostReq(userData);

// 8. Create a custom function request(url, options)
// that wraps fetch. Use it to GET users and POST
// a new post

async function request(url, options) {
  try {
    const req = await fetch(url, options);
    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.error("Request Failed " + error);
  }
}

const get = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 10,
    body: "I am Flexible post data",
    title: "dynamic posting",
  }),
};
request("https://jsonplaceholder.typicode.com/users", get);
request("https://jsonplaceholder.typicode.com/posts", post);

// 9. Make a fetch call to a broken URL and use
// .catch() or try...catch to show a user-friendly
// error message

async function brokenUrl() {
  try {
    const req = await fetch("https://jsonplceholder.typicode.com/posts");
    const data = await req.json();
    console.log(data);
  } catch (error) {
    console.error("User Message :", error.message);
  }
}

brokenUrl();

// 10. Use AbortController to cancel a long-running
// fetch request (you can delay the response using
// a mock server or setTimeout)

const downBtn = document.querySelector("#download-btn");
const abortBtn = document.querySelector("#abort-btn");
let controller;

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort("User aborted the dounload");
    console.warn("download cancelled by the user");
  }
});

downBtn.addEventListener("click", startDownload);

async function startDownload() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    console.log("Downloading........");

    setTimeout(async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        signal,
      });
      console.log("Download Complete");
      const data = await req.json();
      console.log(data);
    }, 3000);
  } catch (error) {
    console.error("Download Error", error.message);
  }
}
