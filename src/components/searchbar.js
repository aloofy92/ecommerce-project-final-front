import { useState } from 'react';

import "./searchbar.css";

export const Searchbar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleSearchInputChange(event) {
  
      setSearchQuery(event.target.value);
    }
  
    function handleSearchSubmit(event) {
  
      event.preventDefault();
      // Handle search query submission
    }
    
        return (    
        <nav>
            <div className={`custom-search ${props.className}`}></div>
          <form>
            <input type="text" placeholder="Search" />
            
            <button type="submit">Submit</button>
          </form>
          </nav>
        );
      }
      
      export default Searchbar;
      