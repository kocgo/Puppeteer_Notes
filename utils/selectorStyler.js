async function selectorStyler(){
    try {
        await this.page.evaluate( (selector, selectorName) => {
            Array.from(document.querySelectorAll(selector)).forEach( e => {
                const randomizer = parseInt(1000 * Math.random())
                e.classList.add("puppeteer_styler" + randomizer)
                const stylingElement = document.head.appendChild(document.createElement("style"));
                stylingElement.innerHTML = ".puppeteer_styler" + randomizer + ":after { content: \"" + selectorName.toUpperCase() + "\"; padding: 4px; width:50px; height: 50px; background: azure; border: 1px grey solid; right: 0; top: 0; border-radius: 5px; opacity: 0.9;}";
                e.style.backgroundColor = "#C6F09D";
                e.style.border = "2px solid #66BC0F";
                e.style.borderRadius = "2px";
            })
        }, selector = this.selector, selectorName = this.selectorName)
    } catch (err) {
        console.log(err);
    };
};


module.exports = selectorStyler;