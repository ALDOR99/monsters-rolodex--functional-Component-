import { useState } from "react";
//"useState" Yerel durumu işlevsel bir bileşen içinde kapsülleme yeteneği verir

import CardList from "./components/card-list/card-list.component";

import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

//--------------------------------------------------------------------

const App = () => {
  const [searchField, setSearchField] = useState(""); //İki değerden oluşan bir dizi verir.
  console.log(searchField);
  // [value, setValue]

  //Temelde yaptığı şey,değişkenleri bir dizinin içindeki değerlere atamamıza izin vermektir.

  // const arr = [2, 4];
  // const [a, b] = arr;
  // console.log(a); "2"
  // console.log(b); "4"

  //Yani burada yaptığımız şey tam olarak bu, durumumuz bize iki değerden oluşan bir dizi verir

  //--------------------------------------------------------------------

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  //--------------------------------------------------------------------

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
      />

      {/* 
      <CardList monsters={filteredMonsters} />

      <button onClick></button> */}
    </div>
  );
};

// class App extends Component {
//   // bu bir sınıf bileşenidir.
//   //------------------------------------------------------------------------------------------------------------------

//   constructor() {
//     // app.js çalıştırıldığında ilk olarak bu method başlatılır,ardından render
//     //inşaatçi // yapıcı metod
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "", //Bu arama alanı metni değişiklik üzerine.
//     };
//   }

//   //------------------------------------------------------------------------------------------------------------------

//   componentDidMount() {
//     //[yaşam döngüsü yöntemi  = lifecycle method]

//     fetch("https://jsonplaceholder.typicode.com/users") //Jsonu alıyorum ,[ fetch = gidip getirmek ]
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           //setState her çağrıldığında ,render tekrar çağrılır
//           return { monsters: users };
//         })
//       );
//   }

//   //------------------------------------------------------------------------------------------------------------------

//   onSearchChange = (event) => {
//     // yaptığım diğer optimizasyon ise , render çağrısı yapıldığında gereksiz yere fazladan anonim fonksiyonlar oluşturmayarak uygulamayı biraz daha performanslı hale getirdim
//     // sınıf bileşenenmiz başlatıldığında yalnızca bir kez çağrılacak ve başlatılacak olan yönteme taşıdım.
//     const searchField = event.target.value.toLowerCase(); //toLowerCase ,tüm diziler üzerinde ,hepsini küçük harfe dönüştüren bir yöntemdir.

//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   //------------------------------------------------------------------------------------------------------------------

//   render() {
//     // Render ne gösterileceğini belirler. Kullanıcının arayüzünün ne olacağını belirler.
//     console.log("render from appJs");
//     //------------------------------------------------------------
//     const { monsters, searchField } = this.state; // iki büyük optimizasyon yaptım
//     const { onSearchChange } = this;
//     //------------------------------------------------------------

//     const filteredMonsters = monsters.filter((monster) => {
//       // Canavarlarımızı arama alanından filtreliyoruz
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//         />
//         <CardList monsters={filteredMonsters} />

//         <button onClick></button>
//       </div>
//     );
//   }
// }

//--------------------------------------------------------------------
export default App;
