'use client'

import { useState, useCallback } from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  useApiIsLoaded,
} from '@vis.gl/react-google-maps'

// ─── Coordonnées du bureau YWA ───────────────────────────────────────────────
const YWA_LOCATION = { lat: 12.634664, lng: -8.031650 } // Bamako, Mali
const YWA_ZOOM     = 15

// ─── Style carte sombre sur-mesure ───────────────────────────────────────────
const DARK_MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry',                                     stylers: [{ color: '#0a0f1e' }] },
  { elementType: 'labels.text.fill',                             stylers: [{ color: '#94a3b8' }] },
  { elementType: 'labels.text.stroke',                           stylers: [{ color: '#0a0f1e' }] },
  { featureType: 'administrative',        elementType: 'geometry',            stylers: [{ color: '#1e293b' }] },
  { featureType: 'administrative.country', elementType: 'labels.text.fill',  stylers: [{ color: '#9ca3af' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#e2e8f0' }] },
  { featureType: 'poi',                   elementType: 'labels.text.fill',   stylers: [{ color: '#475569' }] },
  { featureType: 'poi.park',              elementType: 'geometry',           stylers: [{ color: '#0f172a' }] },
  { featureType: 'poi.park',              elementType: 'labels.text.fill',   stylers: [{ color: '#334155' }] },
  { featureType: 'road',                  elementType: 'geometry',           stylers: [{ color: '#1e293b' }] },
  { featureType: 'road',                  elementType: 'geometry.stroke',    stylers: [{ color: '#0f172a' }] },
  { featureType: 'road',                  elementType: 'labels.text.fill',   stylers: [{ color: '#94a3b8' }] },
  { featureType: 'road.arterial',         elementType: 'geometry',           stylers: [{ color: '#1e3a5f' }] },
  { featureType: 'road.highway',          elementType: 'geometry',           stylers: [{ color: '#1d4ed8' }] },
  { featureType: 'road.highway',          elementType: 'geometry.stroke',    stylers: [{ color: '#1e3a8a' }] },
  { featureType: 'road.highway',          elementType: 'labels.text.fill',   stylers: [{ color: '#bfdbfe' }] },
  { featureType: 'transit',               elementType: 'geometry',           stylers: [{ color: '#0f172a' }] },
  { featureType: 'transit.station',       elementType: 'labels.text.fill',   stylers: [{ color: '#475569' }] },
  { featureType: 'water',                 elementType: 'geometry',           stylers: [{ color: '#0c1a3a' }] },
  { featureType: 'water',                 elementType: 'labels.text.fill',   stylers: [{ color: '#1e40af' }] },
  { featureType: 'water',                 elementType: 'labels.text.stroke', stylers: [{ color: '#0a0f1e' }] },
]

// ─── Marqueur HTML custom avec animation pulse ────────────────────────────────
function PulsingMarker() {
  return (
    <div style={{ position: 'relative', width: 48, height: 48, cursor: 'pointer' }}>
      {/* Halo externe pulsant */}
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'rgba(37,99,235,0.2)',
        animation: 'ywa-ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
      }} />
      {/* Halo intermédiaire */}
      <span style={{
        position: 'absolute', inset: 6, borderRadius: '50%',
        background: 'rgba(37,99,235,0.15)',
      }} />
      {/* Pastille centrale */}
      <div style={{
        position: 'absolute', inset: 10,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
        border: '2px solid #93c5fd',
        boxShadow: '0 0 20px rgba(37,99,235,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Pin SVG */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>

      {/* Keyframes injectés via style tag */}
      <style>{`
        @keyframes ywa-ping {
          0%   { transform: scale(1);   opacity: .6; }
          75%  { transform: scale(2.2); opacity: 0;  }
          100% { transform: scale(2.2); opacity: 0;  }
        }
      `}</style>
    </div>
  )
}

// ─── Info window branded ──────────────────────────────────────────────────────
function YWAInfoWindow({ locale }: { locale: string }) {
  const isEn = locale === 'en'
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', minWidth: '230px', padding: '4px 2px' }}>
      <div style={{ borderLeft: '3px solid #2563eb', paddingLeft: '10px', marginBottom: '10px' }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#0f172a' }}>
          YWA Consulting
        </p>
        <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b' }}>
          {isEn ? 'Digital Transformation Partner' : 'Partenaire Transformation Numérique'}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: '#475569' }}>
        <span>📍 Bamako, Mali</span>
        <a href="mailto:contact@ywaconsulting.com"
           style={{ color: '#2563eb', textDecoration: 'none' }}>
          ✉ contact@ywaconsulting.com
        </a>
        <a href="https://www.linkedin.com/company/ywa-consulting"
           target="_blank" rel="noopener noreferrer"
           style={{ color: '#2563eb', textDecoration: 'none' }}>
          🔗 LinkedIn — YWA Consulting
        </a>
      </div>

      <a
        href={`https://www.google.com/maps/search/YWA+Consulting+Bamako/@12.634664,-8.031650,15z`}
        target="_blank" rel="noopener noreferrer"
        style={{
          display: 'block', marginTop: '10px', padding: '6px 10px',
          background: '#2563eb', color: '#fff', borderRadius: '6px',
          textAlign: 'center', fontSize: '12px', fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        {isEn ? 'Open in Google Maps' : 'Ouvrir dans Google Maps'}
      </a>
    </div>
  )
}

// ─── Composant carte ──────────────────────────────────────────────────────────
function MapContent({ locale, mapId }: { locale: string; mapId: string }) {
  const [infoOpen, setInfoOpen]   = useState(false)
  const [markerRef, marker]       = useAdvancedMarkerRef()
  const apiLoaded                 = useApiIsLoaded()

  const handleClick = useCallback(() => setInfoOpen((v) => !v), [])

  if (!apiLoaded) return null

  return (
    <Map
      defaultCenter={YWA_LOCATION}
      defaultZoom={YWA_ZOOM}
      mapId={mapId}
      styles={DARK_MAP_STYLE}
      gestureHandling="cooperative"
      mapTypeControl={false}
      streetViewControl={true}
      fullscreenControl={true}
      zoomControl={true}
      className="w-full h-full"
    >
      <AdvancedMarker
        ref={markerRef}
        position={YWA_LOCATION}
        onClick={handleClick}
        title="YWA Consulting"
      >
        <PulsingMarker />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          onCloseClick={() => setInfoOpen(false)}
          headerDisabled
        >
          <YWAInfoWindow locale={locale} />
        </InfoWindow>
      )}
    </Map>
  )
}

// ─── Export principal ─────────────────────────────────────────────────────────
export function PremiumMap({ locale }: { locale: string }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId  = process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID

  if (!apiKey || !mapId) {
    return (
      <div className="w-full h-full bg-surface-800 flex flex-col items-center justify-center gap-2 border border-surface-600 rounded-2xl">
        <p className="text-neutral-500 text-sm text-center px-4">
          {!apiKey && <span>Clé manquante : <code className="text-primary-400">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code><br/></span>}
          {!mapId  && <span>Map ID manquant : <code className="text-primary-400">NEXT_PUBLIC_GOOGLE_MAPS_ID</code><br/></span>}
          <span className="text-neutral-600 text-xs mt-1 block">
            Créer un Map ID : Google Cloud Console → Maps Platform → Map management
          </span>
        </p>
      </div>
    )
  }

  return (
    <APIProvider apiKey={apiKey}>
      <MapContent locale={locale} mapId={mapId} />
    </APIProvider>
  )
}
