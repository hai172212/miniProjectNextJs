// "use client"
import React from 'react'
import CardCompponent from '@/components/CardCompponent'
import Slider from '@/components/SliderMovies';
import UserHomeComponent from '@/components/UserHomeComponent';
export const metadata={
  title: "Home Page",
  description: "This is the home page",
  author:"limhai",
  creationDate:"26/05/2023",
  license:"nextJs 13",
  visibility: "public",
  locale: 'en-US',
  category: 'test',
  siteName: 'limhai',
  // manifest: '/manifest.json',
  // openGraph:{
  //   title: 'Home - LIMHAI',
  //   description: desc,
  //   // url: '/',
  //   siteName: 'LIMHAI',
  //   // images: [
  //   //     {
  //   //         url: "/og-image.jpg",
  //   //         width: 800,
  //   //         height: 600,
  //   //     },
  //   // ]
// }
}
// get data from API
export async function getData() {
  // no-store to avoid cache
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=20&offset=0", {cache: "no-store"}
  );
  const data = await res.json();
  return data;
}
export async function getUserData(){
    // no-store to avoid cache
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/users?limit=12", {cache: "no-store"}
  );
  const data1 = await res.json();
  return data1;
}



export default async function Home() {

  const products = await getData();
  const users = await getUserData();

  return (
    <div>
    <div className='d-flex justify-center'>
      <Slider/>
    </div>
 
    <main className='container mt-8'>
    <div style={{display:'flex' , justifyContent:"center"}}>
      <div className='container'>
      <div className='row'>
    {users.map((user, key)=>(
      <UserHomeComponent
        key={user?.id || key}
        email = {user.email}
        role={user.role}
        name ={user.name}
        avatar={user.avatar}
        id={user.id}
        // avatar,name,role,id
        
      />
    ))}
    </div>
      </div>
    </div>

         <div className='row '>
         {products.map((product) => (
          <CardCompponent
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
            description={product.description}
          />
        ))}
        
         </div>


    </main>
    </div>

  )
}
  