
(function () {
    //倪静楠-js
    let objs = document.getElementsByClassName('njn-mouse');
    for (let i = 0; i < objs.length; i++) {
        objs[i].onmouseover = function () {
            this.classList.add('njn-mouse-on');
        };
    }
    for (let i = 0; i < objs.length;i++) {
        objs[i].onmouseout = function () {
            this.classList.remove('njn-mouse-on');
        }
    };
    // 
    // 
    // 
    // 周昭君 -js
    let foot = document.getElementById('brand-link')
    let text = document.getElementById('zzj-text')

    function addHoveEvent(parent) {
        var opation = parent.getElementsByTagName("a");
        console.log(opation)
        for (let i = 0; i < opation.length; i++) {
            opation[i].onmouseover = function () {

                let siblings = this.parentNode.children;
                let id = this.parentNode.index;// 0--3
                for (let j = 0; j < siblings.length; j++) {
                    siblings[j].style.color = "";
                    siblings[j].style.borderBottom = '';
                }
                this.style.color = "red";
                this.style.borderBottom = '1px solid red'
            }

            opation[i].onmouseleave = function () {
                this.style.color = "";
                this.style.borderBottom = ''
            }
        }
    }

    addHoveEvent(foot)
    addHoveEvent(text)
}())
