class XanDOM {
    render(node: HTMLElement, container: HTMLElement) {
        container.appendChild(node);
    }

    createElement(tag: string, props: any, ...children: any[]) {
        const element = document.createElement(tag);
        // Set attributes
        Object.keys(props).forEach(key => {
            if (key === 'class') {
                element.className = props[key];
            } else if (key === 'id') {
                element.id = props[key];
            } else if (key.startsWith('on')) {
                try {
                    element.onclick = props[key];
                } catch (error) {
                    console.error("Function not found or not a valid event handler: " + error);
                }
            } else {
                element.setAttribute(key, props[key]);
            }
        });

        children.forEach(child => {
            if (typeof child === 'string' || typeof child === 'number') {
                element.appendChild(document.createTextNode(child + ' '));
            } else {
                element.appendChild(child);
            }
        });

        return element;
    }

    setInnerText(elementId: string, text: string) {
        const element = document.getElementById(elementId);
        element.innerText = text;
    }
}

export default XanDOM;
