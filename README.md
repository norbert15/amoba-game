# Amőba játék

Ez a webalkalmazás egy Amőba játékot valósít meg Angular keretrendszer segítségével. A játék során a felhasználók egymás ellen játszhatnak az Amőba játék hagyományos szabályai szerint egy böngészőablakon keresztül.

## Használat

1. A játék elindításához először be kell jelentkezned.
- Felhasználónév: amoba
- Jelszó: mester
2. Miután bejelentkeztél, a beállítások oldalra leszel átirányítva.
3. A beállítások oldalon konfigurálhatod a játékot az alábbi paraméterek szerint:
- Játékosok száma: állítsd be, hány játékos vesz részt a játékban. Minimum 2 játékos és maximum 12 játékos vehet részt a játékban.
- Pálya mérete: válaszd ki a pálya méretét, például 10 (10x10). A pálya minimum mérete függ a játékosok számától: játékosok száma + 1. Maximum 50x50-es pálya méret lehetséges.
- Számláló: ami esetén a játék véget ér, ha egy játékos megfelelő számú jelölést ér el függőlegesen, vízszintesen vagy átlósan. A minimum érték függ a pálya méretétől, vagyis a számláló nem lehet nagyobb mint a pálya mérete. A legkisebb számláló ami megadható az 3, a legnagyobb pedig 50.
- Játékosok adatai: add meg a játékosok nevét, színét és jelölőjét. A szín és a jelölő opciókat a megfelelő értékekkel módosíthatod. Amíg a játékos neve üresen van addig a játékot nem lehet elindítani amiről a rendszer egy hibaüzenetet is megjelenít.

1. A beállítások után a játék a "Játék indítása" gombra kattintva elindul, és a pályán játszhatod az Amőba játékot a többi játékossal.
2. Amikor a játék elindult a jobb felső sarkoban további 3 funkció használatára van lehetőség:
- Új játék kezdése
- Újra kezdés
- Kilépés
1. Ha egy játékos jelölője elérte a számláló értékét akkor a játék véget ér és nyer a játékos, ebben az esetben egy ablak ugrik fel, ami kiírja a nyertes játékos nevét, valamint 3 gomb is megjelenik:
- Kilépés
- Visszavágó
- Új játék

## Továbbfejleszési lehetőség

1. Időtúllépés: egy bizony időn belül, ha egy játéko nem helyez el jelölőt akkor a játék automatikusan elhelyez egyet random.
2. AI játékos beállítása: ha nem lenne partner kivel játszani akkor a gép csatlakozhat.
3. Játékos  beállítások validálása: egyedi név, szín vagy jelölő.

## Technológiai követelmények

A következő technológiákra van szükség a projekt futtatásához:

- Node.js 18.16.0
- Angular CLI 15.2.6

Győződjön meg róla, hogy a megfelelő verziók telepítve vannak a gépedre.

## Telepítés

1. Klónozd le a projektet a gépedre.
2. Navigálj a projekt gyökérkönyvtárába a parancssorban.
3. Futtasd az alábbi parancsot a függőségek telepítéséhez: npm install
4. A program indításához a következő kódot kell beírni: ng serve
5. Ez után a böngészőbe a következő url-en érhető el: http://localhost:4200

