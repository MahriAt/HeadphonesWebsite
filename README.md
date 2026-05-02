# Project Name

##  Setup
Projeyi çalıştırmak için:
```bash
npm install
npm run dev
```

##  Kullanılan Teknolojiler
React (Vite)
JavaScript (ES6+)
SCSS
Netlify (deploy)

##  Özellikler
Responsive (mobil, tablet, desktop uyumlu)
Ürün kartları
SSS (FAQ) bölümü
İletişim formu (email doğrulama ile)
Tema değişimi (dark/light)
Dinamik bileşen yapısı

##  Performans
Lighthouse:
Mobile: 90
Desktop: 97

Yapılan optimizasyonlar:
Görseller WebP formatına dönüştürüldü
Lazy loading uygulandı
Font yükleme optimize edildi
Hero image preload edildi

##  Structure
public/
src/
    assets/
    styles/

##  Notes
Explain design decisions

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
