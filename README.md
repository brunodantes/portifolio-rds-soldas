# RDR Soldas e Serviços — Landing Page

Landing page em Next.js para a RDR Soldas e Serviços (Rafael Reale), com o visual industrial
de solda ("efeitos de solda") originalmente prototipado em Claude Design, agora reimplementado
como um app React/Next.js real.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  layout.tsx        — fontes (Archivo/Barlow), metadata SEO
  page.tsx           — composição das seções
  globals.css         — paleta, reset, keyframes das animações (faíscas, sheen, arco elétrico)
  api/contact/route.ts — recebe o formulário de contato e envia por e-mail (nodemailer)
components/          — uma seção por componente (Header, Hero, ValueProps, Services,
                        Process, Gallery, Contact, Footer, WhatsAppFloat) + CSS Modules
lib/constants.ts     — número de WhatsApp e e-mail de contato centralizados
```

A pasta `Landing page com efeitos de solda/` contém o export original do protótipo (Claude
Design) e serve só de referência visual — não faz parte do app.

## Formulário de contato (envio por e-mail)

O formulário em `#contato` envia os dados para `/api/contact`, que dispara um e-mail via SMTP
(nodemailer). Configure as variáveis de ambiente antes de usar em produção:

```bash
cp .env.local.example .env.local
```

Preencha `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` e `CONTACT_TO_EMAIL`. Sem essas
variáveis, a rota responde com um erro amigável orientando o visitante a usar o WhatsApp.

## Galeria de trabalhos

A seção `#galeria` está com placeholders estáticos (sem upload). Quando houver fotos reais dos
serviços, troque os placeholders em `components/Gallery.tsx` por `next/image` apontando para as
imagens.

## WhatsApp

O número de WhatsApp e o e-mail de contato ficam em `lib/constants.ts`. O botão flutuante e os
CTAs abrem `wa.me` com uma mensagem pré-preenchida.
