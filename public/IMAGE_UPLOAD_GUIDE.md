# IMAGE UPLOAD GUIDE

## Single Image Folder

Use only one folder for image/video storage:

```text
public/images/
```

All section assets should be uploaded to this folder.

## Required Files

Upload these files into `public/images/`:

- `Vaishali-Shah.webp`
- `Kamal-Shah.webp`
- `Rajiv-Shah.webp`
- `thirty.webp`
- `Ecom.png`
- `Fintech.png`
- `Real-estate.png`
- `Manufacturing.png`
- `Healthcare.png`
- `Logistics.jpg`
- `macbook.jpg`
- `1.jpg`
- `openai.svg`
- `claude.svg`
- `gemini.svg`
- `perplexity.svg`
- `midjourney.svg`
- `surface-bottom_4x.webp`
- `new.webm`
- `positioning.svg`

## Paths Used in Code

Examples:

```tsx
<img src="/images/Ecom.png" alt="E-commerce" />
<img src="/images/1.jpg" alt="Scalable Foundations" />
<img src="/images/surface-bottom_4x.webp" alt="Clock surface" />
```

## Upload Tips

- Photos: WebP or PNG
- Logos/icons: SVG
- Video: WebM
- Keep filenames exact (case-sensitive)

## Verify

1. Refresh the website.
2. Open DevTools Network tab.
3. Confirm no 404 responses for `/images/*`.
