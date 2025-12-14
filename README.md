[Vercel bağlantısı](https://mekanbul-backend-odev.vercel.app/)

**API Endpoints**
- Tüm Mekanları listele: `GET /api/venues`
- Yeni Mekan Ekle: `POST /api/venues`
- Mekan Detayını Getir: `GET /api/venues/:venueid`
- Mekanı Güncelle: `PUT /api/venues/:venueid`
- Mekanı Sil: `DELETE /api/venues/:venueid`
- Yorum Ekle(Mekana): `POST /api/venues/:venueid/comments`
- Yorum Getir: `GET /api/venues/:venueid/comments/:commentid`
- Yorum Güncelle: `PUT /api/venues/:venueid/comments/:commentid`
- Yorum Sil: `DELETE /api/venues/:venueid/comments/:commentid`

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
