import {useEffect, useState} from 'react'
import './App.css'
import github from "./assets/icons8-github-squared.svg"
import TwentyFiveMinTimer from "./TwentyFiveMinTimer";
import Config from "./Config"


const Themes = ({ OnChange }: any) => {
  return (
    <select
      onChange={(e) => OnChange(e.target.value)}
      className="select select-bordered w-full max-w-xs"
    >
      <option disabled selected>
        Select the Theme
      </option>
      <option>light</option>
      <option>dark</option>
      <option>cupcake</option>
      <option>bumblebee</option>
      <option>emerald</option>
      <option>corporate</option>
      <option>synthwave</option>
      <option>retro</option>
      <option>cyberpunk</option>
      <option>valentine</option>
      <option>halloween</option>
      <option>forest</option>
    </select>
  );
};

const Timer = () => {
  const [count, setCount] = useState(0)

  interface SpanStyle extends React.CSSProperties{
    '--value': number;
  }

  const spanStyle: SpanStyle = { '--value': count };
  const spanZero: SpanStyle = { '--value': 0 }

  return (
    <>
    <div className=" flex flex-col p-10 gap-10 items-center">
      <span className="countdown font-mono text-7xl">
        <span className="" style={ spanStyle }></span>:
      </span>
      <button className="btn btn-outline btn-lg">
        Começar!
      </button>
    </div>
    </>
  );
}

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [pomoMin, setPomoMin] = useState(0);
  const [intervMin, setIntervMin] = useState(0);

  const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
          <div className=" flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="https://github.com/Sherlockzen/pomo-react" target="_blank">
              PomoReact
              <img className=" w-12" src={github} alt="Github Icon" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a
                  onClick={ () => setOpenModal(true)}
                  className="btn-sm">CONFIG</a></li>
            </ul>
          </div>
        </div>
    )
  }



  const storeChanges = (pomo, intCurto) => {

  }

const [theme, setTheme] = useState('dark');
  return (
    <div data-theme={theme} className="App h-[100svh] grid justify-items-center">
      <div className=" max-w-3xl flex flex-col items-center">
        <NavBar />
        <TwentyFiveMinTimer />
        <Themes OnChange={(theme: string) => setTheme(theme)}/>
        <Config
            onClose={ () => setOpenModal(false)}
            invi={openModal}
        >


        </Config>
      </div>
    </div>
  );
}

export default App
