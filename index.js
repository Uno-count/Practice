// ReactDOM.render(<ul><li>Item 1</li> <li>Item 2</li> <li>Item 3</li></ul>, document.getElementById("root"));



function Navbar() {

return (
    <nav className="w-full  bg-[#21222A]">
       <div className=" h-[91px] mx-auto max-w-6xl w-11/12  flex justify-between items-center">
            <img src="./logo.png"></img>
            <h1 className="text-gray-100 font-bold text-lg">React Course - Project 1</h1>
        </div>
    </nav>
)
}

function MainContent()
{
    
  
    return(
     

        <div className="flex flex-col gap-8 ">
            <h1 className="text-white  font-bold text-5xl ">Fun Facts About React</h1>
            <ul className="list-disc font-thin text-white ml-10 text-2xl marker:text-[#61DAFB] marker:text-xl z-[99]">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including   mobile apps</li>
                
            </ul>
        </div>
      
    )
}

ReactDOM.render
(
    <div className="relative h-screen overflow-hidden bg-[#282D35]">
        <Navbar/>
        <section className=" mx-auto max-w-6xl w-11/12 mt-8  ">
            <MainContent/>
        </section>
        <div className="absolute -right-32 top-36 ">
            <img src="./reactjs-icon 2.png" ></img>
        </div>
    </div>,

    document.getElementById("root")
)


// const nav = (
//     <nav className="bg-slate-900 h-20 w-full ">
//         <div className=" flex justify-between items-center h-full mx-auto w-11/12 max-w-6xl">
//             <div className="text-xl text-white font-bold">Website</div>

//             <div className="text-white ">
//                     <ul className="gap-4 flex">
//                         <li><a href="">Pricing</a></li>
//                         <li><a href="">About</a></li>
//                         <li><a href="">Contact</a></li>
                        
//                     </ul>
//             </div>
//         </div>

//     </nav>
// );

// ReactDOM.render(
//     nav,
//     document.getElementById('getNav')
// )