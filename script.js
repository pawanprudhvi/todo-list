    var forms=document.getElementById("loginForm");
    var pawan=document.getElementById("username");
    var add=document.getElementById("add");
    var count=1;
    forms.addEventListener("submit",function()
    {
      if(count===1)
      {
      let para=document.createElement("p");
      para.innerHTML="pawan";
      add.appendChild(para);
      count++;
      }
    });
    document.getElementsByTagName("h2")[0].style.color="blue";
    do cu
