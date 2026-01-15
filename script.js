document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("prebook-btn");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      const subject = encodeURIComponent("Pre-book request for DefyAI Security");
      const body = encodeURIComponent(
        "Hello DefyAI Team,\n\n" +
        "I am interested in pre-booking the DefyAI Security Assistant subscription.\n\n" +
        "Please contact me with further details.\n\n" +
        "Regards,"
      );

      window.location.href =
        "mailto:defyaisecurity@gmail.com?subject=" +
        subject +
        "&body=" +
        body;
    });
  }
});
