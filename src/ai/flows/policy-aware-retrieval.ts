'use server';
/**
 * @fileOverview Implements a policy-aware retrieval flow using Genkit.
 *
 * - policyAwareRetrieval - A function that retrieves information based on company policies.
 * - PolicyAwareRetrievalInput - The input type for the policyAwareRetrieval function.
 * - PolicyAwareRetrievalOutput - The return type for the policyAwareRetrieval function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PolicyAwareRetrievalInputSchema = z.object({
  query: z.string().describe('The user query about company policies.'),
});
export type PolicyAwareRetrievalInput = z.infer<typeof PolicyAwareRetrievalInputSchema>;

const PolicyAwareRetrievalOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user query.'),
});
export type PolicyAwareRetrievalOutput = z.infer<typeof PolicyAwareRetrievalOutputSchema>;

export async function policyAwareRetrieval(input: PolicyAwareRetrievalInput): Promise<PolicyAwareRetrievalOutput> {
  return policyAwareRetrievalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'policyAwareRetrievalPrompt',
  input: {schema: PolicyAwareRetrievalInputSchema},
  output: {schema: PolicyAwareRetrievalOutputSchema},
  prompt: `You are an AI assistant that answers questions about company policies. Use the following information to answer the user's question. If the information is not available, say that you don't know.

Question: {{{query}}}`,
});

const policyAwareRetrievalFlow = ai.defineFlow(
  {
    name: 'policyAwareRetrievalFlow',
    inputSchema: PolicyAwareRetrievalInputSchema,
    outputSchema: PolicyAwareRetrievalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
