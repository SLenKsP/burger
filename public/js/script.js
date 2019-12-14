$(document).ready(function () {

    $(".devour-form").on("submit", (event) => {

        console.log("hello");
        e.preventDefault();
        let burger_id = $(this).children(`.burger_id`).val();
        console.log(`Burger Id is : ${parseInt(burger_id)}`);
        $.ajax({
            type: "PUT",
            url: `/burgers/${burger_id}`,
        }).then((res) => {
            location.reload();
        })
    });
});