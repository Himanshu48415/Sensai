import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Senai", // Unique app ID
  name: "Sensai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});