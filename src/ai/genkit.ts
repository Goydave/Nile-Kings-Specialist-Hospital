import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({freeTier: true})],
  model: 'googleai/gemini-2.0-flash',
});
