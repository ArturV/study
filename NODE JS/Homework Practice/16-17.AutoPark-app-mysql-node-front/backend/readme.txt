1. Susikuriame naują MySQL duomenų bazę (pavadinimas įtakos nedaro).

2. Duomenų bazėje sukuriame vieną lentelę - "cars". Ši lentelė turės ID 
(INT, AUTO_INCREMENT, PRIMARY KEY), title (TEXT), image (TEXT), price (DECIMAL), numberplates (VARCHAR)

3. Į duomenų bazę įrašome du automobilius, ID nurodyti nereikia, o title - 
automobilio pavadinimas (pvz. "BMW i8"), image - linkas į nuotrauką (pvz. "https://example.com/photo.jpg"),
 price - suma be simbolių (pvz. 50000.00), numberplates ("ABC123").

3. Sukuriame naują NodeJS projektą (su ESLint ir nauja struktūra - kol kas routes bus tik vienas 'cars').

4. GET/POST/DELETE į "/cars" paduoda visus automobilius iš duomenų bazės/įrašo naują automobilį į 
duomenų bazę/ištrina automobilį pagal ID. Tik darant apgalvokite - o kas bus jei vartotojas nepaduos duomenų? 
Apsirašykite if/else scenarijų, kad patikrintumėte ar vartotojas paduoda tinkamus duomenis prieš juos 
įrašant į duomenų bazę (tai - minimali validacija, neužilgo pereisime prie rimtesnės). Taip pat, nepamirštam 
ir MySQL escape bei try...catch.

5. Pakoreguokite GET, kad "/cars/" paduotų visus automobilius, "/cars/:id" paduotų vieną automobilį pagal ID.

6. Detaliai patestuokite skirtingus scenarijus su PostMan:

GET: jei viskas gerai; jei vartotojas įrašo neteisingą ID; jei duomenų bazė neveikia (pvz. pass neteisingas).
POST: jei viskas gerai; jei vartotojas įrašo nepilnus duomenis ar nesąmoningus duomenis; jei bando nulaužti
 su SQL injection.
DELETE: jei viskas gerai; jei nepaduoda ID; jei paduoda neteisingą ID.
Taip pat apgalvokite - kokius duomenis į front-end'ą grąžinsite.