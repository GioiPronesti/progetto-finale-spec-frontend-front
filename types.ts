export type Bike = {
    title: string;      // Nome Modello 
    category: string;   // Categoria (es. Sportive, Stradali, Turismo)
    brand: string;      // Marca Produttore (es. Aprilia, Honda, Ktm)
    imageUrl: string;   // Immagine Moto
    description: string;// Descrizione Modello
    engine: number;     // Cilindrata Motore (es. 300 cc)
    speed: number;      // Velocità massima (KM/H)
    power: number;      // Potenza Motore in cavalli (CV)
    weight: number;     // Peso della Moto (KG)
    price: number;      // Prezzo in euro ( < 5k e > 25k )
    color: string[];    // Colorazioni Modello 
    readonly optional : boolean; // Optional Modello (read only)
}