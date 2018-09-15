import * as React from 'react';
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import Lyrics from "./components/Lyrics";

interface IState{
  songLyrics: any
  
}

class App extends React.Component<{}, IState>{
  constructor(props:any){
    super(props);

    this.state = {
      songLyrics: ""
    } 
  }

  public getLyrics = async (e: any) => {   
    e.preventDefault(); 
    const artists = e.target.elements.artist.value;
    const songs = e.target.elements.song.value;
      const getAPI = await fetch(`https://api.lyrics.ovh/v1/${artists}/${songs}`);
      const data = await getAPI.json(); 
      this.setState({
          songLyrics: data.lyrics
      });

      
  } 
  public render(){
    return(
      <div>
        <Header />
        <Form getLyrics={this.getLyrics}/> 
        <Lyrics        
          songLyrics = {this.state.songLyrics}
        />
      </div>
    );
  }
}
export default App;