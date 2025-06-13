# Deploy para Hostinger e GitHub Pages

## Build de produção

Execute:

```
npm run build
```

Os arquivos finais estarão na pasta `dist/`.

---

## Deploy na Hostinger

1. Faça upload do conteúdo da pasta `dist/` para o seu domínio na Hostinger (pasta `public_html` ou equivalente).
2. Certifique-se de que o arquivo `index.html` está na raiz do domínio.
3. Se usar SPA (Single Page Application), adicione um arquivo `.htaccess` com:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Deploy no GitHub Pages

1. Defina a variável de ambiente BASE_URL com o nome do repositório:
   - No terminal:
     ```
     export BASE_URL="/NOME-DO-REPO/"
     npm run build
     ```
2. Faça push do conteúdo da pasta `dist/` para o branch `gh-pages` ou use uma action automatizada.
3. Configure o GitHub Pages para servir a partir do branch `gh-pages`.

---

## Observações
- Caminhos relativos garantem compatibilidade tanto em domínio próprio quanto em subdiretório.
- Para domínio personalizado na Hostinger, mantenha BASE_URL como `/` (padrão).
- Para subdiretório (GitHub Pages), use `/NOME-DO-REPO/`.
