window.addEventListener("load", () => {
    const input = document.getElementById("query");
    const button = document.getElementById("goButton");
  
    button.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`superheroes.php?query=${input.value}`)
        .then((r) => {
          return r.text();
        })
        .then((r) => {
         printResults(r);
        })
        .catch((e) => {
          alert(e.toString());
        });
    });
  });
  
  function printResults(result) {
      if (result !==""){
        document.getElementById("result").innerHTML = result;

      }
    }