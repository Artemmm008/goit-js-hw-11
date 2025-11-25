import{a as d,S as p,i as l}from"./assets/vendor-LvtvrCkc.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="53393653-1acdc9704f6308d207f4a2045",y="https://pixabay.com/api/";function h(e){const o={key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(y,{params:o}).then(s=>s.data)}const f=document.querySelector(".gallery"),a=document.getElementById("loader-overlay");function g(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link" alt="${e.tags}"> 
                <img src="${e.webformatURL}" 
                     alt="${e.tags}" 
                     class="gallery-image">
            </a>
        <div class="info">
            <p class="info-item"><b>Likes</b>${e.likes}</p>
            <p class="info-item"><b>Views</b>${e.views}</p>
            <p class="info-item"><b>Comments</b>${e.comments}</p>
            <p class="info-item"><b>Downloads</b>${e.downloads}</p>
        </div>
    </li>
    `}function L(e){const o=e.map(g).join("");f.insertAdjacentHTML("beforeend",o),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){f.innerHTML=""}function v(){a&&a.classList.remove("hidden")}function u(){a&&a.classList.add("hidden")}const i=document.querySelector(".form"),w=i.elements.query;u();i.addEventListener("submit",e=>{e.preventDefault();const o=w.value.trim();if(!o){l.warning({message:"Please enter a search term!",position:"topRight"});return}v(),b(),h(o).then(s=>{const n=s.hits;n.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(n),u(),i.reset()}).catch(s=>{l.error({message:"Error",position:"topRight"}),console.error(s),u(),i.reset()})});
//# sourceMappingURL=index.js.map
