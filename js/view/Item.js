import DropZone from "./DropZone.js";
import KanbanAPI from "../api/KanbanAPI.js";

export default class Item {
	constructor(id, content) {
		const bottomDropZone = DropZone.createDropZone();
		const customContextMenu = document.querySelector(".custom-context-menu");

		this.rclicked = false;


		this.elements = {};
		this.elements.root = Item.createRoot();
		this.elements.input = this.elements.root.querySelector(".kanban__item-input");

		this.elements.root.dataset.id = id;
		this.elements.input.textContent = content;


		// if (content == ""){
		// 	this.elements.input.textContent = "Write your task here...";
		// }

		this.content = content;
		this.elements.root.appendChild(bottomDropZone);

		const onBlur = () => {
			const newContent = this.elements.input.textContent.trim();

			if (newContent == this.content) {
				return;
			}

			this.content = newContent;

			KanbanAPI.updateItem(id, {
				content: this.content
			});
		};

		this.elements.input.addEventListener("blur", onBlur);
		// this.elements.root.addEventListener("dblclick", () => {
		// 	const check = confirm("Are you sure you want to delete this item?");

		// 	if (check) {
		// 		KanbanAPI.deleteItem(id);

		// 		this.elements.input.removeEventListener("blur", onBlur);
		// 		this.elements.root.parentElement.removeChild(this.elements.root);
		// 	}
		// });

		//event listeners for right click menu
		this.elements.root.addEventListener("contextmenu", (e) => {
			e.preventDefault();

			this.rclicked = true;
			let topPosition = e.clientY;
			let leftPosition = e.clientX;
			customContextMenu.classList.add("active");

			customContextMenu.style.left = leftPosition + "px";
			customContextMenu.style.top = topPosition + "px";

			const menu = document.getElementById("menu");
			this.elements.root.style.borderColor = "#0f67aacc";
			this.elements.root.style.borderWidth = "2px";

			//event listener for right click menu. 
			menu.addEventListener("click", (event) => {

				const clickedElement = event.target;

				if (clickedElement.id === "bold") {
					boldText(id, element)
					this.elements.root.style.borderColor = "#d4d4d4";
					this.elements.root.style.borderWidth = "1px";
				}

				if (clickedElement.id === "del") {
					if (this.rclicked) {
						KanbanAPI.deleteItem(id);
						this.elements.input.removeEventListener("blur", onBlur);
						this.elements.root.parentElement.removeChild(this.elements.root);
					}
				}
				if (clickedElement.id == "highlight") {
					highlightText(id, element);
					divElement.style.borderColor = "#d4d4d4";
					divElement.style.borderWidth = "1px";
				}
				if (clickedElement.id === "ital") {
					italicText(id, element);
					divElement.style.borderColor = "#d4d4d4";
					divElement.style.borderWidth = "1px";
				}

				this.rclicked = false;
			}, { once: true });
		});


		window.addEventListener("click", () => {
			this.rclicked = false;
			customContextMenu.classList.remove("active");
			this.elements.root.style.borderColor = "#d4d4d4";
			this.elements.root.style.borderWidth = "1px";
		});

		this.elements.root.addEventListener("dragstart", e => {
			e.dataTransfer.setData("text/plain", id);
		});

		this.elements.input.addEventListener("drop", e => {
			e.preventDefault();
		});

		this.elements.root.addEventListener("contextmenu", () => {
			this.isRightClicked = false;
		});
	}

	static createRoot() {
		const range = document.createRange();

		range.selectNode(document.body);

		return range.createContextualFragment(`
			<div class="kanban__item" draggable="true">
				<div class="kanban__item-input" data-text="Write your task here..." contentEditable=true ></div>
			</div>
		`).children[0];
	}
}
