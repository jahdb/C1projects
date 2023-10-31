$(document).ready(function () {
    const correctAnswers = {
        container1: "Drury",
        container2: "Mongo",
        container3: "The happily ever after",
        container4: "Eyeball soup"
    };

    $(".nextButton").on("click", function () {
        const container = $(this).closest(".container");
        const selectedAnswer = container.find("input[name^='answer']:checked").val();
        const feedback = container.find(".feedback");

        if (!selectedAnswer) {
            
            displayFeedback(feedback, "Please select an answer.", "#e74c3c");
        } else {
            const correctAnswer = correctAnswers[container.attr('id')];
            if (selectedAnswer === correctAnswer) {
                
                displayFeedback(feedback, "Correct!", "#2ecc71");
                container.find(".options label.checked").addClass("correct");
            } else {
                
                displayFeedback(feedback, "Incorrect. The correct answer is: " + correctAnswer, "#e74c3c");
                container.find(".options label.checked").addClass("wrong");
            }

            container.find("input[name^='answer']").attr("disabled", true);
            container.find(".options label").addClass("disabled");
            container.find(".nextButton").hide();
        }
    });

  
    $(".options input[type='radio']").on("click", function () {
        const label = $(this).closest("label");
        $(".options label").removeClass("checked");
        label.addClass("checked");
    });

 
    $(".options label").hover(
        function () {
            if ($(this).hasClass("checked") && !$(this).hasClass("disabled")) {
                $(this).addClass("hover");
            }
        },
        function () {
            if ($(this).hasClass("checked") && !$(this).hasClass("disabled")) {
                $(this).removeClass("hover");
            }
        }
    );

    function displayFeedback(element, message, color) {
        element.text(message);
        element.css("color", color);
    }
});
