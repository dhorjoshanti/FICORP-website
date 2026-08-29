# FICORP Static Website

This website is designed for GitHub Pages and uses only:

- HTML
- CSS
- JavaScript

No backend or database is required.

## Folder structure

```text
ficorp-website/
│
├── index.html
├── style.css
├── script.js
├── logo.jpg
│
└── assets/
    └── fonts/
        ├── Garet-Book.woff2
        └── Garet-Heavy.woff2
```

## 1. Add your logo

Place your final logo file in the main folder and name it:

`logo.jpg`

The HTML already points to this filename.

If you use PNG instead, change:

```html
<img src="logo.jpg"
```

to:

```html
<img src="logo.png"
```

There are two logo positions:
- Home section
- Who We Are section

Both automatically use the same file.

## 2. Add the Garet font

Place the font files in:

`assets/fonts/`

Recommended filenames:

- `Garet-Book.woff2`
- `Garet-Heavy.woff2`

If your font files have different names, edit the two `@font-face` sections at the top of `style.css`.

The website will still display using Arial/Helvetica if the Garet files are not present.

## 3. Edit website content

Almost all text is inside `index.html`.

Search for these headings to find each section:

- `01. HOME`
- `02. WHO WE ARE`
- `03. WHAT WE DO`
- `04. OUR IMPACT`
- `05. LET'S DO THIS TOGETHER`

Each section has comments showing where you can edit content.

## 4. Change colours

Open `style.css`.

The main colours are at the top:

```css
--beige: #d8d1c9;
--white: #f8f8f7;
--text: #303a42;
--teal: #00A88E;
```

Your official navy `#0D2B4D` is deliberately not used as the primary website text colour at this stage, following the current design direction.

## 5. Set up the contact form

The website uses Formspree for GitHub Pages compatibility.

Create a Formspree form and set your receiving email to:

`contact@ficorp.com.au`

Formspree will provide a form endpoint similar to:

```text
https://formspree.io/f/abcdwxyz
```

In `index.html`, find:

```html
https://formspree.io/f/YOUR_FORMSPREE_FORM_ID
```

Replace only:

`YOUR_FORMSPREE_FORM_ID`

with your real ID.

For example:

```html
https://formspree.io/f/abcdwxyz
```

The form already includes:

- Name
- Phone
- Message

It also has:
- Required field validation
- Sending state
- Success message
- Error message

## 6. Upload to GitHub

Upload the entire contents of this folder to the repository connected to GitHub Pages.

Important: `index.html` must be in the main/root folder.

Your repository should look like:

```text
repository/
├── index.html
├── style.css
├── script.js
├── logo.jpg
└── assets/
    └── fonts/
```

Do not upload the outer `ficorp-website` folder itself if your existing GitHub Pages repository already expects `index.html` in the root.

## 7. Existing custom domain

If your current GitHub Pages site already has the custom domain configured, uploading/replacing these website files should not normally require changing the domain DNS settings.

Keep your existing GitHub Pages settings and custom domain configuration in place unless you intentionally want to change the domain.

## Before publishing checklist

- [ ] Add `logo.jpg`
- [ ] Add Garet font files
- [ ] Review and edit all text
- [ ] Create Formspree form
- [ ] Add Formspree form ID
- [ ] Test contact form
- [ ] Test desktop layout
- [ ] Test mobile layout
- [ ] Upload files to GitHub
- [ ] Confirm GitHub Pages is publishing the correct branch/folder
