import { config } from 'dotenv';
config();

import '@/ai/flows/enterprise-ai-summarization.ts';
import '@/ai/flows/templated-response-generator.ts';
import '@/ai/flows/policy-aware-retrieval.ts';