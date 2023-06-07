import Footer from './Footer';
import Header from './Header';
import Price from './Price';
import Table from './Table';
import React,{useState}from 'react'

const DataContext=React.createContext();
function App() {
  const [data,setData]=useState(null);
  return (
  <DataContext.Provider value={{data,setData}}>
  <div>
    <Header/>
    <Price/>
    <Table/>
    <Footer/>
    </div>
  </DataContext.Provider>
  );
}
export {DataContext};
export default App;
