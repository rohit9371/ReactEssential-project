import ReactImg from '../../assets/react-core-concepts.png'
import "./header.css"

const genCore=['Core','Crucial','Fundamnetal']

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1))
}

 function Header(){
  const description=genCore[getRandomInt(2)];
    return (
        <header>
        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
        
    )
}

export default Header;
