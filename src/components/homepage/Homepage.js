import AppHeader from "../appheader/AppHeader";
import CryptoInfo from "../cryptoInfo/CryptoInfo";
import SearchBar from "../searchBar/searchBar";
import CustomizedTables from "../table/Table";

function HomePage() {
  return (
    <div>
      <AppHeader />
      <SearchBar />
      <CryptoInfo />
      <CustomizedTables />
    </div>
  );
}

export default HomePage;
