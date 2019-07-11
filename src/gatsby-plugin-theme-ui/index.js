import { base } from '@theme-ui/presets'

console.log(base)

const breakpoints = [`320px`, `550px`, `750px`, `1000px`, `1200px`, `1600px`];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

let mediaQueries = {};
for (let breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`;
}

export default {
  ...base,
  mediaQueries,
  breakpoints,
};