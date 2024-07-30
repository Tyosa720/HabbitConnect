// tailwindColors.ts
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const COLORS = fullConfig.theme?.colors || {};
