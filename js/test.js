/*
*
* @Author: Montex BJ Eliseo
*/

let inventario = {
    list: [],
    load: function () {
        console.log("Load");
    }
};
let ventas;
let entrada;

let sidebar = {
    element: document.getElementById("sidebar"),
    visible: false,
    toggle: function () {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    },
    hide: function () {
        this.element.classList.toggle("hide");
        this.visible = false;
    },
    show: function () {
        this.element.classList.remove("hide");
        this.visible = true;
    }
};

function test() {
    try {
        inventario.load();
        sidebar.hide();
    } catch (e) {
        console.log(e);
    }
}

test();