export default function ScrollEffect() {
  $(document).ready(function () {
    $(".main-section").ripples({
      resolution: 256,
      perturbance: 0.01,
    });
  });

  $(document).ready(function () {
    $("#pagepiling").pagepiling({
      menu: "#menu",
      direction: "vertical",
      loopBottom: true,
      scrollingSpeed: 700,
      touchSensitivity: 1,
      anchors: [
        "natex",
        "about_us",
        "features",
        "team",
        "services",
        "drivers",
        "contacts",
      ],
      sectionsColor: ["#fff", "#fff", "#fff"],

      navigation: null,
      afterRender: function (data) {
        //playing the video
        // $("video").get(0).play();
      },

      onLeave: function (index, nextIndex, direction) {
        const sections = [
          "section2",
          "section3",
          "section4",
          "section5",
          "section6",
          "section7",
        ];

        const startIndexes = [1, 2, 3, 4, 5, 6];
        const endIndexes = [3, 4, 5, 6, 7, 8];

        for (let i = 0; i < sections.length; i++) {
          const section = $("#" + sections[i]);
          const animatedLines = section.find(".animated_lines");
          const fadeEffect = section.find(".faded_effect");
          const fadeEffectTimeline = section.find(".faded_effect_timeline");

          if (
            (index == startIndexes[i] && direction == "down") ||
            (index == endIndexes[i] && direction == "up")
          ) {
            animatedLines.addClass("dynamic_start").removeClass("dynamic_end");

            fadeEffect
              .addClass("dynamic_fade_start")
              .removeClass("dynamic_fade_end");
            fadeEffectTimeline
              .addClass("dynamic_fade_start")
              .removeClass("dynamic_fade_end");
          } else if (
            (index == startIndexes[i] && direction == "up") ||
            (index == endIndexes[i] && direction == "down")
          ) {
            animatedLines.addClass("dynamic_start").removeClass("dynamic_end");
            fadeEffect
              .addClass("dynamic_fade_start")
              .removeClass("dynamic_fade_end");
            fadeEffectTimeline
              .addClass("dynamic_fade_start")
              .removeClass("dynamic_fade_end");
          } else {
            animatedLines.removeClass("dynamic_start").addClass("dynamic_end");
            fadeEffect
              .removeClass("dynamic_fade_start")
              .addClass("dynamic_fade_end");
            fadeEffectTimeline
              .removeClass("dynamic_fade_start")
              .addClass("dynamic_fade_end");
          }

          if (direction == "down" && nextIndex == startIndexes[i] + 1) {
            fadeEffect
              .removeClass("dynamic_fade_end")
              .addClass("dynamic_fade_start");
            fadeEffectTimeline
              .removeClass("dynamic_fade_end")
              .addClass("dynamic_fade_start");
          }

          if (direction == "up" && nextIndex == startIndexes[i] + 1) {
            fadeEffect
              .removeClass("dynamic_fade_end")
              .addClass("dynamic_fade_start");
            fadeEffectTimeline
              .removeClass("dynamic_fade_end")
              .addClass("dynamic_fade_start");
          }
        }
      },
    });
  });
}




export const srt1 = "About Us".split("")
export const str2 = "Natex is built for the world".split("")

export const str3 = `Ride where you want, when you want, how you want. Natex is made to
bridge the boom in crypto use with the increasing popularity of
ride-hailing. Our app unlocks endless ride-hailing opportunities for
the developing world – where 2 billion people remain unbanked but
where crypto ownership, and demand for rides, is rising fast.`.split("")


export const features1 = `What we do`.split("")
export const features2 = `Features & Reveals`.split("")

export const team1 = `Our Team`.split("")
export const team2 = `The feature of ride-haling is finally here`.split("")

export const drivers1 = `For Drivers`.split("")
export const drivers2 = `Are you a Rider?`.split("")

export const contacts1 = `Contacts`.split("");
export const contacts2 = `1 Contact us now to find out more about the token sale.`.split("")

export const services1 = `The Natex NFTs`.split("");
export const services2 = `Natex offers four tiers of NFTs for different levels of service
and rewards`.split("")