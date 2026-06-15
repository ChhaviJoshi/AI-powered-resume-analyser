const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});

const geminiResponseSchema = {
  type: "object",
  properties: {
    role: { type: "string", description: "The target job role extracted from the job description, e.g., 'Full Stack Developer'" },
    matchScore: { type: "number" },

    technicalQuestions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: { type: "string" },
          intention: { type: "string" },
          expectedAnswer: { type: "string" }
        },
        required: ["question", "intention", "expectedAnswer"]
      }
    },

    behavioralQuestions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: { type: "string" },
          intention: { type: "string" },
          expectedAnswer: { type: "string" }
        },
        required: ["question", "intention", "expectedAnswer"]
      }
    },

    skillGaps: {
      type: "array",
      items: {
        type: "object",
        properties: {
          skill: { type: "string" },
          severity: {
            type: "string",
            enum: ["low", "medium", "high"]
          }
        },
        required: ["skill", "severity"]
      }
    },

    preparationPlan: {
      type: "array",
      items: {
        type: "object",
        properties: {
          day: { type: "number" },
          focusArea: { type: "string" },
          tasks: {
            type: "array",
            items: { type: "string" }
          }
        },
        required: ["day", "focusArea", "tasks"]
      }
    }
  },
  required: [
    "role",
    "matchScore",
    "technicalQuestions",
    "behavioralQuestions",
    "skillGaps",
    "preparationPlan"
  ]
};

async function generateResumeReport({resumeDescriptionData , selfDescriptionData , jobDescriptionData}) {

    const prompt = `You are an expert technical interviewer and Senior Engineering Manager. Your task is to perform a deep, critical analysis of a candidate's profile against a specific Job Description.

Here is the data:
---
JOB DESCRIPTION:
${jobDescriptionData}

CANDIDATE RESUME:
${resumeDescriptionData}

CANDIDATE SELF-DESCRIPTION / SUMMARY:
${selfDescriptionData}
---

Perform a comprehensive evaluation based on the following directives:
1. Candidate Alignment: Analyze how well the candidate's formal experience (Resume) and personal narrative (Self-Description) align with the core requirements of the Job Description. 
2. Strengths & Impact: Identify the candidate's strongest technical and soft skills. Look for evidence of actual impact, complex problem-solving, and architectural understanding rather than just keyword dropping.
3. Skill Gaps & Red Flags: Highlight missing critical skills, discrepancies between the resume and self-description, or areas where the candidate's experience might be superficial compared to the job requirements.
4. Interview Strategy: Formulate 3 to 5 highly specific, challenging interview questions tailored to this candidate. These questions should probe their stated project complexities, test their knowledge on identified skill gaps, and validate their self-assessed strengths.

Output strictly in JSON format matching the required schema. Ensure the analysis is objective, professional, and highly detailed.`;

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: geminiResponseSchema

        }
    })

    console.log(JSON.stringify(JSON.parse(response.text), null, 2));

    const parsed = JSON.parse(response.text);

    return parsed; 

}

module.exports = generateResumeReport