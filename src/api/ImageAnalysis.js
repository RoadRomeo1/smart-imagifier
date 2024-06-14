// const { ImageAnalysisClient } = require("@azure-rest/ai-vision-image-analysis")
// const createClient = require("@azure-rest/ai-vision-image-analysis").default
// const { AzureKeyCredential } = require("@azure/core-auth")

// const endpoint = ""
// const key = ""

// const creds = new AzureKeyCredential(key)
// const client = createClient(endpoint, creds)

// const features = ["Caption", "Read"]

// // const imageUrl = "https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png"

// export async function getImageAnalysisInfo(url) {
//   const result = await client.path("/imageanalysis:analyze").post({
//     body: {
//       url: url.url,
//     },
//     queryParameters: {
//       features: features,
//     },
//     contentType: "application/json",
//   })

//   const isResult = result.body

//   if (isResult.captionResult) {
//     console.log(`Caption: ${isResult.captionResult.text} (Confidence: ${isResult.captionResult.confidence}`)
//   }
//   if (isResult.readResult) {
//     isResult.readResult.blocks.forEach((block) => console.log(`Text Block: ${JSON.stringify(block)}`))
//   }
// }
