(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),l=t(30),r=t.n(l),o=t(77),m=t(78),s=t(82),d=t(79),c=t(83),u=t(40),p=t.n(u),h=t(16),g=t.n(h),x=t(51),f=t.n(x),b=t(81),y=t(25),_="\n/* This is a stylesheet fragment from material.io */\nhtml {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%\n}\n\nbody {\n    margin: 0\n}\n\narticle,aside,footer,header,nav,section {\n    display: block\n}\n\nh1 {\n    font-size: 2em;\n    margin: .67em 0\n}\n\nfigcaption,figure {\n    display: block\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible\n}\n\n/* This a giant \u201elorem ipsum\u201d comment:\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus aliquet est ut quam rutrum fringilla. Suspendisse et odio. Sed fringilla risus vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam auctor mi quis eros. Morbi justo nulla, lobortis imperdiet, consequat at, auctor ut, tortor. Sed est ipsum, posuere dictum, egestas ac, aliquam eu, sapien. Aenean ornare enim at mi. Phasellus id libero viverra felis elementum lobortis. Curabitur nec sapien gravida lacus lobortis tempor. Quisque eget mi a turpis rutrum venenatis. Nam tempus luctus nunc. Nulla ut orci ac est laoreet malesuada.\n*/\n\nmain {\n    display: block\n}\n\npre {\n    font-family: monospace,monospace;\n    font-size: 1em\n}\n\na {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects\n}\n\na:active,a:hover {\n    outline-width: 0\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted\n}\n\nb,strong {\n    font-weight: inherit\n}\n\nb,strong {\n    font-weight: bolder\n}\n\ncode,kbd,samp {\n    font-family: monospace,monospace;\n    font-size: 1em\n}\n\naudio,video {\n    display: inline-block\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\nimg {\n    border-style: none\n}\n\nsvg:not(:root) {\n    overflow: hidden\n}\n\nbutton,input,optgroup,select,textarea {\n    font-family: sans-serif;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0\n}\n\nbutton {\n    overflow: visible\n}\n\nbutton,select {\n    text-transform: none\n}\n\n[type=reset],[type=submit],button,html [type=button] {\n    -webkit-appearance: button\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {\n    border-style: none;\n    padding: 0\n}\n\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {\n    outline: 1px dotted ButtonText\n}\n\ninput {\n    overflow: visible\n}\n\n\nlegend {\n    box-sizing: border-box;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    color: inherit;\n    white-space: normal\n}\n\nprogress {\n    display: inline-block;\n    vertical-align: baseline\n}\n\ntextarea {\n    overflow: auto\n}\n\ndetails {\n    display: block\n}\n\nsummary {\n    display: list-item\n}\n\nmenu {\n    display: block\n}\n\ncanvas {\n    display: inline-block\n}\n\ntemplate {\n    display: none\n}\n\n[hidden] {\n    display: none\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n    from {\n        animation-timing-function: cubic-bezier(.4,0,.2,1);\n        transform: translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)\n    }\n\n    to {\n        transform: translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))\n    }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n    from {\n        animation-timing-function: linear;\n        opacity: 0\n    }\n\n    to {\n        opacity: var(--mdc-ripple-fg-opacity,0)\n    }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n    from {\n        animation-timing-function: linear;\n        opacity: var(--mdc-ripple-fg-opacity,0)\n    }\n\n    to {\n        opacity: 0\n    }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n    --mdc-ripple-surface-test-edge-var:1px solid #000;visibility: hidden\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n    border: var(--mdc-ripple-surface-test-edge-var)\n}\n\n.mdc-button {\n    font-family: Roboto,sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: .875rem;\n    line-height: 2.25rem;\n    font-weight: 500;\n    letter-spacing: .04em;\n    text-decoration: none;\n    text-transform: uppercase;\n    --mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color: transparent;\n    will-change: transform,opacity;\n    padding-right: 8px;\n    padding-left: 8px;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    position: relative;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    box-sizing: border-box;\n    min-width: 64px;\n    height: 36px;\n    border: none;\n    outline: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-appearance: none;\n    overflow: hidden;\n    vertical-align: middle;\n    border-radius: 2px\n}\n\n.mdc-button::after,.mdc-button::before {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"\n}\n\n.mdc-button::before {\n    transition: opacity 15ms linear;\n    z-index: 1\n}\n.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before {\n    transition-duration: 75ms;\n    opacity: .24\n}\n\n.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {\n    transition: opacity 150ms linear\n}\n\n.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 75ms;\n    opacity: .32\n}\n\n.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded {\n    --mdc-ripple-fg-opacity:0.32}\n\n.mdc-button--raised {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);\n    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1)\n}\n\n.mdc-button--raised:focus,.mdc-button--raised:hover {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)\n}\n\n.mdc-button--raised:active {\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n\n.mdc-button--raised:disabled {\n    box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)\n}\n\n.mdc-button--stroked {\n    border-style: solid;\n    padding-right: 14px;\n    padding-left: 14px;\n    border-width: 2px;\n    line-height: 32px\n}\n\n.mdc-button--stroked:disabled {\n    border-color: rgba(0,0,0,.38);\n    border-color: var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))\n}\n\n.mdc-button--stroked.mdc-button--dense {\n    line-height: 27px\n}\n\n.mdc-button--stroked:not(:disabled) {\n    border-color: #6200ee;\n    border-color: var(--mdc-theme-primary,#6200ee)\n}\n\n.mdc-button--dense {\n    height: 32px;\n    font-size: .8125rem;\n    line-height: 32px\n}\n\n.mdc-dialog {\n    display: -ms-flexbox;\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    visibility: hidden;\n    z-index: 5\n}\n\n.mdc-dialog__backdrop {\n    background-color: rgba(0,0,0,.87);\n    background-color: var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));\n    position: fixed;\n    top: 0;\n    left: 0;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    z-index: -1\n}\n\n.mdc-dialog__surface {\n    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);\n    background-color: #fff;\n    background-color: var(--mdc-theme-background,#fff);\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    width: calc(100% - 30px);\n    min-width: 640px;\n    max-width: 865px;\n    transform: translateY(150px) scale(.8);\n    border-radius: 2px;\n    opacity: 0\n}\n\n.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface {\n    text-align: right\n}\n\n.mdc-dialog__header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    padding: 24px 24px 0\n}\n\n.mdc-dialog[dir=rtl] .mdc-dialog__header,[dir=rtl] .mdc-dialog .mdc-dialog__header {\n    text-align: right\n}\n\n.mdc-dialog__header__empty {\n    padding: 0\n}\n\n.mdc-dialog__header__title {\n    font-family: Roboto,sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 1.25rem;\n    line-height: 2rem;\n    font-weight: 500;\n    letter-spacing: .02em;\n    text-decoration: inherit;\n    text-transform: inherit;\n    -ms-flex: 1;\n    flex: 1;\n    margin: 0\n}\n\n.mdc-dialog__body {\n    color: rgba(0,0,0,.54);\n    color: var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));\n    font-family: Roboto,sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: .875rem;\n    line-height: 1.25rem;\n    font-weight: 400;\n    letter-spacing: .04em;\n    text-decoration: inherit;\n    text-transform: inherit;\n    margin-top: 20px;\n    padding: 0 24px 24px\n}\n\n.mdc-snackbar {\n    display: -ms-flexbox;\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 50%;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    box-sizing: border-box;\n    padding-right: 24px;\n    padding-left: 24px;\n    transform: translate(-50%,100%);\n    transition: transform .25s 0s cubic-bezier(.4,0,1,1);\n    background-color: #323232;\n    pointer-events: none;\n    will-change: transform\n}\n\n@media (max-width: 599px) {\n    .mdc-snackbar {\n        left:0;\n        width: 100%;\n        transform: translate(0,100%)\n    }\n}\n\n@media (min-width: 600px) {\n    .mdc-snackbar {\n        min-width:288px;\n        max-width: 568px;\n        border-radius: 2px\n    }\n}\n\n@media (min-width: 600px) {\n    .mdc-snackbar--align-start {\n        left:24px;\n        right: initial;\n        bottom: 24px;\n        transform: translate(0,200%)\n    }\n\n    .mdc-snackbar--align-start[dir=rtl],[dir=rtl] .mdc-snackbar--align-start {\n        left: initial;\n        right: 24px\n    }\n}\n\n@media (max-width: 599px) {\n    .mdc-snackbar--align-start {\n        bottom:0;\n        left: 0;\n        width: 100%;\n        transform: translate(0,100%)\n    }\n}\n\n.mdc-snackbar--active {\n    transform: translate(0);\n    transition: transform .25s 0s cubic-bezier(0,0,.2,1);\n    pointer-events: auto\n}\n\n.mdc-snackbar--active:not(.mdc-snackbar--align-start) {\n    transform: translate(-50%,0)\n}\n\n@media (max-width: 599px) {\n    .mdc-snackbar--active:not(.mdc-snackbar--align-start) {\n        bottom:0;\n        left: 0;\n        width: 100%;\n        transform: translate(0)\n    }\n}\n\n.mdc-snackbar__action-wrapper {\n    padding-left: 24px;\n    padding-right: 0\n}\n\n.mdc-snackbar__action-wrapper[dir=rtl],[dir=rtl] .mdc-snackbar__action-wrapper {\n    padding-left: 0;\n    padding-right: 24px\n}\n\n.mdc-snackbar--action-on-bottom {\n    -ms-flex-direction: column;\n    flex-direction: column\n}\n\n.mdc-snackbar__text {\n    font-family: Roboto,sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: .875rem;\n    line-height: 1.25rem;\n    font-weight: 400;\n    letter-spacing: .04em;\n    text-decoration: inherit;\n    text-transform: inherit;\n    margin-left: 0;\n    margin-right: auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    height: 48px;\n    transition: opacity .3s 0s cubic-bezier(.4,0,1,1);\n    opacity: 0;\n    color: #fff\n}\n\n@media screen and (min-width: 921px) {\n    .multi-up--2 .tile .ratio--1x1,.multi-up--2 .tile .tile__image--1x1 {\n        display:block\n    }\n\n    .multi-up--2 .tile .lazy-wrapper:not(.ratio--1x1),.multi-up--2 .tile .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n\n    .multi-up--2.multi-up--hero .tile:nth-child(1) .ratio--2x1,.multi-up--2.multi-up--hero .tile:nth-child(1) .tile__image--2x1 {\n        display: block\n    }\n\n    .multi-up--2.multi-up--hero .tile:nth-child(1) .lazy-wrapper:not(.ratio--2x1),.multi-up--2.multi-up--hero .tile:nth-child(1) .tile__image:not(.tile__image--2x1) {\n        display: none\n    }\n}\n\n@media screen and (min-width: 921px) {\n    .multi-up--3 .tile:nth-child(1) .ratio--1x1,.multi-up--3 .tile:nth-child(1) .tile__image--1x1,.multi-up--3 .tile:nth-child(2) .ratio--1x1,.multi-up--3 .tile:nth-child(2) .tile__image--1x1 {\n        display:block\n    }\n\n    .multi-up--3 .tile:nth-child(1) .lazy-wrapper:not(.ratio--1x1),.multi-up--3 .tile:nth-child(1) .tile__image:not(.tile__image--1x1),.multi-up--3 .tile:nth-child(2) .lazy-wrapper:not(.ratio--1x1),.multi-up--3 .tile:nth-child(2) .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n\n    .multi-up--3.multi-up--hero .tile:nth-child(1n) {\n        -ms-flex-preferred-size: 33.333%;\n        flex-basis: 33.333%;\n        max-width: 33.333%\n    }\n\n    .multi-up--3.multi-up--hero .tile:nth-child(1n) .ratio--1x1,.multi-up--3.multi-up--hero .tile:nth-child(1n) .tile__image--1x1 {\n        display: block\n    }\n\n    .multi-up--3.multi-up--hero .tile:nth-child(1n) .lazy-wrapper:not(.ratio--1x1),.multi-up--3.multi-up--hero .tile:nth-child(1n) .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n}\n\n@media screen and (min-width: 921px) {\n    .multi-up--4 .tile:nth-child(even) .ratio--1x1,.multi-up--4 .tile:nth-child(even) .tile__image--1x1 {\n        display:block\n    }\n\n    .multi-up--4 .tile:nth-child(even) .lazy-wrapper:not(.ratio--1x1),.multi-up--4 .tile:nth-child(even) .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n}\n\n.multi-up--5>.tile:nth-child(2) {\n    margin-bottom: 0\n}\n\n@media screen and (min-width: 521px) and (max-width:920px) {\n    .multi-up--5>.tile:nth-child(1) {\n        -ms-flex-preferred-size:100%;\n        flex-basis: 100%;\n        max-width: 100%\n    }\n\n    .multi-up--5:not([class*='multi-up--5 multi-up--'])>.tile:nth-child(2) {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n        max-width: 100%;\n        padding: 0\n    }\n\n    .multi-up--5>.tile:nth-child(2)>.tile {\n        -ms-flex: 1 1 50%;\n        flex: 1 1 50%;\n        padding: 0 20px\n    }\n}\n\n@media screen and (min-width: 921px) {\n    .multi-up--5>.tile:nth-child(1) .ratio--1x1,.multi-up--5>.tile:nth-child(1) .tile__image--1x1,.multi-up--5>.tile:nth-child(4) .ratio--1x1,.multi-up--5>.tile:nth-child(4) .tile__image--1x1 {\n        display:block\n    }\n\n    .multi-up--5>.tile:nth-child(1) .lazy-wrapper:not(.ratio--1x1),.multi-up--5>.tile:nth-child(1) .tile__image:not(.tile__image--1x1),.multi-up--5>.tile:nth-child(4) .lazy-wrapper:not(.ratio--1x1),.multi-up--5>.tile:nth-child(4) .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n\n    .multi-up--5.multi-up--hero>.tile:nth-child(1n) {\n        -ms-flex-preferred-size: 33.333%;\n        flex-basis: 33.333%;\n        max-width: 33.333%\n    }\n\n    .multi-up--5.multi-up--hero>.tile:nth-child(1n) .ratio--1x1,.multi-up--5.multi-up--hero>.tile:nth-child(1n) .tile__image--1x1 {\n        display: block\n    }\n\n    .multi-up--5.multi-up--hero>.tile:nth-child(1n) .lazy-wrapper:not(.ratio--1x1),.multi-up--5.multi-up--hero>.tile:nth-child(1n) .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n}\n\n@media screen and (min-width: 921px) {\n    .multi-up.multi-up--max .tile {\n        -ms-flex-preferred-size:33.333%;\n        flex-basis: 33.333%;\n        max-width: 33.333%\n    }\n\n    .multi-up.multi-up--max .tile .ratio--1x1,.multi-up.multi-up--max .tile .tile__image--1x1 {\n        display: block\n    }\n\n    .multi-up.multi-up--max .tile .lazy-wrapper:not(.ratio--1x1),.multi-up.multi-up--max .tile .tile__image:not(.tile__image--1x1) {\n        display: none\n    }\n}\n\n.multi-up--1.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--1.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--2.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--2.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--3.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--3.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--4.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--4.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--5.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--5.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--max.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--max.multi-up--slim .tile:nth-child(1n) .tile__image--2x1 {\n    display: block\n}\n\n.multi-up--1.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--1.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--2.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--2.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--3.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--3.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--4.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--4.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--5.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--5.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--max.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--max.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1) {\n    display: none\n}\n\n@media screen and (min-width: 521px) and (max-width:920px) {\n    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {\n        -ms-flex-preferred-size:50%;\n        flex-basis: 50%;\n        max-width: 50%\n    }\n}\n\n@media screen and (min-width: 921px) {\n    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {\n        -ms-flex-preferred-size:33.333%;\n        flex-basis: 33.333%;\n        max-width: 33.333%\n    }\n}\n\n.tooltip {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 22px;\n    text-align: center\n}\n\n.tooltip--large {\n    font-size: 14px;\n    line-height: 14px\n}\n\n.tooltip {\n    background: rgba(95,99,104,.9);\n    border-radius: 2px;\n    color: #fff;\n    display: inline-block;\n    height: 22px;\n    left: -500px;\n    max-width: 170px;\n    padding-right: 8px;\n    padding-left: 8px;\n    position: fixed;\n    top: -500px;\n    transform-origin: top center;\n    transform: scale(0);\n    z-index: 3\n}\n\n@media screen and (min-width: 921px) {\n    .section__container {\n        -ms-flex:1 1 auto;\n        flex: 1 1 auto;\n        margin: 0 720px 0 0;\n        max-width: none;\n        min-width: 536px;\n        padding: 0 5%;\n        position: relative;\n        width: auto\n    }\n\n    .section--odd .section__container {\n        margin: 0 0 0 720px\n    }\n}\n\n@media screen and (min-width: 1545px) {\n    .section__container {\n        margin-right:880px\n    }\n\n    .section--odd .section__container {\n        margin: 0 0 0 880px\n    }\n}\n",w="\n    div{color:red;foo}\n    /* Hello, World! */\n    @media screen {\n        article {\n            display: flex;\n        }\n    }\n",v="html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}",k=function(n){function e(){var n,t;Object(o.a)(this,e);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(l)))).state={isLarge:!1,main:w,mainCount:0,comparisonPreserved:"",comparisonMachine:"",comparisonPretty:"",surgery:v},t.comparisonRef=a.a.createRef(),t.onCleanClick=function(){t.setState({main:"",mainCount:t.state.mainCount+1})},t.onLargeClick=function(){t.setState({isLarge:!0,main:_,mainCount:t.state.mainCount+1})},t.onComparisonStyleEditorChange=function(n){t.setState({comparisonPreserved:n[0],comparisonMachine:JSON.stringify(n[1],null,4),comparisonPretty:n[2]})},t.onSurgeryTextareaChange=function(n){t.setState({surgery:n.currentTarget.value})},t.onSurgeryStyleEditorChange=function(n){console.log("payload:",n),t.setState({surgery:n})},t}return Object(c.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){var n=this.props.classes,e=this.state,t=e.isLarge,i=e.main,l=e.mainCount,r=e.comparisonPreserved,o=e.comparisonMachine,m=e.comparisonPretty,s=e.surgery;return a.a.createElement("div",{className:n.root},a.a.createElement("div",{className:Object(y.a)(n.masthead,n.container)},a.a.createElement("iframe",{className:n.stars,title:"GitHub",src:"https://ghbtns.com/github-btn.html?user=Aurelain&repo=react-style-editor&type=star&count=true&size=large"}),a.a.createElement(g.a,{variant:"h2",gutterBottom:!0},"React Style Editor"),a.a.createElement(g.a,{variant:"subtitle1"},"A React component that displays and edits CSS, similar to the browser's DevTools.")),a.a.createElement("section",{className:n.main},a.a.createElement("div",{className:n.container},a.a.createElement(g.a,null,"You can type, copy or paste CSS here:"),a.a.createElement(p.a,{className:Object(y.a)(n.styleEditor,t&&n.isLarge),defaultValue:i,key:l}),a.a.createElement(f.a,{variant:"contained",onClick:this.onCleanClick},"Clean")," ",a.a.createElement(f.a,{variant:"contained",onClick:this.onLargeClick},"Use a large sample"))),a.a.createElement("div",{className:Object(y.a)(n.features,n.container)},a.a.createElement(g.a,{variant:"h4",gutterBottom:!0},"Features"),a.a.createElement("ul",null,a.a.createElement("li",null,"Parses any CSS string and formats it in a familiar fashion"),a.a.createElement("li",null,"Validates each rule and each declaration using the browsers's own engine"),a.a.createElement("li",null,"Facilitates commenting the CSS code through checkbox toggling"),a.a.createElement("li",null,"Allows easy additions by clicking next to the desired location"),a.a.createElement("li",null,"Has no dependencies (other than React)"),a.a.createElement("li",null,"Is tiny (< 10 KB minified)"),a.a.createElement("li",null,"Is customizable through classes"),a.a.createElement("li",null,"Offers 3 output formats:"),a.a.createElement("ul",null,a.a.createElement("li",null,"the code with preserved formatting"),a.a.createElement("li",null,"a machine-friendly model of the code (recursive array of objects)"),a.a.createElement("li",null,"the prettified code")))),a.a.createElement("div",{className:Object(y.a)(n.example1,n.container)},a.a.createElement(g.a,{variant:"h4",gutterBottom:!0},"Example: Output formats"),"Change the code in the StyleEditor to compare the different outputs received by",a.a.createElement("code",null,"onChange"),".",a.a.createElement("br",null),"The original input was ",a.a.createElement("code",null,"div{color:red;foo"),".",a.a.createElement("table",{className:n.table},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"StyleEditor"),a.a.createElement("th",null,"Format ",a.a.createElement("code",null,"preserved")),a.a.createElement("th",null,"Format ",a.a.createElement("code",null,"machine")),a.a.createElement("th",null,"Format ",a.a.createElement("code",null,"pretty")))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(p.a,{ref:this.comparisonRef,className:n.comparisonStyleEditor,defaultValue:"div{color:red;foo",onChange:this.onComparisonStyleEditorChange,outputFormats:"preserved,machine,pretty"})),a.a.createElement("td",null,a.a.createElement("textarea",{className:n.comparisonTextarea,value:r,readOnly:!0})),a.a.createElement("td",null,a.a.createElement("textarea",{className:n.comparisonTextarea,value:o,readOnly:!0})),a.a.createElement("td",null,a.a.createElement("textarea",{className:n.comparisonTextarea,value:m,readOnly:!0})))))),a.a.createElement("div",{className:Object(y.a)(n.exampleSurgery,n.container)},a.a.createElement(g.a,{variant:"h4",gutterBottom:!0},"Example: Surgery of minified code"),"Change anything in either of the two sides (they are synchronized):",a.a.createElement("table",{className:n.table},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Minified code"),a.a.createElement("th",null,"StyleEditor"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("textarea",{className:n.surgeryTextarea,value:s,onChange:this.onSurgeryTextareaChange})),a.a.createElement("td",null,a.a.createElement(p.a,{className:n.surgeryStyleEditor,value:s,onChange:this.onSurgeryStyleEditorChange,outputFormats:"preserved"})))))),a.a.createElement("div",{className:n.container},a.a.createElement(g.a,{variant:"h4",gutterBottom:!0},"Documentation"),"The API is described in the ",a.a.createElement("a",{href:"https://github.com/Aurelain/react-style-editor"},"repository"),"."))}},{key:"componentDidMount",value:function(){this.comparisonRef.current.announceOnChange("div{color:red;foo")}}]),e}(a.a.PureComponent),E=Object(b.a)({"@global":{html:{fontFamily:"Roboto, sans-serif",fontVariantLigatures:"none"},body:{margin:0},code:{fontFamily:"Consolas, Liberation Mono, Menlo, monospace",backgroundColor:"rgba(27,31,35,.05)",borderRadius:3,fontSize:"85%",margin:0,padding:".2em .4em"}},root:{paddingBottom:64},container:{paddingTop:32,padding:"32px 8px 0 8px",maxWidth:950,margin:"auto"},masthead:{position:"relative"},main:{background:"#b3e5fc",marginTop:32,textAlign:"center",paddingBottom:32},styleEditor:{background:"white",width:320,height:240,maxWidth:"100%",overflow:"scroll",resize:"both",margin:"8px auto 16px auto"},isLarge:{width:"100%"},stars:{float:"right",width:160,height:30,border:"none",overflow:"hidden"},comparisonStyleEditor:{height:240,border:"none !important"},comparisonTextarea:{width:"100%",height:240,whiteSpace:"pre",wordBreak:"break-all",border:"none",resize:"none","&:focus-visible":{outlineWidth:0}},table:{marginTop:16,width:"100%",borderCollapse:"collapse",tableLayout:"fixed","& th":{fontWeight:500,textAlign:"left"},"& th, & td":{width:"50%",padding:8,borderLeft:"solid 1px silver","&:first-child":{border:"none"}}},exampleSurgery:{marginTop:32},surgeryTextarea:{width:"100%",height:240,whiteSpace:"pre-wrap",wordBreak:"break-all",border:"none",resize:"none"},surgeryStyleEditor:{height:240,border:"none !important"}})(k);r.a.render(a.a.createElement(E,null),document.getElementById("root"))},91:function(n,e,t){n.exports=t(200)}},[[91,1,2]]]);