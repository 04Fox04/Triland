export async function sendEmail(formDataObject) {
  try {
    const response = await fetch("https://триланд-гк.рф/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://xn--80aikmlon.xn--p1ai"
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      return true;
    } else if (response.status === 422) {
      const errors = await response.json();
      console.log(errors);
      throw new Error("Ошибка валидации данных");
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error.message);
    throw new Error("Ошибка отправки данных");
  }
}
