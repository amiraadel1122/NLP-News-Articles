function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let userUrl = document.getElementById("userUrl").value;
  Client.checkForName(userUrl);
  if (!userUrl) {
    alert("enter a url");
  }
  console.log("::: Form Submitted :::");
  fetch("http://localhost:8080/Apidata", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text: userUrl}),
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log("here from client");
      document.getElementById("polarity").innerHTML = `${res.polarity}`;
      document.getElementById("subjectivity").innerHTML = `${res.subjectivity}`;
      document.getElementById("confidence").innerHTML = `${res.confidence}`;
      document.getElementById("agreement").innerHTML = `${res.agreement}`;
    });
}

export { handleSubmit };
