import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="drops">
         <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button1" onClick={this.showDropdownMenu}>Default </div>
          { this.state.displayMenu ? (
          <ul>
           <li><a className="active">Artical Title</a></li>
           <li><a>Artical Date</a></li>
           <li><a>Artical Voter</a></li>
          </ul>):
            (
             null
            )
           }
          </div>
          <div  className="dropdown" style = {{background:"red",width:"200px"}} >
          <div className="button2" onClick={this.showDropdownMenu}>All Artical </div>
           { this.state.displayMenu ? (
             <ul>
              <li><a className="active"> 5 Artical</a></li>
              <li><a>10 Artical</a></li>
              <li><a>15 Artical</a></li>
             </ul>):
               (
                null
               )
             }
           </div>

       </div>
           );
           }

}

export default Dropdown;