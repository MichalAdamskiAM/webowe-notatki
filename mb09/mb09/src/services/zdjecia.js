// @ts-check

/**
 * @typedef {Object} Zdjecie
 * @property {number} id - Unikalny identyfikator zdjęcia.
 * @property {string} url - Adres URL lub ścieżka do pliku ze zdjęciem.
 * @property {string} [title] - Opcjonalny tytuł zdjęcia.
 * @property {boolean} [favorite] - Status oznaczający, czy zdjęcie jest ulubione.
 */

/** @type {Zdjecie[] | null} */
let zdjecia = null

/**
 * Pobiera pełną listę zdjęć. Jeśli lista została już wcześniej pobrana, 
 * zwraca dane z pamięci podręcznej (cache), w przeciwnym razie pobiera je z pliku JSON.
 * 
 * @async
 * @returns {Promise<Zdjecie[] | null>} Tablica obiektów reprezentujących zdjęcia lub null.
 * @throws {Error} Rzuca błąd, gdy odpowiedź serwera nie jest poprawna (status HTTP inny niż 200-299).
 */
export async function pobierzZdjecia() {
    if(zdjecia) return zdjecia
    const odpowiedz = await fetch('/photos.json')
    if(!odpowiedz.ok) throw new Error('Błąd serwera: ' + odpowiedz.status)
    zdjecia = await odpowiedz.json()
    return zdjecia
}

/**
 * Wyszukuje i zwraca pojedyncze zdjęcie na podstawie jego identyfikatora.
 * 
 * @async
 * @param {number|string} id - Identyfikator szukanego zdjęcia.
 * @returns {Promise<Zdjecie|undefined>} Obiekt znalezionego zdjęcia lub undefined, jeśli nie zostało znalezione.
 */
export async function pobierzZdjecie(id) {
    const lista = await pobierzZdjecia()
    if (!lista) return undefined 
    return lista.find(z => z.id === Number(id))
}

/**
 * Usuwa zdjęcie o podanym identyfikatorze z lokalnej listy i zwraca zaktualizowaną tablicę.
 * 
 * @param {number} id - Identyfikator zdjęcia do usunięcia.
 * @returns {Zdjecie[]} Zaktualizowana tablica zdjęć po usunięciu elementu.
 */
export function usunZdjecie(id){
    if (!zdjecia) return []
    zdjecia = zdjecia.filter(z => z.id !== id)
    return zdjecia
}

/**
 * Przełącza status ulubionego (favorite) dla zdjęcia o wskazanym identyfikatorze.
 * 
 * @param {number} id - Identyfikator zdjęcia, którego status ma zostać zmieniony.
 * @returns {Zdjecie[]} Zaktualizowana tablica zdjęć.
 */
export function przelaczUlubione(id) {
    if (!zdjecia) return []
    zdjecia = zdjecia.map(z => (z.id === id ? {...z, favorite: !z.favorite} : z))
    return zdjecia
}

/**
 * Dodaje nowe zdjęcie do listy, automatycznie generując dla niego unikalne ID 
 * oraz ustawiając domyślny status ulubionego na `false`.
 * 
 * @param {Omit<Zdjecie, 'id' | 'favorite'> & { [key: string]: any }} nowe - Dane nowego zdjęcia (bez ID i pola favorite).
 * @returns {Zdjecie[]} Zaktualizowana tablica zdjęć wraz z nowo dodanym elementem.
 */
export function dodajZdjecie(nowe) {
    if (!zdjecia || zdjecia.length === 0) {
        zdjecia = [{ ...nowe, id: 1, favorite: false }]
        return zdjecia
    }
    const noweId = Math.max(...zdjecia.map(z => z.id)) + 1
    zdjecia = [...zdjecia, {...nowe, id: noweId, favorite: false}]
    return zdjecia
}