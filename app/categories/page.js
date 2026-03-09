import React from 'react'
import Link from 'next/link'
const Categories = () => {
  return (
    <> 
    
    <div>
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
  <Link href={"/categories/deserts"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="deserts.png" alt="Desserts" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Desserts</p>
  </div></Link>
  <Link href={"/categories/shakes and beverages"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="shakes.png" alt="Shakes" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Shakes and Beverages</p>
  </div></Link>
  <Link href={"/categories/salads"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="salads.png" alt="Salads" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Salads</p>
  </div></Link>
  <Link href={"/categories/soups"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="soup.png" alt="Soups" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Soups</p>
  </div></Link>
   <Link href={"/categories/chutneys"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="chutney.png" alt="Chutneys" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Chutneys,Pickcle and Dips</p>
  </div></Link>
  <Link href={"/categories/breads"}><div className="flex flex-col items-center hover:shadow-lg transition cursor-pointer">
    <img src="breads.png" alt="Breads" className="w-40 h-40 object-cover rounded-full mb-4" />
    <p className="text-lg font-medium text-[#1f2f1f]">Breads</p>
  </div></Link>
</div>

      </div>

    </div>
    </div>

    </>
  )
}

export default Categories
