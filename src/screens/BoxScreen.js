// Gerekli bileşenleri React Native'den içe aktarıyoruz.
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

// React ve useState hook'unu içe aktarıyoruz.
import React, { useState } from "react";

// Fonksiyonel bileşen tanımlıyoruz: BoxScreen
export default function BoxScreen() {
  // colors adında bir dizi state oluşturuyoruz.
  // Bu dizide her tıklamada yeni bir renk saklanacak.
  const [colors, setColors] = useState([]);

  // Rastgele bir RGB renk döndüren fonksiyon
  const randomColor = () => {
    // 0–255 arası rastgele kırmızı değeri
    const red = Math.floor(Math.random() * 256);
    // 0–255 arası rastgele yeşil değeri
    const green = Math.floor(Math.random() * 256);
    // 0–255 arası rastgele mavi değeri
    const blue = Math.floor(Math.random() * 256);
    // rgb formatında string döndürür
    return `rgb(${red},${green},${blue})`;
  };

  // Ekrana render edilecek JSX yapısı
  return (
    <View>
      {/* Buton: Tıklandığında yeni bir rastgele renk oluşturur ve colors listesine ekler */}
      <Button
        title="Kutu Ekle"
        onPress={() => {
          // colors dizisine yeni rengi ekleyip state'i güncelliyoruz
          setColors([...colors, randomColor()]);
        }}
      />

      {/* FlatList: colors dizisindeki her bir renk için bir View kutusu oluşturur */}
      <FlatList
        // Liste verisi: colors state'i
        data={colors}
        // Her bir öğeyi nasıl render edeceğimiz
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 150, // kutunun yüksekliği
                width: 150, // kutunun genişliği
                backgroundColor: item, // kutunun arka plan rengi
                marginVertical: 20, // dikey boşluk
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
