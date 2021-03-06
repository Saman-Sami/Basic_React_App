import React, {Component} from 'react';
import Table from './Table.js';
import Form from './Form.js';

class App extends Component{
  state = {
    characters: [],
    // characters :  [
    //   {
    //     name: 'Charlie',
    //     job: 'Janitor',
    //   },   
    //   {
    //     name: 'Mac',
    //     job: 'Bouncer',
    //   },
    //   {
    //     name: 'Dee',
    //     job: 'Aspiring actress',
    //   },
    //   {
    //     name: 'Dennis',
    //     job: 'Bartender',
    //   },
    // ]
  }
  removeCharacter = index =>  {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i!==index;
      }),
    })
  }
  handleSubmit = character => {
    this.setState({characters : [...this.state.characters, character]})
  }
  render() {
    const {characters} = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
// {/* <Link to = './Api.js'>Pulling in API Data</Link>
        // {/* <button>
        // <a href={<Api/>}  style={{color: 'white'}}>Pulling in API Data</a>
        // </button> */} */}