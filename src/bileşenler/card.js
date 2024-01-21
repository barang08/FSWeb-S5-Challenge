import axios from "axios"

const Card = (makale) => {


  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const div = document.createElement("div")
  div.classList.add("card")

  const headline = document.createElement("div")
  headline.classList.add("headline")
  headline.textContent = makale.anabaslik;

  const authorArea = document.createElement("div")
  authorArea.classList.add("author")

  const imgContainer = document.createElement("div")
  imgContainer.classList.add("img-container")

  const img = document.createElement("img")
  img.src = `${makale.yazarFoto}`

  imgContainer.append(img)

  const span = document.createElement("span")
  span.textContent = `${makale.yazarAdı} tarafından`

  authorArea.append(imgContainer, span)
  headline.append(authorArea)
  div.append(headline)

  div.addEventListener("click", () => {
    console.log(`${makale.anabaslik}`)
  })

  return div;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const cardContainer = document.querySelector(secici)

  axios.get("http://localhost:5001/api/makaleler")
    .then((res) => {
      const arrayCards = Object.values(res.data.makaleler).flat();
      arrayCards.forEach((item) => {
        cardContainer.append(Card(item))

      })

    })


}

export { Card, cardEkleyici }
