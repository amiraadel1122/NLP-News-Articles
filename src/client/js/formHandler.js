function handleSubmit(event) {
  event.preventDefault();

  let userUrl = document.getElementById("userUrl").value;
 
  if(Client.checkValidUrl(userUrl)){
    fetch("http://localhost:8080/Apidata", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: userUrl }),
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log("here from client");
  
        document.getElementById("polarity").innerHTML = res.polarity;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
        document.getElementById("agreement").innerHTML = res.agreement;
        document.getElementById("irony").innerHTML = res.irony;
      });
  }
  }
  
  console.log("::: Form Submitted :::");


export { handleSubmit };
