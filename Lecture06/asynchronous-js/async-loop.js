setTimeout(function wait () {
  console.log('wait over')
}, 500)


function delay() {
  let start = new Date().getTime()
  while (new Date().getTime() - start < 2000) {}

}
console.log('done')
delay()

