import{a as p,S as y,i as a}from"./assets/vendor-C9vNCoLC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",g="50405301-47862986f56788818382e7919";async function b(s){try{return(await p.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw t}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a");function w(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:d,downloads:m})=>`
        <li class="photo-card">
          <a href="${n}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b><br>${r}</p>
            <p class="info-item"><b>Views</b><br>${i}</p>
            <p class="info-item"><b>Comments</b><br>${d}</p>
            <p class="info-item"><b>Downloads</b><br>${m}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){l.innerHTML=""}function S(){u.classList.add("active")}function c(){u.classList.remove("active")}const f=document.querySelector(".form"),q=f.querySelector('input[name="search-text"]');f.addEventListener("submit",async s=>{s.preventDefault();const t=q.value.trim();if(!t){a.error({message:"Enter a search query!"});return}v(),S();try{const o=await b(t);setTimeout(()=>{if(c(),o.hits.length===0){a.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"});return}w(o.hits)},600)}catch{c(),a.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map
