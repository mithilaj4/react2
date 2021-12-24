
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friends = ['pushpo', 'lamia', 'sumaia', 'saima', 'rodela']
  const students = ['tazim', 'tabiha', 'rita', 'tuhun', 'lubna', 'vabna'];
 
  const products = [
   {name: 'Adobie Ilastrator', price: '$59.77'},
   {name: 'Adobie Photoshop', price: '$59.77'},
   {name: 'Adobie PDF reader', price: '$59.77'},
   {name: 'premere Ei', price: '$59.77'},
 ]

 const friendsName = friends.map(friend => friend);
 console.log(friendsName)

const studentsName = students.map(student => student);
console.log(studentsName);
  
 
 
  return (
    <div className="App">
      
      <header className="App-header">
      < Users>dynamic users</Users>
      <Counter></Counter>
     
        {/* <Users>Dynamic Users</Users> */}
      <Counter></Counter>
      <p>I am a react person</p>
      

      <ul>
        {
        students.map(student => <li>{student}</li>)
        }
      </ul>
      <ul>
        {
          friends.map(friend => <li>{friend}</li>)
        }
        
        {
          products.map(product => <li>{product.price}</li>)
        }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
      </header>
    </div>
  );

  
    // function Users() {
    //   const [users, setUsers] = useState([])
    //   useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => res.json())
    //     .then(data => setUsers(data));
    //   }, [])
    //   return(
    //     <div>
    //       <h1>users{users.length}</h1>
    //       {
    //        users.map(user => <li>{user.email}</li>)
    //       }
    //     </div>
    //   )
    // }


    function Users() {
      const [users, setUsers] = useState([])
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
      }, [])
      return(
        <div>
          <h1>users data</h1>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </div>
      )
    }







function Counter() {
  const [count, setCount] = useState(10);
  return(
    <div>
      <h2>counter: {count}</h2>
      <button onClick={ () => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  )
}



  // function Counter () {
  //   const [count, setCount] = useState(10);
  //   const handleIncrease = () => {
  //     const newCount = count + 1;
  //     setCount(newCount)
  //   }
  //   return(
  //     <div>
  //       <h1>Counter: {count}</h1>
  //       <button onClick = {() => setCount(count + 1)}>Plus</button>
  //       <button onClick = {() => setCount(count - 1)}>Minus</button>
  //     </div>
  //   )
  // }


  // function Counter() {
  //   const [count, setCount] = useState(10);
  //   return (
  //     <div>
  //       <h1>Counter: {count}</h1>
  //       <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
  //       <button onClick={() => setCount(count + 1)}>Increase</button>
  //     </div>
  //   )
  // }

  function Product(props) {
    const myStyle = {
      color: '#282C34',
      width: '250px',
      padding: '20px',
      margin: '20px',
      borderRadius: '15px',
      backgroundColor: '#61DAFB',
      }

    const buttonStyle = {
      backgroundColor: '#282C34',
      color: '#fff',
      padding: '9px',
      border: 'none',
      fontSize: '14px',
      borderRadius: '8px',
      fontWeight: 'bold',
    }
    const {name, price} = props.product;
    console.log(name, price)
    return (
      <div style={myStyle}>
        <h2>{name}</h2>
        <h5>{price}</h5>
        <button style={ buttonStyle}>Buy now</button>
      </div>
    )
  }

 

}
export default App;
