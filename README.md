**Canlı URL:** [https://mekanbul-backend-odev.vercel.app/](https://mekanbul-backend-odev.vercel.app/)

## API Endpoints

| Metot | Endpoint | Açıklama |
|-------|----------|----------|
| `GET` | `/api/venues` | Tüm mekanları listeler (veya koordinata göre yakın mekanları getirir) |
| `POST` | `/api/venues` | Yeni bir mekan ekler |
| `GET` | `/api/venues/:venueid` | Belirtilen ID'ye sahip mekanın detaylarını getirir |
| `PUT` | `/api/venues/:venueid` | Mekan bilgilerini günceller |
| `DELETE` | `/api/venues/:venueid` | Mekanı siler |
| `POST` | `/api/venues/:venueid/comments` | Mekana yeni bir yorum ekler |
| `GET` | `/api/venues/:venueid/comments/:commentid` | Belirli bir yorumu getirir |
| `PUT` | `/api/venues/:venueid/comments/:commentid` | Yorumu günceller |
| `DELETE` | `/api/venues/:venueid/comments/:commentid` | Yorumu siler |


**Postman ekran görüntüleri**
### Mekan İşlemleri
![Mekan Ekleme](./postmen_cikti/post_MekanKaydetme.png)
![Mekan Silme](./postmen_cikti/delete_mekanSilme.png)
![Mekan Güncelleme](./postmen_cikti/put_mekanGuncelleme.png)
![Mekan Gösterme](./postmen_cikti/get_mekanGetirme.png)
![Yakın Mekanlar](./postmen_cikti/ListNearbyVenues.png)

### Yorum İşlemleri
![Yorum Ekleme](./postmen_cikti/post_yorumEkleme.png)
![Yorum Silme](./postmen_cikti/delete_yorumSilme.png)
![Yorum Güncelleme](./postmen_cikti/put_yorumGuncelleme.png)
![Yorum Gösterme](./postmen_cikti/get_yorumCagirma.png)
