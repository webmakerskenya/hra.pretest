jQuery(function (coella) {
    ("use strict");
    coella("form#wrapped").attr("action");
    coella("#wizard_container").wizard({stepsWrapper: "#wrapped", submit: ".submit", beforeSelect: function (lekevia, mackaylah) {
      if (coella("input#website").val().length != 0) {
        return false;
      }
      ;
      if (!mackaylah.isMovingForward) {
        return true;
      }
      ;
      var zilin = coella(this).wizard("state").step.find(":input");
      return !zilin.length || !!zilin.valid();
    }}).validate({errorPlacement: function (antwine, vanden) {
      if (vanden.is(":radio") || vanden.is(":checkbox")) {
        antwine.insertBefore(vanden.next());
      } else {
        antwine.insertAfter(vanden);
      }
    }});
    coella("#progressbar").progressbar();
    coella("#wizard_container").wizard({afterSelect: function (natoyia, jairo) {
      coella("#progressbar").progressbar("value", jairo.percentComplete);
      coella("#location").text("(" + jairo.stepsComplete + "/" + jairo.stepsPossible + ")");
    }});
    coella("#wrapped").validate({ignore: [], rules: {select: {required: true}}, errorPlacement: function (marz, codyallen) {
      if (codyallen.is("select:hidden")) {
        marz.insertAfter(codyallen.next(".nice-select"));
      } else {
        marz.insertAfter(codyallen);
      }
    }});
  });

  // I DECIDED NOT TO PUT THIS...
  function getVals(brysyn, kymani) {
    switch (kymani) {
      case "name1":
        var philmore = $(brysyn).val();
        $("#name1").text(philmore);
        break;
      case "name2":
        var philmore = $(brysyn).val();
        $("#name2").text(philmore);
        break;
      case "question_2":
        var philmore = $(brysyn).val();
        $("#question_2").text(philmore);
        break;
      case "additional_message_2":
        var philmore = $(brysyn).val();
        $("#additional_message_2").text(philmore);
        break;
      case "question_3":
        var taziyah = $(brysyn).attr("name");
        var philmore = [];
        $("input[name*='" + taziyah + "']").each(function () {
          if (jQuery(this).is(":checked")) {
            philmore.push($(this).val());
          }
        });
        $("#question_3").text(philmore.join(", "));
        break;
    }
  }
  