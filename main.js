// const newArr = [{
//     element: 'li',
//     children: [{
//         element: 'a',
//         innerText: 'hello',
//         href: 'contact.html'
//     }]
// }, {
//     element: 'li',
//     children: [{
//         element: 'a',
//         innerText: 'about us',
//         href: 'about.html'
//     }]
// }, {
//     element: 'li',
//     children: [{
//         element: 'a',
//         innerText: 'home',
//         href: 'index.html'
//     }]
// }, {
//     element: 'li',
//     children: [{
//         element: 'a',
//         innerText: 'shop',
//         href: 'shop.html'
//     }]
// }, {
//     element: 'div',
//     children: [{
//         element: 'p',
//         innerText: 'klev',
//     }]    
// }]

// const header = document.getElementById('header')
//       const nav = document.createElement('nav')
//       header.appendChild(nav)
//       const ul = document.createElement('ul')
//       nav.appendChild(ul)

//       newArr.forEach(item => {
//         const e = document.createElement(item.element)
//         if (item?.children) {
//             const child = document.createElement(item.children[0].element)
//             child.innerText = item.children[0]?.innerText
//             child.setAttribute('href', item.children[0]?.href)
//             e.appendChild(child)
//         }
//         ul.appendChild(e)
//     })
    //   const li = document.createElement('li')
    //   ul.appendChild(li)
    //   const a = document.createElement('a')
    //   li.appendChild(a)
    //   a.innerText = 'hello'
    //   a.setAttribute('href', 'contact.html')

    //   const liTwo = document.createElement('li')
    //   ul.appendChild(liTwo)
    //   const aTwo = document.createElement('a')
    //   liTwo.appendChild(aTwo)
    //   aTwo.innerText = 'about us'
    //   aTwo.setAttribute('href', 'about.html')


    header.innerHTML = `<nav>
    <div style="width: 100px">
      <img src="logo.png" style="width: 100%; height: auto" />
    </div>
    <ul>
      <div class="dropdown">
        <li><a href="#">Visit &#x2304;</a>
          <div class="dropdown-content">
              <a href="#">Shoreditch</a>
              <a href="#">Brick Lane</a>
              <a href="#">Menu</a>
          </div>
        </li>
      </div>
      <li><a href="#">Shop</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="#"><i class="fa-light fa-magnifying-glass"></i></a></li>
    </ul>
  </nav>`

    footer.innerHTML = ``
