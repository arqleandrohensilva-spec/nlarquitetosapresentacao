import { useId } from "react";

/**
 * SVG-based noise texture overlay.
 * Gives dark sections a premium paper / high-gsm feel.
 */
const NoiseOverlay = ({ opacity = 0.035 }: { opacity?: number }) => {
  const id = useId().replace(/:/g, "");
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity,
        mixBlendMode: "overlay",
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id={`nf-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#nf-${id})`} />
      </svg>
    </div>
  );
};

export default NoiseOverlay;
