import type { CSSProperties } from "react";

type CircuitButtonSvgProps = {
  className?: string;
};

const pathVars = [
  { d: "M0 1H185.5", stroke: "url(#cb_paint0)", i: 1 },
  { d: "M0 33H185.5", stroke: "url(#cb_paint1)", i: 2 },
  {
    d: "M10 84.5L50.6881 62.7689C52.8625 61.6075 55.2896 61 57.7547 61H185.5",
    stroke: "url(#cb_paint2)",
    i: 3,
  },
  { d: "M973.5 1H788", stroke: "url(#cb_paint3)", i: 4 },
  { d: "M973.5 33H788", stroke: "url(#cb_paint4)", i: 5 },
  {
    d: "M963.5 84.5L922.812 62.7689C920.638 61.6075 918.21 61 915.745 61H788",
    stroke: "url(#cb_paint5)",
    i: 6,
  },
  {
    d: "M412.5 112V186.744C412.5 192.676 409.004 198.051 403.582 200.456L359.418 220.044C353.996 222.449 350.5 227.824 350.5 233.756V354",
    stroke: "url(#cb_paint6)",
    i: 7,
    bottom: true,
  },
  {
    d: "M533.5 112V209.625C533.5 213.402 534.925 217.04 537.491 219.812L560.509 244.688C563.075 247.46 564.5 251.098 564.5 254.875V355",
    stroke: "url(#cb_paint7)",
    i: 8,
    bottom: true,
  },
  {
    d: "M503.5 112V191.79C503.5 194.856 502.56 197.849 500.808 200.364L475.192 237.136C473.44 239.651 472.5 242.644 472.5 245.71V367",
    stroke: "url(#cb_paint8)",
    i: 9,
    bottom: true,
  },
  { d: "M443.5 112V355", stroke: "url(#cb_paint9)", i: 10, bottom: true },
  { d: "M472.5 112V355", stroke: "url(#cb_paint10)", i: 11, bottom: true },
  {
    d: "M562.5 112V166.617C562.5 174.855 569.145 181.552 577.383 181.616L611.617 181.884C619.855 181.948 626.5 188.645 626.5 196.883V305",
    stroke: "url(#cb_paint11)",
    i: 12,
    bottom: true,
  },
] as const;

function CircuitPaths({ animated }: { animated?: boolean }) {
  const side = pathVars.filter((p) => !p.bottom);
  const bottom = pathVars.filter((p) => p.bottom);

  return (
    <>
      <g className="circuit-side">
        {side.map((p) => (
          <path
            key={p.d}
            strokeWidth={2}
            stroke={p.stroke}
            d={p.d}
            style={animated ? ({ ["--i" as string]: p.i } as CSSProperties) : undefined}
          />
        ))}
      </g>
      <g className="circuit-bottom">
        {bottom.map((p) => (
          <path
            key={p.d}
            strokeWidth={2}
            stroke={p.stroke}
            d={p.d}
            style={animated ? ({ ["--i" as string]: p.i } as CSSProperties) : undefined}
          />
        ))}
      </g>
    </>
  );
}

export function CircuitButtonSvg({ className }: CircuitButtonSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 974 367"
      className={className}
      aria-hidden
    >
      <g className="circuit-path circuit-path-2">
        <CircuitPaths animated />
      </g>
      <g className="circuit-path circuit-path-1">
        <CircuitPaths animated />
      </g>
      <g className="circuit-bg">
        <CircuitPaths />
      </g>
      <defs>
        {[
          { id: "cb_paint0", x1: 0, x2: 265, y1: 1.5, y2: 1.5 },
          { id: "cb_paint1", x1: 0, x2: 265, y1: 33.5, y2: 33.5 },
          { id: "cb_paint2", x1: 10, x2: 265, y1: 72.75, y2: 72.75 },
          { id: "cb_paint3", x1: 973.5, x2: 708.5, y1: 1.5, y2: 1.5 },
          { id: "cb_paint4", x1: 973.5, x2: 708.5, y1: 33.5, y2: 33.5 },
          { id: "cb_paint5", x1: 963.5, x2: 708.5, y1: 72.75, y2: 72.75 },
          { id: "cb_paint6", x1: 390, x2: 390, y1: 354, y2: 97 },
          { id: "cb_paint7", x1: 556, x2: 556, y1: 355, y2: 97 },
          { id: "cb_paint8", x1: 526, x2: 526, y1: 355, y2: 97 },
          { id: "cb_paint9", x1: 466, x2: 466, y1: 355, y2: 97 },
          { id: "cb_paint10", x1: 495, x2: 495, y1: 355, y2: 97 },
          { id: "cb_paint11", x1: 585, x2: 585, y1: 305, y2: 97 },
        ].map((g) => (
          <linearGradient
            key={g.id}
            id={g.id}
            gradientUnits="userSpaceOnUse"
            x1={g.x1}
            x2={g.x2}
            y1={g.y1}
            y2={g.y2}
          >
            <stop stopColor="#60a5fa" stopOpacity={0} offset="0.105" />
            <stop stopColor="#93c5fd" offset={1} />
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}
