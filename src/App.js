import { useState } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'




function App() {
	 const [value, setValue] = useState();
	 const [todo, setTodo] = useState([]); 
	 const handleClick = () => {
		if (value !== "" && todo !== "") {
			setTodo([...todo, value]);
			setValue('');
		}
	 };
    return (
        <div className="App">
			<div>
			<input onChange={(e) => setValue(e.target.value)} value={value} />
			<button onClick={handleClick} > Add Todo</button>
		</div>
		<div>
			<ol>
				{todo.map(todos => (
					<li>{todos}</li>
				))}
			</ol>
		</div>
		</div>
		
	);
	}
export default App;
