# Four Horses Club (layout task)

[Figma](https://www.figma.com/file/0xXfupPNU3aZxPqFbmhCKb/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%7C-%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?type=design&node-id=0%3A1&mode=design&t=rOAaagCJbi3KLDi4-1)

[Delpoy](https://ha308ing.github.io/t_four-horses-club/)

To check layout use extension like [PerfectPixel](https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) and design file screenshots:

- [375](https://ha308ing.github.io/t_four-horses-club/assets/design-375.png)
- [1366](https://ha308ing.github.io/t_four-horses-club/assets/design-1366.png)

[Task](https://forms.yandex.ru/surveys/10033975.d66cde35b078199afc83f1e9f11cb58c5cdb22e9/) from [hexlet assignments](https://github.com/Hexlet/ru-test-assignments)

## Notes

### postcss variables

css properties to be resolved with `postcss-custom-properties` should be in root _.css_ file,

the variables from separate files are not resolved

### Deploy

to display image for nested deploy path like (github pages),

vite config should have `base: ./`

and public asset links should be relevant:

things that are resolved at runtime should be relative (like images),

and those that arent' should be absolute (like imports in css)
