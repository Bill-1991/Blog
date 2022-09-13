import NavBar from "./Components/NavBar"
import SignIn from "./Components/SignIn";
import Home from "./Components/Home"
import Anime from "./Components/Anime"
import AoAshi from "./Components/AoAshi"
import './App.css';
import {useState, useEffect} from "react"
import LogIn from "./Components/LogIn";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"
import Axios from "axios";

function App() {

  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [wrongPass, setWrongPass] = useState(true)
  const [email, setEmail] = useState("")
  const [allUsers, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [logInUserName, setLogInUserName] = useState("")
  const [logInPassWord, setLogInPassWord] = useState("")
  const [loggedInUser, setLoggedInUser] = useState({})
  const [image, setImage] = useState(null)
  const [collapse, setCollapse] = useState(false)
  const [animeList, setAnimeList] = useState([])
  const [chatRoom, setChatRoom] = useState([])
  const [message, setMessage] = useState("")
  
  useEffect(() => {
    fetch("https://vasilis-blog-1991.herokuapp.com/signed")
    .then(res => res.json())
    .then(data => setUsers([...data]))
  },[])


  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
    .then(res => res.json())
    .then(data => {setAnimeList([...data.data])})
  }, [])

  const user = {id: undefined, username: userName,
                password: passWord, email: email, loggedIn: loggedIn}
  
  const chatUser = {id: undefined, image: image, message: message}
  
 
  const handleMessage = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  
  const handleChatRoom = (e) => {
    e.preventDefault()
    setChatRoom([...chatRoom, chatUser])
    setMessage("")
  }

  const handleCollapse = () => {
    if (collapse === false) {
      setCollapse(true)
    } else {
      setCollapse(false)
    }
  }

  const handleImage = (e) => {
    let img = e.target.files[0]
    setImage(URL.createObjectURL(img))
  }


  const handleLoggedOut = (e) => {
    e.preventDefault()
    setLoggedIn(false)
  }

  const handleLogInUserName = (e) => {
    e.preventDefault()
    setLogInUserName(e.target.value)
  }
  
  const handleLogInPassWord = (e) => {
    e.preventDefault()
    setLogInPassWord(e.target.value)
  }

  const handleLoggedInSubmit = (e) => {
    e.preventDefault()
    let arr = [...allUsers]
    for(let i in arr) {
      if (arr[i].password === logInPassWord && arr[i].username === logInUserName){
        setLoggedInUser(arr[i])
        setLoggedIn(true)
        setLogInPassWord("")
        setLogInUserName("")
      }
    }
  }


  const handleNameChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }

  const handlePassChange = (e) => {
    e.preventDefault()
    setPassWord(e.target.value)
    if(e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/)){
      setWrongPass(false)
    }else {
      setWrongPass(true)
    }
  }

  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
      
      Axios.post("https://vasilis-blog-1991.herokuapp.com/signin",{
        username: userName,
        password: passWord,
        email: email,
      }).then(() => {
        console.log("success")
      })
  }

  

  return (
    <BrowserRouter>
    <Container fluid className="App">
      <NavBar collapse={collapse} handleCollapse={handleCollapse} image={image} loggedIn={loggedIn} loggedInUser={loggedInUser} handleLoggedOut={handleLoggedOut} />
      <Routes>
       <Route exact path="/" element={<Home loggedIn={loggedIn} loggedInUser={loggedInUser} />} />
       <Route exact path="/signin" element={<SignIn handleImage={handleImage} wrongPass={wrongPass} userName={userName} passWord={passWord} email={email} handleNameChange={handleNameChange} handlePassChange={handlePassChange} handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} allUsers={allUsers} user={user} />} />
       <Route exact path="/login" element={loggedIn === true ? (<Navigate replace to="/" />) : (<LogIn logInUserName={logInUserName} loggedIn={loggedIn} logInPassWord={logInPassWord} loggedInUser={loggedInUser} handleLoggedInSubmit={handleLoggedInSubmit} handleLogInUserName={handleLogInUserName} handleLogInPassWord={handleLogInPassWord}  />)} />   
       <Route exact path="/anime" element={<Anime animeList={animeList} />} />
       <Route exact path="/anime/ao-ashi" element={<AoAshi animeList={animeList} chatRoom={chatRoom} message={message} handleChatRoom={handleChatRoom} handleMessage={handleMessage} />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
