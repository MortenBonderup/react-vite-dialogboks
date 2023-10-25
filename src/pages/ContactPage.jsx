import { useEffect, useState } from "react";

export default function ContactPage() {

    const [brugernavn, setBrugernavn] = useState("");

    useEffect(() => {
        const temp = sessionStorage.getItem("brugernavn");

        if (temp) {
            setBrugernavn(temp)
        } else {
            setBrugernavn("fremmede!");
        }

    },[])

    return (
        <section className="page">
            <h1>Contact Page</h1>
            <p>Hej {brugernavn} </p>
            <p>Get in touch, or swing by for a cup of coffee ☕️</p>
            <p>I am one arm away 🤷🏼‍♂️</p>
        </section>
    );
}
