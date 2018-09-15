
import * as React from 'react';

const Form = (props: any) => (
    <div style={{textAlign: 'left'}}>
        <form onSubmit={props.getLyrics}>
            <input  type="text" name = "artist" placeholder="Artist"/>
            <input  type="text" name = "song" placeholder="Song"/>
            <button type="submit">Search</button>
        </form>
    </div>

);
export default Form;