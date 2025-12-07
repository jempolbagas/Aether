'use server';

/**
 * @fileOverview An AI agent that adjusts image parallax effects based on screen size.
 *
 * - adjustParallax - A function that adjusts the parallax effect based on screen size.
 * - AdjustParallaxInput - The input type for the adjustParallax function.
 * - AdjustParallaxOutput - The return type for the adjustParallax function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustParallaxInputSchema = z.object({
  screenSize: z
    .number()
    .describe('The screen size in pixels (width or height, whichever is larger).'),
  baseParallaxAmount: z
    .number()
    .describe('The base parallax amount to adjust, expressed as a percentage.'),
});
export type AdjustParallaxInput = z.infer<typeof AdjustParallaxInputSchema>;

const AdjustParallaxOutputSchema = z.object({
  adjustedParallaxAmount: z
    .number()
    .describe('The adjusted parallax amount, expressed as a percentage.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the adjustment, for debugging purposes.'),
});
export type AdjustParallaxOutput = z.infer<typeof AdjustParallaxOutputSchema>;

export async function adjustParallax(input: AdjustParallaxInput): Promise<AdjustParallaxOutput> {
  return adjustParallaxFlow(input);
}

const adjustParallaxPrompt = ai.definePrompt({
  name: 'adjustParallaxPrompt',
  input: {schema: AdjustParallaxInputSchema},
  output: {schema: AdjustParallaxOutputSchema},
  prompt: `You are an expert UI/UX designer, skilled in creating engaging web experiences.

You will be given the current screen size and a base parallax amount.

Your task is to subtly adjust the parallax amount based on the screen size to optimize the visual experience.

- For very small screens (e.g., mobile phones), reduce the parallax effect to avoid overwhelming the user.
- For large screens (e.g., desktop monitors), increase the parallax effect to enhance the sense of depth.
- For medium screens (e.g., tablets), use a value close to the base amount.

Input:
Screen Size: {{screenSize}} pixels
Base Parallax Amount: {{baseParallaxAmount}}%

Consider these rules when adjusting the base parallax amount:
- If the screen size is less than 600px, reduce the parallax amount by 20%.
- If the screen size is between 600px and 1200px, use the base parallax amount.
- If the screen size is greater than 1200px, increase the parallax amount by 10%.

Output the new adjusted parallax amount as a percentage and the reasoning behind the change.

Output:
Adjusted Parallax Amount: {{adjustedParallaxAmount}}%
Reasoning: {{reasoning}}`,
});

const adjustParallaxFlow = ai.defineFlow(
  {
    name: 'adjustParallaxFlow',
    inputSchema: AdjustParallaxInputSchema,
    outputSchema: AdjustParallaxOutputSchema,
  },
  async input => {
    const {
      output,
    } = await adjustParallaxPrompt({
      ...input,
    });
    return output!;
  }
);
