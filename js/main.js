const wrongAddress = document.querySelector(".wrongName")
const urlArr = document.location.href.split("/")
const wrongPage = urlArr[urlArr.length-1]
wrongAddress.textContent =   wrongPage
