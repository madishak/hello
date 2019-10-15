class SaveArrays {
    constructor() {
        this.state = [];
        this.container = document.createElement('div');
    }

    getArray(val) {
        this.state = [...this.state, val];
    }

    removeArray(index)  {
        let acc = [];
        return this.state.filter((elem, ind) => {

            if (ind !== index) {
                acc = [...acc, elem];
            }
            this.state = acc;
            return this.state;
        });
    }

    render() {
        this.container.innerHTML = '';
        this.state.map(elem => renderCollection(elem));
        document.body.appendChild(this.container);
        return this.container;
    }
}

const saveArray = new SaveArrays();

const startButton = document.createElement('button');
startButton.textContent = "Render";
document.body.appendChild(startButton);

const deleteButton = document.createElement('button');
deleteButton.textContent = "Delete";
document.body.appendChild(deleteButton);


startButton.addEventListener('click', ()=>{
    const value =  prompt("Enter numbers", 100);
    saveArray.getArray(value);
    console.log(saveArray.state);
    saveArray.render();
});

deleteButton.addEventListener('click', () => {
saveArray.removeArray(1);
    saveArray.render();
});


const renderCollection = (value) => {
        const newDiv = document.createElement('div');
        newDiv.textContent = value;
        newDiv.style.backgroundColor = 'pink';
        newDiv.style.borderBottom = '1px solid red';

        saveArray.container.appendChild(newDiv);

      return value;
};

