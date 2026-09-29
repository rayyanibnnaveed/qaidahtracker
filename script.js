'use strict';
const previews = {
 foundations: [
  {title:'Arabic letters',file:'arabic-letters',page:3,description:'Mark the letters you recognise and can read. Note which ones need more practice.'},
  {title:'Harakat & Tajweed basics',file:'tajweed',page:4,description:'Keep a record of the sounds and rules you are working on in your lessons.'},
  {title:'Qaidah page progress',file:'page-progress',page:9,description:'Record your progress through your Qaidah book, page by page.'}
 ],
 practice: [
  {title:'Weekly practice',file:'weekly-practice',page:12,description:'Record what you practised, your minutes, how you felt, and a small win for the week.'},
  {title:'Lesson reflection',file:'lesson-reflection',page:13,description:'Keep your lesson notes and reflections together so you can revisit them.'},
  {title:'Monthly progress review',file:'monthly-review',page:24,description:'Pause to review your learning and think about your next steps.'}
 ],
 milestones: [
  {title:'My milestones',file:'milestones',page:51,description:'Give the meaningful moments in your learning journey a place to be recognised.'},
  {title:'Certificate of completion',file:'certificate',page:53,description:'Celebrate completing your Qaidah journey with the included certificate page.'},
  {title:'Your personal tracker',file:'cover',page:1,description:'Make it yours with your name, start date, and personal goal.'}
 ]
};
const gallery=document.getElementById('gallery');
const dialog=document.getElementById('page-dialog');
function openPreview(item){
 document.getElementById('dialog-title').textContent=item.title;
 const image=document.getElementById('dialog-image');image.src=`assets/${item.file}.webp`;image.alt=`Actual ${item.title} page from the QuranSkool Qaidah Tracker`;
 document.getElementById('dialog-caption').textContent=`Page ${item.page} of 53 · ${item.description}`;
 dialog.showModal();dialog.scrollTop=0;
}
function renderGallery(category){
 const fragment=document.createDocumentFragment();
 previews[category].forEach(item=>{
  const card=document.createElement('article');card.className='page-card';
  const button=document.createElement('button');button.type='button';button.className='page-image-button';button.setAttribute('aria-label',`Enlarge ${item.title} page`);
  const image=document.createElement('img');image.src=`assets/${item.file}.webp`;image.alt=`${item.title} — actual tracker page`;image.width=1100;image.height=1557;image.loading='lazy';
  button.append(image);button.addEventListener('click',()=>openPreview(item));
  const text=document.createElement('div');text.className='page-copy';
  const meta=document.createElement('div');meta.className='page-meta';
  const page=document.createElement('span');page.textContent=`PAGE ${String(item.page).padStart(2,'0')} / 53`;
  const enlarge=document.createElement('span');enlarge.textContent='ENLARGE +';meta.append(page,enlarge);
  const title=document.createElement('h3');title.textContent=item.title;
  const description=document.createElement('p');description.textContent=item.description;
  text.append(meta,title,description);card.append(button,text);fragment.append(card);
 });
 gallery.replaceChildren(fragment);
}
document.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 renderGallery(button.dataset.category);
}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
renderGallery('foundations');
document.getElementById('year').textContent=new Date().getFullYear();
const config=window.QURAN_TRACKER_CONFIG||{};
if(config.checkoutUrl){
 try{const url=new URL(config.checkoutUrl);if(url.protocol!=='https:')throw Error('Use an HTTPS checkout link.');const button=document.getElementById('purchase-button');button.href=url.href;button.textContent=config.purchaseLabel||'Get the Qaidah Tracker';if(config.offerText)document.getElementById('offer-text').textContent=config.offerText;document.getElementById('purchase-note').textContent=config.purchaseNote||'53-page printable PDF';}
 catch(error){console.warn('Checkout configuration:',error.message);}
}
