import { useEffect, useState } from "react";

export default function HomePage() {
  const [brugernavn, setBrugernavn] = useState("");

  useEffect(() => {
    const showButton = document.getElementById("showDialog");
    const favDialog = document.getElementById("favDialog");
    const inputEl = favDialog.querySelector("input");
    const confirmBtn = favDialog.querySelector("#confirmBtn");

    const temp = sessionStorage.getItem("brugernavn");

    if (temp) {
      setBrugernavn(temp);
      inputEl.value = temp;
    } else {
      inputEl.value = "";
      favDialog.showModal();
    }

    // "Show the dialog" button opens the <dialog> modally
    function showDialog() {
      favDialog.showModal();
    }
    showButton.addEventListener("click", showDialog);

    // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
    function closeDialog() {
      if (favDialog.returnValue !== "cancel") {
        sessionStorage.setItem("brugernavn", favDialog.returnValue);
        setBrugernavn(favDialog.returnValue);
      }
    }
    favDialog.addEventListener("close", closeDialog);

    // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
    function okDialog(event) {
      event.preventDefault(); // We don't want to submit this fake form
      favDialog.close(inputEl.value); // Have to send the select box value here.
    }
    confirmBtn.addEventListener("click", okDialog);

    //Afmonterer eventlisteners når siden ikke vises
    return () => {
      document.removeEventListener("click", showDialog);
      document.removeEventListener("click", okDialog);
      document.removeEventListener("click", closeDialog);
    };
  }, []);

  return (
    <section className="page">
      <h1>Home Page</h1>
      <p>Get in touch, or swing by for a cup of coffee ☕️</p>
      <p>I am one arm away 🤷🏼‍♂️</p>

      <dialog id="favDialog">
        <form>
          <p>
            <label>
              Brugernavn:
              <input
                type="text"
                value={brugernavn}
                onChange={(e) => setBrugernavn(e.target.value)}
              />
            </label>
          </p>
          <div>
            <button value="cancel" formMethod="dialog">
              Cancel
            </button>
            <button id="confirmBtn" value="default">
              Confirm
            </button>
          </div>
        </form>
      </dialog>
      <p>
        <button id="showDialog">Vis dialogboksen</button>
      </p>
      <output>{brugernavn}</output>
    </section>
  );
}
