//how to start project:

npx create-react-app react-app --template typescript .

// to run:

npm start

// kodo galutine versija pasiekiama vartotojui:

npm run build


npm i react-router-dom // route'us kurti biblioteka

npm i styled-components  // stylus kurti https://www.npmjs.com/package/styled-components
npm i --save-dev @types/styled-components

komentavimas: ctrl+ slash (ctrl+/)

//shortid to keys
npm i --save-dev @types/shortid

***************************

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