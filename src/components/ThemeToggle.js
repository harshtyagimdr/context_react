import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class ThemeToggle extends Component {
   static contextType=ThemeContext;
    render() { 
        const {toogleTheme}=this.context;
      
        return ( 
            <button onClick={toogleTheme}>Toggle the Theme</button>
         );
    }
}
 
export default ThemeToggle;