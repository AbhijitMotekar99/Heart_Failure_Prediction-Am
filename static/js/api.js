$(document).ready(function (e) {
  $("#makePred").click(function () {
    $("#hfProb").empty();
    $("#hfPred").empty();
    $("#userInputValues").empty();

    var sex = $("#sex").val();
    var restingECG = $("#restingECG").val();
    var cpt = $("#chestPainType").val();
    var exerciseAngina = $("#exerciseAngina").val();
    var sts = $("#stSlope").val();
    var age = $("#age").val();
    var bp = $("#restingBP").val();
    var chol = $("#cholesterol").val();
    var bs = $("#fastingBS").val();
    var maxHR = $("#maxHR").val();
    var oldpeak = $("#oldpeak").val();

    let isValid = true;
    let errorMessage = "";

    if (age < 0 || age > 120 || isNaN(age)) {
      isValid = false;
      errorMessage += "Age must be between 0 and 120.<br>";
    }

    if (bp < 0 || bp > 300 || isNaN(bp)) {
      isValid = false;
      errorMessage += "Resting Blood Pressure must be between 0 and 300.<br>";
    }

    if (chol < 0 || chol > 700 || isNaN(chol)) {
      isValid = false;
      errorMessage += "Cholesterol must be between 0 and 700.<br>";
    }

    if (bs < 0 || bs > 1 || isNaN(bs)) {
      isValid = false;
      errorMessage += "Fasting Blood Sugar must be either 0 or 1.<br>";
    }

    if (maxHR < 50 || maxHR > 300 || isNaN(maxHR)) {
      isValid = false;
      errorMessage += "Max Heart Rate must be between 50 and 300.<br>";
    }

    if (oldpeak < -3 || oldpeak > 7 || isNaN(oldpeak)) {
      isValid = false;
      errorMessage += "Oldpeak must be between -3 and 7.<br>";
    }

    if (!isValid) {
      $("#hfProb").html(
        `<div class="alert alert-danger" role="alert">${errorMessage}</div>`
      );
      return;
    }

    $("#userInputValues").append(`
          <p><strong>Sex:</strong> ${sex}</p>
          <p><strong>Resting ECG:</strong> ${restingECG}</p>
          <p><strong>Chest Pain Type:</strong> ${cpt}</p>
          <p><strong>Exercise Angina:</strong> ${exerciseAngina}</p>
          <p><strong>ST Slope:</strong> ${sts}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Resting Blood Pressure:</strong> ${bp}</p>
          <p><strong>Cholesterol:</strong> ${chol}</p>
          <p><strong>Fasting Blood Sugar:</strong> ${bs}</p>
          <p><strong>Max Heart Rate:</strong> ${maxHR}</p>
          <p><strong>Oldpeak:</strong> ${oldpeak}</p>
      `);

    var inputData = {
      sex: sex,
      restingECG: restingECG,
      cpt: cpt,
      exerciseAngina: exerciseAngina,
      sts: sts,
      age: age,
      bp: bp,
      chol: chol,
      bs: bs,
      maxHR: maxHR,
      oldpeak: oldpeak,
    };

    $.ajax({
      url: "main/api/make_prediction",
      data: inputData,
      type: "post",
      success: function (response) {
        console.log(response);

        $("#loader").hide();

        // Display the prediction result
        $("#hfProb").append(`
                  <p style="color:white; font-size: 25px; font-weight: bold;">
                      Patient has a ${
                        response["pred"]
                      } probability of heart failure (${
          response["pred"] * 100
        }%)
                  </p>
              `);

        $("#hfProb").append(`
                  <p style="color:white; font-size: 18px; margin-top: 10px;">
                      Your wellness journey starts here! Share your details with the chatbot for a custom diet and habit plan.
                  </p>
                  <button id="goToChatbotBtn" style="margin-bottom: 40px; padding: 10px 20px; background-color:rgb(0, 44, 94); color: white; border: none; border-radius: 5px; cursor: pointer;">
                      Go to Chatbot <i class='bx bx-right-arrow-alt'></i>
                  </button>
              `);

        $("#hfPlot2").css("display", "block");

        // Redirect to chatbot
        var chatbotUrl = $("#chatbotUrl").val();
        $("#goToChatbotBtn").click(function () {
          window.location.href = chatbotUrl;
        });

      },
      error: function (xhr, status, error) {
        $("#loader").hide();

        $("#hfProb").html(
          `<div class="alert alert-danger" role="alert">An error occurred while making the prediction. Please try again.</div>`
        );
      },
    });
  });
});
