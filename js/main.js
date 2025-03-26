async function sendContactForm() {
    const formData = new FormData(document.querySelector("form"));
    const API_BASE_URL = "https://webtechnologysoftware.net/gruastremart-core-api/v1";
  
    try {
        const response = await fetch(`${API_BASE_URL}/contact-forms`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
  
        if (!response.ok) {
            console.log("Failure")
            throw new Error("Error al enviar el formulario.");
        }
  
        console.log("Succsess")
        return { success: true };
    } catch (error) {
        console.log("Failure")
        return { success: false, message: error.message };
    }
  }