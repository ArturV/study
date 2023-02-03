/*
Autentifikacija

    autentifikacija tipiškai atliekama su OAuth (pavyzdžiui Okta arba Auth0)
https://auth0.com/docs/quickstart/spa/react
https://auth0.com/docs/quickstart/backend/nodejs/01-authorization

Username-Password (puikus pavyzdys auth0)
Username-Password-MFA (multi factor authentication, pvz.: SMS zinute, authenticator programeles)
Biometriniai prisijungimai (Touch ID, fingerprint, FaceID)

Svarbu apsisaugoti nuo brute force/DDoS, kad autentifikacijos sistema būtų veiksminga. Brute force atakų eigoje 
galima nustatyti bent vieną tinkamą prisijungimą ir infiltruotis į sistemą. Atitinkamai galima neteisėtai sužinoti
 šifravimą ir panaudojus duomenų bazes (viešas ir nelegaliai gautas) visą jūsų sistemos duomenų bazę iššifruoti ir
  pasisavinti duomenis.
Apsisaugojimas - access control (prieigos ribojimas įskaitant užklausų kiekį), tinkamas šifravimas (ne patys 
    primityviausi sprendimai ar kitos sistemos, kurios dėl neatsakingumo prarado daug labai jautrių duomenų). 
    Patys primityviausi: base64 (btoa, atob JS)

Socialinė inžinerija iš esmės šiuos veiksnius paneigia (apsisaugojimas: darbuotojų apmokymas).
https://haveibeenpwned.com/

https://blog.loginradius.com/engineering/guest-post/nodejs-authentication-guide/

*/
