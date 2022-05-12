document.querySelector('.root').onmouseover = function(e) {

    function active() {
        let list = document.querySelector('.list')
            // let img = document.querySelector('.img')
            // img.src = './img/Polygon3.png'
            // console.log(img)
        list.classList.add('active')

        function d() {
            let root = document.querySelector('.root')
            root.onmouseout = function() {
                // let img = document.querySelector('.img')
                // img.src = './img/Polygon2.png'
                let list = document.querySelector('.list')
                    //console.log(list)
                list.classList.remove('active')
                    //console.log(list)
            }
        }

        d()


    }

    active()
}