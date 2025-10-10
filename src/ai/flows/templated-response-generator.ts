'use server';
/**
 * @fileOverview A templated response generator AI agent.
 *
 * - generateTemplatedResponse - A function that handles the generation of templated responses.
 * - TemplatedResponseInput - The input type for the generateTemplatedResponse function.
 * - TemplatedResponseOutput - The return type for the generateTemplatedResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TemplatedResponseInputSchema = z.object({
  inquiry: z.string().describe('The user inquiry to generate a templated response for.'),
  template: z.string().describe('The template to use for the response.'),
});
export type TemplatedResponseInput = z.infer<typeof TemplatedResponseInputSchema>;

const TemplatedResponseOutputSchema = z.object({
  response: z.string().describe('The generated templated response.'),
});
export type TemplatedResponseOutput = z.infer<typeof TemplatedResponseOutputSchema>;

export async function generateTemplatedResponse(input: TemplatedResponseInput): Promise<TemplatedResponseOutput> {
  return generateTemplatedResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'templatedResponsePrompt',
  input: {schema: TemplatedResponseInputSchema},
  output: {schema: TemplatedResponseOutputSchema},
  prompt: `You are an AI assistant that generates templated responses for user inquiries using a provided template.\n\nInquiry: {{{inquiry}}}\nTemplate: {{{template}}}\n\nResponse: `,
});

const generateTemplatedResponseFlow = ai.defineFlow(
  {
    name: 'generateTemplatedResponseFlow',
    inputSchema: TemplatedResponseInputSchema,
    outputSchema: TemplatedResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
