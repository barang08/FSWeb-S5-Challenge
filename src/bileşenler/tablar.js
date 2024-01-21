import axios from "axios"
const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konular") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konular dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topics = document.createElement("div")
  topics.classList.add("topics")

  const tab1 = document.createElement("div")
  tab1.textContent = "javascript"

  const tab2 = document.createElement("div")
  tab2.textContent = "bootstrap"

  const tab3 = document.createElement("div")
  tab3.textContent = "teknoloji"

  topics.append(tab1, tab2, tab3)
  return topics




}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const tabsContainer = document.querySelector(secici)
  axios.get("http://localhost:5001/api/konular")
    .then(res => {
      const tabs = Tablar(res.data.konular)
      tabsContainer.append(tabs)
    })
    .catch((error) => {
      console.log("Tablar bulunamadı")
    })





}

export { Tablar, tabEkleyici }
