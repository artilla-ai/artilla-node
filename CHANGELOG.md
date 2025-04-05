# Changelog

## 0.1.0-alpha.12 (2025-04-05)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#105](https://github.com/artilla-ai/artilla-node/issues/105)) ([80e965e](https://github.com/artilla-ai/artilla-node/commit/80e965e4345238cf72115d5d17ed1a6ad72b26cf))
* **client:** send `X-Stainless-Timeout` in seconds ([#103](https://github.com/artilla-ai/artilla-node/issues/103)) ([91f248c](https://github.com/artilla-ai/artilla-node/commit/91f248c24c5d6d0133cf4998b9f8da8a5bdac5d0))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#101](https://github.com/artilla-ai/artilla-node/issues/101)) ([53fb31d](https://github.com/artilla-ai/artilla-node/commit/53fb31d0d55fc3982c74e9e28f47d5215168fb5f))
* **mcp:** remove unused tools.ts ([#106](https://github.com/artilla-ai/artilla-node/issues/106)) ([c75375d](https://github.com/artilla-ai/artilla-node/commit/c75375dcd929c6a32030d8ec6e75215c08c2f926))


### Chores

* **internal:** add aliases for Record and Array ([#104](https://github.com/artilla-ai/artilla-node/issues/104)) ([18d0393](https://github.com/artilla-ai/artilla-node/commit/18d039360d8a5099d527e6f04601a8b13e389a6f))

## 0.1.0-alpha.11 (2025-03-22)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Bug Fixes

* avoid type error in certain environments ([#99](https://github.com/artilla-ai/artilla-node/issues/99)) ([36961be](https://github.com/artilla-ai/artilla-node/commit/36961bede4a7770c00cff6911d651b985d73fe5f))


### Chores

* **exports:** cleaner resource index imports ([#96](https://github.com/artilla-ai/artilla-node/issues/96)) ([e13f62a](https://github.com/artilla-ai/artilla-node/commit/e13f62a52372c58929ba540de873073319f796b4))
* **exports:** stop using path fallbacks ([#98](https://github.com/artilla-ai/artilla-node/issues/98)) ([8001b35](https://github.com/artilla-ai/artilla-node/commit/8001b35a8585950a35f322597d8f294f3b9054e7))

## 0.1.0-alpha.10 (2025-03-14)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#91](https://github.com/artilla-ai/artilla-node/issues/91)) ([c77fbc8](https://github.com/artilla-ai/artilla-node/commit/c77fbc8706ebdab0f8f72b8656a762b2e2c822de))
* **client:** accept RFC6838 JSON content types ([#92](https://github.com/artilla-ai/artilla-node/issues/92)) ([fb5e900](https://github.com/artilla-ai/artilla-node/commit/fb5e9006113984c4c44e532ad78d74050ee31593))


### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#94](https://github.com/artilla-ai/artilla-node/issues/94)) ([8b354b3](https://github.com/artilla-ai/artilla-node/commit/8b354b3eeee91d180b01e0c1aa3c59d55e8a045c))


### Chores

* **internal:** fix devcontainers setup ([#88](https://github.com/artilla-ai/artilla-node/issues/88)) ([292ad6d](https://github.com/artilla-ai/artilla-node/commit/292ad6d773e743513d508fd4c773b85cb082395a))
* **internal:** remove extra empty newlines ([#93](https://github.com/artilla-ai/artilla-node/issues/93)) ([156e1d5](https://github.com/artilla-ai/artilla-node/commit/156e1d5c8328c6a4171aa5e37b2509a11d436336))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#90](https://github.com/artilla-ai/artilla-node/issues/90)) ([1c4b1cd](https://github.com/artilla-ai/artilla-node/commit/1c4b1cd500120818c2654d9bf31d404887d3ed6c))

## 0.1.0-alpha.9 (2025-02-14)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **client:** send `X-Stainless-Timeout` header ([#84](https://github.com/artilla-ai/artilla-node/issues/84)) ([cd64b2e](https://github.com/artilla-ai/artilla-node/commit/cd64b2e8825f27e79332fb28cd3f5f8d1ca0d070))


### Bug Fixes

* **client:** fix export map for index exports ([#86](https://github.com/artilla-ai/artilla-node/issues/86)) ([aff9b32](https://github.com/artilla-ai/artilla-node/commit/aff9b32e3b95f48cca84692867c5e0dbbc0d861a))

## 0.1.0-alpha.8 (2025-01-21)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** manual updates ([#59](https://github.com/artilla-ai/artilla-node/issues/59)) ([df26695](https://github.com/artilla-ai/artilla-node/commit/df266952c45c0363d39abcf259adeb3dce197dd3))
* **api:** manual updates ([#61](https://github.com/artilla-ai/artilla-node/issues/61)) ([b65c86d](https://github.com/artilla-ai/artilla-node/commit/b65c86d292597a4661f3cc2a06246c17d88aa080))
* **internal:** make git install file structure match npm ([#69](https://github.com/artilla-ai/artilla-node/issues/69)) ([657f8b9](https://github.com/artilla-ai/artilla-node/commit/657f8b90994b2bf26d045161c72263ed969ac1a1))


### Bug Fixes

* **client:** normalize method ([#75](https://github.com/artilla-ai/artilla-node/issues/75)) ([fae1a85](https://github.com/artilla-ai/artilla-node/commit/fae1a85db49b73acb715d1e8da0c523d04cbce0c))


### Chores

* **client:** simplify `unknown | null` to just `unknown` ([#78](https://github.com/artilla-ai/artilla-node/issues/78)) ([8748ce6](https://github.com/artilla-ai/artilla-node/commit/8748ce6631bba23a9307245097806f1d21e695d4))
* **internal:** add test ([#82](https://github.com/artilla-ai/artilla-node/issues/82)) ([c74439f](https://github.com/artilla-ai/artilla-node/commit/c74439fdc597fdb6a9e108a01661c0128f3bb793))
* **internal:** bump cross-spawn to v7.0.6 ([#71](https://github.com/artilla-ai/artilla-node/issues/71)) ([84730da](https://github.com/artilla-ai/artilla-node/commit/84730daf80cb076bef420b44faebbb6296cf8fc2))
* **internal:** change formatting ([#80](https://github.com/artilla-ai/artilla-node/issues/80)) ([5925c6b](https://github.com/artilla-ai/artilla-node/commit/5925c6b6639cc42a22b823eb24c30d1d5d3d7ffe))
* **internal:** codegen related update ([#77](https://github.com/artilla-ai/artilla-node/issues/77)) ([fa1c676](https://github.com/artilla-ai/artilla-node/commit/fa1c6766ce8585674d2b789e7006b779acc3b36c))
* **internal:** codegen related update ([#79](https://github.com/artilla-ai/artilla-node/issues/79)) ([5e23b1b](https://github.com/artilla-ai/artilla-node/commit/5e23b1b5c612ab0f42b5215635ed7668547ea7f2))
* **internal:** codegen related update ([#81](https://github.com/artilla-ai/artilla-node/issues/81)) ([cbe102e](https://github.com/artilla-ai/artilla-node/commit/cbe102eaff64ccc7199186f71b6f6d69e7118d39))
* **internal:** fix some typos ([#74](https://github.com/artilla-ai/artilla-node/issues/74)) ([2b6779f](https://github.com/artilla-ai/artilla-node/commit/2b6779f4ac52456ea44dd550caaec136ff1122ca))
* **internal:** remove unnecessary getRequestClient function ([#70](https://github.com/artilla-ai/artilla-node/issues/70)) ([2c59125](https://github.com/artilla-ai/artilla-node/commit/2c5912526475a6dcfa3c8b30b8b96a6203d5a4c9))
* **internal:** update isAbsoluteURL ([#73](https://github.com/artilla-ai/artilla-node/issues/73)) ([4fdd030](https://github.com/artilla-ai/artilla-node/commit/4fdd0308b79c53f50b05a97b34d75728144937c9))
* rebuild project due to codegen change ([#62](https://github.com/artilla-ai/artilla-node/issues/62)) ([b0f26b0](https://github.com/artilla-ai/artilla-node/commit/b0f26b00ac2245357ad52c09e65a120ab1013904))
* rebuild project due to codegen change ([#63](https://github.com/artilla-ai/artilla-node/issues/63)) ([2b481eb](https://github.com/artilla-ai/artilla-node/commit/2b481ebacbfc2f48420220447fb209858cefe0ad))
* rebuild project due to codegen change ([#64](https://github.com/artilla-ai/artilla-node/issues/64)) ([08a951c](https://github.com/artilla-ai/artilla-node/commit/08a951cfc3067bff8ebe48b71acba48b82d51c22))
* rebuild project due to codegen change ([#65](https://github.com/artilla-ai/artilla-node/issues/65)) ([c91d1c4](https://github.com/artilla-ai/artilla-node/commit/c91d1c40aed243e43cf2d4a0cd74a5c7d2d54e87))
* rebuild project due to codegen change ([#66](https://github.com/artilla-ai/artilla-node/issues/66)) ([791e3f1](https://github.com/artilla-ai/artilla-node/commit/791e3f14102d6df98599cc944579ecfa06054a40))
* remove redundant word in comment ([#68](https://github.com/artilla-ai/artilla-node/issues/68)) ([f12b47e](https://github.com/artilla-ai/artilla-node/commit/f12b47e7ae7f7960ca46258232bd70fb9d635091))
* **types:** nicer error class types + jsdocs ([#72](https://github.com/artilla-ai/artilla-node/issues/72)) ([887a2d4](https://github.com/artilla-ai/artilla-node/commit/887a2d4c7fc17eac01684eb5a4642267382b4b55))


### Documentation

* minor formatting changes ([#76](https://github.com/artilla-ai/artilla-node/issues/76)) ([56c6370](https://github.com/artilla-ai/artilla-node/commit/56c637011b596e47c26685be6b5aab1b00c4741b))
* remove suggestion to use `npm` call out ([#67](https://github.com/artilla-ai/artilla-node/issues/67)) ([5011e53](https://github.com/artilla-ai/artilla-node/commit/5011e537c04bdf49dfdfdf17f8405b56e6f47865))

## 0.1.0-alpha.7 (2024-08-22)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** manual updates ([5217d3c](https://github.com/artilla-ai/artilla-node/commit/5217d3c50354e20f0e086b20751b5dbb5c799d6b))
* **api:** manual updates ([b10b0d0](https://github.com/artilla-ai/artilla-node/commit/b10b0d041330201485a2872bb39eb639933493c2))
* **api:** manual updates ([44aa16d](https://github.com/artilla-ai/artilla-node/commit/44aa16d550e65302ffa4e530bec84d0cc44285ae))
* **api:** manual updates ([61a53bf](https://github.com/artilla-ai/artilla-node/commit/61a53bf73e475d1c87e8f16d117b41ea129a7448))


### Chores

* go live ([6fdf5ce](https://github.com/artilla-ai/artilla-node/commit/6fdf5ce257b053228e4e640201ac6006759f8605))
* go live ([#54](https://github.com/artilla-ai/artilla-node/issues/54)) ([fdb0bd3](https://github.com/artilla-ai/artilla-node/commit/fdb0bd316fce974da66a34483efb1822c22b0169))
* go live ([#56](https://github.com/artilla-ai/artilla-node/issues/56)) ([279e74a](https://github.com/artilla-ai/artilla-node/commit/279e74aed9201ff352cc3300f4c717c06d87b558))

## 0.1.0-alpha.6 (2024-08-21)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** manual updates ([ff95358](https://github.com/artilla-ai/artilla-node/commit/ff9535879be5c540b21393f0c6e7f86db84016c3))
* **api:** manual updates ([c911f22](https://github.com/artilla-ai/artilla-node/commit/c911f22708e944bf91b07c1bcf33af094185f241))


### Chores

* go live ([#40](https://github.com/artilla-ai/artilla-node/issues/40)) ([71e0796](https://github.com/artilla-ai/artilla-node/commit/71e079661205b9de26183dfc3e39010b185d6656))
* go live ([#45](https://github.com/artilla-ai/artilla-node/issues/45)) ([e12351a](https://github.com/artilla-ai/artilla-node/commit/e12351ad69e9d764d8eb27ac905c2d1f4fa718e9))
* update SDK settings ([#41](https://github.com/artilla-ai/artilla-node/issues/41)) ([41d4c64](https://github.com/artilla-ai/artilla-node/commit/41d4c64b5f9b6db5cfdd46ba97dd4535ea273a0d))
* update SDK settings ([#46](https://github.com/artilla-ai/artilla-node/issues/46)) ([91fb1cc](https://github.com/artilla-ai/artilla-node/commit/91fb1ccef0e3762126c3231b491c50f738986387))

## 0.1.0-alpha.6 (2024-08-21)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** manual updates ([ff95358](https://github.com/artilla-ai/artilla-node/commit/ff9535879be5c540b21393f0c6e7f86db84016c3))
* **api:** manual updates ([c911f22](https://github.com/artilla-ai/artilla-node/commit/c911f22708e944bf91b07c1bcf33af094185f241))


### Chores

* go live ([#40](https://github.com/artilla-ai/artilla-node/issues/40)) ([71e0796](https://github.com/artilla-ai/artilla-node/commit/71e079661205b9de26183dfc3e39010b185d6656))
* go live ([#45](https://github.com/artilla-ai/artilla-node/issues/45)) ([e12351a](https://github.com/artilla-ai/artilla-node/commit/e12351ad69e9d764d8eb27ac905c2d1f4fa718e9))
* update SDK settings ([#41](https://github.com/artilla-ai/artilla-node/issues/41)) ([41d4c64](https://github.com/artilla-ai/artilla-node/commit/41d4c64b5f9b6db5cfdd46ba97dd4535ea273a0d))
* update SDK settings ([#46](https://github.com/artilla-ai/artilla-node/issues/46)) ([91fb1cc](https://github.com/artilla-ai/artilla-node/commit/91fb1ccef0e3762126c3231b491c50f738986387))

## 0.1.0-alpha.5 (2024-08-21)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** manual updates ([3636107](https://github.com/artilla-ai/artilla-node/commit/3636107d6228b85fe92dc4f6d52ee979c8c6104c))


### Chores

* go live ([#37](https://github.com/artilla-ai/artilla-node/issues/37)) ([c2d18bb](https://github.com/artilla-ai/artilla-node/commit/c2d18bbdf03479ab426eed5df43df2d3417f6dc6))
* update SDK settings ([#35](https://github.com/artilla-ai/artilla-node/issues/35)) ([aa22233](https://github.com/artilla-ai/artilla-node/commit/aa22233f220b45dcad7082d6ab4c5aa1e62001bd))
* update SDK settings ([#38](https://github.com/artilla-ai/artilla-node/issues/38)) ([88fe772](https://github.com/artilla-ai/artilla-node/commit/88fe77212b5ea8ff9c8e39dd5eaede09bf9a8944))

## 0.1.0-alpha.4 (2024-08-21)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** manual updates ([24f5004](https://github.com/artilla-ai/artilla-node/commit/24f50046f96f86cdeb4473cda01947c5f0b68319))
* **api:** manual updates ([bad393c](https://github.com/artilla-ai/artilla-node/commit/bad393c553b4fc53ce0ee397b3178122cc894a12))
* **api:** manual updates ([ba345fb](https://github.com/artilla-ai/artilla-node/commit/ba345fbf2b7888adb635677d0383481cec97826c))
* **api:** OpenAPI spec update via Stainless API ([#29](https://github.com/artilla-ai/artilla-node/issues/29)) ([ed63eeb](https://github.com/artilla-ai/artilla-node/commit/ed63eeb74277f53e80a067505a3b6abe05008ff9))


### Chores

* go live ([#31](https://github.com/artilla-ai/artilla-node/issues/31)) ([07c675e](https://github.com/artilla-ai/artilla-node/commit/07c675e9b3ec0c74665ed6740aa1a732a25fddce))
* go live ([#33](https://github.com/artilla-ai/artilla-node/issues/33)) ([0b4ffa7](https://github.com/artilla-ai/artilla-node/commit/0b4ffa7e19fc3d2d00aa1f55476ce5c152c91b02))

## 0.1.0-alpha.3 (2024-08-21)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** manual updates ([#25](https://github.com/artilla-ai/artilla-node/issues/25)) ([66f2697](https://github.com/artilla-ai/artilla-node/commit/66f2697f516addae7f42c27de3463cf83dd14508))


### Chores

* update SDK settings ([#27](https://github.com/artilla-ai/artilla-node/issues/27)) ([b72c7fe](https://github.com/artilla-ai/artilla-node/commit/b72c7fe227a7e48284425b20835631e5d64d51f9))

## 0.1.0-alpha.2 (2024-08-21)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/artilla-ai/artilla-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** manual updates ([949419f](https://github.com/artilla-ai/artilla-node/commit/949419f334e42d8fe256d01502018e9e807f24bd))
* **api:** manual updates ([#20](https://github.com/artilla-ai/artilla-node/issues/20)) ([af7a107](https://github.com/artilla-ai/artilla-node/commit/af7a107eaeed25af98df7e1aa3dfc99da6e00b6d))


### Chores

* go live ([#23](https://github.com/artilla-ai/artilla-node/issues/23)) ([cfe57c0](https://github.com/artilla-ai/artilla-node/commit/cfe57c030f97e6a52eb4f8babd97cb1e98b834b8))

## 0.1.0-alpha.1 (2024-08-20)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/artilla-ai/artilla-node/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **api:** OpenAPI spec update via Stainless API ([#10](https://github.com/artilla-ai/artilla-node/issues/10)) ([14c550c](https://github.com/artilla-ai/artilla-node/commit/14c550c432d9d5b2790315e8c4e610dbcbe96e23))
* **api:** OpenAPI spec update via Stainless API ([#14](https://github.com/artilla-ai/artilla-node/issues/14)) ([166c6bc](https://github.com/artilla-ai/artilla-node/commit/166c6bcbdaa0d8c3b7a6b5d2882720e753548805))
* **api:** OpenAPI spec update via Stainless API ([#15](https://github.com/artilla-ai/artilla-node/issues/15)) ([37d8834](https://github.com/artilla-ai/artilla-node/commit/37d8834d37b12b7c2749dbc08f4b804f97c30326))
* **api:** OpenAPI spec update via Stainless API ([#16](https://github.com/artilla-ai/artilla-node/issues/16)) ([413f4a9](https://github.com/artilla-ai/artilla-node/commit/413f4a9bf95048ec09f699a13604f65fd087aab1))
* **api:** OpenAPI spec update via Stainless API ([#17](https://github.com/artilla-ai/artilla-node/issues/17)) ([29a20f4](https://github.com/artilla-ai/artilla-node/commit/29a20f4588553a9341bbf01eac53e38a46fe4af9))
* **api:** OpenAPI spec update via Stainless API ([#4](https://github.com/artilla-ai/artilla-node/issues/4)) ([940c211](https://github.com/artilla-ai/artilla-node/commit/940c2115adf49b861323748adec729834be07a10))
* **api:** OpenAPI spec update via Stainless API ([#6](https://github.com/artilla-ai/artilla-node/issues/6)) ([5316926](https://github.com/artilla-ai/artilla-node/commit/53169267d5ab04cc4d5de840d70f14033fd1a6a2))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#9](https://github.com/artilla-ai/artilla-node/issues/9)) ([6e2d2c0](https://github.com/artilla-ai/artilla-node/commit/6e2d2c0dc8deeafeb3590f367735f96e2ed17400))


### Chores

* **ci:** correctly tag pre-release npm packages ([#13](https://github.com/artilla-ai/artilla-node/issues/13)) ([970b6db](https://github.com/artilla-ai/artilla-node/commit/970b6dbd8ebd8fa09160382ba1009f60138e6fb7))
* **internal:** add constant for default timeout ([#12](https://github.com/artilla-ai/artilla-node/issues/12)) ([8176511](https://github.com/artilla-ai/artilla-node/commit/8176511dccb73ea49757a7b3dfb7c36f2a7dc9de))
* **internal:** codegen related update ([#11](https://github.com/artilla-ai/artilla-node/issues/11)) ([28b1316](https://github.com/artilla-ai/artilla-node/commit/28b13165dc67cb88e8fbd3de44d7e9c43c7edfaa))
* **internal:** codegen related update ([#18](https://github.com/artilla-ai/artilla-node/issues/18)) ([594744c](https://github.com/artilla-ai/artilla-node/commit/594744cf674b710e73b83be9ece0ae47d19d08d8))
* **internal:** refactor release doctor script ([#7](https://github.com/artilla-ai/artilla-node/issues/7)) ([660fc63](https://github.com/artilla-ai/artilla-node/commit/660fc638d5eeab810724542234842ed29b57bcfa))
* **tests:** update prism version ([#8](https://github.com/artilla-ai/artilla-node/issues/8)) ([e89756f](https://github.com/artilla-ai/artilla-node/commit/e89756fb489cd085790a90bb5ce6d45a43858320))

## 0.0.1-alpha.1 (2024-07-21)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/artilla-ai/artilla-node/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* go live ([#1](https://github.com/artilla-ai/artilla-node/issues/1)) ([19437f1](https://github.com/artilla-ai/artilla-node/commit/19437f1ade67e36e2137d197dcc145c0179d63e9))
