import "@blueprintjs/core/lib/css/blueprint.css";
(function fontLoader() {
  const headID = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";

  //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
  headID.appendChild(link);

  link.href = "http://fonts.googleapis.com/css?family=" + "Roboto";
})();
