const ex3_one = document.getElementById("ex3_one");
const ex3_two = document.getElementById("ex3_two");
const ex3_element = document.getElementById("ex3_element");

function dragstartHandler(e)
{
  e.dataTransfer.setData("text", e.target.id);
}

function dragoverHandler(e)
{
  e.preventDefault();
}

function dropHandler(e)
{
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}

ex3_element.addEventListener("dragstart", dragstartHandler);

ex3_one.addEventListener("dragover", dragoverHandler);

ex3_one.addEventListener("drop", dropHandler)

ex3_two.addEventListener("dragover", dragoverHandler);

ex3_two.addEventListener("drop", dropHandler)
