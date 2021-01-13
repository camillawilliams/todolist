import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const todoList = ["do homework", "take out garbage", "go to the mall"]
const [theList, listFunction] = useState
export function Home() {
	return (
		<div className="text-center mt-5">
			<div className="todoList">
                <input className="todoInput"></input>
		</div>
    </div>
	);
}
