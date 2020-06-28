import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType=ThemeContext; 
    render() { 
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return ( 
            <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>The way of kings</li>
                    <li style={{background:theme.ui}}>The name of the wing</li>
                    <li style={{background:theme.ui}}>The final employee</li>
                    <li style={{background:theme.ui}}>The story of ghost</li>
                    
                </ul>
            </div>
         );
    }
}
 
export default BookList;