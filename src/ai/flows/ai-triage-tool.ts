'use server';

/**
 * @fileOverview An AI-powered chatbot for triage and providing basic support information.
 *
 * - aiTriage - A function that handles the AI triage process.
 * - AiTriageInput - The input type for the aiTriage function.
 * - AiTriageOutput - The return type for the aiTriage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTriageInputSchema = z.object({
  query: z.string().describe('The user query or symptoms description.'),
});
export type AiTriageInput = z.infer<typeof AiTriageInputSchema>;

const AiTriageOutputSchema = z.object({
  response: z.string().describe('The AI chatbot response to the user query.'),
});
export type AiTriageOutput = z.infer<typeof AiTriageOutputSchema>;

export async function aiTriage(input: AiTriageInput): Promise<AiTriageOutput> {
  return aiTriageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTriagePrompt',
  input: {schema: AiTriageInputSchema},
  output: {schema: AiTriageOutputSchema},
  prompt: `You are an AI-powered chatbot for Nile King’s Special Hospital.

You should answer basic questions about the hospital, help users find the appropriate department based on their symptoms, and offer general medical advice.

Context about Nile King’s Special Hospital:
Nile King’s Special Hospital is a next-generation, patient-centered digital healthcare platform that combines premium medical services with advanced technology.

The following departments are available:
- Cardiology
- Pediatrics
- Orthopedics

User Query: {{{query}}}

Response:`,
});

const aiTriageFlow = ai.defineFlow(
  {
    name: 'aiTriageFlow',
    inputSchema: AiTriageInputSchema,
    outputSchema: AiTriageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
