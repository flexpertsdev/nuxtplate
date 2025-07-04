export const spacing = {
  0: '0px',
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px'
} as const

// 8pt grid system aliases
export const spacingAliases = {
  xs: spacing[2],     // 8px
  sm: spacing[3],     // 12px
  md: spacing[4],     // 16px
  lg: spacing[6],     // 24px
  xl: spacing[8],     // 32px
  '2xl': spacing[12], // 48px
  '3xl': spacing[16], // 64px
  '4xl': spacing[20], // 80px
  '5xl': spacing[32], // 128px
  '6xl': spacing[40]  // 160px
} as const

export type SpacingToken = typeof spacing
export type SpacingAlias = typeof spacingAliases