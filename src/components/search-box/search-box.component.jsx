import "./search-box.styles.css";

//-----------------------------------------------------------

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  <input
    className={`search-box ${className}`} //dize içinde biraz daha JavaScript kullanacam
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler} // onChange ,girdimizde her değişiklik olduğunda çalışan bir geri aramadır.
  />;
};

//-----------------------------------------------------------

export default SearchBox;

//-----------------------------------------------------------
