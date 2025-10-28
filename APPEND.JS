$(document).ready(function(){
  $("#header").click(function(){
    $("r").addClass("bg-info")
  })
})

$("#remove").click(function(){
  $("r").removeClass("bg-info")
})

$("#prepend").click(function(){
  $("r").toggleClass("highlight")
})

$("#after").click(function(){
  $("#list").after("<li>hello</li>")
})

$("#before").click(function(){
  $("#list").before("<li>new</li>")
})

let item = ['ami/json', 'xhr 3s', 'mysql', 'php', 'laravel']
let index = 0

$("#append").click(function(){
  if(index < item.length){
    $("#list").append("<li>" + item[index] + "</li>")
    index++
  }else{
    alert('items added')
  }
})

$("#prepend").click(function(){
  if(index < item.length){
    $("#list").prepend("<li>" + item[index] + "</li>")
    index++
  }else{
    alert('items added')
  }
})