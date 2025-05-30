class Blur {
    div;
    constructor(message) {
        const oBody = window.top?.document.querySelector("body");
        this.div = window.top?.document.createElement("div");
        this.div.id = "blurred_background";
        this.div.innerHTML = `<style>
        #blurred_background{
            position: absolute;
            top: 0;
            left: 0;
            height: 450vh;
            width: 100vw;
            backdrop-filter: blur(8px);
            z-index: 1001;
        }
        #blurred_background p{
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
        }
        #blurred_background div{
            padding: 0 1em;
        }
        </style>
        <div>${message}</div>`;
        oBody?.insertAdjacentElement("afterbegin", this.div);
    }
    close(){
        this.div.remove();
    }
}

const suffix = (Math.random()*100).toFixed().toString();

document.querySelector("body").insertAdjacentHTML("beforeend", `
    <style>
    #fab${suffix} { 
        position: fixed;
        background-color: #521c6d;
        color: #fff;
        bottom: 30px;
        right: 20px;
        padding: 1em;
        border-radius: 5px;
    }
     #modal${suffix} {
        position: absolute;
        background-color: #fcfcf2;
        top: 50px;
        right: 20px;
        z-index: 1001;
    }  
    #clear${suffix}{
        position: fixed;
        top: 2em;
        right: 1em;
        padding: 1em;
        border-radius: 5px;
        color: #fcfcf2; 
        background-color: #521c6d; 
    }
    </style>
    <button id="fab${suffix}">Order with SMS</button>
    `);

document.querySelector(`#fab${suffix}`).addEventListener("click", evt=>{
    const blur = new Blur(`<div id="modal${suffix}"><div><x-chat /></div><button id="clear${suffix}">Clear</button></div>`);
    document.querySelector(`#clear${suffix}`).addEventListener("click", () => blur.close());
});