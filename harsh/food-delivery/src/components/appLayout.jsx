

function AppLayout(){
return(
    <>
    <div>
      <Header></Header>
    </div>

    <div>
        <Body></Body>
    </div>

    <div>
        <Footer></Footer>
    </div>
    </>
)
}

function Header(){
return(
    <>
    <div className="Header">
    <div className="logo"> </div>


    </div>
    this is header
    </>
)
}

function Footer(){
    return(
        <>
        this is footer
        </>
    )
}

function Body(){
    return(
        <>
        <div className='search-box'>

        </div>
        <div>
            
        </div>
        <div className='res-cards'>

        </div>
        this is body
        </>
    )
}

export {AppLayout};