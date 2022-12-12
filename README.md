## Repro

### Common requirements:

1. Clone this repository
2. install dependencies `npm install`

### Case of success

1. Run build npm script `npm run build`

On MacOS 13

```shell
$ npm run build
(omited)
Route (pages)                                                                                         Size     First Load JS
┌ ○ /                                                                                                 4.33 kB        77.5 kB
├   └ css/ae0e3e027412e072.css                                                                        707 B
├   /_app                                                                                             0 B            73.2 kB
├ ○ /404                                                                                              181 B          73.4 kB
├ λ /api/articles                                                                                     0 B            73.2 kB
├ λ /api/hello                                                                                        0 B            73.2 kB
├ ● /articles (ISR: 10 Seconds)                                                                       2.31 kB        75.5 kB
└ ● /articles/[slug] (ISR: 10 Seconds) (379 ms)                                                       340 B          73.5 kB
    ├ /articles/test
    ├ /articles/test-2
    └ /articles/ทําไมผู้ป่วยถึงเลือกเกาหลีใต้ในการรักษาโรคมะเร็งและมะเร็งชนิดที่พวกเขารักษาได้ดีกว่า
+ First Load JS shared by all                                                                         73.4 kB
  ├ chunks/framework-8c5acb0054140387.js                                                              45.4 kB
  ├ chunks/main-f2e125da23ccdc4a.js                                                                   26.7 kB
  ├ chunks/pages/_app-3893aca8cac41098.js                                                             296 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js                                                                750 B
  └ css/ab44ce7add5c3d11.css                                                                          247 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```

On Linux

```shell
npm run build

> next13-enametoolong@0.1.0 build
> next build

info  - Linting and checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
[    ] info  - Generating static pages (0/7)
Error occurred prerendering page "/articles/ทําไมผู้ป่วยถึงเลือกเกาหลีใต้ในการรักษาโรคมะเร็งและมะเร็งชนิดที่พวกเขารักษาได้ดีกว่า". Read more: https://nextjs.org/docs/messages/prerender-error
Error: ENAMETOOLONG: name too long, open '<path-to-profile>/repos/nextjs-enametoolong/.next/export/articles/ทําไมผู้ป่วยถึงเลือกเกาหลีใต้ในการรักษาโรคมะเร็งและมะเร็งชนิดที่พวกเขารักษาได้ดีกว่า.json'
info  - Generating static pages (7/7)
```

### Case of failure

1. Edit sampleFile.ts

```typescript
// Build succeed
// export const sampleFileUri = `https://raw.githubusercontent.com/bbonkr/nextjs-enametoolong/main/public/samples/case1.json`;

// Build failed
export const sampleFileUri = `https://raw.githubusercontent.com/bbonkr/nextjs-enametoolong/main/public/samples/case2.json`;
```

```shell
$ npm run build
> next13-enametoolong@0.1.0 build
> next build

info  - Linting and checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data .(node:69993) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
info  - Collecting page data
[    ] info  - Generating static pages (0/8)(node:69991) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:69992) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:69999) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:69998) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

Error occurred prerendering page "/articles/f48a093378588a19f5519a6b2474cc5601ad12d8b1774535175ad31321e0909dc3c24301ce961d33a1a37058e6cf5d5d7a54f08500b83d8a398ac0b2d542ce77a9f86cdb66943b30df278b9733a412049bfa651f6b3d8046ad8ab01bfa78825020e4919a10bee6acc039617564648d355251496379bd30ff60e1640f1411". Read more: https://nextjs.org/docs/messages/prerender-error
Error: ENAMETOOLONG: name too long, open '<path-to-profile>/Repos/next13-enametoolong/.next/export/articles/f48a093378588a19f5519a6b2474cc5601ad12d8b1774535175ad31321e0909dc3c24301ce961d33a1a37058e6cf5d5d7a54f08500b83d8a398ac0b2d542ce77a9f86cdb66943b30df278b9733a412049bfa651f6b3d8046ad8ab01bfa78825020e4919a10bee6acc039617564648d355251496379bd30ff60e1640f1411.json'
(node:69997) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
info  - Generating static pages (8/8)

> Build error occurred
Error: Export encountered errors on following paths:
	/articles/[slug]: /articles/f48a093378588a19f5519a6b2474cc5601ad12d8b1774535175ad31321e0909dc3c24301ce961d33a1a37058e6cf5d5d7a54f08500b83d8a398ac0b2d542ce77a9f86cdb66943b30df278b9733a412049bfa651f6b3d8046ad8ab01bfa78825020e4919a10bee6acc039617564648d355251496379bd30ff60e1640f1411
    at <path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/export/index.js:408:19
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (<path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/trace/trace.js:79:20)
    at async <path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/build/index.js:1342:21
    at async Span.traceAsyncFn (<path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/trace/trace.js:79:20)
    at async <path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/build/index.js:1202:17
    at async Span.traceAsyncFn (<path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/trace/trace.js:79:20)
    at async Object.build [as default] (<path-to-profile>/Repos/next13-enametoolong/node_modules/next/dist/build/index.js:65:29)
```
