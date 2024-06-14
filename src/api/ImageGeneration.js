const API_KEY = ""
const API_ENDPOINT = ""

export const generateImage = async (prompt) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())

    const imageUrl = response
    return imageUrl
  } catch (err) {
    console.log(`Error generating images: ${err}`)
    return err
  }
}
