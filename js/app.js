
const App = {
    //All selected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },

        state: {

        },

    init() {
        App.registerEventListeners()
    },

    registerEventListeners() {  
        
        App.$.menu.addEventListener("click", (event) => {
            App.$.menuItems.classList.toggle("hidden");
        });

        App.$.resetBtn.addEventListener("click", event => {
            console.log("Reset the game")
        });

        App.$.newRoundBtn.addEventListener("click", event => {
            console.log("Add a new round")
        });

        App.$.squares.forEach((square) => {
            square.addEventListener("click", (event) => {

                if (square.hasChildNodes()) {
                    return
                };

                const currentPlayer = App.state.currentPlayer

                const icon = document.createElement("i");

                if(currentPlayer === 1) {
                    icon.classList.add("fa-solid", "fa-x", "yellow");
                }else {
                    icon.classList.add("fa-solid", "fa-o", "turquoise");
                }

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1
                
                square.replaceChildren(icon);
            });
        });

    },
};

/*When window loads the document it will call App.init, then init will register 
all the event listeners. Helps organize and keep code clean*/
window.addEventListener("load", App.init);

               