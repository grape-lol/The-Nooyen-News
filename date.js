function updateDate() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Chicago",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);

  document.getElementById("current-date").textContent = formattedDate;

  console.log("Date updated to: " + formattedDate);
}

updateDate();
