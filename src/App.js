import logo from './logo.svg';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);



function Header() {
  
  return (
    
      <div className="headercontent">
        <h1>Shoping Card Style</h1>
      </div>
  )
}

function Content(){
  const[itc,setct]=useState(0)

  function Card({type,sale,rating,prize,discount}){
    return(
      <div  className="card">
        <div className="container">
        <img className="disimg" src="https://www.gizbot.com/img/400x90/img/gadget-finder/wearables/2020/03/oppo-watch-41mm-_15839126200.jpg"></img>
        { sale==="yes" ? <div className="top-right">Sale</div> : ""}
        </div>
        <h1>{type}</h1>
        <div className="dis">
        <p>{rating==="yes" ? <p>⭐⭐⭐⭐⭐</p>: "" }</p>
        {discount==="no" ? <p>{prize}</p>: <p><s>{prize}</s><span> - {discount}</span></p> }
        </div>
        <Button variant="outlined" onClick= {()=>setct(itc+1)}>Add to cart</Button>
      </div>
    )
  }

  return(
    <div>
    <Button  className="cartbt" variant="contained" >
        <b> Cart </b>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={itc} color="secondary" showZero>
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Button>
    <div className="maincontent">
      <Card type="Fancy Product" sale="no" rating="no" prize="$40.00 - $80.00" discount="no"/>
      <Card type="Special Item" sale="yes" rating="yes" prize="$20.00" discount="$18.00"/>
      <Card type="Sale Item" sale="no" rating="no" prize="$50.00" discount="$25.00"/>
      <Card type="Popular Item" sale="yes" rating="yes"  prize="$40.00 - $80.00" discount="no"/>
      <Card type="Sale Item" sale="yes" rating="no" prize="$50.00" discount="$25.00"/>
      <Card type="Fancy Product" sale="no" rating="no" prize="$140.00 - $280.00" discount="no"/>
      <Card type="Special Item" sale="yes" rating="yes" prize="$50.00" discount="$25.00"/>
      <Card type="Popular Item" sale="" rating="yes" prize="$40.00 - $80.00" discount="no"/>
    
    </div>

    </div>

  )
  

}





export default App;
