# Week 2

Ejercicios semana 2

## Configuracion

- .editorconfig
- .gitignore
- package.json (Add prettier "Single quote")
- Instalar dependencias `npm i`
- crear repo `git init`
- Install Eslint `npm i -D eslint`
- configuracion del eslint `npx eslint --init`
- Añado configuracion eslint prettier `npm i --save -D eslint-config-prettier``
- Añado en eslint.json "prettier" como ultima extension

## jest install / setup

- `npm i -D jest @types/jest @babel/plugin-transform-modules-commonjs ` (Para instalar jest,los tipos matches, y para que jest trabaje con los modulos).

- En eslint env, seteamos

```json
  "env":{
    "jest":true
  };
```

- Em jsconfig.json

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

- En package.json

```json
"babel": {
    "env": {
      "test": {
        "plugins": [
          "@babel/plugin-transform-modules-commonjs"
        ]
      }
    }
  }
```
