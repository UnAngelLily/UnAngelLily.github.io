// console.log('Whose that Pokemon?');

$(() => {
  let x = 0;
$('form').on('submit', (event) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
    x = userInput;
    // console.log(x)
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + userInput
      }
    ).then(
      (data) => {
        console.log(data);
        $('#name').html(data.name)
        $('#id').html(data.id)
        $('#height').html(data.height)
        $('#weight').html(data.weight)
        $('#pokePhoto').attr("src", data.sprites.front_default)
      })
  })
  $("#btn").on('click', (event) => {
    console.log('button click x: ${x}')
      x = parseInt(x) + 1
      if (x >=893){
        x = parseInt(1)
      }
      $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + x
      }).then((data) => {
        console.log(data);
        $('#name').html(data.name)
        $('#id').html(data.id)
        $('#height').html(data.height)
        $('#weight').html(data.weight)
        $('#pokePhoto').attr("src", data.sprites.front_default)
    })
  })
  $("#btn2").on('click', (event) => {
    console.log('button click x: ${x}')
    x = parseInt(x) - 1
    if (x <= 0) {
      x = parseInt(893)
    }
      $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + x
      }).then((data) => {
        $('#name').html(data.name)
        $('#id').html(data.id)
        $('#height').html(data.height)
        $('#weight').html(data.weight)
        $('#pokePhoto').attr("src", data.sprites.front_default)
        })
      })
    })
