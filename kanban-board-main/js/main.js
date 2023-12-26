import Kanban from "./view/Kanban.js";

new Kanban(
	document.querySelector(".kanban")
);


class DraggableElement {
	constructor(element, zone, active) {
		this.element = element;
		this.zone = zone;
		this.active = active

		this.element.addEventListener("dragstart", () => {
			this.zone.style.zIndex = "2";
			this.active.style.zIndex = "2";
			this.element.stule.zIndex = "-1"
		});

		this.element.addEventListener("dragend", () => {
			this.zone.style.zIndex = "0";
			this.active.style.zIndex = "0";
			this.element.stule.zIndex = "1"
		});

		
	}
}


const noteDrag = document.querySelector("kanban__item-input")

const dropZone = document.querySelector("kanban__dropzone")
const dropZoneActive = document.querySelector("kanban__dropzone--active")

const draggable = new DraggableElement(draggableElement, dropZone, dropZoneActive);