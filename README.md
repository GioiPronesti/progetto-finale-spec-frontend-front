# Ottimizzazioni Prestazionali nei Componenti

## Memoizzazione Componenti

- `BikeCard` avvolto con `memo()` per evitare rerender non necessari
- `comparisonItems` in `BikeComparison` memorizzato con `useMemo`

## Ottimizzazione Chiamate API

- Dati delle moto caricate una sola volta tramite context (`BikeContext`)
- Dettagli moto caricate on demand in `BikeComparison`

## Gestione Stato Locale

- Stato separato per loading/errori nei componenti complessi
- Debounce implementato per la ricerca in `BikeList`

## Ottimizzazione Rendering

- List rendering con chiavi uniche in tutte le liste
- Conditional rendering per sezioni complesse (comparazioni)

## Ottimizzazione Immagini

- Lazy loading per immagini in `BikeComparison`
- Fallback a placeholder in caso di errore

## Gestione Eventi

- Stop propagation per eventi annidati (es. pulsante preferiti)
- Gestione efficiente degli eventi di tastiera

Le ottimizzazioni principali si concentrano sulla memoizzazione, gestione efficiente del rendering condizionale e ottimizzazione del data fetching.

---

# Flusso di Rendering della Lista dei Moto

## Chiamata API iniziale (in useBikeLogic.jsx)

- Al mount del componente, parte `fetchBikes()`
- Imposta `loading = true`
- Effettua chiamata GET a `${baseUrl}/bikes`
- Salva i dati in `bikes` con `setBikes()`
- Imposta `loading = false`

## Passaggio dati via Context

- I dati vengono forniti a tutta l'app tramite `BikeProvider`
- Accessibili via `useBike()` in qualsiasi componente



