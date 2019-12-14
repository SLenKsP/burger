$(document).ready(function() {
  $(`.devour-form`).on("click", function(e) {
    e.preventDefault();
    console.log("hello");

    let burger_id = $(this).children(`.burger_id`).val();
    console.log(typeof burger_id);
    console.log(`Burger Id is : ${parseInt(burger_id)}`);
    $.ajax({
      type: "PUT",
      url: `/burgers/${burger_id}`
    }).then(res => {
      location.reload();
    });
  });
});
