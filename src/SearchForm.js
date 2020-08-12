import React from 'react';
import './App.css';
import './searchimage.jpeg';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }
    handleChange=(e)=>{
        this.setState({searchText:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSearch(e);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>  
                <input type="search" onChange={this.handleChange} name="searchText"placeholder="Search for images here..."/>
                <button ><img src={require("./searchimage.jpeg")} alt="Search" style={{"height":"10px","width":"20px"}}/> </button>
            </form>

        )
    }
}
export default SearchForm;