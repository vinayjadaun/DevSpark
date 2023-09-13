import React from 'react';
import './hero.scss';

function Hero(){
    return(
    <>
    <div className="Hero"style={{backgroundImage:`url("https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1200&t=st=1694516253~exp=1694516853~hmac=3b1a70ed76bfc42d96e39802b726e44367fc0e0a24cfb2e7178ae16f982864b4")`,backgroundRepeat:"no-repeat"}}>
        <div className="hero1"><span className="text1">Your Imagination</span> <br/>
        Our Implementation</div>
        <div className="hero2">Revolutionize Your Bussiness<br/> with Cutting Edge Software Solutions</div>
        <button className="hero3">Get Service<span></span><i class="fa-solid fa-arrow-right-long"></i></button>
       
       
        
    </div>
    </>

    );
}
export default Hero;