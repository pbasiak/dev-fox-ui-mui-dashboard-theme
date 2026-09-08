import { Box } from '@mui/material';
/** Code-native illustrations stay crisp, local, and easy to recolor. */
export function ArticleArt({ color, motif }: { color: string; motif: number }) {
  return (
    <Box
      sx={{
        height: 180,
        bgcolor: color,
        position: 'relative',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
      }}
      aria-hidden='true'
    >
      <svg viewBox='0 0 360 180' width='100%' height='100%' fill='none'>
        {motif === 0 ? (
          <>
            <circle cx='205' cy='90' r='100' stroke='white' strokeOpacity='.25' strokeWidth='1' />
            <circle cx='205' cy='90' r='75' stroke='white' strokeOpacity='.3' />
            <rect
              x='90'
              y='32'
              width='115'
              height='140'
              rx='10'
              fill='white'
              fillOpacity='.83'
              transform='rotate(-14 90 32)'
            />
            <rect
              x='164'
              y='25'
              width='115'
              height='140'
              rx='10'
              fill='white'
              fillOpacity='.24'
              transform='rotate(12 164 25)'
            />
            <path
              d='M113 70L169 56M120 89L179 74M128 108L165 99'
              stroke={color}
              strokeWidth='5'
              strokeLinecap='round'
            />
          </>
        ) : motif === 1 ? (
          <>
            {[0, 1, 2].map((row) =>
              [0, 1, 2, 3].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={80 + col * 51}
                  y={20 + row * 51}
                  width='43'
                  height='43'
                  rx={col % 2 ? 22 : 8}
                  fill='white'
                  fillOpacity={(row + col) % 3 === 0 ? 0.85 : 0.18 + row * 0.08}
                />
              )),
            )}
          </>
        ) : (
          <>
            <circle cx='160' cy='91' r='66' fill='white' fillOpacity='.65' />
            <circle cx='210' cy='91' r='66' fill='white' fillOpacity='.25' />
            <path d='M105 140L180 35L257 140Z' stroke='white' strokeOpacity='.7' strokeWidth='2' />
          </>
        )}
      </svg>
    </Box>
  );
}
