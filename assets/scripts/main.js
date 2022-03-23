function showTime(id) {
  let element = document.getElementById(id);

  let date = new Date();
  let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  time = hours + ":" + minutes;
  element.textContent = time;
}

showTime("top_hour");
window.setInterval("showTime('top_hour');", 1000);
