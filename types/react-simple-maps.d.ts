declare module 'react-simple-maps' {
  import { ReactNode, SVGAttributes } from 'react'

  export interface ComposableMapProps extends SVGAttributes<SVGElement> {
    projection?: string
    projectionConfig?: Record<string, unknown>
    width?: number
    height?: number
    children?: ReactNode
  }

  export interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: Geography[] }) => ReactNode
    parseGeographies?: (features: unknown[]) => unknown[]
  }

  export interface Geography {
    rsmKey: string
    id?: string
    type: string
    properties: Record<string, unknown>
    geometry: Record<string, unknown>
  }

  export interface GeographyProps extends SVGAttributes<SVGPathElement> {
    key?: string
    geography: Geography
    style?: {
      default?: Record<string, unknown>
      hover?: Record<string, unknown>
      pressed?: Record<string, unknown>
    }
  }

  export interface SphereProps extends SVGAttributes<SVGPathElement> {
    id?: string
    fill?: string
    stroke?: string
    strokeWidth?: number
  }

  export interface GraticuleProps extends SVGAttributes<SVGPathElement> {
    step?: [number, number]
    fill?: string
    stroke?: string
    strokeWidth?: number
  }

  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
  export const Sphere: React.FC<SphereProps>
  export const Graticule: React.FC<GraticuleProps>
  export const ZoomableGroup: React.FC<{
    center?: [number, number]
    zoom?: number
    children?: ReactNode
  }>
  export const Marker: React.FC<{
    coordinates: [number, number]
    children?: ReactNode
  }>
  export const Line: React.FC<{
    from: [number, number]
    to: [number, number]
    stroke?: string
    strokeWidth?: number
    strokeLinecap?: string
    strokeDasharray?: string
  }>
}
