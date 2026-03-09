import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="flex h-[60vh]">
  
  <div className="w-1/2 bg-[#fff8ed] flex items-center justify-center p-12">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-[#1F2F1F] leading-tight">
        Discover<br />New<br />Recipes
      </h1>

     <Link href="/GetStarted">
      
        <button className="mt-8 bg-[#5A6D57] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#4e5f4d] transition cursor-pointer">
          
          Get Started
        </button>
      
    </Link>
  </div>
</div>
  
  <div className="w-1/2 bg-[#f9c847] flex items-center justify-center">
    <img src="/bowl.png" alt="Bowl" className="w-64 h-64 object-cover rounded-full" />
  </div>
</div>

    <div className="bg-[#fff8ed] pt-16 px-8 pb-12">
      
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-[#1f2f1f] mb-10 ">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
  <Link href={"/categories/starters"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="starter.png" alt="Starters" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Starters</p>
  </div></Link>
  <Link href={"/categories/main course"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="main course.png" alt="Main Course" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Main Course</p>
  </div></Link>
  <Link href={"/categories/desserts"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="deserts.png" alt="Desserts" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Desserts</p>
  </div></Link>
  <Link href={"/categories/shakes and beverages"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="shakes.png" alt="Shakes" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Shakes and Beverages</p>
  </div></Link>
</div>

      </div>

    </div>
    <div className="mt-1 text-center">
      <Link href={"/categories"}><button className="mt-8 bg-[#5A6D57] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#4e5f4d] transition cursor-pointer">Explore More</button></Link>
    </div> 
    <div className="bg-[#fff8ed] pt-16 pb-20 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1f2f1f] mb-10">Trending Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition cursor-pointer">
            <img src="avocado.png" alt="" className="w-full h-48 object-cover" />
            <div>
              <p className="text-lg font-semibold text-[#1f2f1f]">Avocado Toast</p>
            </div>

          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition cursor-pointer">
            <img src="pancake.png" alt="" className="w-full h-48 object-cover" />
            <div>
              <p className="text-lg font-semibold text-[#1f2f1f]">Berry Pancake</p>
            </div>

          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition cursor-pointer">
            <img src="sphagetti.png" alt="" className="w-full h-48 object-cover" />
            <div>
              <p className="text-lg font-semibold text-[#1f2f1f]">Spaghetti</p>
            </div>

          </div>
           <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition cursor-pointer">
            <img src="caserole.png" alt="" className="w-full h-48 object-cover" />
            <div>


              <p className="text-lg font-semibold text-[#1f2f1f]">Grilled Cheese Casserole</p>
            </div>

          </div>


        </div>
      </div>
    </div>
        {/* Fixed Add Recipe Button */}
    <Link href="/addrecipe">
      <button className="fixed bottom-16 right-6 bg-[#5A6D57] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#4e5f4d] transition duration-300 z-50 cursor-pointer">
        + Add Recipe
      </button>
    </Link>

    </>
    
  );
}
