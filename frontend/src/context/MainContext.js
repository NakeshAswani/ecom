import React, { createContext, useState } from 'react'
let ecomContext = createContext()

export default function MainContext(props) {
  let [search, setSearch] = useState('')
  let [catSearch, setCatSearch] = useState('')
  let [cart, setCart] = useState([])

  let [sideBar, setSideBar] = useState(true)
  let [categorySubMenu, setCategorySubMenu] = useState(false)
  let [productSubMenu, setProductSubMenu] = useState(false)
  return (
    <ecomContext.Provider value={
      {
        search,
        setSearch,
        catSearch,
        setCatSearch,
        cart,
        setCart,
        sideBar,
        setSideBar,
        categorySubMenu,
        setCategorySubMenu,
        productSubMenu,
        setProductSubMenu
      }
    }>
      {props.children}
    </ecomContext.Provider>
  )
}
export { ecomContext }