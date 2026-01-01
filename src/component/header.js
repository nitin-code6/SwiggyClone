


export default function Header()
{
return (
    <header className="bg-[#ff5200] " >
    <div className="flex justify-between container mx-auto py-8">
        <img className="h-12 w-40" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
        <div className="text-white font-serif text-base test-bold flex gap-10 items-center"  >
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Swiggy Corporate</a>
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>

<a className="border border-white px-3 py-4 rounded-2xl">Get the App</a>
 <a className="border border-black bg-black px-3 py-4 rounded-2xl" >Sign In</a>
            
        </div>
    </div>
    <div></div>
    <div></div>
    </header>

)
}

