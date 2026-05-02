# ADR01: Performans Optimizasyonu

## Problem

Projenin Lighthouse performans skorları düşüktü, özellikle mobilde LCP, FCP ve SI metrikleri zayıftı.

## Karar

Aşağıdaki optimizasyonlar uygulandı:
Görseller WebP formatına dönüştürüldü
Lazy loading eklendi
Hero görseli preload edildi
Font yükleme yöntemi değiştirildi
Gereksiz font ağırlıkları kaldırıldı

## Sonuç

Mobile performans: 90+
Desktop performans: 97

## Etki

Kullanıcı deneyimi iyileşti ve sayfa yüklenme süresi azaldı.