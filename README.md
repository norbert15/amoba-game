# Amőba játék

Ez a webalkalmazás egy Amőba játékot valósít meg Angular keretrendszer segítségével. A játék során a felhasználók egymás ellen játszhatnak az Amőba játék hagyományos szabályai szerint egy böngészőablakon keresztül.

## Használat

1. A játék elindításához először be kell jelentkezned.
2. Miután bejelentkeztél, a beállítások oldalra leszel átirányítva.
3. A beállítások oldalon konfigurálhatod a játékot az alábbi paraméterek szerint:
- Játékosok száma: állítsd be, hány játékos vesz részt a játékban. Minimum 2 játékos és maximum 12 játékos vehet részt a játékban.
- Pálya mérete: válaszd ki a pálya méretét, például 10 (10x10). A pálya minimum mérete függ a játékosok számától: játékosok száma + 1. Maximum 50x50-es pálya méret lehetséges.
- Számláló: ami esetén a játék véget ér, ha egy játékos megfelelő számú jelölést ér el függőlegesen, vízszintesen vagy átlósan.
- Játékosok adatai: add meg a játékosok nevét, színét és jelölőjét. A szín és a jelölő opciókat a megfelelő értékekkel módosíthatod. Ha a játékos neve üresen marad akkor a játékot addig nem lehet elindítani amiről a rendszer egy hiba üzenetet is megjelenít.

4. Az összes beállítás után a játékot a "Játék indítása" gombra kattintva elindul, és a pályán játszhatod az Amőba játékot a többi játékossal/.
5. Amikor a játék elindult a jobb sarkoban további 3 funkció használatára van lehetőség
- Új játék kezdése
- Újra kezdés
- Kilépés
6. Ha egy játéko jelölője elérte a számláló értékét akkor a játék végért és nyer a játékos, ebben az esetben egy ablak úgrik fel ami kiírja a nyertes játékost valamint 3 gomb is megjelenik:
- Kilépés
- Visszavágó
- Új játék

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

