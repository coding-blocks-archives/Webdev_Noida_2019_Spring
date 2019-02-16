window.onload = function () {
  let btnwait = document.getElementById('btnwait')
  let btnclick = document.getElementById('btnclick')
  let result = document.getElementById('result')

  let count = 0

  btnclick.onclick = function () {
    console.log(++count)
  }

  btnwait.onclick = function () {

    setTimeout(function () {
      result.innerText = 'WAIT OVER'
    }, 5000)


  }

}
