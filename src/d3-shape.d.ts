declare module 'd3-shape' {
	export type CurveFactory = import('@types/d3-shape').CurveFactory;
	export const curveNatural: CurveFactory;
	export const curveBasis: CurveFactory;
	export const curveBasisClosed: CurveFactory;
	export const curveBasisOpen: CurveFactory;
	export const curveLinear: CurveFactory;
	export const curveMonotoneX: CurveFactory;
	export const curveMonotoneY: CurveFactory;
	// Add other curve exports as needed
}
