import ButtonCss from "./components/ButtonCss.jsx";
import ButtonStyled from "./components/ButtonStyled.jsx";
import ButtonEmotion from "./components/ButtonEmotion.jsx";


function App() {
    return (
        <div style={{padding: 50}}>
            <h1>React 스타일링</h1>
            <ButtonCss/>
            <br/><br/>
            <ButtonStyled/>
            <br /><br />
            <ButtonEmotion />
        </div>
    );
}

export default App;