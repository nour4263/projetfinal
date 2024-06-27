
      const inputs = document.querySelectorAll("input");

      const getInputValues = (e) => {
        e.preventDefault()
        alert("votre réservation est comfirmée")
        const values = {};
        inputs.forEach(input => {
          values[input.id] = input.value;
        });
        console.log(values);
      };

      const form = document.querySelector("form");
      form.addEventListener("submit", getInputValues);
    

