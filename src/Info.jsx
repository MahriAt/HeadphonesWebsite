import product2 from './assets/product2.webp'
import product3 from './assets/product3.webp'
import './Info.scss'

function Info(){
    return <>
        <div className='info'>
            <div className='container1'>
                <img src={product2} alt="product2" loading="lazy" />
                <div className='text'>
                    <h2>BERIBES'ten en iyi şekilde yararlanmanızı sağlayacak en iyi müzikleri kullanın!</h2>
                    <p>BERIBES Bluetooth kulaklıklar, her ses seviyesinde derin, güçlü ve etkileyici bir 
                        ses sunarak genel dinleme deneyiminizi çok daha iyi hale getirir. Amacımız her zaman 
                        müşterilerimize daha iyi ses kalitesi sunmak olmuştur ve bu, 
                        mühendisliğimizin odak noktasıdır.</p>
                </div>
            </div>
            <div className='container2'>
                <img src={product3} alt="product3" loading="lazy"/>
                <div className='text'>
                    <h2>Yüksek Kaliteli Kulaklık</h2>
                    <p>BERIBES 6EQ Kulaklıklar, ürünlerimizin daha uzun ömürlü, daha şık görünümlü, 
                        daha iyi dokulu ve daha iyi işlevli olmasını 
                        sağlayan yüksek kaliteli malzemelerden üretilmiştir.</p>
                    <h2>Konforlu Uyum</h2>
                    <p>Sadece 0,38 lb ağırlığındaki Bluetooth kulaklıklar ve hafızalı protein 
                        kulaklık yastıkları, kulaklarınız ve başınız için tüm gün konfor sağlar ve benzersiz 
                        kulaklık tasarımı, kulaklıkların kulağa daha iyi oturmasını sağlar.</p>
                    
                </div>
            </div>
        </div>
    </>
}
export default Info;