//how to start project:

npx create-react-app react-app --template typescript .

// cd .. && npx create-react-app --template typescript // pakilam vienu katalogu auksciau ir irasom react


// to run:

npm start

// kodo galutine versija pasiekiama vartotojui:

npm run build

****
testing, types, typescript - is package.json perkeliame i devdependencies

"devDependencies": {
},


istrinam: reportWebwitals.js - istrinam ir is inde.tsx istrinam reportWebvitals
istrinam is package.json - webVitals is dependecies

kai pakeiciame package.json  !! SVARBU

rasome i konsole: npm i

dar geriau istrinti pries tai package-lock.json ir node_modules
****


npm i react-router-dom // route'us kurti biblioteka

npm i styled-components  // stylus kurti https://www.npmjs.com/package/styled-components
npm i --save-dev @types/styled-components

komentavimas: ctrl+ slash (ctrl+/)

//shortid to keys
npm i --save-dev @types/shortid

***************************


//testavimai:

npm i -D @testing-library/react

describe ("kuri komponenta testuojame", ()=>{

}) 

npm test - konsoleje

****************

coPilot - iskiepis 

sukuria elementa, tik tada kai paduotas title:

{props.title.length >= 1 && <h1>{props.title}</h1>}

///

<Button>Text1</Button>
<Button>Text2</Button>
<Button>Text3</Button>

tas pats:

["text1", "text2", "text3"].map(item => (
  <Button>{item}</Button>
))

********

FETCH:
https://blog.logrocket.com/modern-api-data-fetching-methods-react/

FETCH with AXIOS:
https://www.freecodecamp.org/news/fetch-data-react/

DELETE FROM ARRAY:
https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl


*******

storybook install:

npx sb init 
npm i -D @testing-library/dom

//paleisti:

npm run storybook


***************
Agile - metodologija kur galime viska valdyti

jira / azure devops

backlogs - sarasas darbu ka reikia padaryti

8 story point - 2sav
1 story point - 1d

confluence 
atlassian

3 amigos - svarbaus tiketo aptarimas

tesonet
hostinger
bankera
inulti
nordsecurity


action verbs