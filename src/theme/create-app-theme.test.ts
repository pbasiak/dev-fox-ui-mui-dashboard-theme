import { describe, expect, it } from 'vitest';
import { getContrastRatio } from '@mui/material/styles';
import { createAppTheme } from './create-app-theme';
import { themePresets } from './presets';
const composite = (foreground: string, background: string, opacity: number) => {
  const rgb = (hex: string) =>
    (hex.length === 4
      ? '#' +
        hex
          .slice(1)
          .split('')
          .map((c) => c + c)
          .join('')
      : hex
    )
      .replace('#', '')
      .match(/.{2}/g)!
      .map((part) => parseInt(part, 16));
  const fg = rgb(foreground);
  const bg = rgb(background);
  return (
    '#' +
    fg
      .map((value, index) =>
        Math.round(value * opacity + bg[index] * (1 - opacity))
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')
  );
};
describe.each(themePresets)('$name theme', ({ id }) => {
  it.each(['light', 'dark'] as const)('%s has readable body, accent, button, and status text', (mode) => {
    const { palette } = createAppTheme(mode, id);
    for (const surface of [palette.background.default, palette.background.paper]) {
      for (const color of [palette.text.primary, palette.text.secondary, palette.primary.main]) {
        expect(getContrastRatio(color, surface), `${id}/${mode}: ${color} on ${surface}`).toBeGreaterThanOrEqual(4.5);
      }
    }
    expect(getContrastRatio(palette.primary.main, palette.primary.contrastText)).toBeGreaterThanOrEqual(4.5);
    expect(
      getContrastRatio(palette.primary.main, composite(palette.primary.main, palette.background.paper, 0.14)),
      `${id}/${mode}: selected navigation`,
    ).toBeGreaterThanOrEqual(4.5);
    for (const color of ['success', 'info', 'warning', 'error', 'secondary'] as const) {
      const foreground = palette[color].main;
      const background = composite(foreground, palette.background.paper, 0.09);
      expect(getContrastRatio(foreground, background), `${id}/${mode}: ${color} status`).toBeGreaterThanOrEqual(4.5);
    }
  });
});
