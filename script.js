const stepbl1 = document.getElementById("stepbl1");
const stepbrdr1 = document.getElementById("stepbrdr1");
const stepbl2 = document.getElementById("stepbl2");
const stepbrdr2 = document.getElementById("stepbrdr2");
const stepbl3 = document.getElementById("stepbl3");
const stepbrdr3 = document.getElementById("stepbrdr3");

stepbl1.onmouseover = () => stepbrdr1.style.borderBottom = "3px solid white"
stepbl1.onmouseout = () => stepbrdr1.style.borderBottom = "3px solid black"

stepbl2.onmouseover = () => stepbrdr2.style.borderBottom = "3px solid white"
stepbl2.onmouseout = () => stepbrdr2.style.borderBottom = "3px solid black"

stepbl3.onmouseover = () => stepbrdr3.style.borderBottom = "3px solid white"
stepbl3.onmouseout = () => stepbrdr3.style.borderBottom = "3px solid black"
