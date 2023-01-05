Susikurkime NodeJS projektą su registracija ir login, kuris login metu grąžintų JWT token.
Prisidėkime middleware 'isLogged', kuris tikrins ar gaunamas JWT token - validus.
Sukurkime route'ą, kuris paduos informaciją tik jei JWT token validus, kitaip - atmes.
Patestuokime su Postman!