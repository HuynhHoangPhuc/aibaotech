import { slides as slidesV1 } from '../slides';
import { slidesV2 } from '../slides/v2';

export type DeckVersion = 'v1' | 'v2';

export interface DeckConfig {
  label: string;
  slides: React.FC[];
}

export const decks: Record<DeckVersion, DeckConfig> = {
  v1: {
    label: 'AI BaoTech',
    slides: slidesV1,
  },
  v2: {
    label: 'vs BriteCore',
    slides: slidesV2,
  },
};
