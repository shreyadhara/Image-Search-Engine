import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import ImageList from './ImageList';
import './App.css';


const API_KEY="0bVV8u_Oj5L2vfICBU0rSWwBkpSroHMb9u4RpCX7niA";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      img:[],
    }
  }


  search=(e)=>{
    const query=e.target.elements.searchText.value;
      axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=9&query=${query}&client_id=${API_KEY}`)
      .then(res=>{
        console.log(res.data);
        this.setState({img:res.data.results})
      }).catch((err)=>{
        console.log(err)
      })
  }

  render(){
  return (
    <div className="App">
     <SearchForm onSearch={this.search}/>
     <br/><br/>
      <ImageList data={this.state.img}/>
    </div>
  );
}
}

export default App;
