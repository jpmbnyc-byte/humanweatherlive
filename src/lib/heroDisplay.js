/**
 * Satirical Jacques Faizant–style artworks that must render full-frame
 * landscape — no crop, no stretch. All other article heroes keep cover crop.
 */
export const FULL_FRAME_HERO_SLUGS = new Set([
  'relational-faith-the-distance-we-choose', // The Distance We Choose
  'on-bliss-what-the-body-already-knows', // What the Body Already Knows
  'the-procession-the-weight-we-carry', // The Weight We Carry
]);

export function isFullFrameHero(slug) {
  return FULL_FRAME_HERO_SLUGS.has(slug);
}
