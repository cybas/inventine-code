'use server';

/**
 * @fileOverview A flow for summarizing long documents or articles related to policies.
 *
 * - summarizePolicyDocument - A function that handles the policy document summarization process.
 * - SummarizePolicyDocumentInput - The input type for the summarizePolicyDocument function.
 * - SummarizePolicyDocumentOutput - The return type for the summarizePolicyDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePolicyDocumentInputSchema = z.object({
  documentContent: z
    .string()
    .describe('The content of the policy document or article to be summarized.'),
});
export type SummarizePolicyDocumentInput = z.infer<typeof SummarizePolicyDocumentInputSchema>;

const SummarizePolicyDocumentOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the policy document or article.'),
});
export type SummarizePolicyDocumentOutput = z.infer<typeof SummarizePolicyDocumentOutputSchema>;

export async function summarizePolicyDocument(
  input: SummarizePolicyDocumentInput
): Promise<SummarizePolicyDocumentOutput> {
  return summarizePolicyDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePolicyDocumentPrompt',
  input: {schema: SummarizePolicyDocumentInputSchema},
  output: {schema: SummarizePolicyDocumentOutputSchema},
  prompt: `You are an expert in summarizing policy documents and articles. Your goal is to provide a concise and accurate summary of the provided content, highlighting the key points and relevant information.

  Document Content: {{{documentContent}}}
  \n  Please provide a summary of the document content.`,
});

const summarizePolicyDocumentFlow = ai.defineFlow(
  {
    name: 'summarizePolicyDocumentFlow',
    inputSchema: SummarizePolicyDocumentInputSchema,
    outputSchema: SummarizePolicyDocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
