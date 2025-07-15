class Node {
	constructor() {
		this.value = null;
		this.nextNode = null;
	}
}

export class LinkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		const newNode = new Node();
		newNode.value = value;

		if (this.head === null) {
			this.head = newNode;
			return;
		}

		let nodePtr = this.head;
		while (nodePtr.nextNode !== null) {
			nodePtr = nodePtr.nextNode;
		}
		nodePtr.nextNode = newNode;
	}

	prepend(value) {
		const newNode = new Node();
		newNode.value = value;
		newNode.nextNode = this.head;
		this.head = newNode;
	}

	size() {
		let size = 0;
		let nodePtr = this.head;
		while (nodePtr !== null) {
			size++;
			nodePtr = nodePtr.nextNode;
		}
		return size;
	}

	getHead() {
		if (this.head === null) {
			return undefined;
		}
		return this.head.value;
	}

	getTail() {
		if (this.head === null) {
			return undefined;
		}
		let nodePtr = this.head;
		while (nodePtr.nextNode !== null) {
			nodePtr = nodePtr.nextNode;
		}
		return nodePtr.value;
	}

	at(index) {
		if (index >= this.size()) {
			return undefined;
		}
		let nodePtr = this.head;
		for (let i = 0; i < index; i++) {
			nodePtr = nodePtr.nextNode;
		}
		return nodePtr.value;
	}

	pop() {
		if (this.head === null) {
			return undefined;
		}
		let nodePtr = this.head;
		if (nodePtr.nextNode === null) {
			this.head = null;
			return nodePtr.value;
		}
		while (nodePtr.nextNode.nextNode !== null) {
			nodePtr = nodePtr.nextNode;
		}
		const lastNodePtr = nodePtr.nextNode;
		nodePtr.nextNode = null;
		return lastNodePtr.value;
	}

	contains(value) {
		let nodePtr = this.head;
		while (nodePtr !== null) {
			if (nodePtr.value === value) {
				return true;
			}
			nodePtr = nodePtr.nextNode;
		}
		return false;
	}

	find(value) {
		let index = 0;
		let nodePtr = this.head;
		while (nodePtr !== null) {
			if (nodePtr.value === value) {
				return index;
			}
			nodePtr = nodePtr.nextNode;
			index++;
		}
		return undefined;
	}

	insertAt(value, index) {
		if (index > this.size()) {
			return;
		}
		if (index === this.size()) {
			this.append(value);
			return;
		}
		if (index === 0) {
			this.prepend(value);
			return;
		}

		let priorNodePtr = this.head;
		for (let i = 0; i < index - 1; i++) {
			priorNodePtr = priorNodePtr.nextNode;
		}
		const newNode = new Node();
		newNode.value = value;
		newNode.nextNode = priorNodePtr.nextNode;
		priorNodePtr.nextNode = newNode;
	}

	removeAt(index) {
		if (index >= this.size()) {
			return;
		}
		if (index === 0) {
			this.head = this.head.nextNode;
			return;
		}

		let priorNodePtr = this.head;
		for (let i = 0; i < index - 1; i++) {
			priorNodePtr = priorNodePtr.nextNode;
		}
		priorNodePtr.nextNode = priorNodePtr.nextNode.nextNode;
	}

	toString() {
		let s = "";
		let nodePtr = this.head;

		while (nodePtr !== null) {
			s = `${s}( ${nodePtr.value} ) -> `;
			nodePtr = nodePtr.nextNode;
		}
		return s + "null";
	}
}
