function checkValidUrl(urlInput) {
    //alert('heellloo')
    const expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    const regex = new RegExp(expression)
    if (regex.test(urlInput)){
       return true
    }else{
     alert('Please enter valid URL')
    }
}

export{checkValidUrl}