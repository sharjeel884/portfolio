export const tones = ["tone-blue", "tone-blue-light"] as const;

export type Tone = (typeof tones)[number];

export function toneAt(index: number): Tone {
  return tones[index % tones.length];
}
