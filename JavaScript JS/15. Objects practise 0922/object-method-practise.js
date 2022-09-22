const company = {
  name: "Tesla",
  foundationDate: new Date("2020"),
  workers: 100,
  foundingCapital: 1_000_000,

  showCompanyData: () => {
    console.log(company.name);

    console.log(
      `We are ${company.name} , ${company.foundationDate} workers: ${company.workers} capital: ${company.foundingCapital}`
    );
  },
};

console.log(company);

company.showCompanyData();
