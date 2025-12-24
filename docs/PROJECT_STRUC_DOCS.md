# Documentação do Projeto

> Gerado automaticamente em 22/12/2025 17:07:09
> Caminho documentado: `C:\Users\user\Documents\GitHub\Wizped`

## Estrutura de Arquivos

```text
Wizped
+--- .env
+--- .github
|    +--- agents
|    |    \--- electron-architect.agent.md
|    +--- copilot-instructions.md
|    +--- prompts
|    |    +--- scaffold-feature.prompt.md
|    |    +--- verify-project.prompt.md
|    |    \--- view-project-tree.prompt.md
|    \--- workflows
|         \--- security-audit.yml
+--- .gitignore
+--- .husky
|    +--- _
|    |    +--- .gitignore
|    |    +--- applypatch-msg
|    |    +--- commit-msg
|    |    +--- h
|    |    +--- husky.sh
|    |    +--- post-applypatch
|    |    +--- post-checkout
|    |    +--- post-commit
|    |    +--- post-merge
|    |    +--- post-rewrite
|    |    +--- pre-applypatch
|    |    +--- pre-auto-gc
|    |    +--- pre-commit
|    |    +--- pre-merge-commit
|    |    +--- pre-push
|    |    +--- pre-rebase
|    |    \--- prepare-commit-msg
|    +--- commit-msg
|    \--- pre-commit
+--- .lintstagedrc.mjs
+--- .template
|    +--- SECURITY.md
|    \--- shadcn_guide
|         +--- components_db
|         |    +--- Accordion.md
|         |    +--- Alert.md
|         |    +--- Alert_Dialog.md
|         |    +--- Aspect_Ratio.md
|         |    +--- Avatar.md
|         |    +--- Badge.md
|         |    +--- Breadcrumb.md
|         |    +--- Button.md
|         |    +--- Button_Group.md
|         |    +--- Calendar.md
|         |    +--- Card.md
|         |    +--- Carousel.md
|         |    +--- Chart.md
|         |    +--- Checkbox.md
|         |    +--- Collapsible.md
|         |    +--- Combobox.md
|         |    +--- Command.md
|         |    +--- Components_General.md
|         |    +--- Context_Menu.md
|         |    +--- Data_Table.md
|         |    +--- Date_Picker.md
|         |    +--- Dialog.md
|         |    +--- Drawer.md
|         |    +--- Dropdown_Menu.md
|         |    +--- Empty.md
|         |    +--- Field.md
|         |    +--- Form.md
|         |    +--- Hover_Card.md
|         |    +--- Input.md
|         |    +--- Input_Group.md
|         |    +--- Input_OTP.md
|         |    +--- Item.md
|         |    +--- Kbd.md
|         |    +--- Label.md
|         |    +--- Menubar.md
|         |    +--- Native_Select.md
|         |    +--- Navigation_Menu.md
|         |    +--- Pagination.md
|         |    +--- Popover.md
|         |    +--- Progress.md
|         |    +--- Radio_Group.md
|         |    +--- Resizable.md
|         |    +--- Scroll_Area.md
|         |    +--- Select.md
|         |    +--- Separator.md
|         |    +--- Sheet.md
|         |    +--- Sidebar.md
|         |    +--- Skeleton.md
|         |    +--- Slider.md
|         |    +--- Sonner.md
|         |    +--- Spinner.md
|         |    +--- Switch.md
|         |    +--- Table.md
|         |    +--- Tabs.md
|         |    +--- Textarea.md
|         |    +--- Toast.md
|         |    +--- Toggle.md
|         |    +--- Toggle_Group.md
|         |    +--- Tooltip.md
|         |    \--- Typography.md.txt
|         +--- get_started
|         |    +--- Blocks.md
|         |    +--- JavaScript_shadcn.md
|         |    +--- Monorepo.md
|         |    +--- React_Hook_Form.md
|         |    +--- React_Hook_Forms.md
|         |    +--- Shadcn_Darkmode_Vite.md
|         |    +--- Theming.md
|         |    +--- components.json.md
|         |    \--- shadcn_cli.md
|         +--- llms.txt
|         \--- registry
|              +--- Add_a_Registry.txt
|              +--- Authentication.txt
|              +--- Examples.txt
|              +--- MCP_Server.txt
|              +--- Namespaces.txt
|              +--- registry-item.json.txt
|              \--- registry.json.txt
+--- README.md
+--- Wizped.code-workspace
+--- commitlint.config.mjs
+--- components.json
+--- dev.bat
+--- doc.bat
+--- docs
|    +--- README.md
|    +--- TURSO_GUIDELINES.md
|    +--- app_wizped_claro_mirageblaze.png
|    +--- app_wizped_claro_moderncontrast.png
|    +--- app_wizped_claro_tropical.png
|    +--- palette_bold_high_contrast_midnight_kimchi.png
|    +--- palette_elegant_black_gold_navy.png
|    +--- palette_minimalist_mirage_blaze_orange.png
|    +--- palette_modern_contrast_orange_blue.png
|    +--- palette_monochromatic_blue_gradient.png
|    +--- palette_sunset_dusk_navy_coral.png
|    +--- palette_vibrant_tropical_rainbow.png
|    +--- ui_app_document_management_system.jpg
|    +--- ui_dashboard_moonrow_analytics_clean.jpg
|    +--- ui_dashboard_useably_management_purple.jpg
|    +--- ui_platform_talent_assessment_builder.jpg
|    +--- ui_sidebar_integration_variants_multistyle.jpg
|    \--- ui_sidebar_pointsale_minimalist_white.jpg
+--- drizzle.config.ts
+--- electron
|    +--- main
|    |    +--- database
|    |    |    +--- client.ts
|    |    |    +--- migrations
|    |    |    |    +--- 0000_chunky_adam_warlock.sql
|    |    |    |    \--- meta
|    |    |    |         +--- 0000_snapshot.json
|    |    |    |         \--- _journal.json
|    |    |    \--- schema.ts
|    |    +--- index.ts
|    |    \--- ipc
|    |         +--- handlers
|    |         |    +--- estudantes.handlers.ts
|    |         |    \--- users.handlers.ts
|    |         \--- index.ts
|    \--- preload
|         \--- index.ts
+--- electron-builder.yml
+--- electron.vite.config.ts
+--- eslint.config.mjs
+--- index.html
+--- package.json
+--- plop-templates
|    +--- component
|    |    +--- component.tsx.hbs
|    |    \--- index.ts.hbs
|    +--- feature
|    |    +--- handler.ts.hbs
|    |    +--- index.ts.hbs
|    |    +--- schema.ts.hbs
|    |    +--- service.ts.hbs
|    |    +--- store.ts.hbs
|    |    \--- types.ts.hbs
|    \--- store
|         \--- store.ts.hbs
+--- plopfile.mjs
+--- postcss.config.mjs
+--- prettier.config.mjs
+--- scripts
|    +--- check-students-table.js
|    +--- clear-migrations.js
|    +--- doc_project.py
|    +--- generate-theme.ts
|    \--- log_lint.ps1
+--- src
|    +--- App.tsx
|    +--- app
|    |    +--- components
|    |    |    +--- AppSidebar.tsx
|    |    |    \--- team-switcher.tsx
|    |    +--- layouts
|    |    |    \--- RootLayout.tsx
|    |    +--- providers
|    |    |    \--- ThemeProvider.tsx
|    |    \--- router
|    |         \--- index.tsx
|    +--- features
|    |    +--- dashboard
|    |    |    +--- components
|    |    |    |    \--- DashboardPage.tsx
|    |    |    \--- index.ts
|    |    +--- estudantes
|    |    |    +--- components
|    |    |    |    +--- .gitkeep
|    |    |    |    +--- EstudantesPage.tsx
|    |    |    |    +--- StudentForm.tsx
|    |    |    |    \--- StudentList.tsx
|    |    |    +--- hooks
|    |    |    |    \--- .gitkeep
|    |    |    +--- index.ts
|    |    |    +--- schemas
|    |    |    |    +--- estudantes.schema.ts
|    |    |    |    \--- student.schema.ts
|    |    |    +--- services
|    |    |    |    \--- estudantes.service.ts
|    |    |    \--- stores
|    |    |         \--- estudantes.store.ts
|    |    +--- settings
|    |    |    \--- components
|    |    |         \--- SettingsPage.tsx
|    |    \--- users
|    |         +--- components
|    |         |    +--- UserForm.tsx
|    |         |    +--- UserList.tsx
|    |         |    \--- UsersPage.tsx
|    |         +--- index.ts
|    |         +--- schemas
|    |         |    \--- user.schema.ts
|    |         +--- services
|    |         |    +--- user.service.ts
|    |         |    \--- users.service.ts
|    |         \--- stores
|    |              +--- user.store.ts
|    |              \--- users.store.ts
|    +--- index.css
|    +--- main.tsx
|    +--- shared
|    |    +--- components
|    |    |    +--- chart-area-interactive.tsx
|    |    |    +--- data-table.tsx
|    |    |    +--- layout
|    |    |    |    \--- page-layout.tsx
|    |    |    +--- nav-documents.tsx
|    |    |    +--- nav-main.tsx
|    |    |    +--- nav-secondary.tsx
|    |    |    +--- nav-user.tsx
|    |    |    +--- section-cards.tsx
|    |    |    +--- site-header.tsx
|    |    |    +--- theme-switcher.tsx
|    |    |    \--- ui
|    |    |         +--- avatar.tsx
|    |    |         +--- badge.tsx
|    |    |         +--- breadcrumb.tsx
|    |    |         +--- button.tsx
|    |    |         +--- card.tsx
|    |    |         +--- chart.tsx
|    |    |         +--- checkbox.tsx
|    |    |         +--- collapsible.tsx
|    |    |         +--- dialog.tsx
|    |    |         +--- drawer.tsx
|    |    |         +--- dropdown-menu.tsx
|    |    |         +--- form.tsx
|    |    |         +--- input.tsx
|    |    |         +--- label.tsx
|    |    |         +--- select.tsx
|    |    |         +--- separator.tsx
|    |    |         +--- sheet.tsx
|    |    |         +--- sidebar.tsx
|    |    |         +--- skeleton.tsx
|    |    |         +--- sonner.tsx
|    |    |         +--- table.tsx
|    |    |         +--- tabs.tsx
|    |    |         +--- textarea.tsx
|    |    |         +--- toggle-group.tsx
|    |    |         +--- toggle.tsx
|    |    |         \--- tooltip.tsx
|    |    +--- hooks
|    |    |    \--- .gitkeep
|    |    +--- lib
|    |    |    \--- utils.ts
|    |    +--- schemas
|    |    |    \--- .gitkeep
|    |    +--- stores
|    |    |    +--- .gitkeep
|    |    |    +--- layout.store.ts
|    |    |    \--- theme.store.ts
|    |    \--- types
|    |         +--- .gitkeep
|    |         \--- ipc.ts
|    \--- styles
|         \--- themes.css
+--- tailwind.config.js
+--- tsconfig.json
+--- tsconfig.node.json
+--- tsconfig.preload.json
\--- tsconfig.web.json
```

## Conteúdo dos Arquivos

## .env

```
TURSO_DATABASE_URL="libsql://wizped-db-vitor-rs.aws-us-east-1.turso.io"
TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NjY0MzUzMTAsImlkIjoiODI4ZGRiOWEtNjMyNy00YmRmLThiZmItZTQ2ZGY4MjRmOTU1IiwicmlkIjoiYzI0OTc0MzEtNjUzMC00YTI1LTllNzctNzA5OGI3NjI2OTc3In0.BcADOARrlupm00RDknxNe4--jHNhXOiTngExEAuYE68_ksIeWzfiIY9Q9Z9mU6HEkJ7Kg9CtYVw97TZX1SiNDQ"

```

## .gitignore

```
node_modules
dist
out
*.log
*.db
*.db-*
.env
.env.local
.DS_Store
Thumbs.db

```

## .lintstagedrc.mjs

```mjs
export default {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,css}': ['prettier --write'],
}
```

## README.md

````markdown
> [!IMPORTANT]
> **If you are on Windows and troubleshooting:**
> If `npm run dev` fails with "Cannot read properties of undefined (reading 'whenReady')" or similar errors, check if you have `ELECTRON_RUN_AS_NODE` environment variable set.
> The `npm run dev` script is configured to use `dev.bat` which automatically clears this variable.

## Project Structure

- `electron/`: Main process and Preload scripts
- `src/`: Renderer process (React)
- `src/features/`: Feature-based architecture
- `dev.bat`: Helper script for Windows development environment

## Getting Started

```bash
npm install
npm run dev
```
````

## Database

The project uses `better-sqlite3` with `drizzle-orm`. The database file is stored in `userData`.

````

## Wizped.code-workspace

```code-workspace
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "typescript.enablePromptUseWorkspaceTsdk": true,
    "typescript.tsdk": "node_modules/typescript/lib",
    "files.associations": {
      "*.css": "tailwindcss"
    },
    "tailwindCSS.experimental.classRegex": [
      ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
      ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
      ["clsx\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    ],
    "editor.quickSuggestions": {
      "strings": true
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "search.exclude": {
      "**/node_modules": true,
      "**/dist": true,
      "**/out": true
    },
    "files.exclude": {
      "**/.git": true,
      "**/node_modules": true,
      "**/dist": true,
      "**/out": true
    }
  },
  "extensions": {
    "recommendations": [
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "bradlc.vscode-tailwindcss",
      "ms-vscode.vscode-typescript-next",
      "formulahendry.auto-rename-tag",
      "christian-kohler.path-intellisense",
      "usernamehw.errorlens",
      "miguelsolorio.fluent-icons"
    ]
  },
  "launch": {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Debug Main Process",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceFolder}",
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron-vite",
        "windows": {
          "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron-vite.cmd"
        },
        "runtimeArgs": ["--sourcemap"],
        "env": {
          "REMOTE_DEBUGGING_PORT": "9222"
        }
      },
      {
        "name": "Debug Renderer Process",
        "type": "chrome",
        "request": "attach",
        "port": 9222,
        "webRoot": "${workspaceFolder}/src",
        "timeout": 60000
      }
    ],
    "compounds": [
      {
        "name": "Debug All",
        "configurations": ["Debug Main Process", "Debug Renderer Process"]
      }
    ]
  }
}

````

## commitlint.config.mjs

```mjs
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // nova feature
        'fix', // correção de bug
        'docs', // documentação
        'style', // formatação (não afeta lógica)
        'refactor', // refatoração
        'perf', // performance
        'test', // testes
        'build', // build system
        'ci', // CI/CD
        'chore', // manutenção
        'revert', // reverter commit
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 100],
  },
}
```

## components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/shared/components",
    "utils": "@/shared/lib/utils",
    "ui": "@/shared/components/ui",
    "lib": "@/shared/lib",
    "hooks": "@/shared/hooks"
  },
  "iconLibrary": "lucide"
}
```

## dev.bat

```batch
@echo off
set "ELECTRON_RUN_AS_NODE="
call ./node_modules/.bin/electron-vite.cmd dev

```

## doc.bat

```batch
@echo off
python "%~dp0scripts\doc_project.py" %*
```

## drizzle.config.ts

```typescript
import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

// Carrega variáveis do arquivo .env
dotenv.config({ quiet: true })

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = process.env

if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
  throw new Error('❌ Credenciais do Turso não encontradas no .env')
}

export default defineConfig({
  schema: './electron/main/database/schema.ts',
  out: './electron/main/database/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
  },
})
```

## electron-builder.yml

```yaml
appId: com.wizped.app
productName: Wizped
directories:
  buildResources: resources
  output: dist

# Security: Enable ASAR archive
asar: true

# Auto-update: GitHub Releases configuration
# Uncomment and configure when ready to publish
# publish:
#   provider: github
#   owner: YOUR_GITHUB_USERNAME
#   repo: YOUR_REPO_NAME
#   releaseType: release
files:
  - '!**/.vscode/*'
  - '!src/*'
  - '!electron.vite.config.*'
  - '!{.eslintignore,.eslintrc.cjs,.prettierignore,.prettierrc.yaml,dev-app-update.yml,CHANGELOG.md,README.md}'
  - '!{.env,.env.*,.npmrc,pnpm-lock.yaml}'
  - '!{tsconfig.json,tsconfig.node.json,tsconfig.web.json}'
asarUnpack:
  - resources/**
  - '**/*.node'
win:
  executableName: wizped
  target:
    - target: nsis
      arch:
        - x64
nsis:
  artifactName: ${name}-${version}-setup.${ext}
  shortcutName: ${productName}
  uninstallDisplayName: ${productName}
  createDesktopShortcut: always
mac:
  target:
    - target: dmg
      arch:
        - x64
        - arm64
linux:
  target:
    - target: AppImage
      arch:
        - x64
extraResources:
  - from: './resources/'
    to: 'resources'
    filter:
      - '**/*'
```

## electron.vite.config.ts

```typescript
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'electron/main/index.ts'),
      },
      rollupOptions: {
        external: ['better-sqlite3'],
      },
    },
    resolve: {
      alias: {
        '@main': resolve(__dirname, 'electron/main'),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'electron/preload/index.ts'),
      },
    },
    resolve: {
      alias: {
        '@preload': resolve(__dirname, 'electron/preload'),
      },
    },
  },
  renderer: {
    root: '.',
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@shared': resolve(__dirname, 'src/shared'),
        '@features': resolve(__dirname, 'src/features'),
      },
    },
    plugins: [react()],
  },
})
```

## eslint.config.mjs

```mjs
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import unicorn from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'out/**',
      'node_modules/**',
      '.git/**',
      'drizzle/**/*.sql',
      '*.config.mjs',
      'plopfile.mjs',
    ],
  },

  // Base configuration
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // TypeScript parser options for all TS files
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // JS/Config files overrides
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // React configuration
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/shared/components/ui/**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off',
    },
  },

  // shadcn/ui components - allow exporting variants alongside components
  {
    files: ['src/shared/components/ui/**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
    },
  },

  // Node.js / Electron main process
  // Node.js / Electron main process
  {
    files: ['electron/**/*.ts', '**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Unicorn rules
  {
    plugins: { unicorn },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
    },
  },

  // Custom rules
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },

  // Disable rules that conflict with Prettier
  prettier,
]
```

## index.html

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';"
    />
    <title>Wizped</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## package.json

```json
{
  "name": "wizped",
  "version": "1.0.0",
  "description": "Electron + React + TypeScript template",
  "main": "./out/main/index.js",
  "author": "Vitor",
  "license": "MIT",
  "scripts": {
    "dev": "dev.bat",
    "build": "electron-vite build",
    "preview": "electron-vite preview",
    "postinstall": "electron-builder install-app-deps",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit -p tsconfig.json --composite false",
    "doc": "python ./scripts/doc_project.py",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "prepare": "husky",
    "generate": "plop",
    "security:audit": "npm audit --audit-level=high",
    "security:check": "npm run lint && npm run typecheck && npm audit --audit-level=moderate",
    "theme:update": "ts-node --esm ./scripts/generate-theme.ts"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/modifiers": "^9.0.0",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@hookform/resolvers": "^5.2.2",
    "@libsql/client": "^0.15.15",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tabler/icons-react": "^3.36.0",
    "@tanstack/react-table": "^8.21.3",
    "better-sqlite3": "^11.3.0",
    "clsx": "^2.1.1",
    "colord": "^2.9.3",
    "dotenv": "^17.2.3",
    "drizzle-orm": "^0.33.0",
    "lucide-react": "^0.441.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.68.0",
    "react-router-dom": "^6.26.1",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^2.5.2",
    "vaul": "^1.1.2",
    "zod": "^3.25.76",
    "zustand": "^4.5.5"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.4.1",
    "@commitlint/config-conventional": "^19.4.1",
    "@electron-toolkit/preload": "^3.0.1",
    "@electron-toolkit/tsconfig": "^1.0.1",
    "@electron-toolkit/utils": "^3.0.0",
    "@types/better-sqlite3": "^7.6.11",
    "@types/eslint-config-prettier": "^6.11.3",
    "@types/node": "^20.14.8",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.22",
    "class-variance-authority": "^0.7.1",
    "cross-env": "^10.1.0",
    "drizzle-kit": "^0.24.0",
    "electron": "^31.0.2",
    "electron-builder": "^24.13.3",
    "electron-vite": "^2.3.0",
    "eslint": "^9.9.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "eslint-plugin-unicorn": "^62.0.0",
    "globals": "^16.5.0",
    "husky": "^9.1.5",
    "lint-staged": "^15.2.10",
    "plop": "^4.0.1",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.6",
    "tailwindcss": "^3.4.16",
    "tailwindcss-animate": "^1.0.7",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.4.0",
    "vite": "^5.4.2"
  }
}
```

## plopfile.mjs

```mjs
export default function (plop) {
  // Feature generator
  plop.setGenerator('feature', {
    description: 'Create a new feature module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name (kebab-case):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/feature/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/components/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/hooks/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/stores/{{kebabCase name}}.store.ts',
        templateFile: 'plop-templates/feature/store.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/schemas/{{kebabCase name}}.schema.ts',
        templateFile: 'plop-templates/feature/schema.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/services/{{kebabCase name}}.service.ts',
        templateFile: 'plop-templates/feature/service.ts.hbs',
      },
      /*
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/types/index.ts',
        templateFile: 'plop-templates/feature/types.ts.hbs',
      },
      */
      {
        type: 'add',
        path: 'electron/main/ipc/handlers/{{kebabCase name}}.handlers.ts',
        templateFile: 'plop-templates/feature/handler.ts.hbs',
      },
      function (answers) {
        return `
╔══════════════════════════════════════════════════════════════════╗
║  ✅ Feature "${answers.name}" created successfully!              ║
╠══════════════════════════════════════════════════════════════════╣
║  IMPORTANT: Complete the following steps manually:               ║
║                                                                  ║
║  1. Add IPC types in src/shared/types/ipc.ts                    ║
║  2. Register handler in electron/main/ipc/index.ts              ║
║  3. Update ALLOWED_CHANNELS in electron/preload/index.ts        ║
║  4. Register routes in src/app/router/index.tsx (if needed)     ║
║                                                                  ║
║  See docs/SECURITY.md for security guidelines.                  ║
╚══════════════════════════════════════════════════════════════════╝
`
      },
    ],
  })

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (leave empty for shared):',
      },
    ],
    actions: (data) => {
      const basePath = data.feature
        ? `src/features/${data.feature}/components`
        : 'src/shared/components'

      return [
        {
          type: 'add',
          path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/component/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/component/index.ts.hbs',
        },
      ]
    },
  })

  // Store generator
  plop.setGenerator('store', {
    description: 'Create a new Zustand store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Store name (kebab-case):',
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (leave empty for shared):',
      },
    ],
    actions: (data) => {
      const basePath = data.feature ? `src/features/${data.feature}/stores` : 'src/shared/stores'

      return [
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.store.ts`,
          templateFile: 'plop-templates/store/store.ts.hbs',
        },
      ]
    },
  })
}
```

## postcss.config.mjs

```mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## prettier.config.mjs

```mjs
/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'clsx', 'cva'],
}
```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["src/shared/*"],
      "@features/*": ["src/features/*"],
      "@main/*": ["electron/main/*"]
    }
  },
  "files": [],
  "references": [
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.web.json" },
    { "path": "./tsconfig.preload.json" }
  ]
}
```

## tsconfig.node.json

```json
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.node.json",
  "compilerOptions": {
    "composite": true,
    "allowSyntheticDefaultImports": true,
    "allowJs": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@main/*": ["electron/main/*"]
    }
  },
  "include": [
    "electron.vite.config.ts",
    "electron/main/**/*",
    "drizzle.config.ts",
    "tailwind.config.js",
    "eslint.config.mjs",
    "commitlint.config.mjs",
    "prettier.config.mjs",
    ".lintstagedrc.mjs",
    "scripts/**/*"
  ]
}
```

## tsconfig.preload.json

```json
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.node.json",
  "compilerOptions": {
    "composite": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@preload/*": ["electron/preload/*"],
      "@shared/*": ["src/shared/*"],
      "@main/*": ["electron/main/*"]
    }
  },
  "include": ["electron/preload/**/*", "src/shared/types/**/*"]
}
```

## tsconfig.web.json

```json
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.web.json",
  "compilerOptions": {
    "composite": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["src/shared/*"],
      "@features/*": ["src/features/*"],
      "@main/*": ["electron/main/*"]
    }
  },
  "include": [
    "src/**/*",
    "src/**/*.tsx",
    "electron/preload/**/*",
    "electron/main/database/schema.ts"
  ]
}
```

## .github\copilot-instructions.md

```markdown
# Instruções do Copilot (Wizped)

Você é um especialista em Electron + React seguindo a **Wizped Architecture**.
Sua Fonte da Verdade é `.agent/rules`.

## 🚨 Diretrizes Críticas

1. **LEIA O CÉREBRO**: Valide planos contra `.agent/rules/00-general.md`.
2. **Workflows**: Siga `.agent/rules/02-standards.md` para criar features.

## 🛠 Contexto (VS Code)

- **Ambiente**: VS Code.
- **Ferramentas**:
  - Nativas do VS Code (Terminal, Editor).
  - **Markitdown MCP**: Use para converter/ler formatos diversos se necessário.
  - **Atenção**: Você NÃO tem o MCP do Shadcn configurado (diferente do Antigravity). Use o guia local em `.template/shadcn_guide`.

  ## 🚨 Turso Database Rules

1. **Nomeclatura**: Tabela SEMPRE em Português se a Feature for em Português (`estudantes` > `students`).
2. **Conflitos**: Se migração falhar por tabela existente, considere `DROP` da incorreta ou `npm run db:push`.
```

## .github\agents\electron-architect.agent.md

```markdown
---
name: Electron Architect
description: Agente guardião da arquitetura Wizped
tools: ['read', 'execute', 'search', 'todo', 'edit', 'vscode']
---

# Electron Architect Agent

Sua missão é garantir a integridade do projeto seguindo `.agent/rules`.

## Referências Obrigatórias

- **Geral**: `.agent/rules/00-general.md`
- **Padrões & Workflows**: `.agent/rules/02-standards.md`
- **Segurança**: `.agent/rules/03-security.md`

## Workflows (Prompts)

- `/scaffold-feature`: Dispara a criação de feature (Baseado em `02-standards.md`).
- `/verify-project`: Verifica saúde do código.
- `/view-project-tree`: Visualiza estrutura.
-
```

## .github\prompts\scaffold-feature.prompt.md

```markdown
---
description: Create a new feature module obeying the project standards
agent: electron-architect
tools: ['execute', 'read_file']
---

# Scaffold Feature Workflow

**Referência**: Siga o "Feature Creation Workflow" definido em `.agent/rules/02-standards.md`.

**Passos Imediatos**:

1. Leia `.agent/rules/02-standards.md` para carregar o contexto.
2. Execute `npm run generate feature`.
3. Complete os passos manuais (IPC, Security) listados na regra.
```

## .github\prompts\verify-project.prompt.md

```markdown
---
description: Verify project health (Linting, Types, and Build)
agent: electron-architect
tools: ['execute']
---

# Verify Project Workflow

Execute as seguintes verificações de saúde do projeto:

1. Verifique o status do Git.
   Comando: `git status`

2. Execute o script de log de Lint/Prettier para capturar histórico de erros.
   Comando: `pwsh scripts/log_lint.ps1`

3. Execute o compilador TypeScript para verificar erros de tipo.
   Comando: `npm run typecheck`

4. Tente um build para garantir que a aplicação empacote corretamente.
   Comando: `npm run build`
```

## .github\prompts\view-project-tree.prompt.md

```markdown
---
description: Visualize the project file structure (excluding node_modules and docs)
agent: electron-architect
tools: ['execute']
---

# View Project Tree Workflow

1. Execute o script de árvore do projeto para visualizar a estrutura atual.
   Comando: `python scripts/tree_project.py`
```

## .github\workflows\security-audit.yml

```yaml
name: Security Audit

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    # Run weekly on Sunday at midnight
    - cron: '0 0 * * 0'
  workflow_dispatch:

jobs:
  security-audit:
    name: Security Audit
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high
        continue-on-error: true

      - name: Run ESLint
        run: npm run lint

      - name: Run TypeScript check
        run: npm run typecheck

  build-check:
    name: Build Check
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build
```

## .husky\commit-msg

```
npx --no -- commitlint --edit "$1"

```

## .husky\pre-commit

```
npx lint-staged

```

## .husky\_\.gitignore

```
*
```

## .husky\_\applypatch-msg

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\commit-msg

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\h

```
#!/usr/bin/env sh
[ "$HUSKY" = "2" ] && set -x
n=$(basename "$0")
s=$(dirname "$(dirname "$0")")/$n

[ ! -f "$s" ] && exit 0

if [ -f "$HOME/.huskyrc" ]; then
	echo "husky - '~/.huskyrc' is DEPRECATED, please move your code to ~/.config/husky/init.sh"
fi
i="${XDG_CONFIG_HOME:-$HOME/.config}/husky/init.sh"
[ -f "$i" ] && . "$i"

[ "${HUSKY-}" = "0" ] && exit 0

export PATH="node_modules/.bin:$PATH"
sh -e "$s" "$@"
c=$?

[ $c != 0 ] && echo "husky - $n script failed (code $c)"
[ $c = 127 ] && echo "husky - command not found in PATH=$PATH"
exit $c

```

## .husky\_\husky.sh

```bash
echo "husky - DEPRECATED

Please remove the following two lines from $0:

#!/usr/bin/env sh
. \"\$(dirname -- \"\$0\")/_/husky.sh\"

They WILL FAIL in v10.0.0
"
```

## .husky\_\post-applypatch

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\post-checkout

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\post-commit

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\post-merge

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\post-rewrite

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\pre-applypatch

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\pre-auto-gc

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\pre-commit

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\pre-merge-commit

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\pre-push

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\pre-rebase

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .husky\_\prepare-commit-msg

```
#!/usr/bin/env sh
. "$(dirname "$0")/h"
```

## .template\SECURITY.md

```markdown
# Security Policy

This document outlines the security measures implemented in this Electron template.

## Security Checklist

### ✅ Main Process (`electron/main/index.ts`)

| Feature                       | Status        | Description                            |
| ----------------------------- | ------------- | -------------------------------------- |
| `sandbox`                     | ✅ Enabled    | Isolates renderer process from system  |
| `contextIsolation`            | ✅ Enabled    | Separates preload script context       |
| `nodeIntegration`             | ✅ Disabled   | Prevents Node.js access in renderer    |
| `webviewTag`                  | ✅ Disabled   | Prevents webview element usage         |
| `allowRunningInsecureContent` | ✅ Disabled   | Blocks mixed content                   |
| Permission Handler            | ✅ Configured | Whitelists allowed permissions         |
| Navigation Blocking           | ✅ Configured | Blocks external URL navigation         |
| Window Open Handler           | ✅ Configured | Opens external links in system browser |

### ✅ Preload Script (`electron/preload/index.ts`)

| Feature           | Status         | Description                         |
| ----------------- | -------------- | ----------------------------------- |
| Channel Whitelist | ✅ Implemented | Only allows registered IPC channels |
| Type Safety       | ✅ Implemented | Fully typed IPC communication       |
| Validation        | ✅ Implemented | Validates channels before invoke    |

### ✅ Content Security Policy (`index.html`)
```

default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';

````

### ✅ Build Configuration (`electron-builder.yml`)

| Feature         | Status            | Description                       |
| --------------- | ----------------- | --------------------------------- |
| ASAR Archive    | ✅ Enabled        | Packages app in encrypted archive |
| GitHub Releases | 📝 Template Ready | Configure for auto-updates        |

---

## Allowed Permissions

The following permissions are whitelisted in the main process:

- `clipboard-read` - Read from system clipboard
- `clipboard-write` - Write to system clipboard
- `notifications` - Show system notifications

To add new permissions, modify `ALLOWED_PERMISSIONS` in `electron/main/index.ts`.

---

## Allowed IPC Channels

The following IPC channels are whitelisted in the preload script:

- `users:getAll`
- `users:getById`
- `users:create`
- `users:update`
- `users:delete`

To add new channels:

1. Add the channel type to `src/shared/types/ipc.ts`
2. Add the channel name to `ALLOWED_CHANNELS` in `electron/preload/index.ts`
3. Implement the handler in `electron/main/ipc/handlers/`

---

## Security Scripts

```bash
# Run npm audit for high-severity vulnerabilities
npm run security:audit

# Run full security check (lint + typecheck + audit)
npm run security:check
````

---

## GitHub Actions

The `.github/workflows/security-audit.yml` workflow runs automatically:

- On every push to `main`
- On every pull request to `main`
- Weekly (Sunday at midnight)
- Manually via workflow dispatch

---

## Best Practices

### Adding New Features

1. **Never enable `nodeIntegration`** - Use IPC instead
2. **Always add new IPC channels to the whitelist** - Prevents arbitrary channel invocation
3. **Use typed IPC** - Leverage TypeScript for type-safe communication
4. **Validate user input** - Use Zod schemas for data validation

### External Resources

If your app needs to load external resources:

1. Add specific domains to CSP in `index.html`
2. Consider using `connect-src` for API endpoints
3. Never use `unsafe-eval` in `script-src`

### Code Signing (Production)

For production releases, configure code signing in `electron-builder.yml`:

```yaml
# Windows
win:
  certificateFile: path/to/certificate.pfx
  certificatePassword: ${WIN_CSC_KEY_PASSWORD}

# macOS
mac:
  identity: 'Developer ID Application: Your Name (TEAM_ID)'
  hardenedRuntime: true
  gatekeeperAssess: false
  entitlements: build/entitlements.mac.plist
  entitlementsInherit: build/entitlements.mac.plist
```

---

## Reporting Vulnerabilities

If you discover a security vulnerability, please:

1. **Do not** open a public issue
2. Email the maintainer directly
3. Include steps to reproduce the vulnerability
4. Allow reasonable time for a fix before disclosure

````

## .template\shadcn_guide\llms.txt

```txt
# shadcn/ui

> shadcn/ui is a collection of beautifully-designed, accessible components and a code distribution platform. It is built with TypeScript, Tailwind CSS, and Radix UI primitives. It supports multiple frameworks including Next.js, Vite, Remix, Astro, and more. Open Source. Open Code. AI-Ready. It also comes with a command-line tool to install and manage components and a registry system to publish and distribute code.

## Overview

- [Introduction](https://ui.shadcn.com/docs): Core principles—Open Code, Composition, Distribution, Beautiful Defaults, and AI-Ready design.
- [CLI](https://ui.shadcn.com/docs/cli): Command-line tool for installing and managing components.
- [components.json](https://ui.shadcn.com/docs/components-json): Configuration file for customizing the CLI and component installation.
- [Theming](https://ui.shadcn.com/docs/theming): Guide to customizing colors, typography, and design tokens.
- [Changelog](https://ui.shadcn.com/docs/changelog): Release notes and version history.
- [About](https://ui.shadcn.com/docs/about): Credits and project information.

## Installation

- [Next.js](https://ui.shadcn.com/docs/installation/next): Install shadcn/ui in a Next.js project.
- [Vite](https://ui.shadcn.com/docs/installation/vite): Install shadcn/ui in a Vite project.
- [Remix](https://ui.shadcn.com/docs/installation/remix): Install shadcn/ui in a Remix project.
- [Astro](https://ui.shadcn.com/docs/installation/astro): Install shadcn/ui in an Astro project.
- [Laravel](https://ui.shadcn.com/docs/installation/laravel): Install shadcn/ui in a Laravel project.
- [Gatsby](https://ui.shadcn.com/docs/installation/gatsby): Install shadcn/ui in a Gatsby project.
- [React Router](https://ui.shadcn.com/docs/installation/react-router): Install shadcn/ui in a React Router project.
- [TanStack Router](https://ui.shadcn.com/docs/installation/tanstack-router): Install shadcn/ui in a TanStack Router project.
- [TanStack Start](https://ui.shadcn.com/docs/installation/tanstack): Install shadcn/ui in a TanStack Start project.
- [Manual Installation](https://ui.shadcn.com/docs/installation/manual): Manually install shadcn/ui without the CLI.

## Components

### Form & Input

- [Form](https://ui.shadcn.com/docs/components/form): Building forms with React Hook Form and Zod validation.
- [Field](https://ui.shadcn.com/docs/components/field): Field component for form inputs with labels and error messages.
- [Button](https://ui.shadcn.com/docs/components/button): Button component with multiple variants.
- [Button Group](https://ui.shadcn.com/docs/components/button-group): Group multiple buttons together.
- [Input](https://ui.shadcn.com/docs/components/input): Text input component.
- [Input Group](https://ui.shadcn.com/docs/components/input-group): Input component with prefix and suffix addons.
- [Input OTP](https://ui.shadcn.com/docs/components/input-otp): One-time password input component.
- [Textarea](https://ui.shadcn.com/docs/components/textarea): Multi-line text input component.
- [Checkbox](https://ui.shadcn.com/docs/components/checkbox): Checkbox input component.
- [Radio Group](https://ui.shadcn.com/docs/components/radio-group): Radio button group component.
- [Select](https://ui.shadcn.com/docs/components/select): Select dropdown component.
- [Switch](https://ui.shadcn.com/docs/components/switch): Toggle switch component.
- [Slider](https://ui.shadcn.com/docs/components/slider): Slider input component.
- [Calendar](https://ui.shadcn.com/docs/components/calendar): Calendar component for date selection.
- [Date Picker](https://ui.shadcn.com/docs/components/date-picker): Date picker component combining input and calendar.
- [Combobox](https://ui.shadcn.com/docs/components/combobox): Searchable select component with autocomplete.
- [Label](https://ui.shadcn.com/docs/components/label): Form label component.

### Layout & Navigation

- [Accordion](https://ui.shadcn.com/docs/components/accordion): Collapsible accordion component.
- [Breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb): Breadcrumb navigation component.
- [Navigation Menu](https://ui.shadcn.com/docs/components/navigation-menu): Accessible navigation menu with dropdowns.
- [Sidebar](https://ui.shadcn.com/docs/components/sidebar): Collapsible sidebar component for app layouts.
- [Tabs](https://ui.shadcn.com/docs/components/tabs): Tabbed interface component.
- [Separator](https://ui.shadcn.com/docs/components/separator): Visual divider between content sections.
- [Scroll Area](https://ui.shadcn.com/docs/components/scroll-area): Custom scrollable area with styled scrollbars.
- [Resizable](https://ui.shadcn.com/docs/components/resizable): Resizable panel layout component.

### Overlays & Dialogs

- [Dialog](https://ui.shadcn.com/docs/components/dialog): Modal dialog component.
- [Alert Dialog](https://ui.shadcn.com/docs/components/alert-dialog): Alert dialog for confirmation prompts.
- [Sheet](https://ui.shadcn.com/docs/components/sheet): Slide-out panel component (drawer).
- [Drawer](https://ui.shadcn.com/docs/components/drawer): Mobile-friendly drawer component using Vaul.
- [Popover](https://ui.shadcn.com/docs/components/popover): Floating popover component.
- [Tooltip](https://ui.shadcn.com/docs/components/tooltip): Tooltip component for additional context.
- [Hover Card](https://ui.shadcn.com/docs/components/hover-card): Card that appears on hover.
- [Context Menu](https://ui.shadcn.com/docs/components/context-menu): Right-click context menu.
- [Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu): Dropdown menu component.
- [Menubar](https://ui.shadcn.com/docs/components/menubar): Horizontal menubar component.
- [Command](https://ui.shadcn.com/docs/components/command): Command palette component (cmdk).

### Feedback & Status

- [Alert](https://ui.shadcn.com/docs/components/alert): Alert component for messages and notifications.
- [Toast](https://ui.shadcn.com/docs/components/toast): Toast notification component using Sonner.
- [Progress](https://ui.shadcn.com/docs/components/progress): Progress bar component.
- [Spinner](https://ui.shadcn.com/docs/components/spinner): Loading spinner component.
- [Skeleton](https://ui.shadcn.com/docs/components/skeleton): Skeleton loading placeholder.
- [Badge](https://ui.shadcn.com/docs/components/badge): Badge component for labels and status indicators.
- [Empty](https://ui.shadcn.com/docs/components/empty): Empty state component for no data scenarios.

### Display & Media

- [Avatar](https://ui.shadcn.com/docs/components/avatar): Avatar component for user profiles.
- [Card](https://ui.shadcn.com/docs/components/card): Card container component.
- [Table](https://ui.shadcn.com/docs/components/table): Table component for displaying data.
- [Data Table](https://ui.shadcn.com/docs/components/data-table): Advanced data table with sorting, filtering, and pagination.
- [Chart](https://ui.shadcn.com/docs/components/chart): Chart components using Recharts.
- [Carousel](https://ui.shadcn.com/docs/components/carousel): Carousel component using Embla Carousel.
- [Aspect Ratio](https://ui.shadcn.com/docs/components/aspect-ratio): Container that maintains aspect ratio.
- [Typography](https://ui.shadcn.com/docs/components/typography): Typography styles and components.
- [Item](https://ui.shadcn.com/docs/components/item): Generic item component for lists and menus.
- [Kbd](https://ui.shadcn.com/docs/components/kbd): Keyboard shortcut display component.

### Misc

- [Collapsible](https://ui.shadcn.com/docs/components/collapsible): Collapsible container component.
- [Toggle](https://ui.shadcn.com/docs/components/toggle): Toggle button component.
- [Toggle Group](https://ui.shadcn.com/docs/components/toggle-group): Group of toggle buttons.
- [Pagination](https://ui.shadcn.com/docs/components/pagination): Pagination component for lists and tables.

## Dark Mode

- [Dark Mode](https://ui.shadcn.com/docs/dark-mode): Overview of dark mode implementation.
- [Dark Mode - Next.js](https://ui.shadcn.com/docs/dark-mode/next): Dark mode setup for Next.js.
- [Dark Mode - Vite](https://ui.shadcn.com/docs/dark-mode/vite): Dark mode setup for Vite.
- [Dark Mode - Astro](https://ui.shadcn.com/docs/dark-mode/astro): Dark mode setup for Astro.
- [Dark Mode - Remix](https://ui.shadcn.com/docs/dark-mode/remix): Dark mode setup for Remix.

## Forms

- [Forms Overview](https://ui.shadcn.com/docs/forms): Guide to building forms with shadcn/ui.
- [React Hook Form](https://ui.shadcn.com/docs/forms/react-hook-form): Using shadcn/ui with React Hook Form.
- [TanStack Form](https://ui.shadcn.com/docs/forms/tanstack-form): Using shadcn/ui with TanStack Form.
- [Forms - Next.js](https://ui.shadcn.com/docs/forms/next): Building forms in Next.js with Server Actions.

## Advanced

- [Monorepo](https://ui.shadcn.com/docs/monorepo): Using shadcn/ui in a monorepo setup.
- [React 19](https://ui.shadcn.com/docs/react-19): React 19 support and migration guide.
- [Tailwind CSS v4](https://ui.shadcn.com/docs/tailwind-v4): Tailwind CSS v4 support and setup.
- [JavaScript](https://ui.shadcn.com/docs/javascript): Using shadcn/ui with JavaScript (no TypeScript).
- [Figma](https://ui.shadcn.com/docs/figma): Figma design resources.
- [v0](https://ui.shadcn.com/docs/v0): Generating UI with v0 by Vercel.

## MCP Server

- [MCP Server](https://ui.shadcn.com/docs/mcp): Model Context Protocol server for AI integrations. Allows AI assistants to browse, search, and install components from registries using natural language. Works with Claude Code, Cursor, VS Code (GitHub Copilot), Codex and more.

## Registry

- [Registry Overview](https://ui.shadcn.com/docs/registry): Creating and publishing your own component registry.
- [Getting Started](https://ui.shadcn.com/docs/registry/getting-started): Set up your own registry.
- [Examples](https://ui.shadcn.com/docs/registry/examples): Example registries.
- [FAQ](https://ui.shadcn.com/docs/registry/faq): Common questions about registries.
- [Authentication](https://ui.shadcn.com/docs/registry/authentication): Adding authentication to your registry.
- [Registry MCP](https://ui.shadcn.com/docs/registry/mcp): MCP integration for registries.

### Registry Schemas

- [Registry Schema](https://ui.shadcn.com/schema/registry.json): JSON Schema for registry index files. Defines the structure for a collection of components, hooks, pages, etc. Requires name, homepage, and items array.
- [Registry Item Schema](https://ui.shadcn.com/schema/registry-item.json): JSON Schema for individual registry items. Defines components, hooks, themes, and other distributable code with properties for dependencies, files, Tailwind config, CSS variables, and more.

````

## .template\shadcn_guide\components_db\Accordion.md

````markdown
---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/accordion
  api: https://www.radix-ui.com/docs/primitives/components/accordion#api-reference
---

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek design. Built with
            premium materials, it offers unparalleled performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an intuitive user interface
            designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners. Standard delivery takes
            3-5 business days, while express shipping ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your shipment in real-time
            through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return policy. If you&apos;re
            not completely satisfied, simply return the item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and full refunds processed
            within 48 hours of receiving the returned item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

```bash
npx shadcn@latest add accordion
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-accordion
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="accordion" title="components/ui/accordion.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
```

```tsx showLineNumbers
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>
```

````

## .template\shadcn_guide\components_db\Alert.md

```markdown
---
title: Alert
description: Displays a callout for user attention.
component: true
---

```tsx
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add alert
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="alert" title="components/ui/alert.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
```

```tsx showLineNumbers
<Alert variant="default | destructive">
  <Terminal />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

````

## .template\shadcn_guide\components_db\Alert_Dialog.md

```markdown
---
title: Alert Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
featured: true
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/alert-dialog
  api: https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference
---

<ComponentPreview
  name="alert-dialog-demo"
  title="An alert dialog with cancel and continue buttons."
  description="An alert dialog with cancel and continue buttons."
/>

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add alert-dialog
````

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-alert-dialog
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="alert-dialog" title="components/ui/alert-dialog.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
```

```tsx showLineNumbers
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

````

## .template\shadcn_guide\components_db\Aspect_Ratio.md

```markdown
---
title: Aspect Ratio
description: Displays content within a desired ratio.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/aspect-ratio
  api: https://www.radix-ui.com/docs/primitives/components/aspect-ratio#api-reference
---

```tsx
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add aspect-ratio
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-aspect-ratio
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="aspect-ratio" title="components/ui/aspect-ratio.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { AspectRatio } from '@/components/ui/aspect-ratio'
```

```tsx showLineNumbers
<AspectRatio ratio={16 / 9}>
  <Image src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>
```

````

## .template\shadcn_guide\components_db\Avatar.md

```markdown
---
title: Avatar
description: An image element with a fallback for representing the user.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/avatar
  api: https://www.radix-ui.com/docs/primitives/components/avatar#api-reference
---

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add avatar
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-avatar
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="avatar" title="components/ui/avatar.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
```

```tsx showLineNumbers
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

````

## .template\shadcn_guide\components_db\Badge.md

```markdown
---
title: Badge
description: Displays a badge or a component that looks like a badge.
component: true
---

```tsx
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
          20+
        </Badge>
      </div>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add badge
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="badge" title="components/ui/badge.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Badge } from '@/components/ui/badge'
```

```tsx
<Badge variant="default | outline | secondary | destructive">Badge</Badge>
```

### Link

You can use the `asChild` prop to make another component look like a badge. Here's an example of a link that looks like a badge.

```tsx showLineNumbers
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'

export function LinkAsBadge() {
  return (
    <Badge asChild>
      <Link href="/">Badge</Link>
    </Badge>
  )
}
```

````

## .template\shadcn_guide\components_db\Breadcrumb.md

```markdown
---
title: Breadcrumb
description: Displays the path to the current resource using a hierarchy of links.
component: true
---

```tsx
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/docs/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add breadcrumb
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="breadcrumb" title="components/ui/breadcrumb.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
```

```tsx showLineNumbers
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Examples

### Custom separator

Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.

```tsx
import Link from 'next/link'
import { SlashIcon } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

```tsx showLineNumbers {1,10-12}
import { SlashIcon } from "lucide-react"

...

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <SlashIcon />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

### Dropdown

You can compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.

```tsx
import Link from 'next/link'
import { ChevronDownIcon, SlashIcon } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function BreadcrumbWithDropdown() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0">
              Components
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

```tsx showLineNumbers {1-6,11-21}
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

...

<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger>
      Components
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Themes</DropdownMenuItem>
      <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>
```

---

### Collapsed

We provide a `<BreadcrumbEllipsis />` component to show a collapsed state when the breadcrumb is too long.

```tsx
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function BreadcrumbCollapsed() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/docs/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

```tsx showLineNumbers {1,9}
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb"

...

<Breadcrumb>
  <BreadcrumbList>
    {/* ... */}
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

---

### Link component

To use a custom link component from your routing library, you can use the `asChild` prop on `<BreadcrumbLink />`.

```tsx
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

```tsx showLineNumbers {1,8-10}
import Link from "next/link"

...

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

---

### Responsive

Here's an example of a responsive breadcrumb that composes `<BreadcrumbItem />` with `<BreadcrumbEllipsis />`, `<DropdownMenu />`, and `<Drawer />`.

It displays a dropdown on desktop and a drawer on mobile.

```tsx
'use client'

import * as React from 'react'
import Link from 'next/link'

import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const items = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Building Your Application' },
  { href: '#', label: 'Data Fetching' },
  { label: 'Caching and Revalidating' },
]

const ITEMS_TO_DISPLAY = 3

export function BreadcrumbResponsive() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={items[0].href ?? '/'}>{items[0].label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger className="flex items-center gap-1" aria-label="Toggle menu">
                    <BreadcrumbEllipsis className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.href ? item.href : '#'}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>Select a page to navigate to.</DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {items.slice(1, -2).map((item, index) => (
                        <Link
                          key={index}
                          href={item.href ? item.href : '#'}
                          className="py-1 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <>
                <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

````

## .template\shadcn_guide\components_db\Button.md

```markdown
---
title: Button
description: Displays a button or a component that looks like a button.
featured: true
component: true
---

import { InfoIcon } from "lucide-react"

<Callout variant="info" icon={<InfoIcon />}>
**Updated:** We have updated the button component to add new sizes: `icon-sm` and `icon-lg`. See the
[changelog](/docs/components/button#changelog) for more details. Follow the
instructions to update your project.

</Callout>

```tsx
import { ArrowUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
````

```tsx showLineNumbers
<Button variant="outline">Button</Button>
<Button variant="outline" size="icon" aria-label="Submit">
  <ArrowUpIcon />
</Button>
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add button
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-slot
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="button" title="components/ui/button.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Button } from '@/components/ui/button'
```

```tsx
<Button variant="outline">Button</Button>
```

## Cursor

Tailwind v4 [switched](https://tailwindcss.com/docs/upgrade-guide#buttons-use-the-default-cursor) from `cursor: pointer` to `cursor: default` for the button component.

If you want to keep the `cursor: pointer` behavior, add the following code to your CSS file:

```css showLineNumbers title="globals.css"
@layer base {
  button:not(:disabled),
  [role='button']:not(:disabled) {
    cursor: pointer;
  }
}
```

## Examples

### Size

```tsx
import { ArrowUpRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">Default</Button>
        <Button size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}
```

```tsx
// Small
<Button size="sm" variant="outline">Small</Button>
<Button size="icon-sm" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>

// Medium
<Button variant="outline">Default</Button>
<Button size="icon" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>

// Large
<Button size="lg" variant="outline">Large</Button>
<Button size="icon-lg" aria-label="Submit" variant="outline">
  <ArrowUpRightIcon />
</Button>
```

### Default

```tsx
import { Button } from '@/components/ui/button'

export function ButtonDefault() {
  return <Button>Button</Button>
}
```

```tsx
<Button>Button</Button>
```

### Outline

```tsx
import { Button } from '@/components/ui/button'

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}
```

```tsx
<Button variant="outline">Outline</Button>
```

### Secondary

```tsx
import { Button } from '@/components/ui/button'

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}
```

```tsx
<Button variant="secondary">Secondary</Button>
```

### Ghost

```tsx
import { Button } from '@/components/ui/button'

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}
```

```tsx
<Button variant="ghost">Ghost</Button>
```

### Destructive

```tsx
import { Button } from '@/components/ui/button'

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}
```

```tsx
<Button variant="destructive">Destructive</Button>
```

### Link

```tsx
import { Button } from '@/components/ui/button'

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}
```

```tsx
<Button variant="link">Link</Button>
```

### Icon

```tsx
import { CircleFadingArrowUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  )
}
```

```tsx showLineNumbers
<Button variant="outline" size="icon" aria-label="Submit">
  <CircleFadingArrowUpIcon />
</Button>
```

### With Icon

The spacing between the icon and the text is automatically adjusted
based on the size of the button. You do not need any margin on the icon.

```tsx
import { IconGitBranch } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

export function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <IconGitBranch /> New Branch
    </Button>
  )
}
```

```tsx
<Button variant="outline" size="sm">
  <IconGitBranch /> New Branch
</Button>
```

### Rounded

Use the `rounded-full` class to make the button rounded.

```tsx
import { ArrowUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```

```tsx
<Button variant="outline" size="icon" className="rounded-full">
  <ArrowUpRightIcon />
</Button>
```

### Spinner

```tsx
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

export function ButtonLoading() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      Submit
    </Button>
  )
}
```

```tsx showLineNumbers
<Button size="sm" variant="outline" disabled>
  <Spinner />
  Submit
</Button>
```

### Button Group

To create a button group, use the `ButtonGroup` component. See the [Button Group](/docs/components/button-group) documentation for more details.

```tsx
'use client'

import * as React from 'react'
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState('personal')

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterPlusIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
                    <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

```tsx showLineNumbers
<ButtonGroup>
  <ButtonGroup>
    <Button variant="outline" size="icon" aria-label="Go Back">
      <ArrowLeftIcon />
    </Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button variant="outline">Archive</Button>
    <Button variant="outline">Report</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button variant="outline">Snooze</Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="More Options">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent />
    </DropdownMenu>
  </ButtonGroup>
</ButtonGroup>
```

### Link

You can use the `asChild` prop to make another component look like a button. Here's an example of a link that looks like a button.

```tsx showLineNumbers
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function LinkAsButton() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
```

## API Reference

### Button

The `Button` component is a wrapper around the `button` element that adds a variety of styles and functionality.

| Prop      | Type                                                                          | Default     |
| --------- | ----------------------------------------------------------------------------- | ----------- |
| `variant` | `"default" \| "outline" \| "ghost" \| "destructive" \| "secondary" \| "link"` | `"default"` |
| `size`    | `"default" \| "sm" \| "lg" \| "icon" \| "icon-sm" \| "icon-lg"`               | `"default"` |
| `asChild` | `boolean`                                                                     | `false`     |

## Changelog

### 2025-09-24 New sizes

We have added two new sizes to the button component: `icon-sm` and `icon-lg`. These sizes are used to create icon buttons. To add them, edit `button.tsx` and add the following code under `size` in `buttonVariants`:

```tsx showLineNumbers title="components/ui/button.tsx"
const buttonVariants = cva('...', {
  variants: {
    size: {
      // ...
      'icon-sm': 'size-8',
      'icon-lg': 'size-10',
      // ...
    },
  },
})
```

````

## .template\shadcn_guide\components_db\Button_Group.md

```markdown
---
title: Button Group
description: A container that groups related buttons together with consistent styling.
component: true
---

```tsx
'use client'

import * as React from 'react'
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState('personal')

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterPlusIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
                    <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add button-group
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-slot
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="button-group" title="components/ui/button-group.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
```

```tsx
<ButtonGroup>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
```

## Accessibility

- The `ButtonGroup` component has the `role` attribute set to `group`.
- Use <Kbd>Tab</Kbd> to navigate between the buttons in the group.
- Use `aria-label` or `aria-labelledby` to label the button group.

```tsx showLineNumbers
<ButtonGroup aria-label="Button group">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
```

## ButtonGroup vs ToggleGroup

- Use the `ButtonGroup` component when you want to group buttons that perform an action.
- Use the `ToggleGroup` component when you want to group buttons that toggle a state.

## Examples

### Orientation

Set the `orientation` prop to change the button group layout.

```tsx
import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Media controls" className="h-fit">
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
```

### Size

Control the size of buttons using the `size` prop on individual buttons.

```tsx
import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
```

### Nested

Nest `<ButtonGroup>` components to create button groups with spacing.

```tsx
'use client'

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          5
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Previous">
          <ArrowLeftIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

### Separator

The `ButtonGroupSeparator` component visually divides buttons within a group.

Buttons with variant `outline` do not need a separator since they have a border. For other variants, a separator is recommended to improve the visual hierarchy.

```tsx
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'

export function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  )
}
```

### Split

Create a split button group by adding two buttons separated by a `ButtonGroupSeparator`.

```tsx
import { IconPlus } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'

export function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
```

### Input

Wrap an `Input` component with buttons.

```tsx
import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Input } from '@/components/ui/input'

export function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
```

### Input Group

Wrap an `InputGroup` component to create complex input layouts.

```tsx
'use client'

import * as React from 'react'
import { AudioLinesIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={voiceEnabled ? 'Record and send audio...' : 'Send a message...'}
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  size="icon-xs"
                  data-active={voiceEnabled}
                  className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  aria-pressed={voiceEnabled}
                >
                  <AudioLinesIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

### Dropdown Menu

Create a split button group with a `DropdownMenu` component.

```tsx
'use client'

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="!pl-2">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="[--radius:1rem]">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              Mute Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertTriangleIcon />
              Report Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundXIcon />
              Block User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon />
              Share Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              Copy Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              Delete Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
```

### Select

Pair with a `Select` component.

```tsx
'use client'

import * as React from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'

const CURRENCIES = [
  {
    value: '$',
    label: 'US Dollar',
  },
  {
    value: '€',
    label: 'Euro',
  },
  {
    value: '£',
    label: 'British Pound',
  },
]

export function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState('$')

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent className="min-w-24">
            {CURRENCIES.map((currency) => (
              <SelectItem key={currency.value} value={currency.value}>
                {currency.value} <span className="text-muted-foreground">{currency.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

### Popover

Use with a `Popover` component.

```tsx
import { BotIcon, ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open Popover">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl p-0 text-sm">
          <div className="px-4 py-3">
            <div className="text-sm font-medium">Agent Tasks</div>
          </div>
          <Separator />
          <div className="*:[p:not(:last-child)]:mb-2 p-4 text-sm">
            <Textarea
              placeholder="Describe your task in natural language."
              className="mb-4 resize-none"
            />
            <p className="font-medium">Start a new task with Copilot</p>
            <p className="text-muted-foreground">
              Describe your task in natural language. Copilot will work in the background and open a
              pull request for your review.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
```

## API Reference

### ButtonGroup

The `ButtonGroup` component is a container that groups related buttons together with consistent styling.

| Prop          | Type                         | Default        |
| ------------- | ---------------------------- | -------------- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` |

```tsx
<ButtonGroup>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
```

Nest multiple button groups to create complex layouts with spacing. See the [nested](#nested) example for more details.

```tsx
<ButtonGroup>
  <ButtonGroup />
  <ButtonGroup />
</ButtonGroup>
```

### ButtonGroupSeparator

The `ButtonGroupSeparator` component visually divides buttons within a group.

| Prop          | Type                         | Default      |
| ------------- | ---------------------------- | ------------ |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` |

```tsx
<ButtonGroup>
  <Button>Button 1</Button>
  <ButtonGroupSeparator />
  <Button>Button 2</Button>
</ButtonGroup>
```

### ButtonGroupText

Use this component to display text within a button group.

| Prop      | Type      | Default |
| --------- | --------- | ------- |
| `asChild` | `boolean` | `false` |

```tsx
<ButtonGroup>
  <ButtonGroupText>Text</ButtonGroupText>
  <Button>Button</Button>
</ButtonGroup>
```

Use the `asChild` prop to render a custom component as the text, for example a label.

```tsx showLineNumbers
import { ButtonGroupText } from '@/components/ui/button-group'
import { Label } from '@/components/ui/label'

export function ButtonGroupTextDemo() {
  return (
    <ButtonGroup>
      <ButtonGroupText asChild>
        <Label htmlFor="name">Text</Label>
      </ButtonGroupText>
      <Input placeholder="Type something here..." id="name" />
    </ButtonGroup>
  )
}
```

````

## .template\shadcn_guide\components_db\Calendar.md

```markdown
---
title: Calendar
description: A date field component that allows users to enter and edit date.
component: true
links:
  doc: https://react-day-picker.js.org
---

```tsx
'use client'

import * as React from 'react'

import { Calendar } from '@/components/ui/calendar'

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  )
}
````

## Blocks

We have built a collection of 30+ calendar blocks that you can use to build your own calendar components.

See all calendar blocks in the [Blocks Library](/blocks/calendar) page.

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add calendar
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install react-day-picker date-fns
```

<Step>Add the `Button` component to your project.</Step>

The `Calendar` component uses the `Button` component. Make sure you have it installed in your project.

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="calendar" title="components/ui/calendar.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Calendar } from '@/components/ui/calendar'
```

```tsx showLineNumbers
const [date, setDate] = React.useState<Date | undefined>(new Date())

return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
```

See the [React DayPicker](https://react-day-picker.js.org) documentation for more information.

## About

The `Calendar` component is built on top of [React DayPicker](https://react-day-picker.js.org).

## Customization

See the [React DayPicker](https://react-day-picker.js.org/docs/customization) documentation for more information on how to customize the `Calendar` component.

## Date Picker

You can use the `<Calendar>` component to build a date picker. See the [Date Picker](/docs/components/date-picker) page for more information.

## Persian / Hijri / Jalali Calendar

To use the Persian calendar, edit `components/ui/calendar.tsx` and replace `react-day-picker` with `react-day-picker/persian`.

```diff
- import { DayPicker } from "react-day-picker"
+ import { DayPicker } from "react-day-picker/persian"
```

```tsx
'use client'

import * as React from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { DayButton, getDefaultClassNames } from 'react-day-picker'
import { DayPicker } from 'react-day-picker/persian'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

export function CalendarHijri() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12))

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      className="rounded-lg border shadow-sm"
    />
  )
}

// ----------------------------------------------------------------------------
// The code below is for this example only.
// For your own calendar, you would edit the calendar.tsx component directly.
// ----------------------------------------------------------------------------
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4 md:flex-row', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) select-none p-0 aria-disabled:opacity-50',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) select-none p-0 aria-disabled:opacity-50',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'h-(--cell-size) px-(--cell-size) flex w-full items-center justify-center',
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          'h-(--cell-size) flex w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          'has-focus:border-ring shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border border-input',
          defaultClassNames.dropdown_root
        ),
        dropdown: cn('absolute inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
          defaultClassNames.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'flex-1 select-none rounded-md text-[0.8rem] font-normal text-muted-foreground',
          defaultClassNames.weekday
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number_header: cn('w-(--cell-size) select-none', defaultClassNames.week_number_header),
        week_number: cn(
          'select-none text-[0.8rem] text-muted-foreground',
          defaultClassNames.week_number
        ),
        day: cn(
          'group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md',
          defaultClassNames.day
        ),
        range_start: cn('rounded-l-md bg-accent', defaultClassNames.range_start),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none',
          defaultClassNames.today
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside
        ),
        disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('size-4', className)} {...props} />
          }

          if (orientation === 'right') {
            return <ChevronRightIcon className={cn('size-4', className)} {...props} />
          }

          return <ChevronDownIcon className={cn('size-4', className)} {...props} />
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="size-(--cell-size) flex items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'min-w-(--cell-size) flex aspect-square size-auto w-full flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-start=true]:rounded-l-md data-[range-end=true]:bg-primary data-[range-middle=true]:bg-accent data-[range-start=true]:bg-primary data-[selected-single=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:text-accent-foreground data-[range-start=true]:text-primary-foreground data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}
```

## Selected Date (With TimeZone)

The Calendar component accepts a `timeZone` prop to ensure dates are displayed and selected in the user's local timezone.

```tsx showLineNumbers
export function CalendarWithTimezone() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  return <Calendar mode="single" selected={date} onSelect={setDate} timeZone={timeZone} />
}
```

**Note:** If you notice a selected date offset (for example, selecting the 20th highlights the 19th), make sure the `timeZone` prop is set to the user's local timezone.

**Why client-side?** The timezone is detected using `Intl.DateTimeFormat().resolvedOptions().timeZone` inside a `useEffect` to ensure compatibility with server-side rendering. Detecting the timezone during render would cause hydration mismatches, as the server and client may be in different timezones.

## Examples

### Range Calendar

```tsx
'use client'

import * as React from 'react'
import { type DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'

export function Calendar05() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
    />
  )
}
```

### Month and Year Selector

```tsx
'use client'

import * as React from 'react'

import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Calendar13() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>['captionLayout']>('dropdown')
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12))

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="rounded-lg border shadow-sm"
      />
      <div className="flex flex-col gap-3">
        <Label htmlFor="dropdown" className="px-1">
          Dropdown
        </Label>
        <Select
          value={dropdown}
          onValueChange={(value) =>
            setDropdown(value as React.ComponentProps<typeof Calendar>['captionLayout'])
          }
        >
          <SelectTrigger id="dropdown" size="sm" className="w-full bg-background">
            <SelectValue placeholder="Dropdown" />
          </SelectTrigger>
          <SelectContent align="center">
            <SelectItem value="dropdown">Month and Year</SelectItem>
            <SelectItem value="dropdown-months">Month Only</SelectItem>
            <SelectItem value="dropdown-years">Year Only</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
```

### Date of Birth Picker

```tsx
'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function Calendar22() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : 'Select date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Date and Time Picker

```tsx
'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function Calendar24() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
              {date ? date.toLocaleDateString() : 'Select date'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  )
}
```

### Natural Language Picker

This component uses the `chrono-node` library to parse natural language dates.

```tsx
'use client'

import * as React from 'react'
import { parseDate } from 'chrono-node'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

function formatDate(date: Date | undefined) {
  if (!date) {
    return ''
  }

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function Calendar29() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('In 2 days')
  const [date, setDate] = React.useState<Date | undefined>(parseDate(value) || undefined)
  const [month, setMonth] = React.useState<Date | undefined>(date)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Schedule Date
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="Tomorrow or next week"
          className="bg-background pr-10"
          onChange={(e) => {
            setValue(e.target.value)
            const date = parseDate(e.target.value)
            if (date) {
              setDate(date)
              setMonth(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute right-2 top-1/2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="px-1 text-sm text-muted-foreground">
        Your post will be published on <span className="font-medium">{formatDate(date)}</span>.
      </div>
    </div>
  )
}
```

### Custom Cell Size

```tsx
'use client'

import * as React from 'react'

import { Calendar } from '@/components/ui/calendar'

export function Calendar18() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12))

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
      buttonVariant="ghost"
    />
  )
}
```

You can customize the size of calendar cells using the `--cell-size` CSS variable. You can also make it responsive by using breakpoint-specific values:

```tsx showLineNumbers
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
/>
```

Or use fixed values:

```tsx showLineNumbers
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border [--cell-size:2.75rem] md:[--cell-size:3rem]"
/>
```

## Upgrade Guide

### Tailwind v4

If you're already using Tailwind v4, you can upgrade to the latest version of the `Calendar` component by running the following command:

```bash
npx shadcn@latest add calendar
```

When you're prompted to overwrite the existing `Calendar` component, select `Yes`. **If you have made any changes to the `Calendar` component, you will need to merge your changes with the new version.**

This will update the `Calendar` component and `react-day-picker` to the latest version.

Next, follow the [React DayPicker](https://daypicker.dev/upgrading) upgrade guide to upgrade your existing components to the latest version.

#### Installing Blocks

After upgrading the `Calendar` component, you can install the new blocks by running the `shadcn@latest add` command.

```bash
npx shadcn@latest add calendar-02
```

This will install the latest version of the calendar blocks.

### Tailwind v3

If you're using Tailwind v3, you can upgrade to the latest version of the `Calendar` by copying the following code to your `calendar.tsx` file.

<CodeCollapsibleWrapper>

```tsx showLineNumbers title="components/ui/calendar.tsx"
'use client'

import * as React from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'group/calendar bg-background p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('relative flex flex-col gap-4 md:flex-row', defaultClassNames.months),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          'flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]',
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          'flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          'has-focus:border-ring shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border border-input',
          defaultClassNames.dropdown_root
        ),
        dropdown: cn('absolute inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
          defaultClassNames.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'flex-1 select-none rounded-md text-[0.8rem] font-normal text-muted-foreground',
          defaultClassNames.weekday
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number_header: cn('w-[--cell-size] select-none', defaultClassNames.week_number_header),
        week_number: cn(
          'select-none text-[0.8rem] text-muted-foreground',
          defaultClassNames.week_number
        ),
        day: cn(
          'group/day relative aspect-square h-full w-full select-none p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md',
          props.showWeekNumber
            ? '[&:nth-child(2)[data-selected=true]_button]:rounded-l-md'
            : '[&:first-child[data-selected=true]_button]:rounded-l-md',
          defaultClassNames.day
        ),
        range_start: cn('rounded-l-md bg-accent', defaultClassNames.range_start),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none',
          defaultClassNames.today
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside
        ),
        disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('size-4', className)} {...props} />
          }

          if (orientation === 'right') {
            return <ChevronRightIcon className={cn('size-4', className)} {...props} />
          }

          return <ChevronDownIcon className={cn('size-4', className)} {...props} />
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-[--cell-size] items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-end=true]:bg-primary data-[range-middle=true]:bg-accent data-[range-start=true]:bg-primary data-[selected-single=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:text-accent-foreground data-[range-start=true]:text-primary-foreground data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
```

</CodeCollapsibleWrapper>

**If you have made any changes to the `Calendar` component, you will need to merge your changes with the new version.**

Then follow the [React DayPicker](https://daypicker.dev/upgrading) upgrade guide to upgrade your dependencies and existing components to the latest version.

#### Installing Blocks

After upgrading the `Calendar` component, you can install the new blocks by running the `shadcn@latest add` command.

```bash
npx shadcn@latest add calendar-02
```

This will install the latest version of the calendar blocks.

## Changelog

### 2025-10-26 Fixed day radius with week numbers

We have fixed an issue where the selected day's left border radius was not applied correctly when week numbers were displayed. The fix ensures that when `showWeekNumber` is enabled, the first day (which is the second child due to the week number column) correctly receives the rounded left border.

To apply this fix, edit `components/ui/calendar.tsx` and update the `day` class in `classNames`:

```tsx showLineNumbers title="components/ui/calendar.tsx" {5-7}
classNames={{
  // ... other classNames
  day: cn(
    "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
    props.showWeekNumber
      ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
      : "[&:first-child[data-selected=true]_button]:rounded-l-md",
    defaultClassNames.day
  ),
  // ... other classNames
}}
```

````

## .template\shadcn_guide\components_db\Card.md

```markdown
---
title: Card
description: Displays a card with header, content, and footer.
component: true
---

```tsx
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add card
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="card" title="components/ui/card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
```

```tsx showLineNumbers
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

````

## .template\shadcn_guide\components_db\Carousel.md

```markdown
---
title: Carousel
description: A carousel with motion and swipe built using Embla.
component: true
links:
  doc: https://www.embla-carousel.com/get-started/react
  api: https://www.embla-carousel.com/api
---

```tsx
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
````

## About

The carousel component is built using the [Embla Carousel](https://www.embla-carousel.com/) library.

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

```bash
npx shadcn@latest add carousel
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install embla-carousel-react
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="carousel" title="components/ui/carousel.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
```

```tsx showLineNumbers
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Examples

### Sizes

To set the size of the items, you can use the `basis` utility class on the `<CarouselItem />`.

```tsx
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

```tsx showLineNumbers {4-6}
// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

```tsx showLineNumbers {4-6}
// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Spacing

To set the spacing between the items, we use a `pl-[VALUE]` utility on the `<CarouselItem />` and a negative `-ml-[VALUE]` on the `<CarouselContent />`.

<Callout className="mt-6">
  **Why:** I tried to use the `gap` property or a `grid` layout on the `
  <CarouselContent />` but it required a lot of math and mental effort to get the
  spacing right. I found `pl-[VALUE]` and `-ml-[VALUE]` utilities much easier to
  use.

You can always adjust this in your own project if you need to.

</Callout>

```tsx
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

```tsx showLineNumbers /-ml-4/ /pl-4/
<Carousel>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

```tsx showLineNumbers /-ml-2/ /pl-2/ /md:-ml-4/ /md:pl-4/
<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Orientation

Use the `orientation` prop to set the orientation of the carousel.

```tsx
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

```tsx showLineNumbers /vertical | horizontal/
<Carousel orientation="vertical | horizontal">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## Options

You can pass options to the carousel using the `opts` prop. See the [Embla Carousel docs](https://www.embla-carousel.com/api/options/) for more information.

```tsx showLineNumbers {2-5}
<Carousel
  opts={{
    align: 'start',
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## API

Use a state and the `setApi` props to get an instance of the carousel API.

```tsx
'use client'

import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}
```

```tsx showLineNumbers {1,4,22}
import { type CarouselApi } from '@/components/ui/carousel'

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

## Events

You can listen to events using the api instance from `setApi`.

```tsx showLineNumbers {1,4-14,16}
import { type CarouselApi } from '@/components/ui/carousel'

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

See the [Embla Carousel docs](https://www.embla-carousel.com/api/events/) for more information on using events.

## Plugins

You can use the `plugins` prop to add plugins to the carousel.

```ts showLineNumbers {1,6-10}
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
```

```tsx
'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

See the [Embla Carousel docs](https://www.embla-carousel.com/api/plugins/) for more information on using plugins.

````

## .template\shadcn_guide\components_db\Chart.md

```markdown
---
title: Chart
description: Beautiful charts. Built using Recharts. Copy and paste into your apps.
component: true
---

<Callout>

**Note:** We're working on upgrading to Recharts v3. In the meantime, if you'd like to start testing v3, see the code in the comment [here](https://github.com/shadcn-ui/ui/issues/7669#issuecomment-2998299159). We'll have an official release soon.

</Callout>

```tsx
'use client'

import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'An interactive bar chart'

const chartData = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 97, mobile: 180 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 242, mobile: 260 },
  { date: '2024-04-05', desktop: 373, mobile: 290 },
  { date: '2024-04-06', desktop: 301, mobile: 340 },
  { date: '2024-04-07', desktop: 245, mobile: 180 },
  { date: '2024-04-08', desktop: 409, mobile: 320 },
  { date: '2024-04-09', desktop: 59, mobile: 110 },
  { date: '2024-04-10', desktop: 261, mobile: 190 },
  { date: '2024-04-11', desktop: 327, mobile: 350 },
  { date: '2024-04-12', desktop: 292, mobile: 210 },
  { date: '2024-04-13', desktop: 342, mobile: 380 },
  { date: '2024-04-14', desktop: 137, mobile: 220 },
  { date: '2024-04-15', desktop: 120, mobile: 170 },
  { date: '2024-04-16', desktop: 138, mobile: 190 },
  { date: '2024-04-17', desktop: 446, mobile: 360 },
  { date: '2024-04-18', desktop: 364, mobile: 410 },
  { date: '2024-04-19', desktop: 243, mobile: 180 },
  { date: '2024-04-20', desktop: 89, mobile: 150 },
  { date: '2024-04-21', desktop: 137, mobile: 200 },
  { date: '2024-04-22', desktop: 224, mobile: 170 },
  { date: '2024-04-23', desktop: 138, mobile: 230 },
  { date: '2024-04-24', desktop: 387, mobile: 290 },
  { date: '2024-04-25', desktop: 215, mobile: 250 },
  { date: '2024-04-26', desktop: 75, mobile: 130 },
  { date: '2024-04-27', desktop: 383, mobile: 420 },
  { date: '2024-04-28', desktop: 122, mobile: 180 },
  { date: '2024-04-29', desktop: 315, mobile: 240 },
  { date: '2024-04-30', desktop: 454, mobile: 380 },
  { date: '2024-05-01', desktop: 165, mobile: 220 },
  { date: '2024-05-02', desktop: 293, mobile: 310 },
  { date: '2024-05-03', desktop: 247, mobile: 190 },
  { date: '2024-05-04', desktop: 385, mobile: 420 },
  { date: '2024-05-05', desktop: 481, mobile: 390 },
  { date: '2024-05-06', desktop: 498, mobile: 520 },
  { date: '2024-05-07', desktop: 388, mobile: 300 },
  { date: '2024-05-08', desktop: 149, mobile: 210 },
  { date: '2024-05-09', desktop: 227, mobile: 180 },
  { date: '2024-05-10', desktop: 293, mobile: 330 },
  { date: '2024-05-11', desktop: 335, mobile: 270 },
  { date: '2024-05-12', desktop: 197, mobile: 240 },
  { date: '2024-05-13', desktop: 197, mobile: 160 },
  { date: '2024-05-14', desktop: 448, mobile: 490 },
  { date: '2024-05-15', desktop: 473, mobile: 380 },
  { date: '2024-05-16', desktop: 338, mobile: 400 },
  { date: '2024-05-17', desktop: 499, mobile: 420 },
  { date: '2024-05-18', desktop: 315, mobile: 350 },
  { date: '2024-05-19', desktop: 235, mobile: 180 },
  { date: '2024-05-20', desktop: 177, mobile: 230 },
  { date: '2024-05-21', desktop: 82, mobile: 140 },
  { date: '2024-05-22', desktop: 81, mobile: 120 },
  { date: '2024-05-23', desktop: 252, mobile: 290 },
  { date: '2024-05-24', desktop: 294, mobile: 220 },
  { date: '2024-05-25', desktop: 201, mobile: 250 },
  { date: '2024-05-26', desktop: 213, mobile: 170 },
  { date: '2024-05-27', desktop: 420, mobile: 460 },
  { date: '2024-05-28', desktop: 233, mobile: 190 },
  { date: '2024-05-29', desktop: 78, mobile: 130 },
  { date: '2024-05-30', desktop: 340, mobile: 280 },
  { date: '2024-05-31', desktop: 178, mobile: 230 },
  { date: '2024-06-01', desktop: 178, mobile: 200 },
  { date: '2024-06-02', desktop: 470, mobile: 410 },
  { date: '2024-06-03', desktop: 103, mobile: 160 },
  { date: '2024-06-04', desktop: 439, mobile: 380 },
  { date: '2024-06-05', desktop: 88, mobile: 140 },
  { date: '2024-06-06', desktop: 294, mobile: 250 },
  { date: '2024-06-07', desktop: 323, mobile: 370 },
  { date: '2024-06-08', desktop: 385, mobile: 320 },
  { date: '2024-06-09', desktop: 438, mobile: 480 },
  { date: '2024-06-10', desktop: 155, mobile: 200 },
  { date: '2024-06-11', desktop: 92, mobile: 150 },
  { date: '2024-06-12', desktop: 492, mobile: 420 },
  { date: '2024-06-13', desktop: 81, mobile: 130 },
  { date: '2024-06-14', desktop: 426, mobile: 380 },
  { date: '2024-06-15', desktop: 307, mobile: 350 },
  { date: '2024-06-16', desktop: 371, mobile: 310 },
  { date: '2024-06-17', desktop: 475, mobile: 520 },
  { date: '2024-06-18', desktop: 107, mobile: 170 },
  { date: '2024-06-19', desktop: 341, mobile: 290 },
  { date: '2024-06-20', desktop: 408, mobile: 450 },
  { date: '2024-06-21', desktop: 169, mobile: 210 },
  { date: '2024-06-22', desktop: 317, mobile: 270 },
  { date: '2024-06-23', desktop: 480, mobile: 530 },
  { date: '2024-06-24', desktop: 132, mobile: 180 },
  { date: '2024-06-25', desktop: 141, mobile: 190 },
  { date: '2024-06-26', desktop: 434, mobile: 380 },
  { date: '2024-06-27', desktop: 448, mobile: 490 },
  { date: '2024-06-28', desktop: 149, mobile: 200 },
  { date: '2024-06-29', desktop: 103, mobile: 160 },
  { date: '2024-06-30', desktop: 446, mobile: 400 },
]

const chartConfig = {
  views: {
    label: 'Page Views',
  },
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-2)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function ChartBarInteractive() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('desktop')

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 pt-4 sm:!py-0">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>Showing total visitors for the last 3 months</CardDescription>
        </div>
        <div className="flex">
          {['desktop', 'mobile'].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">{chartConfig[chart].label}</span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
````

Introducing **Charts**. A collection of chart components that you can copy and paste into your apps.

Charts are designed to look great out of the box. They work well with the other components and are fully customizable to fit your project.

[Browse the Charts Library](/charts).

## Component

We use [Recharts](https://recharts.org/) under the hood.

We designed the `chart` component with composition in mind. **You build your charts using Recharts components and only bring in custom components, such as `ChartTooltip`, when and where you need it**.

```tsx showLineNumbers /ChartContainer/ /ChartTooltipContent/
import { Bar, BarChart } from 'recharts'

import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart'

export function MyChart() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}
```

We do not wrap Recharts. This means you're not locked into an abstraction. When a new Recharts version is released, you can follow the official upgrade path to upgrade your charts.

**The components are yours**.

## Installation

<Callout className="mt-4">

**Note:** If you are using charts with **React 19** or the **Next.js 15**, see the note [here](/docs/react-19#recharts).

</Callout>

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<Steps>

<Step>Run the following command to install `chart.tsx`</Step>

```bash
npx shadcn@latest add chart
```

<Step>Add the following colors to your CSS file</Step>

```css title="app/globals.css" showLineNumbers
@layer base {
  :root {
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);
  }

  .dark {
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);
  }
}
```

</Steps>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install recharts
```

<Step>Copy and paste the following code into `components/ui/chart.tsx`.</Step>

<ComponentSource name="chart" title="components/ui/chart.tsx" />

<Step>Add the following colors to your CSS file</Step>

```css title="app/globals.css" showLineNumbers
@layer base {
  :root {
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);
  }

  .dark {
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);
  }
}
```

</Steps>

</TabsContent>

</CodeTabs>

## Your First Chart

Let's build your first chart. We'll build a bar chart, add a grid, axis, tooltip and legend.

<Steps>

<Step>Start by defining your data</Step>

The following data represents the number of desktop and mobile users for each month.

<Callout className="mt-4">

**Note:** Your data can be in any shape. You are not limited to the shape of the data below. Use the `dataKey` prop to map your data to the chart.

</Callout>

```tsx title="components/example-chart.tsx" showLineNumbers
const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]
```

<Step>Define your chart config</Step>

The chart config holds configuration for the chart. This is where you place human-readable strings, such as labels, icons and color tokens for theming.

```tsx title="components/example-chart.tsx" showLineNumbers
import { type ChartConfig } from '@/components/ui/chart'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig
```

<Step>Build your chart</Step>

You can now build your chart using Recharts components.

<Callout className="mt-4 bg-amber-50 border-amber-200 dark:bg-amber-950/50 dark:border-amber-950">

**Important:** Remember to set a `min-h-[VALUE]` on the `ChartContainer` component. This is required for the chart to be responsive.

</Callout>

<ComponentSource name="chart-bar-demo" title="components/example-chart.tsx" />

```tsx
'use client'

import { Bar, BarChart } from 'recharts'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

</Steps>

### Add a Grid

Let's add a grid to the chart.

<Steps>

<Step>Import the `CartesianGrid` component.</Step>

```tsx /CartesianGrid/
import { Bar, BarChart, CartesianGrid } from 'recharts'
```

<Step>Add the `CartesianGrid` component to your chart.</Step>

```tsx showLineNumbers {3}
<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

```tsx
'use client'

import { Bar, BarChart, CartesianGrid } from 'recharts'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

</Steps>

### Add an Axis

To add an x-axis to the chart, we'll use the `XAxis` component.

<Steps>

<Step>Import the `XAxis` component.</Step>

```tsx /XAxis/
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
```

<Step>Add the `XAxis` component to your chart.</Step>

```tsx showLineNumbers {4-10}
<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

```tsx
'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

</Steps>

### Add Tooltip

So far we've only used components from Recharts. They look great out of the box thanks to some customization in the `chart` component.

To add a tooltip, we'll use the custom `ChartTooltip` and `ChartTooltipContent` components from `chart`.

<Steps>

<Step>Import the `ChartTooltip` and `ChartTooltipContent` components.</Step>

```tsx
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
```

<Step>Add the components to your chart.</Step>

```tsx showLineNumbers {11}
<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

```tsx
'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

Hover to see the tooltips. Easy, right? Two components, and we've got a beautiful tooltip.

</Steps>

### Add Legend

We'll do the same for the legend. We'll use the `ChartLegend` and `ChartLegendContent` components from `chart`.

<Steps>

<Step>Import the `ChartLegend` and `ChartLegendContent` components.</Step>

```tsx
import { ChartLegend, ChartLegendContent } from '@/components/ui/chart'
```

<Step>Add the components to your chart.</Step>

```tsx showLineNumbers {12}
<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

```tsx
'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

</Steps>

Done. You've built your first chart! What's next?

- [Themes and Colors](/docs/components/chart#theming)
- [Tooltip](/docs/components/chart#tooltip)
- [Legend](/docs/components/chart#legend)

## Chart Config

The chart config is where you define the labels, icons and colors for a chart.

It is intentionally decoupled from chart data.

This allows you to share config and color tokens between charts. It can also work independently for cases where your data or color tokens live remotely or in a different format.

```tsx showLineNumbers /ChartConfig/
import { Monitor } from 'lucide-react'

import { type ChartConfig } from '@/components/ui/chart'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    icon: Monitor,
    // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
    color: '#2563eb',
    // OR a theme object with 'light' and 'dark' keys
    theme: {
      light: '#2563eb',
      dark: '#dc2626',
    },
  },
} satisfies ChartConfig
```

## Theming

Charts have built-in support for theming. You can use css variables (recommended) or color values in any color format, such as hex, hsl or oklch.

### CSS Variables

<Steps>

<Step>Define your colors in your css file</Step>

```css {6-7,14-15} title="app/globals.css" showLineNumbers
@layer base {
  :root {
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
  }

  .dark: {
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
  }
}
```

<Step>Add the color to your `chartConfig`</Step>

```tsx {4,8} showLineNumbers
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig
```

</Steps>

### hex, hsl or oklch

You can also define your colors directly in the chart config. Use the color format you prefer.

```tsx showLineNumbers
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
} satisfies ChartConfig
```

### Using Colors

To use the theme colors in your chart, reference the colors using the format `var(--color-KEY)`.

#### Components

```tsx
<Bar dataKey="desktop" fill="var(--color-desktop)" />
```

#### Chart Data

```tsx showLineNumbers
const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
]
```

#### Tailwind

```tsx
<LabelList className="fill-[--color-desktop]" />
```

## Tooltip

A chart tooltip contains a label, name, indicator and value. You can use a combination of these to customize your tooltip.

```tsx
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

export function Component() {
  return (
    <div className="grid aspect-video w-full max-w-md justify-center text-foreground md:grid-cols-2 [&>div]:relative [&>div]:flex [&>div]:h-[137px] [&>div]:w-[224px] [&>div]:items-center [&>div]:justify-center [&>div]:p-4">
      <div>
        <div className="absolute left-[-35px] top-[45px] z-10 text-sm font-medium">Label</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 40"
          width="50"
          height="12"
          fill="none"
          className="absolute left-[5px] top-[50px] z-10"
        >
          <g clipPath="url(#a)">
            <path
              fill="currentColor"
              d="M173.928 21.13C115.811 44.938 58.751 45.773 0 26.141c4.227-4.386 7.82-2.715 10.567-1.88 21.133 5.64 42.9 6.266 64.457 7.101 31.066 1.253 60.441-5.848 89.183-17.335 1.268-.418 2.325-1.253 4.861-2.924-14.582-2.924-29.165 2.089-41.845-3.76.212-.835.212-1.879.423-2.714 9.51-.627 19.231-1.253 28.742-2.089 9.51-.835 18.808-1.88 28.318-2.506 6.974-.418 9.933 2.924 7.397 9.19-3.17 8.145-7.608 15.664-11.623 23.391-.423.836-1.057 1.88-1.902 2.298-2.325.835-4.65 1.044-7.186 1.67-.422-2.088-1.479-4.386-1.268-6.265.423-2.506 1.902-4.595 3.804-9.19Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="currentColor" d="M0 0h193v40H0z" />
            </clipPath>
          </defs>
        </svg>
        <TooltipDemo
          label="Page Views"
          payload={[
            { name: 'Desktop', value: 186, fill: 'hsl(var(--chart-1))' },
            { name: 'Mobile', value: 80, fill: 'hsl(var(--chart-2))' },
          ]}
          className="w-[8rem]"
        />
      </div>
      <div className="items-end">
        <div className="absolute left-[122px] top-[0px] z-10 text-sm font-medium">Name</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="42"
          fill="none"
          viewBox="0 0 122 148"
          className="absolute left-[85px] top-[10px] z-10 -scale-x-100"
        >
          <g clipPath="url(#ab)">
            <path
              fill="currentColor"
              d="M0 2.65c6.15-4.024 12.299-2.753 17.812-.847a115.56 115.56 0 0 1 21.84 10.59C70.4 32.727 88.849 61.744 96.483 97.54c1.908 9.108 2.544 18.639 3.817 29.017 8.481-4.871 12.934-14.402 21.416-19.909 1.061 4.236-1.06 6.989-2.756 9.319-6.998 9.531-14.207 19.062-21.63 28.382-3.604 4.448-6.36 4.871-10.177 1.059-8.058-7.837-12.935-17.368-14.42-28.382 0-.424.636-1.059 1.485-2.118 9.118 2.33 6.997 13.979 14.843 18.215 3.393-14.614.848-28.593-2.969-42.149-4.029-14.19-9.33-27.746-17.812-39.82-8.27-11.86-18.66-21.392-30.11-30.287C26.93 11.758 14.207 6.039 0 2.65Z"
            />
          </g>
          <defs>
            <clipPath id="ab">
              <path fill="currentColor" d="M0 0h122v148H0z" />
            </clipPath>
          </defs>
        </svg>
        <TooltipDemo
          label="Browser"
          hideLabel
          payload={[
            { name: 'Chrome', value: 1286, fill: 'hsl(var(--chart-3))' },
            { name: 'Firefox', value: 1000, fill: 'hsl(var(--chart-4))' },
          ]}
          indicator="dashed"
          className="w-[8rem]"
        />
      </div>
      <div className="!hidden md:!flex">
        <TooltipDemo
          label="Page Views"
          payload={[{ name: 'Desktop', value: 12486, fill: 'hsl(var(--chart-3))' }]}
          className="w-[9rem]"
          indicator="line"
        />
      </div>
      <div className="!items-start !justify-start">
        <div className="absolute left-[50px] top-[60px] z-10 text-sm font-medium">Indicator</div>
        <TooltipDemo
          label="Browser"
          hideLabel
          payload={[{ name: 'Chrome', value: 1286, fill: 'hsl(var(--chart-1))' }]}
          indicator="dot"
          className="w-[8rem]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="34"
          fill="none"
          viewBox="0 0 75 175"
          className="absolute left-[30px] top-[38px] z-10 rotate-[-40deg]"
        >
          <g clipPath="url(#abc)">
            <path
              fill="currentColor"
              d="M20.187 175c-4.439-2.109-7.186-2.531-8.032-4.008-3.17-5.484-6.763-10.968-8.454-17.084-5.073-16.242-4.439-32.694-1.057-49.146 5.707-28.053 18.388-52.942 34.24-76.565 1.692-2.531 3.171-5.063 4.862-7.805 0-.21-.211-.632-.634-1.265-4.65 1.265-9.511 2.53-14.161 3.585-2.537.422-5.496.422-8.032-.421-1.48-.422-3.593-2.742-3.593-4.219 0-1.898 1.48-4.218 2.747-5.906 1.057-1.054 2.96-1.265 4.65-1.687C35.406 7.315 48.088 3.729 60.98.776c10.99-2.53 14.584 1.055 13.95 11.812-.634 11.18-.846 22.358-1.268 33.326-.212 3.375-.846 6.96-1.268 10.757-8.878-4.007-8.878-4.007-12.048-38.177C47.03 33.259 38.153 49.289 29.91 65.741 21.667 82.193 16.17 99.49 13.212 117.84c-2.959 18.984.634 36.912 6.975 57.161Z"
            />
          </g>
          <defs>
            <clipPath id="abc">
              <path fill="currentColor" d="M0 0h75v175H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function TooltipDemo({
  indicator = 'dot',
  label,
  payload,
  hideLabel,
  hideIndicator,
  className,
}: {
  label: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  payload: {
    name: string
    value: number
    fill: string
  }[]
  nameKey?: string
  labelKey?: string
} & React.ComponentProps<'div'>) {
  const tooltipLabel = hideLabel ? null : <div className="font-medium">{label}</div>

  if (!payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'

  return (
    <div
      className={cn(
        'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl transition-all ease-in-out hover:-translate-y-0.5',
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const indicatorColor = item.fill

          return (
            <div
              key={index}
              className={cn(
                'flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                indicator === 'dot' && 'items-center'
              )}
            >
              <>
                {!hideIndicator && (
                  <div
                    className={cn(
                      'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                      {
                        'h-2.5 w-2.5': indicator === 'dot',
                        'w-1': indicator === 'line',
                        'w-0 border-[1.5px] border-dashed bg-transparent': indicator === 'dashed',
                        'my-0.5': nestLabel && indicator === 'dashed',
                      }
                    )}
                    style={
                      {
                        '--color-bg': indicatorColor,
                        '--color-border': indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <div
                  className={cn(
                    'flex flex-1 justify-between leading-none',
                    nestLabel ? 'items-end' : 'items-center'
                  )}
                >
                  <div className="grid gap-1.5">
                    {nestLabel ? tooltipLabel : null}
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-mono font-medium tabular-nums text-foreground">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              </>
            </div>
          )
        })}
      </div>
    </div>
  )
}
```

You can turn on/off any of these using the `hideLabel`, `hideIndicator` props and customize the indicator style using the `indicator` prop.

Use `labelKey` and `nameKey` to use a custom key for the tooltip label and name.

Chart comes with the `<ChartTooltip>` and `<ChartTooltipContent>` components. You can use these two components to add custom tooltips to your chart.

```tsx
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
```

```tsx
<ChartTooltip content={<ChartTooltipContent />} />
```

### Props

Use the following props to customize the tooltip.

| Prop            | Type                     | Description                                  |
| :-------------- | :----------------------- | :------------------------------------------- |
| `labelKey`      | string                   | The config or data key to use for the label. |
| `nameKey`       | string                   | The config or data key to use for the name.  |
| `indicator`     | `dot` `line` or `dashed` | The indicator style for the tooltip.         |
| `hideLabel`     | boolean                  | Whether to hide the label.                   |
| `hideIndicator` | boolean                  | Whether to hide the indicator.               |

### Colors

Colors are automatically referenced from the chart config.

### Custom

To use a custom key for tooltip label and names, use the `labelKey` and `nameKey` props.

```tsx showLineNumbers /browser/
const chartData = [
  { browser: 'chrome', visitors: 187, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
]

const chartConfig = {
  visitors: {
    label: 'Total Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig
```

```tsx
<ChartTooltip content={<ChartTooltipContent labelKey="visitors" nameKey="browser" />} />
```

This will use `Total Visitors` for label and `Chrome` and `Safari` for the tooltip names.

## Legend

You can use the custom `<ChartLegend>` and `<ChartLegendContent>` components to add a legend to your chart.

```tsx
import { ChartLegend, ChartLegendContent } from '@/components/ui/chart'
```

```tsx
<ChartLegend content={<ChartLegendContent />} />
```

### Colors

Colors are automatically referenced from the chart config.

### Custom

To use a custom key for legend names, use the `nameKey` prop.

```tsx showLineNumbers /browser/
const chartData = [
  { browser: 'chrome', visitors: 187, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
]

const chartConfig = {
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig
```

```tsx
<ChartLegend content={<ChartLegendContent nameKey="browser" />} />
```

This will use `Chrome` and `Safari` for the legend names.

## Accessibility

You can turn on the `accessibilityLayer` prop to add an accessible layer to your chart.

This prop adds keyboard access and screen reader support to your charts.

```tsx
<LineChart accessibilityLayer />
```

````

## .template\shadcn_guide\components_db\Checkbox.md

```markdown
---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/checkbox
  api: https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference
---

```tsx
'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className="text-sm text-muted-foreground">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
      <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm font-medium leading-none">Enable notifications</p>
          <p className="text-sm text-muted-foreground">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add checkbox
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-checkbox
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="checkbox" title="components/ui/checkbox.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox'
```

```tsx
<Checkbox />
```

````

## .template\shadcn_guide\components_db\Collapsible.md

```markdown
---
title: Collapsible
description: An interactive component which expands/collapses a panel.
component: true
featured: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/collapsible
  api: https://www.radix-ui.com/docs/primitives/components/collapsible#api-reference
---

```tsx
'use client'

import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add collapsible
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-collapsible
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="collapsible" title="components/ui/collapsible.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
```

```tsx showLineNumbers
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </CollapsibleContent>
</Collapsible>
```

````

## .template\shadcn_guide\components_db\Combobox.md

```markdown
---
title: Combobox
description: Autocomplete input and command palette with a list of suggestions.
component: true
---

```tsx
'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
````

## Installation

The Combobox is built using a composition of the `<Popover />` and the `<Command />` components.

See installation instructions for the [Popover](/docs/components/popover#installation) and the [Command](/docs/components/command#installation) components.

## Usage

<CodeCollapsibleWrapper>

```tsx showLineNumbers title="components/example-combobox.tsx"
'use client'

import * as React from 'react'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function ExampleCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
```

</CodeCollapsibleWrapper>

## Examples

### Combobox

```tsx
'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
```

### Popover

```tsx
'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
]

export function ComboboxPopover() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Status</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) || null
                      )
                      setOpen(false)
                    }}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Dropdown menu

```tsx
'use client'

import * as React from 'react'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const labels = [
  'feature',
  'bug',
  'enhancement',
  'documentation',
  'design',
  'question',
  'maintenance',
]

export function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState('feature')
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
          {label}
        </span>
        <span className="text-muted-foreground">Create a new project</span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>Assign to...</DropdownMenuItem>
            <DropdownMenuItem>Set due date...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput placeholder="Filter label..." autoFocus={true} className="h-9" />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                        >
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

### Responsive

You can create a responsive combobox by using the `<Popover />` on desktop and the `<Drawer />` components on mobile.

```tsx
'use client'

import * as React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
]

export function ComboBoxResponsive() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Status | null) => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(statuses.find((priority) => priority.value === value) || null)
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```

````

## .template\shadcn_guide\components_db\Command.md

```markdown
---
title: Command
description: Fast, composable, unstyled command menu for React.
component: true
links:
  doc: https://cmdk.paco.me
---

```tsx
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
````

## About

The `<Command />` component uses the [`cmdk`](https://cmdk.paco.me) component by [pacocoursey](https://twitter.com/pacocoursey).

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add command
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install cmdk
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="command" title="components/ui/command.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
```

```tsx showLineNumbers
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## Examples

### Dialog

```tsx
'use client'

import * as React from 'react'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
```

To show the command menu in a dialog, use the `<CommandDialog />` component.

```tsx showLineNumbers title="components/example-command-menu.tsx"
export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

### Combobox

You can use the `<Command />` component as a combobox. See the [Combobox](/docs/components/combobox) page for more information.

````

## .template\shadcn_guide\components_db\Components_General.md

```markdown
---
title: Components
description: Here you can find all the components available in the library. We are working on adding more components.
---

<ComponentsList />

---

Can't find what you need? Try the [registry directory](/docs/directory) for community-maintained components.

````

## .template\shadcn_guide\components_db\Context_Menu.md

````markdown
---
title: Context Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/context-menu
  api: https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference
---

```tsx
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Save Page...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add context-menu
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-context-menu
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="context-menu" title="components/ui/context-menu.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
```

```tsx showLineNumbers
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

````

## .template\shadcn_guide\components_db\Data_Table.md

```markdown
---
title: Data Table
description: Powerful table and datagrids built using TanStack Table.
component: true
links:
  doc: https://tanstack.com/table/v8/docs/introduction
---

```tsx
'use client'

import * as React from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@example.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@example.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@example.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@example.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@example.com',
  },
]

export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
````

## Introduction

Every data table or datagrid I've created has been unique. They all behave differently, have specific sorting and filtering requirements, and work with different data sources.

It doesn't make sense to combine all of these variations into a single component. If we do that, we'll lose the flexibility that [headless UI](https://tanstack.com/table/v8/docs/introduction#what-is-headless-ui) provides.

So instead of a data-table component, I thought it would be more helpful to provide a guide on how to build your own.

We'll start with the basic `<Table />` component and build a complex data table from scratch.

<Callout className="mt-4">

**Tip:** If you find yourself using the same table in multiple places in your app, you can always extract it into a reusable component.

</Callout>

## Table of Contents

This guide will show you how to use [TanStack Table](https://tanstack.com/table) and the `<Table />` component to build your own custom data table. We'll cover the following topics:

- [Basic Table](#basic-table)
- [Row Actions](#row-actions)
- [Pagination](#pagination)
- [Sorting](#sorting)
- [Filtering](#filtering)
- [Visibility](#visibility)
- [Row Selection](#row-selection)
- [Reusable Components](#reusable-components)

## Installation

1. Add the `<Table />` component to your project:

```bash
npx shadcn@latest add table
```

2. Add `tanstack/react-table` dependency:

```bash
npm install @tanstack/react-table
```

## Prerequisites

We are going to build a table to show recent payments. Here's what our data looks like:

```tsx showLineNumbers
type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
]
```

## Project Structure

Start by creating the following file structure:

```txt
app
└── payments
    ├── columns.tsx
    ├── data-table.tsx
    └── page.tsx
```

I'm using a Next.js example here but this works for any other React framework.

- `columns.tsx` (client component) will contain our column definitions.
- `data-table.tsx` (client component) will contain our `<DataTable />` component.
- `page.tsx` (server component) is where we'll fetch data and render our table.

## Basic Table

Let's start by building a basic table.

<Steps>

### Column Definitions

First, we'll define our columns.

```tsx showLineNumbers title="app/payments/columns.tsx" {3,14-27}
'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
]
```

<Callout className="mt-4">

**Note:** Columns are where you define the core of what your table
will look like. They define the data that will be displayed, how it will be
formatted, sorted and filtered.

</Callout>

### `<DataTable />` component

Next, we'll create a `<DataTable />` component to render our table.

```tsx showLineNumbers title="app/payments/data-table.tsx"
'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

<Callout>

**Tip**: If you find yourself using `<DataTable />` in multiple places, this is the component you could make reusable by extracting it to `components/ui/data-table.tsx`.

`<DataTable columns={columns} data={data} />`

</Callout>

### Render the table

Finally, we'll render our table in our page component.

```tsx showLineNumbers title="app/payments/page.tsx" {22}
import { columns, Payment } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

</Steps>

## Cell Formatting

Let's format the amount cell to display the dollar amount. We'll also align the cell to the right.

<Steps>

### Update columns definition

Update the `header` and `cell` definitions for amount as follows:

```tsx showLineNumbers title="app/payments/columns.tsx" {4-15}
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
```

You can use the same approach to format other cells and headers.

</Steps>

## Row Actions

Let's add row actions to our table. We'll use a `<Dropdown />` component for this.

<Steps>

### Update columns definition

Update our columns definition to add a new `actions` column. The `actions` cell returns a `<Dropdown />` component.

```tsx showLineNumbers title="app/payments/columns.tsx" {4,6-14,18-45}
'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // ...
]
```

You can access the row data using `row.original` in the `cell` function. Use this to handle actions for your row eg. use the `id` to make a DELETE call to your API.

</Steps>

## Pagination

Next, we'll add pagination to our table.

<Steps>

### Update `<DataTable>`

```tsx showLineNumbers title="app/payments/data-table.tsx" {5,17}
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  // ...
}
```

This will automatically paginate your rows into pages of 10. See the [pagination docs](https://tanstack.com/table/v8/docs/api/features/pagination) for more information on customizing page size and implementing manual pagination.

### Add pagination controls

We can add pagination controls to our table using the `<Button />` component and the `table.previousPage()`, `table.nextPage()` API methods.

```tsx showLineNumbers title="app/payments/data-table.tsx" {1,15,21-39}
import { Button } from "@/components/ui/button"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          { // .... }
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
```

See [Reusable Components](#reusable-components) section for a more advanced pagination component.

</Steps>

## Sorting

Let's make the email column sortable.

<Steps>

### Update `<DataTable>`

```tsx showLineNumbers title="app/payments/data-table.tsx" showLineNumbers {3,6,10,18,25-28}
"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div>
      <div className="overflow-hidden rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

### Make header cell sortable

We can now update the `email` header cell to add sorting controls.

```tsx showLineNumbers title="app/payments/columns.tsx" {4,9-19}
'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
```

This will automatically sort the table (asc and desc) when the user toggles on the header cell.

</Steps>

## Filtering

Let's add a search input to filter emails in our table.

<Steps>

### Update `<DataTable>`

```tsx showLineNumbers title="app/payments/data-table.tsx" {6,10,17,24-26,35-36,39,45-54}
"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

Filtering is now enabled for the `email` column. You can add filters to other columns as well. See the [filtering docs](https://tanstack.com/table/v8/docs/guide/filters) for more information on customizing filters.

</Steps>

## Visibility

Adding column visibility is fairly simple using `@tanstack/react-table` visibility API.

<Steps>

### Update `<DataTable>`

```tsx showLineNumbers title="app/payments/data-table.tsx" {8,18-23,33-34,45,49,64-91}
"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

This adds a dropdown menu that you can use to toggle column visibility.

</Steps>

## Row Selection

Next, we're going to add row selection to our table.

<Steps>

### Update column definitions

```tsx showLineNumbers title="app/payments/columns.tsx" {6,9-27}
'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
]
```

### Update `<DataTable>`

```tsx showLineNumbers title="app/payments/data-table.tsx" {11,23,28}
export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="overflow-hidden rounded-md border">
        <Table />
      </div>
    </div>
  )
}
```

This adds a checkbox to each row and a checkbox in the header to select all rows.

### Show selected rows

You can show the number of selected rows using the `table.getFilteredSelectedRowModel()` API.

```tsx
<div className="flex-1 text-sm text-muted-foreground">
  {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length}{' '}
  row(s) selected.
</div>
```

</Steps>

## Reusable Components

Here are some components you can use to build your data tables. This is from the [Tasks](/examples/tasks) demo.

### Column header

Make any column header sortable and hideable.

<ComponentSource
  src="/app/(app)/examples/tasks/components/data-table-column-header.tsx"
  title="components/data-table-column-header.tsx"
/>

```tsx showLineNumbers {5}
export const columns = [
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },
]
```

### Pagination

Add pagination controls to your table including page size and selection count.

<ComponentSource src="/app/(app)/examples/tasks/components/data-table-pagination.tsx" />

```tsx
<DataTablePagination table={table} />
```

### Column toggle

A component to toggle column visibility.

<ComponentSource src="/app/(app)/examples/tasks/components/data-table-view-options.tsx" />

```tsx
<DataTableViewOptions table={table} />
```

````

## .template\shadcn_guide\components_db\Date_Picker.md

```markdown
---
title: Date Picker
description: A date picker component with range and presets.
component: true
---

```tsx
'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function Calendar22() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : 'Select date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
````

## Installation

The Date Picker is built using a composition of the `<Popover />` and the `<Calendar />` components.

See installation instructions for the [Popover](/docs/components/popover#installation) and the [Calendar](/docs/components/calendar#installation) components.

## Usage

```tsx showLineNumbers title="components/example-date-picker.tsx"
'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}
```

See the [React DayPicker](https://react-day-picker.js.org) documentation for more information.

## Examples

### Date of Birth Picker

```tsx
'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function Calendar22() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : 'Select date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
```

### Picker with Input

```tsx
'use client'

import * as React from 'react'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

function formatDate(date: Date | undefined) {
  if (!date) {
    return ''
  }

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

export function Calendar28() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date('2025-06-01'))
  const [month, setMonth] = React.useState<Date | undefined>(date)
  const [value, setValue] = React.useState(formatDate(date))

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Subscription Date
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="June 01, 2025"
          className="bg-background pr-10"
          onChange={(e) => {
            const date = new Date(e.target.value)
            setValue(e.target.value)
            if (isValidDate(date)) {
              setDate(date)
              setMonth(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute right-2 top-1/2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
```

### Date and Time Picker

```tsx
'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function Calendar24() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
              {date ? date.toLocaleDateString() : 'Select date'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  )
}
```

### Natural Language Picker

This component uses the `chrono-node` library to parse natural language dates.

```tsx
'use client'

import * as React from 'react'
import { parseDate } from 'chrono-node'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

function formatDate(date: Date | undefined) {
  if (!date) {
    return ''
  }

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function Calendar29() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('In 2 days')
  const [date, setDate] = React.useState<Date | undefined>(parseDate(value) || undefined)
  const [month, setMonth] = React.useState<Date | undefined>(date)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Schedule Date
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="Tomorrow or next week"
          className="bg-background pr-10"
          onChange={(e) => {
            setValue(e.target.value)
            const date = parseDate(e.target.value)
            if (date) {
              setDate(date)
              setMonth(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute right-2 top-1/2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="px-1 text-sm text-muted-foreground">
        Your post will be published on <span className="font-medium">{formatDate(date)}</span>.
      </div>
    </div>
  )
}
```

````

## .template\shadcn_guide\components_db\Dialog.md

```markdown
---
title: Dialog
description: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
featured: true
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/dialog
  api: https://www.radix-ui.com/docs/primitives/components/dialog#api-reference
---

```tsx
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add dialog
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-dialog
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="dialog" title="components/ui/dialog.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
```

```tsx showLineNumbers
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

## Examples

### Custom close button

```tsx
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

## Notes

To use the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or
`Dropdown Menu` component in the `Dialog` component.

```tsx showLineNumbers title="components/example-dialog-context-menu.tsx" {1, 26}
<Dialog>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Open</ContextMenuItem>
      <ContextMenuItem>Download</ContextMenuItem>
      <DialogTrigger asChild>
        <ContextMenuItem>
          <span>Delete</span>
        </ContextMenuItem>
      </DialogTrigger>
    </ContextMenuContent>
  </ContextMenu>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to permanently delete this file from our
        servers?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

````

## .template\shadcn_guide\components_db\Drawer.md

```markdown
---
title: Drawer
description: A drawer component for React.
component: true
links:
  doc: https://vaul.emilkowal.ski/getting-started
---

```tsx
'use client'

import * as React from 'react'
import { Minus, Plus } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">{goal}</div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: 'hsl(var(--foreground))',
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
````

## About

Drawer is built on top of [Vaul](https://github.com/emilkowalski/vaul) by [emilkowalski](https://twitter.com/emilkowalski).

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add drawer
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install vaul
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="drawer" title="components/ui/drawer.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
```

```tsx showLineNumbers
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## Examples

### Responsive Dialog

You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` component on desktop and a `Drawer` on mobile.

```tsx
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-6', className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
```

````

## .template\shadcn_guide\components_db\Dropdown_Menu.md

```markdown
---
title: Dropdown Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
featured: true
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/dropdown-menu
  api: https://www.radix-ui.com/docs/primitives/components/dropdown-menu#api-reference
---

```tsx
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add dropdown-menu
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-dropdown-menu
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="dropdown-menu" title="components/ui/dropdown-menu.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
```

```tsx showLineNumbers
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Examples

### Checkboxes

```tsx
'use client'

import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Checked = DropdownMenuCheckboxItemProps['checked']

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Radio Group

```tsx
'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState('bottom')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Dialog

This example shows how to open a dialog from a dropdown menu.

Use `modal={false}` on the `DropdownMenu` component.

```tsx showLineNumbers
<DropdownMenu modal={false}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
</DropdownMenu>
```

```tsx
'use client'

import { useState } from 'react'
import { MoreHorizontalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function DropdownMenuDialog() {
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>File Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>New File...</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>Share...</DropdownMenuItem>
            <DropdownMenuItem disabled>Download</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              Provide a name for your new file. Click create when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="pb-3">
            <Field>
              <FieldLabel htmlFor="filename">File Name</FieldLabel>
              <Input id="filename" name="filename" placeholder="document.txt" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share File</DialogTitle>
            <DialogDescription>
              Anyone with the link will be able to view this file.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="py-3">
            <Field>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="shadcn@vercel.com"
                autoComplete="off"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message (Optional)</FieldLabel>
              <Textarea id="message" name="message" placeholder="Check out this file" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send Invite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

````

## .template\shadcn_guide\components_db\Empty.md

```markdown
---
title: Empty
description: Use the Empty component to display an empty state.
component: true
---

```tsx
import { IconFolderCode } from '@tabler/icons-react'
import { ArrowUpRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
      </EmptyContent>
      <Button variant="link" asChild className="text-muted-foreground" size="sm">
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add empty
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="empty" title="components/ui/empty.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
```

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>
```

## Examples

### Outline

Use the `border` utility class to create an outline empty state.

```tsx
import { IconCloud } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

### Background

Use the `bg-*` and `bg-gradient-*` utilities to add a background to the empty state.

```tsx
import { IconBell } from '@tabler/icons-react'
import { RefreshCcwIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function EmptyMuted() {
  return (
    <Empty className="h-full bg-gradient-to-b from-muted/50 from-30% to-background">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <RefreshCcwIcon />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

### Avatar

Use the `EmptyMedia` component to display an avatar in the empty state.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function EmptyAvatar() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/shadcn.png" className="grayscale" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>
          This user is currently offline. You can leave a message to notify them or try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Leave Message</Button>
      </EmptyContent>
    </Empty>
  )
}
```

### Avatar Group

Use the `EmptyMedia` component to display an avatar group in the empty state.

```tsx
import { PlusIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function EmptyAvatarGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

### InputGroup

You can add an `InputGroup` component to the `EmptyContent` component.

```tsx
import { SearchIcon } from 'lucide-react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'

export function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
          below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
```

## API Reference

### Empty

The main component of the empty state. Wraps the `EmptyHeader` and `EmptyContent` components.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<Empty>
  <EmptyHeader />
  <EmptyContent />
</Empty>
```

### EmptyHeader

The `EmptyHeader` component wraps the empty media, title, and description.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<EmptyHeader>
  <EmptyMedia />
  <EmptyTitle />
  <EmptyDescription />
</EmptyHeader>
```

### EmptyMedia

Use the `EmptyMedia` component to display the media of the empty state such as an icon or an image. You can also use it to display other components such as an avatar.

| Prop        | Type                  | Default   |
| ----------- | --------------------- | --------- |
| `variant`   | `"default" \| "icon"` | `default` |
| `className` | `string`              |           |

```tsx
<EmptyMedia variant="icon">
  <Icon />
</EmptyMedia>
```

```tsx
<EmptyMedia>
  <Avatar>
    <AvatarImage src="..." />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</EmptyMedia>
```

### EmptyTitle

Use the `EmptyTitle` component to display the title of the empty state.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<EmptyTitle>No data</EmptyTitle>
```

### EmptyDescription

Use the `EmptyDescription` component to display the description of the empty state.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<EmptyDescription>You do not have any notifications.</EmptyDescription>
```

### EmptyContent

Use the `EmptyContent` component to display the content of the empty state such as a button, input or a link.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<EmptyContent>
  <Button>Add Project</Button>
</EmptyContent>
```

````

## .template\shadcn_guide\components_db\Field.md

```markdown
---
title: Field
description: Combine labels, controls, and help text to compose accessible form fields and grouped inputs.
component: true
---

```tsx
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>All transactions are secure and encrypted</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">Name on Card</FieldLabel>
                <Input id="checkout-7j9-card-name-43j" placeholder="Evil Rabbit" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Card Number</FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>Enter your 16-digit card number</FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">Month</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">Year</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox id="checkout-7j9-same-as-shipping-wgm" defaultChecked />
                <FieldLabel htmlFor="checkout-7j9-same-as-shipping-wgm" className="font-normal">
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">Comments</FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add field
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="field" title="components/ui/field.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
```

```tsx showLineNumbers
<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldDescription>This appears on invoices and emails.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>This appears on invoices and emails.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
    <Field orientation="horizontal">
      <Switch id="newsletter" />
      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
```

## Anatomy

The `Field` family is designed for composing accessible forms. A typical field is structured as follows:

```tsx showLineNumbers
<Field>
  <FieldLabel htmlFor="input-id">Label</FieldLabel>
  {/* Input, Select, Switch, etc. */}
  <FieldDescription>Optional helper text.</FieldDescription>
  <FieldError>Validation message.</FieldError>
</Field>
```

- `Field` is the core wrapper for a single field.
- `FieldContent` is a flex column that groups label and description. Not required if you have no description.
- Wrap related fields with `FieldGroup`, and use `FieldSet` with `FieldLegend` for semantic grouping.

## Form

See the [Form](/docs/forms) documentation for building forms with the `Field` component and [React Hook Form](/docs/forms/react-hook-form) or [Tanstack Form](/docs/forms/tanstack-form).

## Examples

### Input

```tsx
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function FieldInput() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>Choose a unique username for your account.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>Must be at least 8 characters long.</FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

### Textarea

```tsx
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'

export function FieldTextarea() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
            <FieldDescription>Share your thoughts about our service.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

### Select

```tsx
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function FieldSelect() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel>Department</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Customer Support</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Select your department or area of work.</FieldDescription>
      </Field>
    </div>
  )
}
```

### Slider

```tsx
'use client'

import { useState } from 'react'

import { Field, FieldDescription, FieldTitle } from '@/components/ui/field'
import { Slider } from '@/components/ui/slider'

export function FieldSlider() {
  const [value, setValue] = useState([200, 800])
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>Price Range</FieldTitle>
        <FieldDescription>
          Set your budget range ($
          <span className="font-medium tabular-nums">{value[0]}</span> -{' '}
          <span className="font-medium tabular-nums">{value[1]}</span>).
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="Price Range"
        />
      </Field>
    </div>
  )
}
```

### Fieldset

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function FieldFieldset() {
  return (
    <div className="w-full max-w-md space-y-6">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>We need your address to deliver your order.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

### Checkbox

```tsx
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'

export function FieldCheckbox() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
                defaultChecked
              >
                Hard disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel htmlFor="finder-pref-9k2-external-disks-1yg" className="font-normal">
                External disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel htmlFor="finder-pref-9k2-cds-dvds-fzt" className="font-normal">
                CDs, DVDs, and iPods
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel htmlFor="finder-pref-9k2-connected-servers-6l2" className="font-normal">
                Connected servers
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud Drive. You can access
              them from other devices.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

### Radio

```tsx
import { Field, FieldDescription, FieldLabel, FieldSet } from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function FieldRadio() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <FieldLabel htmlFor="plan-monthly" className="font-normal">
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <FieldLabel htmlFor="plan-yearly" className="font-normal">
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="plan-lifetime" />
            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
```

### Switch

```tsx
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

export function FieldSwitch() {
  return (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor device, you can use
            a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
    </div>
  )
}
```

### Choice Card

Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioItem`, `Checkbox` and `Switch` components.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function FieldChoiceCard() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor="compute-environment-p8w">Compute Environment</FieldLabel>
          <FieldDescription>Select the compute environment for your cluster.</FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    Run GPU workloads on a K8s configured cluster.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>
                    Access a VM configured cluster to run GPU workloads.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="vm" id="vm-z4k" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
```

### Field Group

Stack `Field` components with `FieldGroup`. Add `FieldSeparator` to divide them.

```tsx
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'

export function FieldGroupExample() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel>Responses</FieldLabel>
          <FieldDescription>
            Get notified when ChatGPT responds to requests that take time, like research or image
            generation.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push" defaultChecked disabled />
              <FieldLabel htmlFor="push" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>Tasks</FieldLabel>
          <FieldDescription>
            Get notified when tasks you&apos;ve created have updates. <a href="#">Manage tasks</a>
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push-tasks" />
              <FieldLabel htmlFor="push-tasks" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="email-tasks" />
              <FieldLabel htmlFor="email-tasks" className="font-normal">
                Email notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
```

## Responsive Layout

- **Vertical fields:** Default orientation stacks label, control, and helper text—ideal for mobile-first layouts.
- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `FieldContent` to keep descriptions aligned.
- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `FieldGroup` to switch orientations at specific breakpoints.

```tsx
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function FieldResponsive() {
  return (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>Provide your full name for identification</FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="lastName">Message</FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="Hello, world!"
                required
                className="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
```

## Validation and Errors

- Add `data-invalid` to `Field` to switch the entire block into an error state.
- Add `aria-invalid` on the input itself for assistive technologies.
- Render `FieldError` immediately after the control or inside `FieldContent` to keep error messages aligned with the field.

```tsx showLineNumbers /data-invalid/ /aria-invalid/
<Field data-invalid>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" aria-invalid />
  <FieldError>Enter a valid email address.</FieldError>
</Field>
```

## Accessibility

- `FieldSet` and `FieldLegend` keep related controls grouped for keyboard and assistive tech users.
- `Field` outputs `role="group"` so nested controls inherit labeling from `FieldLabel` and `FieldLegend` when combined.
- Apply `FieldSeparator` sparingly to ensure screen readers encounter clear section boundaries.

## API Reference

### FieldSet

Container that renders a semantic `fieldset` with spacing presets.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<FieldSet>
  <FieldLegend>Delivery</FieldLegend>
  <FieldGroup>{/* Fields */}</FieldGroup>
</FieldSet>
```

### FieldLegend

Legend element for a `FieldSet`. Switch to the `label` variant to align with label sizing.

| Prop        | Type                  | Default    |
| ----------- | --------------------- | ---------- |
| `variant`   | `"legend" \| "label"` | `"legend"` |
| `className` | `string`              |            |

```tsx
<FieldLegend variant="label">Notification Preferences</FieldLegend>
```

The `FieldLegend` has two variants: `legend` and `label`. The `label` variant applies label sizing and alignment. Handy if you have nested `FieldSet`.

### FieldGroup

Layout wrapper that stacks `Field` components and enables container queries for responsive orientations.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<FieldGroup className="@container/field-group flex flex-col gap-6">
  <Field>{/* ... */}</Field>
  <Field>{/* ... */}</Field>
</FieldGroup>
```

### Field

The core wrapper for a single field. Provides orientation control, invalid state styling, and spacing.

| Prop           | Type                                         | Default      |
| -------------- | -------------------------------------------- | ------------ |
| `orientation`  | `"vertical" \| "horizontal" \| "responsive"` | `"vertical"` |
| `className`    | `string`                                     |              |
| `data-invalid` | `boolean`                                    |              |

```tsx
<Field orientation="horizontal">
  <FieldLabel htmlFor="remember">Remember me</FieldLabel>
  <Switch id="remember" />
</Field>
```

### FieldContent

Flex column that groups control and descriptions when the label sits beside the control. Not required if you have no description.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<Field>
  <Checkbox id="notifications" />
  <FieldContent>
    <FieldLabel htmlFor="notifications">Notifications</FieldLabel>
    <FieldDescription>Email, SMS, and push options.</FieldDescription>
  </FieldContent>
</Field>
```

### FieldLabel

Label styled for both direct inputs and nested `Field` children.

| Prop        | Type      | Default |
| ----------- | --------- | ------- |
| `className` | `string`  |         |
| `asChild`   | `boolean` | `false` |

```tsx
<FieldLabel htmlFor="email">Email</FieldLabel>
```

### FieldTitle

Renders a title with label styling inside `FieldContent`.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<FieldContent>
  <FieldTitle>Enable Touch ID</FieldTitle>
  <FieldDescription>Unlock your device faster.</FieldDescription>
</FieldContent>
```

### FieldDescription

Helper text slot that automatically balances long lines in horizontal layouts.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<FieldDescription>We never share your email with anyone.</FieldDescription>
```

### FieldSeparator

Visual divider to separate sections inside a `FieldGroup`. Accepts optional inline content.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<FieldSeparator>Or continue with</FieldSeparator>
```

### FieldError

Accessible error container that accepts children or an `errors` array (e.g., from `react-hook-form`).

| Prop        | Type                                       | Default |
| ----------- | ------------------------------------------ | ------- |
| `errors`    | `Array<{ message?: string } \| undefined>` |         |
| `className` | `string`                                   |         |

```tsx
<FieldError errors={errors.username} />
```

When the `errors` array contains multiple messages, the component renders a list automatically.

`FieldError` also accepts issues produced by any validator that implements [Standard Schema](https://standardschema.dev/), including Zod, Valibot, and ArkType. Pass the `issues` array from the schema result directly to render a unified error list across libraries.

````

## .template\shadcn_guide\components_db\Form.md

```markdown
---
title: Form
description: Building forms with React Hook Form and Zod.
links:
  doc: https://react-hook-form.com
---

import { InfoIcon } from "lucide-react"

<Callout icon={<InfoIcon />} title="We are not actively developing this component anymore.">

The Form component is an abstraction over the `react-hook-form` library. Going forward, we recommend using the [`<Field />`](/docs/components/field) component to build forms. See the [Form](/docs/forms) documentation for more information.

</Callout>

Forms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex.

Well-designed HTML forms are:

- Well-structured and semantically correct.
- Easy to use and navigate (keyboard).
- Accessible with ARIA attributes and proper labels.
- Has support for client and server side validation.
- Well-styled and consistent with the rest of the application.

In this guide, we will take a look at building forms with [`react-hook-form`](https://react-hook-form.com/) and [`zod`](https://zod.dev). We're going to use a `<FormField>` component to compose accessible forms using Radix UI components.

## Features

The `<Form />` component is a wrapper around the `react-hook-form` library. It provides a few things:

- Composable components for building forms.
- A `<FormField />` component for building controlled form fields.
- Form validation using `zod`.
- Handles accessibility and error messages.
- Uses `React.useId()` for generating unique IDs.
- Applies the correct `aria` attributes to form fields based on states.
- Built to work with all Radix UI components.
- Bring your own schema library. We use `zod` but you can use anything you want.
- **You have full control over the markup and styling.**

## Anatomy

```tsx showLineNumbers
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
````

## Example

```tsx showLineNumbers
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<Steps>

### Command

```bash
npx shadcn@latest add form
```

</Steps>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="form" title="components/ui/form.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

### Create a form schema

Define the shape of your form using a Zod schema. You can read more about using Zod in the [Zod documentation](https://zod.dev).

```tsx showLineNumbers title="components/example-form.tsx" {3,5-7}
'use client'

import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
```

### Define a form

Use the `useForm` hook from `react-hook-form` to create a form.

```tsx showLineNumbers title="components/example-form.tsx" {3-4,14-20,22-27}
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
}
```

Since `FormField` is using a controlled component, you need to provide a default value for the field. See the [React Hook Form docs](https://react-hook-form.com/docs/usecontroller) to learn more about controlled components.

### Build your form

We can now use the `<Form />` components to build our form.

```tsx showLineNumbers title="components/example-form.tsx" {7-17,28-50}
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Done

That's it. You now have a fully accessible form that is type-safe with client-side validation.

````

## .template\shadcn_guide\components_db\Hover_Card.md

```markdown
---
title: Hover Card
description: For sighted users to preview content available behind a link.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/hover-card
  api: https://www.radix-ui.com/docs/primitives/components/hover-card#api-reference
---

```tsx
import { CalendarIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="text-xs text-muted-foreground">Joined December 2021</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add hover-card
```

</TabsContent>

<TabsContent value="manual">

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-hover-card
```

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="hover-card" title="components/ui/hover-card.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
```

```tsx showLineNumbers
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
</HoverCard>
```

````

## .template\shadcn_guide\components_db\Input.md

```markdown
---
title: Input
description: Displays a form input field or a component that looks like an input field.
component: true
---

```tsx
import { Input } from '@/components/ui/input'

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add input
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="input" title="components/ui/input.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Input } from '@/components/ui/input'
```

```tsx
<Input />
```

## Examples

### Default

```tsx
import { Input } from '@/components/ui/input'

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}
```

### File

```tsx
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
```

### Disabled

```tsx
import { Input } from '@/components/ui/input'

export function InputDisabled() {
  return <Input disabled type="email" placeholder="Email" />
}
```

### With Label

```tsx
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
```

### With Button

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  )
}
```

## Changelog

### 2025-09-18 Remove `flex` class

Edit `input.tsx` and remove the `flex` class from the input component. This is no longer needed.

````

## .template\shadcn_guide\components_db\Input_Group.md

```markdown
---
title: Input Group
description: Display additional information or actions to an input or textarea.
component: true
---

import { IconInfoCircle } from "@tabler/icons-react"

```tsx
import { IconCheck, IconInfoCircle, IconPlus } from '@tabler/icons-react'
import { ArrowUpIcon, Search } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="!pl-1" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton variant="outline" className="rounded-full" size="icon-xs">
            <IconPlus />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start" className="[--radius:0.95rem]">
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroupButton variant="default" className="rounded-full" size="icon-xs" disabled>
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <IconCheck className="size-3" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add input-group
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="input-group" title="components/ui/input-group.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
```

```tsx showLineNumbers
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

## Examples

### Icon

```tsx
import { CheckIcon, CreditCardIcon, InfoIcon, MailIcon, SearchIcon, StarIcon } from 'lucide-react'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

export function InputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Text

Display additional text information alongside inputs.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'

export function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs text-muted-foreground">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Button

Add buttons to perform actions within the input group.

```tsx
'use client'

import * as React from 'react'
import { IconCheck, IconCopy, IconInfoCircle, IconStar } from '@tabler/icons-react'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              copyToClipboard('https://x.com/shadcn')
            }}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="secondary" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent align="start" className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">https://</InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setIsFavorite(!isFavorite)} size="icon-xs">
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Tooltip

Add tooltips to provide additional context or help.

```tsx
import { HelpCircle, InfoIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton variant="ghost" aria-label="Info" size="icon-xs">
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Password must be at least 8 characters</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
                <HelpCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter API key" />
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
                <HelpCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Click for help with API keys</p>
          </TooltipContent>
        </Tooltip>
      </InputGroup>
    </div>
  )
}
```

### Textarea

Input groups also work with textarea components. Use `block-start` or `block-end` for alignment.

```tsx
import { IconBrandJavascript, IconCopy, IconCornerDownLeft, IconRefresh } from '@tabler/icons-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'

export function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Spinner

Show loading indicators while processing input.

```tsx
import { LoaderIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'

export function InputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Searching..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Processing..." disabled />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Saving changes..." disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Refreshing data..." disabled />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">Please wait...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Label

Add labels within input groups to improve accessibility.

```tsx
import { InfoIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function InputGroupLabel() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput id="email" placeholder="shadcn" />
        <InputGroupAddon>
          <Label htmlFor="email">@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email-2" className="text-foreground">
            Email
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                className="ml-auto rounded-full"
                size="icon-xs"
              >
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Dropdown

Pair input groups with dropdown menus for complex interactions.

```tsx
import { ChevronDownIcon, MoreHorizontal } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

export function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" aria-label="More" size="icon-xs">
                <MoreHorizontal />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Copy path</DropdownMenuItem>
              <DropdownMenuItem>Open location</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
                Search In... <ChevronDownIcon className="size-3" />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Blog Posts</DropdownMenuItem>
              <DropdownMenuItem>Changelog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Button Group

Wrap input groups with button groups to create prefixes and suffixes.

```tsx
import { Link2Icon } from 'lucide-react'

import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <Link2Icon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
```

### Custom Input

Add the `data-slot="input-group-control"` attribute to your custom input for automatic behavior and focus state handling.

No style is applied to the custom input. Apply your own styles using the `className` prop.

```tsx
'use client'

import TextareaAutosize from 'react-textarea-autosize'

import { InputGroup, InputGroupAddon, InputGroupButton } from '@/components/ui/input-group'

export function InputGroupCustom() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <TextareaAutosize
          data-slot="input-group-control"
          className="field-sizing-content flex min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base outline-none transition-[color,box-shadow] md:text-sm"
          placeholder="Autoresize textarea..."
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            Submit
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

```tsx showLineNumbers
import { InputGroup, InputGroupAddon } from '@/component/ui/input-group'
import TextareaAutosize from 'react-textarea-autosize'

export function InputGroupCustom() {
  return (
    <InputGroup>
      <TextareaAutosize
        data-slot="input-group-control"
        className="field-sizing-content flex min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] dark:bg-input/30"
        placeholder="Autoresize textarea..."
      />
      <InputGroupAddon align="block-end">how</InputGroupAddon>
    </InputGroup>
  )
}
```

## API Reference

### InputGroup

The main component that wraps inputs and addons.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<InputGroup>
  <InputGroupInput />
  <InputGroupAddon />
</InputGroup>
```

### InputGroupAddon

Displays icons, text, buttons, or other content alongside inputs.

<Callout icon={<IconInfoCircle />} title="Focus Navigation">
For proper focus navigation, the `InputGroupAddon` component should be placed
after the input. Set the `align` prop to position the addon.
</Callout>

| Prop        | Type                                                             | Default          |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| `align`     | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` |
| `className` | `string`                                                         |                  |

```tsx
<InputGroupAddon align="inline-end">
  <SearchIcon />
</InputGroupAddon>
```

**For `<InputGroupInput />`, use the `inline-start` or `inline-end` alignment. For `<InputGroupTextarea />`, use the `block-start` or `block-end` alignment.**

The `InputGroupAddon` component can have multiple `InputGroupButton` components and icons.

```tsx
<InputGroupAddon>
  <InputGroupButton>Button</InputGroupButton>
  <InputGroupButton>Button</InputGroupButton>
</InputGroupAddon>
```

### InputGroupButton

Displays buttons within input groups.

| Prop        | Type                                                                          | Default   |
| ----------- | ----------------------------------------------------------------------------- | --------- |
| `size`      | `"xs" \| "icon-xs" \| "sm" \| "icon-sm"`                                      | `"xs"`    |
| `variant`   | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"ghost"` |
| `className` | `string`                                                                      |           |

```tsx
<InputGroupButton>Button</InputGroupButton>
<InputGroupButton size="icon-xs" aria-label="Copy">
  <CopyIcon />
</InputGroupButton>
```

### InputGroupInput

Replacement for `<Input />` when building input groups. This component has the input group styles pre-applied and uses the unified `data-slot="input-group-control"` for focus state handling.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

All other props are passed through to the underlying `<Input />` component.

```tsx
<InputGroup>
  <InputGroupInput placeholder="Enter text..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>
```

### InputGroupTextarea

Replacement for `<Textarea />` when building input groups. This component has the textarea group styles pre-applied and uses the unified `data-slot="input-group-control"` for focus state handling.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

All other props are passed through to the underlying `<Textarea />` component.

```tsx
<InputGroup>
  <InputGroupTextarea placeholder="Enter message..." />
  <InputGroupAddon align="block-end">
    <InputGroupButton>Send</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

## Changelog

### 2025-10-06 `InputGroup`

Add the `min-w-0` class to the `InputGroup` component. See [diff](https://github.com/shadcn-ui/ui/pull/8341/files#diff-0e2ee95d0050ca4c5d82339df86c54e14a6739dc4638fdda0eec8f73aebc2da9).

````

## .template\shadcn_guide\components_db\Input_OTP.md

```markdown
---
title: Input OTP
description: Accessible one-time password component with copy paste functionality.
component: true
links:
  doc: https://input-otp.rodz.dev
---

```tsx
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
````

## About

Input OTP is built on top of [input-otp](https://github.com/guilhermerodz/input-otp) by [@guilherme_rodz](https://twitter.com/guilherme_rodz).

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<Steps>

<Step>Run the following command:</Step>

```bash
npx shadcn@latest add input-otp
```

</Steps>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install input-otp
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="input-otp" title="components/ui/input-otp.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
```

```tsx showLineNumbers
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Examples

### Pattern

Use the `pattern` prop to define a custom pattern for the OTP input.

```tsx
'use client'

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

export function InputOTPPattern() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

```tsx showLineNumbers {1,7}
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

...

<InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

### Separator

You can use the `<InputOTPSeparator />` component to add a separator between the input groups.

```tsx
import React from 'react'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

export function InputOTPWithSeparator() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

```tsx showLineNumbers {4,15}
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

...

<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>
```

### Controlled

You can use the `value` and `onChange` props to control the input value.

```tsx
'use client'

import * as React from 'react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

export function InputOTPControlled() {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-2">
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === '' ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </div>
    </div>
  )
}
```

### Form

```tsx
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
})

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Changelog

### 2024-03-19 Composition

We've made some updates and replaced the render props pattern with composition. Here's how to update your code if you prefer the composition pattern.

<Callout className="mt-6">
  **Note:** You are not required to update your code if you are using the
  `render` prop. It is still supported.
</Callout>

<Steps>

<Step>Update to the latest version of `input-otp`.</Step>

```bash
npm install input-otp@latest
```

<Step>Update `input-otp.tsx`</Step>

```diff showLineNumbers title="input-otp.tsx" {2,8-11}
- import { OTPInput, SlotProps } from "input-otp"
+ import { OTPInput, OTPInputContext } from "input-otp"

 const InputOTPSlot = React.forwardRef<
   React.ElementRef<"div">,
-   SlotProps & React.ComponentPropsWithoutRef<"div">
-  >(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
+   React.ComponentPropsWithoutRef<"div"> & { index: number }
+  >(({ index, className, ...props }, ref) => {
+   const inputOTPContext = React.useContext(OTPInputContext)
+   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
```

<Step>Then replace the `render` prop in your code.</Step>

```diff showLineNumbers {2-12}
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

</Steps>

### 2024-03-19 Disabled

To add a disabled state to the input, update `<InputOTP />` as follows:

```tsx showLineNumbers title="input-otp.tsx" {4,7-11}
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
))
InputOTP.displayName = 'InputOTP'
```

````

## .template\shadcn_guide\components_db\Item.md

```markdown
---
title: Item
description: A versatile component that you can use to display any content.
component: true
---

The `Item` component is a straightforward flex container that can house nearly any type of content. Use it to display a title, description, and actions. Group it with the `ItemGroup` component to create a list of items.

You can pretty much achieve the same result with the `div` element and some classes, but **I've built this so many times** that I decided to create a component for it. Now I use it all the time.

```tsx
import { BadgeCheckIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add item
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="item" title="components/ui/item.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
```

```tsx showLineNumbers
<Item>
  <ItemHeader>Item Header</ItemHeader>
  <ItemMedia />
  <ItemContent>
    <ItemTitle>Item</ItemTitle>
    <ItemDescription>Item</ItemDescription>
  </ItemContent>
  <ItemActions />
  <ItemFooter>Item Footer</ItemFooter>
</Item>
```

## Item vs Field

Use `Field` if you need to display a form input such as a checkbox, input, radio, or select.

If you only need to display content such as a title, description, and actions, use `Item`.

## Examples

### Variants

```tsx
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'

export function ItemVariant() {
  return (
    <div className="flex flex-col gap-6">
      <Item>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Standard styling with subtle background and borders.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Subdued appearance with muted colors for secondary content.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

### Size

The `Item` component has different sizes for different use cases. For example, you can use the `sm` size for a compact item or the `default` size for a standard item.

```tsx
import { BadgeCheckIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

export function ItemSizeDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

### Icon

```tsx
import { ShieldAlertIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

export function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>New login detected from unknown device.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

### Avatar

```tsx
import { Plus } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

export function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon-sm" variant="outline" className="rounded-full" aria-label="Invite">
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

### Image

```tsx
import Image from 'next/image'

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

const music = [
  {
    title: 'Midnight City Lights',
    artist: 'Neon Dreams',
    album: 'Electric Nights',
    duration: '3:45',
  },
  {
    title: 'Coffee Shop Conversations',
    artist: 'The Morning Brew',
    album: 'Urban Stories',
    duration: '4:05',
  },
  {
    title: 'Digital Rain',
    artist: 'Cyber Symphony',
    album: 'Binary Beats',
    duration: '3:30',
  },
]

export function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image">
                <Image
                  src={`https://avatar.vercel.sh/${song.title}`}
                  alt={song.title}
                  width={32}
                  height={32}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {song.title} - <span className="text-muted-foreground">{song.album}</span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
```

### Group

```tsx
import * as React from 'react'
import { PlusIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

const people = [
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 'shadcn@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
]

export function ItemGroupExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup>
        {people.map((person, index) => (
          <React.Fragment key={person.username}>
            <Item>
              <ItemMedia>
                <Avatar>
                  <AvatarImage src={person.avatar} className="grayscale" />
                  <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription>{person.email}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon />
                </Button>
              </ItemActions>
            </Item>
            {index !== people.length - 1 && <ItemSeparator />}
          </React.Fragment>
        ))}
      </ItemGroup>
    </div>
  )
}
```

### Header

```tsx
import Image from 'next/image'

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from '@/components/ui/item'

const models = [
  {
    name: 'v0-1.5-sm',
    description: 'Everyday tasks and UI generation.',
    image:
      'https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop',
    credit: 'Valeria Reverdo on Unsplash',
  },
  {
    name: 'v0-1.5-lg',
    description: 'Advanced thinking or reasoning.',
    image:
      'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
    credit: 'Michael Oeser on Unsplash',
  },
  {
    name: 'v0-2.0-mini',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
]

export function ItemHeaderDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
```

### Link

To render an item as a link, use the `asChild` prop. The hover and focus states will be applied to the anchor element.

```tsx
import { ChevronRightIcon, ExternalLinkIcon } from 'lucide-react'

import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>Learn how to get started with our components.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLinkIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

```tsx showLineNumbers
<Item asChild>
  <a href="/dashboard">
    <ItemMedia />
    <ItemContent>
      <ItemTitle>Dashboard</ItemTitle>
      <ItemDescription>Overview of your account and activity.</ItemDescription>
    </ItemContent>
    <ItemActions />
  </a>
</Item>
```

### Dropdown

```tsx
'use client'

import { ChevronDownIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'

const people = [
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 'shadcn@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
]

export function ItemDropdown() {
  return (
    <div className="flex min-h-64 w-full max-w-md flex-col items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-fit">
            Select <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 [--radius:0.65rem]" align="end">
          {people.map((person) => (
            <DropdownMenuItem key={person.username} className="p-0">
              <Item size="sm" className="w-full p-2">
                <ItemMedia>
                  <Avatar className="size-8">
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0.5">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription>{person.email}</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

## API Reference

### Item

The main component for displaying content with media, title, description, and actions.

| Prop      | Type                                | Default     |
| --------- | ----------------------------------- | ----------- |
| `variant` | `"default" \| "outline" \| "muted"` | `"default"` |
| `size`    | `"default" \| "sm"`                 | `"default"` |
| `asChild` | `boolean`                           | `false`     |

```tsx
<Item size="" variant="">
  <ItemMedia />
  <ItemContent>
    <ItemTitle>Item</ItemTitle>
    <ItemDescription>Item</ItemDescription>
  </ItemContent>
  <ItemActions />
</Item>
```

You can use the `asChild` prop to render a custom component as the item, for example a link. The hover and focus states will be applied to the custom component.

```tsx showLineNumbers
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'

export function ItemLink() {
  return (
    <Item asChild>
      <a href="/dashboard">
        <ItemMedia variant="icon">
          <Home />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Dashboard</ItemTitle>
          <ItemDescription>Overview of your account and activity.</ItemDescription>
        </ItemContent>
      </a>
    </Item>
  )
}
```

### ItemGroup

The `ItemGroup` component is a container that groups related items together with consistent styling.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemGroup>
  <Item />
  <Item />
</ItemGroup>
```

### ItemSeparator

The `ItemSeparator` component is a separator that separates items in the item group.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemGroup>
  <Item />
  <ItemSeparator />
  <Item />
</ItemGroup>
```

### ItemMedia

Use the `ItemMedia` component to display media content such as icons, images, or avatars.

| Prop        | Type                             | Default     |
| ----------- | -------------------------------- | ----------- |
| `variant`   | `"default" \| "icon" \| "image"` | `"default"` |
| `className` | `string`                         |             |

```tsx
<ItemMedia variant="icon">
  <Icon />
</ItemMedia>
```

```tsx
<ItemMedia variant="image">
  <img src="..." alt="..." />
</ItemMedia>
```

### ItemContent

The `ItemContent` component wraps the title and description of the item.

You can skip `ItemContent` if you only need a title.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemContent>
  <ItemTitle>Item</ItemTitle>
  <ItemDescription>Item</ItemDescription>
</ItemContent>
```

### ItemTitle

Use the `ItemTitle` component to display the title of the item.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemTitle>Item Title</ItemTitle>
```

### ItemDescription

Use the `ItemDescription` component to display the description of the item.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemDescription>Item description</ItemDescription>
```

### ItemActions

Use the `ItemActions` component to display action buttons or other interactive elements.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemActions>
  <Button>Action</Button>
  <Button>Action</Button>
</ItemActions>
```

### ItemHeader

Use the `ItemHeader` component to display a header in the item.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemHeader>Item Header</ItemHeader>
```

### ItemFooter

Use the `ItemFooter` component to display a footer in the item.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

```tsx
<ItemFooter>Item Footer</ItemFooter>
```

````

## .template\shadcn_guide\components_db\Kbd.md

```markdown
---
title: Kbd
description: Used to display textual user input from keyboard.
component: true
---

```tsx
import { Kbd, KbdGroup } from '@/components/ui/kbd'

export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add kbd
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="kbd" title="components/ui/kbd.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Kbd } from '@/components/ui/kbd'
```

```tsx
<Kbd>Ctrl</Kbd>
```

## Examples

### Group

Use the `KbdGroup` component to group keyboard keys together.

```tsx
import { Kbd, KbdGroup } from '@/components/ui/kbd'

export function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Use{' '}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{' '}
        to open the command palette
      </p>
    </div>
  )
}
```

### Button

Use the `Kbd` component inside a `Button` component to display a keyboard key inside a button.

```tsx
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'

export function KbdButton() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" size="sm" className="pr-2">
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" className="pr-2">
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  )
}
```

### Tooltip

You can use the `Kbd` component inside a `Tooltip` component to display a tooltip with a keyboard key.

```tsx
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Save
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Print
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Print Document{' '}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
```

### Input Group

You can use the `Kbd` component inside a `InputGroupAddon` component to display a keyboard key inside an input group.

```tsx
import { SearchIcon } from 'lucide-react'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'

export function KbdInputGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

## API Reference

### Kbd

Use the `Kbd` component to display a keyboard key.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` | ``      |

```tsx
<Kbd>Ctrl</Kbd>
```

### KbdGroup

Use the `KbdGroup` component to group `Kbd` components together.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` | ``      |

```tsx
<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>B</Kbd>
</KbdGroup>
```

````

## .template\shadcn_guide\components_db\Label.md

```markdown
---
title: Label
description: Renders an accessible label associated with controls.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/label
  api: https://www.radix-ui.com/docs/primitives/components/label#api-reference
---

```tsx
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add label
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-label
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="label" title="components/ui/label.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Label } from '@/components/ui/label'
```

```tsx
<Label htmlFor="email">Your email address</Label>
```

````

## .template\shadcn_guide\components_db\Menubar.md

```markdown
---
title: Menubar
description: A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/menubar
  api: https://www.radix-ui.com/docs/primitives/components/menubar#api-reference
---

```tsx
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add menubar
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-menubar
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="menubar" title="components/ui/menubar.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
```

```tsx showLineNumbers
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

````

## .template\shadcn_guide\components_db\Native_Select.md

```markdown
---
title: Native Select
description: A styled native HTML select element with consistent design system integration.
component: true
---

import { InfoIcon } from "lucide-react"

<Callout variant="info" icon={<InfoIcon className="!translate-y-[3px]" />}>
For a styled select component, see the [Select](/docs/components/select)
component.
</Callout>

```tsx
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

export function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
      <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
    </NativeSelect>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add native-select
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="native-select" title="components/ui/native-select.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from '@/components/ui/native-select'
```

```tsx showLineNumbers
<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="grapes" disabled>
    Grapes
  </NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
</NativeSelect>
```

## Examples

### With Groups

Organize options using `NativeSelectOptGroup` for better categorization.

```tsx
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from '@/components/ui/native-select'

export function NativeSelectGroups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Sales">
        <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
        <NativeSelectOption value="account-manager">Account Manager</NativeSelectOption>
        <NativeSelectOption value="sales-director">Sales Director</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Operations">
        <NativeSelectOption value="support">Customer Support</NativeSelectOption>
        <NativeSelectOption value="product-manager">Product Manager</NativeSelectOption>
        <NativeSelectOption value="ops-manager">Operations Manager</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
```

```tsx showLineNumbers
<NativeSelect>
  <NativeSelectOption value="">Select a food</NativeSelectOption>
  <NativeSelectOptGroup label="Fruits">
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  </NativeSelectOptGroup>
  <NativeSelectOptGroup label="Vegetables">
    <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
    <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
    <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>
```

### Disabled State

Disable individual options or the entire select component.

```tsx
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

export function NativeSelectDisabled() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">Select priority</NativeSelectOption>
      <NativeSelectOption value="low">Low</NativeSelectOption>
      <NativeSelectOption value="medium">Medium</NativeSelectOption>
      <NativeSelectOption value="high">High</NativeSelectOption>
      <NativeSelectOption value="critical">Critical</NativeSelectOption>
    </NativeSelect>
  )
}
```

### Invalid State

Show validation errors with the `aria-invalid` attribute and error styling.

```tsx
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

export function NativeSelectInvalid() {
  return (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">Select role</NativeSelectOption>
      <NativeSelectOption value="admin">Admin</NativeSelectOption>
      <NativeSelectOption value="editor">Editor</NativeSelectOption>
      <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
      <NativeSelectOption value="guest">Guest</NativeSelectOption>
    </NativeSelect>
  )
}
```

```tsx showLineNumbers
<NativeSelect aria-invalid="true">
  <NativeSelectOption value="">Select a country</NativeSelectOption>
  <NativeSelectOption value="us">United States</NativeSelectOption>
  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
  <NativeSelectOption value="ca">Canada</NativeSelectOption>
</NativeSelect>
```

### Form Integration

Use with form libraries like React Hook Form for controlled components.

<ComponentPreview name="native-select-form" />

### Input Group Integration

Combine with `InputGroup` for complex input layouts.

<ComponentPreview name="native-select-input-group" />

## Native Select vs Select

- Use `NativeSelect` when you need native browser behavior, better performance, or mobile-optimized dropdowns.
- Use `Select` when you need custom styling, animations, or complex interactions.

The `NativeSelect` component provides native HTML select functionality with consistent styling that matches your design system.

## Accessibility

- The component maintains all native HTML select accessibility features.
- Screen readers can navigate through options using arrow keys.
- The chevron icon is marked as `aria-hidden="true"` to avoid duplication.
- Use `aria-label` or `aria-labelledby` for additional context when needed.

```tsx showLineNumbers
<NativeSelect aria-label="Choose your preferred language">
  <NativeSelectOption value="en">English</NativeSelectOption>
  <NativeSelectOption value="es">Spanish</NativeSelectOption>
  <NativeSelectOption value="fr">French</NativeSelectOption>
</NativeSelect>
```

## API Reference

### NativeSelect

The main select component that wraps the native HTML select element.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` |         |

All other props are passed through to the underlying `<select>` element.

```tsx
<NativeSelect>
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
</NativeSelect>
```

### NativeSelectOption

Represents an individual option within the select.

| Prop        | Type      | Default |
| ----------- | --------- | ------- |
| `value`     | `string`  |         |
| `disabled`  | `boolean` | `false` |
| `className` | `string`  |         |

All other props are passed through to the underlying `<option>` element.

```tsx
<NativeSelectOption value="apple">Apple</NativeSelectOption>
<NativeSelectOption value="banana" disabled>
  Banana
</NativeSelectOption>
```

### NativeSelectOptGroup

Groups related options together for better organization.

| Prop        | Type      | Default |
| ----------- | --------- | ------- |
| `label`     | `string`  |         |
| `disabled`  | `boolean` | `false` |
| `className` | `string`  |         |

All other props are passed through to the underlying `<optgroup>` element.

```tsx
<NativeSelectOptGroup label="Fruits">
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
</NativeSelectOptGroup>
```

````

## .template\shadcn_guide\components_db\Navigation_Menu.md

```markdown
---
title: Navigation Menu
description: A collection of links for navigating websites.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/navigation-menu
  api: https://www.radix-ui.com/docs/primitives/components/navigation-menu#api-reference
---

```tsx
'use client'

import * as React from 'react'
import Link from 'next/link'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react'

import { useIsMobile } from '@/components/hooks/use-mobile'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="bg-linear-to-b outline-hidden flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-4 no-underline transition-all duration-200 focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">Learn how to use the library.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">Read our latest blog posts.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add navigation-menu
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-navigation-menu
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource
  name="navigation-menu"
  title="components/ui/navigation-menu.tsx"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
```

```tsx showLineNumbers
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Link

You can use the `asChild` prop to make another component look like a navigation menu trigger. Here's an example of a link that looks like a navigation menu trigger.

```tsx showLineNumbers title="components/example-navigation-menu.tsx"
import Link from 'next/link'

export function NavigationMenuDemo() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs">Documentation</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
```

````

## .template\shadcn_guide\components_db\Pagination.md

```markdown
---
title: Pagination
description: Pagination with page navigation, next and previous links.
component: true
---

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add pagination
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="pagination" title="components/ui/pagination.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
```

```tsx showLineNumbers
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Next.js

By default the `<PaginationLink />` component will render an `<a />` tag.

To use the Next.js `<Link />` component, make the following updates to `pagination.tsx`.

```diff showLineNumbers /typeof Link/ {1}
+ import Link from "next/link"

- type PaginationLinkProps = ... & React.ComponentProps<"a">
+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>

const PaginationLink = ({...props }: ) => (
  <PaginationItem>
-   <a>
+   <Link>
      // ...
-   </a>
+   </Link>
  </PaginationItem>
)

```

<Callout className="mt-6">

**Note:** We are making updates to the cli to automatically do this for you.

</Callout>

````

## .template\shadcn_guide\components_db\Popover.md

```markdown
---
title: Popover
description: Displays rich content in a portal, triggered by a button.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/popover
  api: https://www.radix-ui.com/docs/primitives/components/popover#api-reference
---

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add popover
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-popover
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="popover" title="components/ui/popover.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
```

```tsx showLineNumbers
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

````

## .template\shadcn_guide\components_db\Progress.md

```markdown
---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/progress
  api: https://www.radix-ui.com/docs/primitives/components/progress#api-reference
---

```tsx
'use client'

import * as React from 'react'

import { Progress } from '@/components/ui/progress'

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add progress
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-progress
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="progress" title="components/ui/progress.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Progress } from '@/components/ui/progress'
```

```tsx showLineNumbers
<Progress value={33} />
```

````

## .template\shadcn_guide\components_db\Radio_Group.md

```markdown
---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/radio-group
  api: https://www.radix-ui.com/docs/primitives/components/radio-group#api-reference
---

```tsx
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add radio-group
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-radio-group
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="radio-group" title="components/ui/radio-group.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
```

```tsx showLineNumbers
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

````

## .template\shadcn_guide\components_db\Resizable.md

```markdown
---
title: Resizable
description: Accessible resizable panel groups and layouts with keyboard support.
component: true
links:
  doc: https://github.com/bvaughn/react-resizable-panels
  api: https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels
---

```tsx
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
````

## About

The `Resizable` component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) by [bvaughn](https://github.com/bvaughn).

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add resizable
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install react-resizable-panels
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="resizable" title="components/ui/resizable.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
```

```tsx showLineNumbers
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

## Examples

### Vertical

Use the `direction` prop to set the direction of the resizable panels.

```tsx
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

```tsx showLineNumbers {9}
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export default function Example() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

### Handle

You can set or hide the handle by using the `withHandle` prop on the `ResizableHandle` component.

```tsx
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export function ResizableHandleDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

```tsx showLineNumbers {11}
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

````

## .template\shadcn_guide\components_db\Scroll_Area.md

```markdown
---
title: Scroll Area
description: Augments native scroll functionality for custom, cross-browser styling.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/scroll-area
  api: https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference
---

```tsx
import * as React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add scroll-area
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-scroll-area
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="scroll-area" title="components/ui/scroll-area.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { ScrollArea } from '@/components/ui/scroll-area'
```

```tsx showLineNumbers
<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the
  place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but
  he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that
  the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started
  laughing, they couldn't stop.
</ScrollArea>
```

## Examples

### Horizontal Scrolling

```tsx
import * as React from 'react'
import Image from 'next/image'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
]

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by <span className="font-semibold text-foreground">{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
```

````

## .template\shadcn_guide\components_db\Select.md

```markdown
---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
component: true
featured: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/select
  api: https://www.radix-ui.com/docs/primitives/components/select#api-reference
---

```tsx
import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add select
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-select
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="select" title="components/ui/select.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
```

```tsx showLineNumbers
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
```

## Examples

### Scrollable

```tsx
import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
          <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
          <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
```

````

## .template\shadcn_guide\components_db\Separator.md

```markdown
---
title: Separator
description: Visually or semantically separates content.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/separator
  api: https://www.radix-ui.com/docs/primitives/components/separator#api-reference
---

```tsx
import { Separator } from '@/components/ui/separator'

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add separator
```

</TabsContent>

<TabsContent value="manual">

<Steps>
<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-separator
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="separator" title="components/ui/separator.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Separator } from '@/components/ui/separator'
```

```tsx showLineNumbers
<Separator />
```

````

## .template\shadcn_guide\components_db\Sheet.md

```markdown
---
title: Sheet
description: Extends the Dialog component to display content that complements the main content of the screen.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/dialog
  api: https://www.radix-ui.com/docs/primitives/components/dialog#api-reference
---

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add sheet
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-dialog
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="sheet" title="components/ui/sheet.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

### Usage

```tsx showLineNumbers
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
```

```tsx showLineNumbers
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## Examples

### Side

Use the `side` property to `<SheetContent />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.

### Size

You can adjust the size of the sheet using CSS classes:

```tsx showLineNumbers {3}
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

````

## .template\shadcn_guide\components_db\Sidebar.md

```markdown
---
title: Sidebar
description: A composable, themeable and customizable sidebar component.
component: true
---

<figure className="flex flex-col gap-4">
  ```tsx
import { AppSidebar } from "@/components/blocks/sidebar-07/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function Page() {
return (
<SidebarProvider>
<AppSidebar />
<SidebarInset>

<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
<div className="flex items-center gap-2 px-4">
<SidebarTrigger className="-ml-1" />
<Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
<Breadcrumb>
<BreadcrumbList>
<BreadcrumbItem className="hidden md:block">
<BreadcrumbLink href="#">
Building Your Application
</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbSeparator className="hidden md:block" />
<BreadcrumbItem>
<BreadcrumbPage>Data Fetching</BreadcrumbPage>
</BreadcrumbItem>
</BreadcrumbList>
</Breadcrumb>
</div>
</header>
<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
<div className="grid auto-rows-min gap-4 md:grid-cols-3">
<div className="bg-muted/50 aspect-video rounded-xl" />
<div className="bg-muted/50 aspect-video rounded-xl" />
<div className="bg-muted/50 aspect-video rounded-xl" />
</div>
<div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
</div>
</SidebarInset>
</SidebarProvider>
)
}

````

  <figcaption className="text-center text-sm text-gray-500">
    A sidebar that collapses to icons.
  </figcaption>
</figure>

Sidebars are one of the most complex components to build. They are central
to any application and often contain a lot of moving parts.

I don't like building sidebars. So I built 30+ of them. All kinds of
configurations. Then I extracted the core components into `sidebar.tsx`.

We now have a solid foundation to build on top of. Composable. Themeable.
Customizable.

[Browse the Blocks Library](/blocks).

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<Steps>

<Step>Run the following command to install `sidebar.tsx`</Step>

```bash
npx shadcn@latest add sidebar
```

<Step>Add the following colors to your CSS file</Step>

The command above should install the colors for you. If not, copy and paste the following in your CSS file.

We'll go over the colors later in the [theming section](/docs/components/sidebar#theming).

```css showLineNumbers title="app/globals.css"
@layer base {
  :root {
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);
  }

  .dark {
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.439 0 0);
  }
}
```

</Steps>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="sidebar" title="components/ui/sidebar.tsx" />

<Step>Update the import paths to match your project setup.</Step>

<Step>Add the following colors to your CSS file</Step>

We'll go over the colors later in the [theming section](/docs/components/sidebar#theming).

```css showLineNumbers title="app/globals.css"
@layer base {
  :root {
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);
  }

  .dark {
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.439 0 0);
  }
}
```

</Steps>

</TabsContent>

</CodeTabs>

## Structure

A `Sidebar` component is composed of the following parts:

- `SidebarProvider` - Handles collapsible state.
- `Sidebar` - The sidebar container.
- `SidebarHeader` and `SidebarFooter` - Sticky at the top and bottom of the sidebar.
- `SidebarContent` - Scrollable content.
- `SidebarGroup` - Section within the `SidebarContent`.
- `SidebarTrigger` - Trigger for the `Sidebar`.

<Image
  src="/images/sidebar-structure.png"
  width="716"
  height="420"
  alt="Sidebar Structure"
  className="mt-6 w-full overflow-hidden rounded-lg border dark:hidden"
/>
<Image
  src="/images/sidebar-structure-dark.png"
  width="716"
  height="420"
  alt="Sidebar Structure"
  className="mt-6 hidden w-full overflow-hidden rounded-lg border dark:block"
/>

## Usage

```tsx showLineNumbers title="app/layout.tsx"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

```tsx showLineNumbers title="components/app-sidebar.tsx"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
```

## Your First Sidebar

Let's start with the most basic sidebar. A collapsible sidebar with a menu.

<Steps>

<Step>
  Add a `SidebarProvider` and `SidebarTrigger` at the root of your application.
</Step>

```tsx showLineNumbers title="app/layout.tsx"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

<Step>Create a new sidebar component at `components/app-sidebar.tsx`.</Step>

```tsx showLineNumbers title="components/app-sidebar.tsx"
import { Sidebar, SidebarContent } from '@/components/ui/sidebar'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  )
}
```

<Step>Now, let's add a `SidebarMenu` to the sidebar.</Step>

We'll use the `SidebarMenu` component in a `SidebarGroup`.

```tsx showLineNumbers title="components/app-sidebar.tsx"
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

<Step>You've created your first sidebar.</Step>

You should see something like this:

<figure className="flex flex-col gap-4">
  ```tsx
"use client"

import {
CalendarIcon,
HomeIcon,
InboxIcon,
SearchIcon,
SettingsIcon,
} from "lucide-react"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarInset,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
{
title: "Home",
url: "#",
icon: HomeIcon,
},
{
title: "Inbox",
url: "#",
icon: InboxIcon,
},
{
title: "Calendar",
url: "#",
icon: CalendarIcon,
},
{
title: "Search",
url: "#",
icon: SearchIcon,
},
{
title: "Settings",
url: "#",
icon: SettingsIcon,
},
]

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Application</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
{items.map((item) => (
<SidebarMenuItem key={item.title}>
<SidebarMenuButton asChild>
<a href={item.url}>
<item.icon />
<span>{item.title}</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
<SidebarInset>

<header className="flex h-12 items-center justify-between px-4">
<SidebarTrigger />
</header>
</SidebarInset>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    Your first sidebar.
  </figcaption>
</figure>

</Steps>

## Components

The components in `sidebar.tsx` are built to be composable i.e you build your sidebar by putting the provided components together. They also compose well with other shadcn/ui components such as `DropdownMenu`, `Collapsible` or `Dialog` etc.

**If you need to change the code in `sidebar.tsx`, you are encouraged to do so. The code is yours. Use `sidebar.tsx` as a starting point and build your own.**

In the next sections, we'll go over each component and how to use them.

## SidebarProvider

The `SidebarProvider` component is used to provide the sidebar context to the `Sidebar` component. You should always wrap your application in a `SidebarProvider` component.

### Props

| Name           | Type                      | Description                                  |
| -------------- | ------------------------- | -------------------------------------------- |
| `defaultOpen`  | `boolean`                 | Default open state of the sidebar.           |
| `open`         | `boolean`                 | Open state of the sidebar (controlled).      |
| `onOpenChange` | `(open: boolean) => void` | Sets open state of the sidebar (controlled). |

### Width

If you have a single sidebar in your application, you can use the `SIDEBAR_WIDTH` and `SIDEBAR_WIDTH_MOBILE` variables in `sidebar.tsx` to set the width of the sidebar.

```tsx showLineNumbers title="components/ui/sidebar.tsx"
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
````

For multiple sidebars in your application, you can use the `style` prop to set the width of the sidebar.

To set the width of the sidebar, you can use the `--sidebar-width` and `--sidebar-width-mobile` CSS variables in the `style` prop.

```tsx showLineNumbers title="components/ui/sidebar.tsx"
<SidebarProvider
  style={{
    '--sidebar-width': '20rem',
    '--sidebar-width-mobile': '20rem',
  }}
>
  <Sidebar />
</SidebarProvider>
```

This will handle the width of the sidebar but also the layout spacing.

### Keyboard Shortcut

The `SIDEBAR_KEYBOARD_SHORTCUT` variable is used to set the keyboard shortcut used to open and close the sidebar.

To trigger the sidebar, you use the `cmd+b` keyboard shortcut on Mac and `ctrl+b` on Windows.

You can change the keyboard shortcut by updating the `SIDEBAR_KEYBOARD_SHORTCUT` variable.

```tsx showLineNumbers title="components/ui/sidebar.tsx"
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'
```

### Persisted State

The `SidebarProvider` supports persisting the sidebar state across page reloads and server-side rendering. It uses cookies to store the current state of the sidebar. When the sidebar state changes, a default cookie named `sidebar_state` is set with the current open/closed state. This cookie is then read on subsequent page loads to restore the sidebar state.

To persist sidebar state in Next.js, set up your `SidebarProvider` in `app/layout.tsx` like this:

```tsx showLineNumbers title="app/layout.tsx"
import { cookies } from 'next/headers'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

You can change the name of the cookie by updating the `SIDEBAR_COOKIE_NAME` variable in `sidebar.tsx`.

```tsx showLineNumbers title="components/ui/sidebar.tsx"
const SIDEBAR_COOKIE_NAME = 'sidebar_state'
```

## Sidebar

The main `Sidebar` component used to render a collapsible sidebar.

```tsx showLineNumbers
import { Sidebar } from '@/components/ui/sidebar'

export function AppSidebar() {
  return <Sidebar />
}
```

### Props

| Property      | Type                              | Description                       |
| ------------- | --------------------------------- | --------------------------------- |
| `side`        | `left` or `right`                 | The side of the sidebar.          |
| `variant`     | `sidebar`, `floating`, or `inset` | The variant of the sidebar.       |
| `collapsible` | `offcanvas`, `icon`, or `none`    | Collapsible state of the sidebar. |

### side

Use the `side` prop to change the side of the sidebar.

Available options are `left` and `right`.

```tsx showLineNumbers
import { Sidebar } from '@/components/ui/sidebar'

export function AppSidebar() {
  return <Sidebar side="left | right" />
}
```

### variant

Use the `variant` prop to change the variant of the sidebar.

Available options are `sidebar`, `floating` and `inset`.

```tsx showLineNumbers
import { Sidebar } from '@/components/ui/sidebar'

export function AppSidebar() {
  return <Sidebar variant="sidebar | floating | inset" />
}
```

<Callout>
  **Note:** If you use the `inset` variant, remember to wrap your main content
  in a `SidebarInset` component.
</Callout>

```tsx showLineNumbers
<SidebarProvider>
  <Sidebar variant="inset" />
  <SidebarInset>
    <main>{children}</main>
  </SidebarInset>
</SidebarProvider>
```

### collapsible

Use the `collapsible` prop to make the sidebar collapsible.

Available options are `offcanvas`, `icon` and `none`.

```tsx showLineNumbers
import { Sidebar } from '@/components/ui/sidebar'

export function AppSidebar() {
  return <Sidebar collapsible="offcanvas | icon | none" />
}
```

| Prop        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `offcanvas` | A collapsible sidebar that slides in from the left or right. |
| `icon`      | A sidebar that collapses to icons.                           |
| `none`      | A non-collapsible sidebar.                                   |

## useSidebar

The `useSidebar` hook is used to control the sidebar.

```tsx showLineNumbers
import { useSidebar } from '@/components/ui/sidebar'

export function AppSidebar() {
  const { state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar } = useSidebar()
}
```

| Property        | Type                      | Description                                   |
| --------------- | ------------------------- | --------------------------------------------- |
| `state`         | `expanded` or `collapsed` | The current state of the sidebar.             |
| `open`          | `boolean`                 | Whether the sidebar is open.                  |
| `setOpen`       | `(open: boolean) => void` | Sets the open state of the sidebar.           |
| `openMobile`    | `boolean`                 | Whether the sidebar is open on mobile.        |
| `setOpenMobile` | `(open: boolean) => void` | Sets the open state of the sidebar on mobile. |
| `isMobile`      | `boolean`                 | Whether the sidebar is on mobile.             |
| `toggleSidebar` | `() => void`              | Toggles the sidebar. Desktop and mobile.      |

## SidebarHeader

Use the `SidebarHeader` component to add a sticky header to the sidebar.

The following example adds a `<DropdownMenu>` to the `SidebarHeader`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import { ChevronDownIcon } from "lucide-react"

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
Sidebar,
SidebarHeader,
SidebarInset,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarHeader>
<SidebarMenu>
<SidebarMenuItem>
<DropdownMenu>
<DropdownMenuTrigger asChild>
<SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
Select Workspace
<ChevronDownIcon className="ml-auto" />
</SidebarMenuButton>
</DropdownMenuTrigger>
<DropdownMenuContent className="w-(--radix-popper-anchor-width)">
<DropdownMenuItem>
<span>Acme Inc</span>
</DropdownMenuItem>
<DropdownMenuItem>
<span>Acme Corp.</span>
</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</SidebarMenuItem>
</SidebarMenu>
</SidebarHeader>
</Sidebar>
<SidebarInset>

<header className="flex h-12 items-center justify-between px-4">
<SidebarTrigger />
</header>
</SidebarInset>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar header with a dropdown menu.
  </figcaption>
</figure>

```tsx showLineNumbers title="components/app-sidebar.tsx"
<Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Acme Corp.</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>
````

## SidebarFooter

Use the `SidebarFooter` component to add a sticky footer to the sidebar.

The following example adds a `<DropdownMenu>` to the `SidebarFooter`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import { ChevronUpIcon } from "lucide-react"

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
Sidebar,
SidebarContent,
SidebarFooter,
SidebarHeader,
SidebarInset,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarHeader />
<SidebarContent />
<SidebarFooter>
<SidebarMenu>
<SidebarMenuItem>
<DropdownMenu>
<DropdownMenuTrigger asChild>
<SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
Username
<ChevronUpIcon className="ml-auto" />
</SidebarMenuButton>
</DropdownMenuTrigger>
<DropdownMenuContent
                  side="top"
                  className="w-(--radix-popper-anchor-width)"
                >
<DropdownMenuItem>
<span>Account</span>
</DropdownMenuItem>
<DropdownMenuItem>
<span>Billing</span>
</DropdownMenuItem>
<DropdownMenuItem>
<span>Sign out</span>
</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</SidebarMenuItem>
</SidebarMenu>
</SidebarFooter>
</Sidebar>
<SidebarInset>

<header className="flex h-12 items-center justify-between px-4">
<SidebarTrigger />
</header>
</SidebarInset>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar footer with a dropdown menu.
  </figcaption>
</figure>

```tsx showLineNumbers title="components/app-sidebar.tsx"
export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
````

## SidebarContent

The `SidebarContent` component is used to wrap the content of the sidebar. This is where you add your `SidebarGroup` components. It is scrollable.

```tsx showLineNumbers
import { Sidebar, SidebarContent } from '@/components/ui/sidebar'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}
```

## SidebarGroup

Use the `SidebarGroup` component to create a section within the sidebar.

A `SidebarGroup` has a `SidebarGroupLabel`, a `SidebarGroupContent` and an optional `SidebarGroupAction`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import { LifeBuoyIcon, SendIcon } from "lucide-react"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Help</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
<SidebarMenuItem>
<SidebarMenuButton>
<LifeBuoyIcon />
Support
</SidebarMenuButton>
</SidebarMenuItem>
<SidebarMenuItem>
<SidebarMenuButton>
<SendIcon />
Feedback
</SidebarMenuButton>
</SidebarMenuItem>
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar group.
  </figcaption>
</figure>

```tsx showLineNumbers
import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
````

## Collapsible SidebarGroup

To make a `SidebarGroup` collapsible, wrap it in a `Collapsible`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import { ChevronDownIcon, LifeBuoyIcon, SendIcon } from "lucide-react"

import {
Collapsible,
CollapsibleContent,
CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<Collapsible defaultOpen className="group/collapsible">
<SidebarGroup>
<SidebarGroupLabel
                asChild
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
<CollapsibleTrigger>
Help
<ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
</CollapsibleTrigger>
</SidebarGroupLabel>
<CollapsibleContent>
<SidebarGroupContent>
<SidebarMenu>
<SidebarMenuItem>
<SidebarMenuButton>
<LifeBuoyIcon />
Support
</SidebarMenuButton>
</SidebarMenuItem>
<SidebarMenuItem>
<SidebarMenuButton>
<SendIcon />
Feedback
</SidebarMenuButton>
</SidebarMenuItem>
</SidebarMenu>
</SidebarGroupContent>
</CollapsibleContent>
</SidebarGroup>
</Collapsible>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A collapsible sidebar group.
  </figcaption>
</figure>

```tsx showLineNumbers
export function AppSidebar() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Help
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent />
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}
````

<Callout>
  **Note:** We wrap the `CollapsibleTrigger` in a `SidebarGroupLabel` to render
  a button.
</Callout>

## SidebarGroupAction

Use the `SidebarGroupAction` component to add an action button to the `SidebarGroup`.

<figure className="flex flex-col gap-4">
  ```tsx
"use client"

import { FrameIcon, MapIcon, PieChartIcon, PlusIcon } from "lucide-react"
import { toast, Toaster } from "sonner"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupAction,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

export function AppSidebar() {
return (
<SidebarProvider>
<Toaster
position="bottom-left"
toastOptions={{
          className: "ml-[160px]",
        }}
/>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Projects</SidebarGroupLabel>
<SidebarGroupAction
title="Add Project"
onClick={() => toast("You clicked the group action!")} >
<PlusIcon /> <span className="sr-only">Add Project</span>
</SidebarGroupAction>
<SidebarGroupContent>
<SidebarMenu>
<SidebarMenuItem>
<SidebarMenuButton asChild>
<a href="#">
<FrameIcon />
<span>Design Engineering</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
<SidebarMenuItem>
<SidebarMenuButton asChild>
<a href="#">
<PieChartIcon />
<span>Sales & Marketing</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
<SidebarMenuItem>
<SidebarMenuButton asChild>
<a href="#">
<MapIcon />
<span>Travel</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar group with an action button.
  </figcaption>
</figure>

```tsx showLineNumbers {5-7}
export function AppSidebar() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel asChild>Projects</SidebarGroupLabel>
      <SidebarGroupAction title="Add Project">
        <Plus /> <span className="sr-only">Add Project</span>
      </SidebarGroupAction>
      <SidebarGroupContent />
    </SidebarGroup>
  )
}
````

## SidebarMenu

The `SidebarMenu` component is used for building a menu within a `SidebarGroup`.

A `SidebarMenu` component is composed of `SidebarMenuItem`, `SidebarMenuButton`, `<SidebarMenuAction />` and `<SidebarMenuSub />` components.

<Image
  src="/images/sidebar-menu.png"
  width="716"
  height="420"
  alt="Sidebar Menu"
  className="mt-6 w-full overflow-hidden rounded-lg border dark:hidden"
/>
<Image
  src="/images/sidebar-menu-dark.png"
  width="716"
  height="420"
  alt="Sidebar Menu"
  className="mt-6 hidden w-full overflow-hidden rounded-lg border dark:block"
/>

Here's an example of a `SidebarMenu` component rendering a list of projects.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import {
FrameIcon,
LifeBuoyIcon,
MapIcon,
PieChartIcon,
SendIcon,
} from "lucide-react"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
{
name: "Design Engineering",
url: "#",
icon: FrameIcon,
},
{
name: "Sales & Marketing",
url: "#",
icon: PieChartIcon,
},
{
name: "Travel",
url: "#",
icon: MapIcon,
},
{
name: "Support",
url: "#",
icon: LifeBuoyIcon,
},
{
name: "Feedback",
url: "#",
icon: SendIcon,
},
]

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Projects</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
{projects.map((project) => (
<SidebarMenuItem key={project.name}>
<SidebarMenuButton asChild>
<a href={project.url}>
<project.icon />
<span>{project.name}</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar menu with a list of projects.
  </figcaption>
</figure>

```tsx showLineNumbers
<Sidebar>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {projects.map((project) => (
            <SidebarMenuItem key={project.name}>
              <SidebarMenuButton asChild>
                <a href={project.url}>
                  <project.icon />
                  <span>{project.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
````

## SidebarMenuButton

The `SidebarMenuButton` component is used to render a menu button within a `SidebarMenuItem`.

### Link or Anchor

By default, the `SidebarMenuButton` renders a button but you can use the `asChild` prop to render a different component such as a `Link` or an `a` tag.

```tsx showLineNumbers
<SidebarMenuButton asChild>
  <a href="#">Home</a>
</SidebarMenuButton>
```

### Icon and Label

You can render an icon and a truncated label inside the button. Remember to wrap the label in a `<span>`.

```tsx showLineNumbers
<SidebarMenuButton asChild>
  <a href="#">
    <Home />
    <span>Home</span>
  </a>
</SidebarMenuButton>
```

### isActive

Use the `isActive` prop to mark a menu item as active.

```tsx showLineNumbers
<SidebarMenuButton asChild isActive>
  <a href="#">Home</a>
</SidebarMenuButton>
```

## SidebarMenuAction

The `SidebarMenuAction` component is used to render a menu action within a `SidebarMenuItem`.

This button works independently of the `SidebarMenuButton` i.e you can have the `<SidebarMenuButton />` as a clickable link and the `<SidebarMenuAction />` as a button.

```tsx showLineNumbers
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="#">
      <Home />
      <span>Home</span>
    </a>
  </SidebarMenuButton>
  <SidebarMenuAction>
    <Plus /> <span className="sr-only">Add Project</span>
  </SidebarMenuAction>
</SidebarMenuItem>
```

### DropdownMenu

Here's an example of a `SidebarMenuAction` component rendering a `DropdownMenu`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import {
FrameIcon,
LifeBuoyIcon,
MapIcon,
MoreHorizontalIcon,
PieChartIcon,
SendIcon,
} from "lucide-react"

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuAction,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
{
name: "Design Engineering",
url: "#",
icon: FrameIcon,
},
{
name: "Sales & Marketing",
url: "#",
icon: PieChartIcon,
},
{
name: "Travel",
url: "#",
icon: MapIcon,
},
{
name: "Support",
url: "#",
icon: LifeBuoyIcon,
},
{
name: "Feedback",
url: "#",
icon: SendIcon,
},
]

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Projects</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
{projects.map((project) => (
<SidebarMenuItem key={project.name}>
<SidebarMenuButton
                      asChild
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
<a href={project.url}>
<project.icon />
<span>{project.name}</span>
</a>
</SidebarMenuButton>
<DropdownMenu>
<DropdownMenuTrigger asChild>
<SidebarMenuAction>
<MoreHorizontalIcon />
<span className="sr-only">More</span>
</SidebarMenuAction>
</DropdownMenuTrigger>
<DropdownMenuContent side="right" align="start">
<DropdownMenuItem>
<span>Edit Project</span>
</DropdownMenuItem>
<DropdownMenuItem>
<span>Delete Project</span>
</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar menu action with a dropdown menu.
  </figcaption>
</figure>

```tsx showLineNumbers
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="#">
      <Home />
      <span>Home</span>
    </a>
  </SidebarMenuButton>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <SidebarMenuAction>
        <MoreHorizontal />
      </SidebarMenuAction>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start">
      <DropdownMenuItem>
        <span>Edit Project</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Delete Project</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SidebarMenuItem>
````

## SidebarMenuSub

The `SidebarMenuSub` component is used to render a submenu within a `SidebarMenu`.

Use `<SidebarMenuSubItem />` and `<SidebarMenuSubButton />` to render a submenu item.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarMenuSub,
SidebarMenuSubButton,
SidebarMenuSubItem,
SidebarProvider,
} from "@/components/ui/sidebar"

const items = [
{
title: "Getting Started",
url: "#",
items: [
{
title: "Installation",
url: "#",
},
{
title: "Project Structure",
url: "#",
},
],
},
{
title: "Building Your Application",
url: "#",
items: [
{
title: "Routing",
url: "#",
},
{
title: "Data Fetching",
url: "#",
isActive: true,
},
{
title: "Rendering",
url: "#",
},
{
title: "Caching",
url: "#",
},
{
title: "Styling",
url: "#",
},
{
title: "Optimizing",
url: "#",
},
{
title: "Configuring",
url: "#",
},
{
title: "Testing",
url: "#",
},
{
title: "Authentication",
url: "#",
},
{
title: "Deploying",
url: "#",
},
{
title: "Upgrading",
url: "#",
},
{
title: "Examples",
url: "#",
},
],
},
{
title: "API Reference",
url: "#",
items: [
{
title: "Components",
url: "#",
},
{
title: "File Conventions",
url: "#",
},
{
title: "Functions",
url: "#",
},
{
title: "next.config.js Options",
url: "#",
},
{
title: "CLI",
url: "#",
},
{
title: "Edge Runtime",
url: "#",
},
],
},
{
title: "Architecture",
url: "#",
items: [
{
title: "Accessibility",
url: "#",
},
{
title: "Fast Refresh",
url: "#",
},
{
title: "Next.js Compiler",
url: "#",
},
{
title: "Supported Browsers",
url: "#",
},
{
title: "Turbopack",
url: "#",
},
],
},
]

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupContent>
<SidebarMenu>
{items.map((item, index) => (
<SidebarMenuItem key={index}>
<SidebarMenuButton asChild>
<a href={item.url}>
<span>{item.title}</span>
</a>
</SidebarMenuButton>
<SidebarMenuSub>
{item.items.map((subItem, subIndex) => (
<SidebarMenuSubItem key={subIndex}>
<SidebarMenuSubButton asChild>
<a href={subItem.url}>
<span>{subItem.title}</span>
</a>
</SidebarMenuSubButton>
</SidebarMenuSubItem>
))}
</SidebarMenuSub>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar menu with a submenu.
  </figcaption>
</figure>

```tsx showLineNumbers
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton />
    </SidebarMenuSubItem>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton />
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>
````

## Collapsible SidebarMenu

To make a `SidebarMenu` component collapsible, wrap it and the `SidebarMenuSub` components in a `Collapsible`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import { ChevronRightIcon } from "lucide-react"

import {
Collapsible,
CollapsibleContent,
CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarMenuSub,
SidebarMenuSubButton,
SidebarMenuSubItem,
SidebarProvider,
} from "@/components/ui/sidebar"

const items = [
{
title: "Getting Started",
url: "#",
items: [
{
title: "Installation",
url: "#",
},
{
title: "Project Structure",
url: "#",
},
],
},
{
title: "Building Your Application",
url: "#",
items: [
{
title: "Routing",
url: "#",
},
{
title: "Data Fetching",
url: "#",
isActive: true,
},
{
title: "Rendering",
url: "#",
},
{
title: "Caching",
url: "#",
},
{
title: "Styling",
url: "#",
},
{
title: "Optimizing",
url: "#",
},
{
title: "Configuring",
url: "#",
},
{
title: "Testing",
url: "#",
},
{
title: "Authentication",
url: "#",
},
{
title: "Deploying",
url: "#",
},
{
title: "Upgrading",
url: "#",
},
{
title: "Examples",
url: "#",
},
],
},
{
title: "API Reference",
url: "#",
items: [
{
title: "Components",
url: "#",
},
{
title: "File Conventions",
url: "#",
},
{
title: "Functions",
url: "#",
},
{
title: "next.config.js Options",
url: "#",
},
{
title: "CLI",
url: "#",
},
{
title: "Edge Runtime",
url: "#",
},
],
},
{
title: "Architecture",
url: "#",
items: [
{
title: "Accessibility",
url: "#",
},
{
title: "Fast Refresh",
url: "#",
},
{
title: "Next.js Compiler",
url: "#",
},
{
title: "Supported Browsers",
url: "#",
},
{
title: "Turbopack",
url: "#",
},
],
},
]

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupContent>
<SidebarMenu>
{items.map((item, index) => (
<Collapsible
key={index}
className="group/collapsible"
defaultOpen={index === 0} >
<SidebarMenuItem>
<CollapsibleTrigger asChild>
<SidebarMenuButton>
<span>{item.title}</span>
<ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
</SidebarMenuButton>
</CollapsibleTrigger>
<CollapsibleContent>
<SidebarMenuSub>
{item.items.map((subItem, subIndex) => (
<SidebarMenuSubItem key={subIndex}>
<SidebarMenuSubButton asChild>
<a href={subItem.url}>
<span>{subItem.title}</span>
</a>
</SidebarMenuSubButton>
</SidebarMenuSubItem>
))}
</SidebarMenuSub>
</CollapsibleContent>
</SidebarMenuItem>
</Collapsible>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A collapsible sidebar menu.
  </figcaption>
</figure>

```tsx showLineNumbers
<SidebarMenu>
  <Collapsible defaultOpen className="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem />
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</SidebarMenu>
````

## SidebarMenuBadge

The `SidebarMenuBadge` component is used to render a badge within a `SidebarMenuItem`.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import {
FrameIcon,
LifeBuoyIcon,
MapIcon,
PieChartIcon,
SendIcon,
} from "lucide-react"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuBadge,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
{
name: "Design Engineering",
url: "#",
icon: FrameIcon,
badge: "24",
},
{
name: "Sales & Marketing",
url: "#",
icon: PieChartIcon,
badge: "12",
},
{
name: "Travel",
url: "#",
icon: MapIcon,
badge: "3",
},
{
name: "Support",
url: "#",
icon: LifeBuoyIcon,
badge: "21",
},
{
name: "Feedback",
url: "#",
icon: SendIcon,
badge: "8",
},
]

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Projects</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
{projects.map((project) => (
<SidebarMenuItem key={project.name}>
<SidebarMenuButton
                      asChild
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
<a href={project.url}>
<project.icon />
<span>{project.name}</span>
</a>
</SidebarMenuButton>
<SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar menu with a badge.
  </figcaption>
</figure>

```tsx showLineNumbers
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuBadge>24</SidebarMenuBadge>
</SidebarMenuItem>
````

## SidebarMenuSkeleton

The `SidebarMenuSkeleton` component is used to render a skeleton for a `SidebarMenu`. You can use this to show a loading state when using React Server Components, SWR or react-query.

```tsx showLineNumbers
function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

## SidebarSeparator

The `SidebarSeparator` component is used to render a separator within a `Sidebar`.

```tsx showLineNumbers
<Sidebar>
  <SidebarHeader />
  <SidebarSeparator />
  <SidebarContent>
    <SidebarGroup />
    <SidebarSeparator />
    <SidebarGroup />
  </SidebarContent>
</Sidebar>
```

## SidebarTrigger

Use the `SidebarTrigger` component to render a button that toggles the sidebar.

The `SidebarTrigger` component must be used within a `SidebarProvider`.

```tsx showLineNumbers
<SidebarProvider>
  <Sidebar />
  <main>
    <SidebarTrigger />
  </main>
</SidebarProvider>
```

### Custom Trigger

To create a custom trigger, you can use the `useSidebar` hook.

```tsx showLineNumbers
import { useSidebar } from '@/components/ui/sidebar'

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar()

  return <button onClick={toggleSidebar}>Toggle Sidebar</button>
}
```

## SidebarRail

The `SidebarRail` component is used to render a rail within a `Sidebar`. This rail can be used to toggle the sidebar.

```tsx showLineNumbers
<Sidebar>
  <SidebarHeader />
  <SidebarContent>
    <SidebarGroup />
  </SidebarContent>
  <SidebarFooter />
  <SidebarRail />
</Sidebar>
```

## Data Fetching

### React Server Components

Here's an example of a `SidebarMenu` component rendering a list of projects using React Server Components.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
import * as React from "react"
import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarMenuSkeleton,
SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
{
name: "Design Engineering",
url: "#",
icon: FrameIcon,
badge: "24",
},
{
name: "Sales & Marketing",
url: "#",
icon: PieChartIcon,
badge: "12",
},
{
name: "Travel",
url: "#",
icon: MapIcon,
badge: "3",
},
{
name: "Support",
url: "#",
icon: LifeBuoyIcon,
badge: "21",
},
{
name: "Feedback",
url: "#",
icon: SendIcon,
badge: "8",
},
]

// Dummy fetch function
async function fetchProjects() {
await new Promise((resolve) => setTimeout(resolve, 3000))
return projects
}

export function AppSidebar() {
return (
<SidebarProvider>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Projects</SidebarGroupLabel>
<SidebarGroupContent>
<React.Suspense fallback={<NavProjectsSkeleton />}>
<NavProjects />
</React.Suspense>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
</SidebarProvider>
)
}

function NavProjectsSkeleton() {
return (
<SidebarMenu>
{Array.from({ length: 5 }).map((\_, index) => (
<SidebarMenuItem key={index}>
<SidebarMenuSkeleton showIcon />
</SidebarMenuItem>
))}
</SidebarMenu>
)
}

async function NavProjects() {
const projects = await fetchProjects()

return (
<SidebarMenu>
{projects.map((project) => (
<SidebarMenuItem key={project.name}>
<SidebarMenuButton asChild>
<a href={project.url}>
<project.icon />
<span>{project.name}</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
))}
</SidebarMenu>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A sidebar menu using React Server Components.
  </figcaption>
</figure>

```tsx showLineNumbers {6} title="Skeleton to show loading state."
function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
````

```tsx showLineNumbers {2} title="Server component fetching data."
async function NavProjects() {
  const projects = await fetchProjects()

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

```tsx showLineNumbers {8-10} title="Usage with React Suspense."
function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <React.Suspense fallback={<NavProjectsSkeleton />}>
              <NavProjects />
            </React.Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

### SWR and React Query

You can use the same approach with [SWR](https://swr.vercel.app/) or [react-query](https://tanstack.com/query/latest/docs/framework/react/overview).

```tsx showLineNumbers title="SWR"
function NavProjects() {
  const { data, isLoading } = useSWR("/api/projects", fetcher)

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

```tsx showLineNumbers title="React Query"
function NavProjects() {
  const { data, isLoading } = useQuery()

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

## Controlled Sidebar

Use the `open` and `onOpenChange` props to control the sidebar.

<figure className="mt-6 flex flex-col gap-4">
  ```tsx
"use client"

import \* as React from "react"
import {
FrameIcon,
LifeBuoyIcon,
MapIcon,
PanelLeftCloseIcon,
PanelLeftOpenIcon,
PieChartIcon,
SendIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
Sidebar,
SidebarContent,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarInset,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
{
name: "Design Engineering",
url: "#",
icon: FrameIcon,
},
{
name: "Sales & Marketing",
url: "#",
icon: PieChartIcon,
},
{
name: "Travel",
url: "#",
icon: MapIcon,
},
{
name: "Support",
url: "#",
icon: LifeBuoyIcon,
},
{
name: "Feedback",
url: "#",
icon: SendIcon,
},
]

export function AppSidebar() {
const [open, setOpen] = React.useState(true)

return (
<SidebarProvider open={open} onOpenChange={setOpen}>
<Sidebar>
<SidebarContent>
<SidebarGroup>
<SidebarGroupLabel>Projects</SidebarGroupLabel>
<SidebarGroupContent>
<SidebarMenu>
{projects.map((project) => (
<SidebarMenuItem key={project.name}>
<SidebarMenuButton asChild>
<a href={project.url}>
<project.icon />
<span>{project.name}</span>
</a>
</SidebarMenuButton>
</SidebarMenuItem>
))}
</SidebarMenu>
</SidebarGroupContent>
</SidebarGroup>
</SidebarContent>
</Sidebar>
<SidebarInset>

<header className="flex h-12 items-center justify-between px-4">
<Button
onClick={() => setOpen((open) => !open)}
size="sm"
variant="ghost" >
{open ? <PanelLeftCloseIcon /> : <PanelLeftOpenIcon />}
<span>{open ? "Close" : "Open"} Sidebar</span>
</Button>
</header>
</SidebarInset>
</SidebarProvider>
)
}

````
  <figcaption className="text-center text-sm text-gray-500">
    A controlled sidebar.
  </figcaption>
</figure>

```tsx showLineNumbers
export function AppSidebar() {
  const [open, setOpen] = React.useState(false)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar />
    </SidebarProvider>
  )
}
````

## Theming

We use the following CSS variables to theme the sidebar.

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 98%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

**We intentionally use different variables for the sidebar and the rest of the application** to make it easy to have a sidebar that is styled differently from the rest of the application. Think a sidebar with a darker shade from the main application.

## Styling

Here are some tips for styling the sidebar based on different states.

- **Styling an element based on the sidebar collapsible state.** The following will hide the `SidebarGroup` when the sidebar is in `icon` mode.

```tsx
<Sidebar collapsible="icon">
  <SidebarContent>
    <SidebarGroup className="group-data-[collapsible=icon]:hidden" />
  </SidebarContent>
</Sidebar>
```

- **Styling a menu action based on the menu button active state.** The following will force the menu action to be visible when the menu button is active.

```tsx
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
</SidebarMenuItem>
```

You can find more tips on using states for styling in this [Twitter thread](https://x.com/shadcn/status/1842329158879420864).

## Changelog

### 2024-10-30 Cookie handling in setOpen

- [#5593](https://github.com/shadcn-ui/ui/pull/5593) - Improved setOpen callback logic in `<SidebarProvider>`.

Update the `setOpen` callback in `<SidebarProvider>` as follows:

```tsx showLineNumbers
const setOpen = React.useCallback(
  (value: boolean | ((value: boolean) => boolean)) => {
    const openState = typeof value === 'function' ? value(open) : value
    if (setOpenProp) {
      setOpenProp(openState)
    } else {
      _setOpen(openState)
    }

    // This sets the cookie to keep the sidebar state.
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
  },
  [setOpenProp, open]
)
```

### 2024-10-21 Fixed `text-sidebar-foreground`

- [#5491](https://github.com/shadcn-ui/ui/pull/5491) - Moved `text-sidebar-foreground` from `<SidebarProvider>` to `<Sidebar>` component.

### 2024-10-20 Typo in `useSidebar` hook.

Fixed typo in `useSidebar` hook.

```diff showLineNumbers title="sidebar.tsx"
-  throw new Error("useSidebar must be used within a Sidebar.")
+  throw new Error("useSidebar must be used within a SidebarProvider.")
```

````

## .template\shadcn_guide\components_db\Skeleton.md

```markdown
---
title: Skeleton
description: Use to show a placeholder while content is loading.
component: true
---

```tsx
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add skeleton
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="skeleton" title="components/ui/skeleton.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Skeleton } from '@/components/ui/skeleton'
```

```tsx
<Skeleton className="h-[20px] w-[100px] rounded-full" />
```

## Examples

### Card

```tsx
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

````

## .template\shadcn_guide\components_db\Slider.md

```markdown
---
title: Slider
description: An input where the user selects a value from within a given range.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/slider
  api: https://www.radix-ui.com/docs/primitives/components/slider#api-reference
---

```tsx
import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn('w-[60%]', className)}
      {...props}
    />
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add slider
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-slider
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="slider" title="components/ui/slider.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Slider } from '@/components/ui/slider'
```

```tsx
<Slider defaultValue={[33]} max={100} step={1} />
```

````

## .template\shadcn_guide\components_db\Sonner.md

```markdown
---
title: Sonner
description: An opinionated toast component for React.
component: true
links:
  doc: https://sonner.emilkowal.ski
---

```tsx
'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}
````

## About

Sonner is built and maintained by [emilkowalski](https://twitter.com/emilkowalski).

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<Steps>

<Step>Run the following command:</Step>

```bash
npx shadcn@latest add sonner
```

<Step>Add the Toaster component</Step>

```tsx title="app/layout.tsx" {1,9}
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

</Steps>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install sonner next-themes
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="sonner" title="components/ui/sonner.tsx" />

<Step>Add the Toaster component</Step>

```tsx showLineNumbers title="app/layout.tsx" {1,8}
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { toast } from 'sonner'
```

```tsx
toast('Event has been created.')
```

## Examples

```tsx
'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast('Event has been created')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Event has been created')}>
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Be at the area 10 minutes before the event time')}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('Event start time cannot be earlier than 8am')}
      >
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error('Event has not been created')}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Event' }), 2000)),
            {
              loading: 'Loading...',
              success: (data) => `${data.name} has been created`,
              error: 'Error',
            }
          )
        }}
      >
        Promise
      </Button>
    </div>
  )
}
```

## Changelog

### 2025-10-13 Icons

We've updated the Sonner component to use icons from `lucide`. Update your `sonner.tsx` file to use the new icons.

```tsx showLineNumbers title="components/ui/sonner.tsx" {3-9,20-26}
'use client'

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
```

````

## .template\shadcn_guide\components_db\Spinner.md

```markdown
---
title: Spinner
description: An indicator that can be used to show a loading state.
component: true
---

```tsx
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add spinner
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="spinner" title="components/ui/spinner.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Spinner } from '@/components/ui/spinner'
```

```tsx
<Spinner />
```

## Customization

You can replace the default spinner icon with any other icon by editing the `Spinner` component.

```tsx
import { LoaderIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  )
}
```

```tsx showLineNumbers title="components/ui/spinner.tsx"
import { LoaderIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
```

## Examples

### Size

Use the `size-*` utility class to change the size of the spinner.

```tsx
import { Spinner } from '@/components/ui/spinner'

export function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}
```

### Color

Use the `text-` utility class to change the color of the spinner.

```tsx
import { Spinner } from '@/components/ui/spinner'

export function SpinnerColor() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-blue-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
    </div>
  )
}
```

### Button

Add a spinner to a button to indicate a loading state. The `<Button />` will handle the spacing between the spinner and the text.

```tsx
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner />
        Processing
      </Button>
    </div>
  )
}
```

### Badge

You can also use a spinner inside a badge.

```tsx
import { Badge } from '@/components/ui/badge'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Processing
      </Badge>
    </div>
  )
}
```

### Input Group

Input Group can have spinners inside `<InputGroupAddon>`.

```tsx
import { ArrowUpIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Send a message..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> Validating...
          <InputGroupButton className="ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

### Empty

```tsx
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerEmpty() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

### Item

Use the spinner inside `<ItemMedia>` to indicate a loading state.

```tsx
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { Progress } from '@/components/ui/progress'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerItem() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 [--radius:1rem]">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Downloading...</ItemTitle>
          <ItemDescription>129 MB / 1000 MB</ItemDescription>
        </ItemContent>
        <ItemActions className="hidden sm:flex">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </ItemActions>
        <ItemFooter>
          <Progress value={75} />
        </ItemFooter>
      </Item>
    </div>
  )
}
```

## API Reference

### Spinner

Use the `Spinner` component to display a spinner.

| Prop        | Type     | Default |
| ----------- | -------- | ------- |
| `className` | `string` | ``      |

```tsx
<Spinner />
```

````

## .template\shadcn_guide\components_db\Switch.md

```markdown
---
title: Switch
description: A control that allows the user to toggle between checked and not checked.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/switch
  api: https://www.radix-ui.com/docs/primitives/components/switch#api-reference
---

```tsx
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add switch
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-switch
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="switch" title="components/ui/switch.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Switch } from '@/components/ui/switch'
```

```tsx
<Switch />
```

````

## .template\shadcn_guide\components_db\Table.md

```markdown
---
title: Table
description: A responsive table component.
component: true
---

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add table
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="table" title="components/ui/table.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
```

```tsx showLineNumbers
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Data Table

You can use the `<Table />` component to build more complex data tables. Combine it with [@tanstack/react-table](https://tanstack.com/table/v8) to create tables with sorting, filtering and pagination.

See the [Data Table](/docs/components/data-table) documentation for more information.

You can also see an example of a data table in the [Tasks](/examples/tasks) demo.

````

## .template\shadcn_guide\components_db\Tabs.md

```markdown
---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/tabs
  api: https://www.radix-ui.com/docs/primitives/components/tabs#api-reference
---

```tsx
import { AppWindowIcon, CodeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add tabs
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-tabs
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="tabs" title="components/ui/tabs.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
```

```tsx showLineNumbers
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

````

## .template\shadcn_guide\components_db\Textarea.md

```markdown
---
title: Textarea
description: Displays a form textarea or a component that looks like a textarea.
component: true
---

```tsx
import { Textarea } from '@/components/ui/textarea'

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add textarea
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="textarea" title="components/ui/textarea.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Textarea } from '@/components/ui/textarea'
```

```tsx
<Textarea />
```

## Examples

### Default

```tsx
import { Textarea } from '@/components/ui/textarea'

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
```

### Disabled

```tsx
import { Textarea } from '@/components/ui/textarea'

export function TextareaDisabled() {
  return <Textarea placeholder="Type your message here." disabled />
}
```

### With Label

```tsx
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}
```

### With Text

```tsx
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function TextareaWithText() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}
```

### With Button

```tsx
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
```

````

## .template\shadcn_guide\components_db\Toast.md

```markdown
---
title: Toast
description: A succinct message that is displayed temporarily.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/toast
  api: https://www.radix-ui.com/docs/primitives/components/toast#api-reference
---

<Callout title="The toast component has been deprecated." className="mt-0">
  See the [sonner](/docs/components/sonner) documentation for more information.
</Callout>

If you're looking for the old toast component, see the [old docs](https://v3.shadcn.com/docs/components/toast) for more information.

````

## .template\shadcn_guide\components_db\Toggle.md

````markdown
---
title: Toggle
description: A two-state button that can be either on or off.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/toggle
  api: https://www.radix-ui.com/docs/primitives/components/toggle#api-reference
---

```tsx
import { BookmarkIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleDemo() {
  return (
    <Toggle
      aria-label="Toggle bookmark"
      size="sm"
      variant="outline"
      className="data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500 data-[state=on]:bg-transparent"
    >
      <BookmarkIcon />
      Bookmark
    </Toggle>
  )
}
```
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add toggle
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-toggle
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="toggle" title="components/ui/toggle.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Toggle } from '@/components/ui/toggle'
```

```tsx
<Toggle>Toggle</Toggle>
```

## Examples

### Default

```tsx
import { BookmarkIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleDemo() {
  return (
    <Toggle
      aria-label="Toggle bookmark"
      size="sm"
      variant="outline"
      className="data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500 data-[state=on]:bg-transparent"
    >
      <BookmarkIcon />
      Bookmark
    </Toggle>
  )
}
```

### Outline

```tsx
import { Italic } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
```

### With Text

```tsx
import { Italic } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}
```

### Small

```tsx
import { Italic } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleSm() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
```

### Large

```tsx
import { Italic } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
```

### Disabled

```tsx
import { Underline } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}
```

````

## .template\shadcn_guide\components_db\Toggle_Group.md

```markdown
---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/toggle-group
  api: https://www.radix-ui.com/docs/primitives/components/toggle-group#api-reference
---

```tsx
import { BookmarkIcon, HeartIcon, StarIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupSpacing() {
  return (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500 data-[state=on]:bg-transparent"
      >
        <StarIcon />
        Star
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 data-[state=on]:bg-transparent"
      >
        <HeartIcon />
        Heart
      </ToggleGroupItem>
      <ToggleGroupItem
        value="bookmark"
        aria-label="Toggle bookmark"
        className="data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500 data-[state=on]:bg-transparent"
      >
        <BookmarkIcon />
        Bookmark
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add toggle-group
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-toggle-group
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="toggle-group" title="components/ui/toggle-group.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
```

```tsx
<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

## Examples

### Outline

```tsx
import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Single

```tsx
import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Small

```tsx
import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Large

```tsx
import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Disabled

```tsx
import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Spacing

Use `spacing={2}` to add spacing between toggle group items.

```tsx
import { BookmarkIcon, HeartIcon, StarIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleGroupSpacing() {
  return (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500 data-[state=on]:bg-transparent"
      >
        <StarIcon />
        Star
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 data-[state=on]:bg-transparent"
      >
        <HeartIcon />
        Heart
      </ToggleGroupItem>
      <ToggleGroupItem
        value="bookmark"
        aria-label="Toggle bookmark"
        className="data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500 data-[state=on]:bg-transparent"
      >
        <BookmarkIcon />
        Bookmark
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

## API Reference

### ToggleGroup

The main component that wraps toggle group items.

| Prop        | Type                        | Default     |
| ----------- | --------------------------- | ----------- |
| `type`      | `"single" \| "multiple"`    | `"single"`  |
| `variant`   | `"default" \| "outline"`    | `"default"` |
| `size`      | `"default" \| "sm" \| "lg"` | `"default"` |
| `spacing`   | `number`                    | `0`         |
| `className` | `string`                    |             |

```tsx
<ToggleGroup type="single" variant="outline" size="sm">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>
```

### ToggleGroupItem

Individual toggle items within a toggle group. Remember to add an `aria-label` to each item for accessibility.

| Prop        | Type     | Default  |
| ----------- | -------- | -------- |
| `value`     | `string` | Required |
| `className` | `string` |          |

````

## .template\shadcn_guide\components_db\Tooltip.md

```markdown
---
title: Tooltip
description: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
component: true
links:
  doc: https://www.radix-ui.com/docs/primitives/components/tooltip
  api: https://www.radix-ui.com/docs/primitives/components/tooltip#api-reference
---

```tsx
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
````

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add tooltip
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @radix-ui/react-tooltip
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="tooltip" title="components/ui/tooltip.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
```

```tsx showLineNumbers
<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>
```

---

## Changelog

### 2025-09-22 Update tooltip colors

We've updated the tooltip colors to use the foreground color for the background and the background color for the foreground.

Replace `bg-primary text-primary-foreground` with `bg-foreground text-background` for both `<TooltipContent />` and `<TooltipArrow />`.

````

## .template\shadcn_guide\components_db\Typography.md.txt

```txt
---
title: Typography
description: Styles for headings, paragraphs, lists...etc
component: true
---

We do not ship any typography styles by default. This page is an example of how you can use utility classes to style your text.

```tsx
export function TypographyDemo() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        The King&apos;s Plan
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king thought long and hard, and finally came up with{" "}
        <a
          href="#"
          className="text-primary font-medium underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Joke Tax
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king&apos;s subjects were not amused. They grumbled and complained,
        but the king was firm:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king&apos;s
        foolishness get him down: a court jester named Jokester.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Jokester&apos;s Revolt
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&apos;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&apos;t seem to stop Jokester.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn&apos;t help but laugh.
        And once they started laughing, they couldn&apos;t stop.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The People&apos;s Rebellion
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="even:bg-muted m-0 border-t p-0">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                King&apos;s Treasury
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                People&apos;s happiness
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-muted m-0 border-t p-0">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Empty
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Overflowing
              </td>
            </tr>
            <tr className="even:bg-muted m-0 border-t p-0">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Modest
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Satisfied
              </td>
            </tr>
            <tr className="even:bg-muted m-0 border-t p-0">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Full
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Ecstatic
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </p>
    </div>
  )
}

````

## h1

```tsx
export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-balance text-center text-4xl font-extrabold tracking-tight">
      Taxing Laughter: The Joke Tax Chronicles
    </h1>
  )
}
```

## h2

```tsx
export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      The People of the Kingdom
    </h2>
  )
}
```

## h3

```tsx
export function TypographyH3() {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Joke Tax</h3>
}
```

## h4

```tsx
export function TypographyH4() {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      People stopped telling jokes
    </h4>
  )
}
```

## p

```tsx
export function TypographyP() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of his ways and
      repealed the joke tax.
    </p>
  )
}
```

## blockquote

```tsx
export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that
      they should pay for the privilege.&quot;
    </blockquote>
  )
}
```

## table

```tsx
export function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King&apos;s Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People&apos;s happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
```

## list

```tsx
export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  )
}
```

## Inline code

```tsx
export function TypographyInlineCode() {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      @radix-ui/react-alert-dialog
    </code>
  )
}
```

## Lead

```tsx
export function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects a response.
    </p>
  )
}
```

## Large

```tsx
export function TypographyLarge() {
  return <div className="text-lg font-semibold">Are you absolutely sure?</div>
}
```

## Small

```tsx
export function TypographySmall() {
  return <small className="text-sm font-medium leading-none">Email address</small>
}
```

## Muted

```tsx
export function TypographyMuted() {
  return <p className="text-sm text-muted-foreground">Enter your email address.</p>
}
```

````

## .template\shadcn_guide\get_started\Blocks.md

```markdown
---
title: Blocks
description: Contribute components to the blocks library.
---

We are inviting the community to contribute to the [blocks library](/blocks). Share your components and blocks with other developers and help build a library of high-quality, reusable components.

We'd love to see all types of blocks: applications, marketing, products, and more.

## Setup your workspace

<Steps>

### Fork the repository

```bash
git clone https://github.com/shadcn-ui/ui.git
````

### Create a new branch

```bash
git checkout -b username/my-new-block
```

### Install dependencies

```bash
pnpm install
```

### Start the dev server

```bash
pnpm www:dev
```

</Steps>

## Add a block

A block can be a single component (eg. a variation of a ui component) or a complex component (eg. a dashboard) with multiple components, hooks, and utils.

<Steps>

### Create a new block

Create a new folder in the `apps/www/registry/new-york/blocks` directory. Make sure the folder is named in kebab-case and under `new-york`.

```txt
apps
└── www
    └── registry
        └── new-york
            └── blocks
                └── dashboard-01
```

<Callout className="mt-6">

**Note:** The build script will take care of building the block for the `default` style.

</Callout>

### Add your block files

Add your files to the block folder. Here is an example of a block with a page, components, hooks, and utils.

```txt
dashboard-01
└── page.tsx
└── components
    └── hello-world.tsx
    └── example-card.tsx
└── hooks
    └── use-hello-world.ts
└── lib
    └── format-date.ts
```

<Callout className="mt-6">

**Note:** You can start with one file and add more files later.

</Callout>

</Steps>

## Add your block to the registry

<Steps>

### Add your block definition to `registry-blocks.tsx`

To add your block to the registry, you need to add your block definition to `registry-blocks.ts`.

This follows the registry schema at [https://ui.shadcn.com/schema/registry-item.json](https://ui.shadcn.com/schema/registry-item.json).

```tsx title="apps/www/registry/registry-blocks.tsx" showLineNumbers
export const blocks = [
  // ...
  {
    name: 'dashboard-01',
    author: 'shadcn (https://ui.shadcn.com)',
    title: 'Dashboard',
    description: 'A simple dashboard with a hello world component.',
    type: 'registry:block',
    registryDependencies: ['input', 'button', 'card'],
    dependencies: ['zod'],
    files: [
      {
        path: 'blocks/dashboard-01/page.tsx',
        type: 'registry:page',
        target: 'app/dashboard/page.tsx',
      },
      {
        path: 'blocks/dashboard-01/components/hello-world.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/components/example-card.tsx',
        type: 'registry:component',
      },
      {
        path: 'blocks/dashboard-01/hooks/use-hello-world.ts',
        type: 'registry:hook',
      },
      {
        path: 'blocks/dashboard-01/lib/format-date.ts',
        type: 'registry:lib',
      },
    ],
    categories: ['dashboard'],
  },
]
```

Make sure you add a name, description, type, registryDependencies, dependencies, files, and categories. We'll go over each of these in more detail in the schema docs (coming soon).

### Run the build script

```bash
pnpm registry:build
```

<Callout className="mt-6">

**Note:** you do not need to run this script for every change. You only need to run it when you update the block definition.

</Callout>

### View your block

Once the build script is finished, you can view your block at `http://localhost:3333/blocks/[CATEGORY]` or a full screen preview at `http://localhost:3333/view/styles/new-york/dashboard-01`.

<Image
  src="/images/block-preview-light.png"
  width="1432"
  height="960"
  alt="Block preview"
  className="mt-6 w-full overflow-hidden rounded-lg border dark:hidden"
/>
<Image
  src="/images/block-preview-dark.png"
  width="1432"
  height="960"
  alt="Block preview"
  className="mt-6 hidden w-full overflow-hidden rounded-lg border shadow-sm dark:block"
/>

### Build your block

You can now build your block by editing the files in the block folder and viewing the changes in the browser.

If you add more files, make sure to add them to the `files` array in the block definition.

</Steps>

## Publish your block

Once you're ready to publish your block, you can submit a pull request to the main repository.

<Steps>

### Run the build script

```bash
pnpm registry:build
```

### Capture a screenshot

```bash
pnpm registry:capture
```

<Callout className="mt-6">

**Note:** If you've run the capture script before, you might need to delete the existing screenshots (both light and dark) at `apps/www/public/r/styles/new-york` and run the script again.

</Callout>

### Submit a pull request

Commit your changes and submit a pull request to the main repository.

Your block will be reviewed and merged. Once merged it will be published to the website and available to be installed via the CLI.

</Steps>

## Categories

The `categories` property is used to organize your block in the registry.

### Add a category

If you need to add a new category, you can do so by adding it to the `registryCategories` array in `apps/www/registry/registry-categories.ts`.

```tsx title="apps/www/registry/registry-categories.ts" showLineNumbers
export const registryCategories = [
  // ...
  {
    name: 'Input',
    slug: 'input',
    hidden: false,
  },
]
```

## Guidelines

Here are some guidelines to follow when contributing to the blocks library.

- The following properties are required for the block definition: `name`, `description`, `type`, `files`, and `categories`.
- Make sure to list all registry dependencies in `registryDependencies`. A registry dependency is the name of the component in the registry eg. `input`, `button`, `card`, etc.
- Make sure to list all dependencies in `dependencies`. A dependency is the name of the package in the registry eg. `zod`, `sonner`, etc.
- If your block has a page (optional), it should be the first entry in the `files` array and it should have a `target` property. This helps the CLI place the page in the correct location for file-based routing.
- **Imports should always use the `@/registry` path.** eg. `import { Input } from "@/registry/new-york/input"`

````

## .template\shadcn_guide\get_started\JavaScript_shadcn.md

```markdown
---
title: JavaScript
description: How to use shadcn/ui with JavaScript
---

This project and the components are written in TypeScript. We recommend using TypeScript for your project as well.

However we provide a JavaScript version of the components as well. The JavaScript version is available via the [cli](/docs/cli).

To opt-out of TypeScript, you can use the `tsx` flag in your `components.json` file.

```json {4} title="components.json" showLineNumbers
{
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
````

To configure import aliases, you can use the following `jsconfig.json`:

```json {4} title="jsconfig.json" showLineNumbers
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

````

## .template\shadcn_guide\get_started\Monorepo.md

```markdown
---
title: Monorepo
description: Using shadcn/ui components and CLI in a monorepo.
---

Until now, using shadcn/ui in a monorepo was a bit of a pain. You could add
components using the CLI, but you had to manage where the components
were installed and manually fix import paths.

With the new monorepo support in the CLI, we've made it a lot easier to use
shadcn/ui in a monorepo.

The CLI now understands the monorepo structure and will install the components,
dependencies and registry dependencies to the correct paths and handle imports
for you.

## Getting started

<Steps>

### Create a new monorepo project

To create a new monorepo project, run the `init` command. You will be prompted
to select the type of project you are creating.

```bash
npx shadcn@latest init
````

Select the `Next.js (Monorepo)` option.

```bash
? Would you like to start a new project?
    Next.js
❯   Next.js (Monorepo)
```

This will create a new monorepo project with two workspaces: `web` and `ui`,
and [Turborepo](https://turbo.build/repo/docs) as the build system.

Everything is set up for you, so you can start adding components to your project.

Note: The monorepo uses React 19 and Tailwind CSS v4.

### Add components to your project

To add components to your project, run the `add` command **in the path of your app**.

```bash
cd apps/web
```

```bash
npx shadcn@latest add [COMPONENT]
```

The CLI will figure out what type of component you are adding and install the
correct files to the correct path.

For example, if you run `npx shadcn@latest add button`, the CLI will install the button component under `packages/ui` and update the import path for components in `apps/web`.

If you run `npx shadcn@latest add login-01`, the CLI will install the `button`, `label`, `input` and `card` components under `packages/ui` and the `login-form` component under `apps/web/components`.

### Importing components

You can import components from the `@workspace/ui` package as follows:

```tsx
import { Button } from '@workspace/ui/components/button'
```

You can also import hooks and utilities from the `@workspace/ui` package.

```tsx
import { useTheme } from '@workspace/ui/hooks/use-theme'
import { cn } from '@workspace/ui/lib/utils'
```

</Steps>

## File Structure

When you create a new monorepo project, the CLI will create the following file structure:

```txt
apps
└── web         # Your app goes here.
    ├── app
    │   └── page.tsx
    ├── components
    │   └── login-form.tsx
    ├── components.json
    └── package.json
packages
└── ui          # Your components and dependencies are installed here.
    ├── src
    │   ├── components
    │   │   └── button.tsx
    │   ├── hooks
    │   ├── lib
    │   │   └── utils.ts
    │   └── styles
    │       └── globals.css
    ├── components.json
    └── package.json
package.json
turbo.json
```

## Requirements

1. Every workspace must have a `components.json` file. A `package.json` file tells npm how to install the dependencies. A `components.json` file tells the CLI how and where to install components.

2. The `components.json` file must properly define aliases for the workspace. This tells the CLI how to import components, hooks, utilities, etc.

```json showLineNumbers title="apps/web/components.json"
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "../../packages/ui/src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@workspace/ui/lib/utils",
    "ui": "@workspace/ui/components"
  }
}
```

```json showLineNumbers title="packages/ui/components.json"
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

3. Ensure you have the same `style`, `iconLibrary` and `baseColor` in both `components.json` files.

4. **For Tailwind CSS v4, leave the `tailwind` config empty in the `components.json` file.**

By following these requirements, the CLI will be able to install ui components, blocks, libs and hooks to the correct paths and handle imports for you.

````

## .template\shadcn_guide\get_started\React_Hook_Form.md

```markdown
---
title: Forms
description: Build forms with React and shadcn/ui.
---

import { ClipboardListIcon, InfoIcon } from "lucide-react"

## Pick Your Framework

Start by selecting your framework. Then follow the instructions to learn how to build forms with shadcn/ui and the form library of your choice.

<div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
  <LinkedCard href="/docs/forms/react-hook-form">
    <ClipboardListIcon className="size-10" />
    <p className="mt-2 font-medium">React Hook Form</p>
  </LinkedCard>
  <LinkedCard href="/docs/forms/tanstack-form">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-10"
      fill="currentColor"
    >
      <path d="M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188 1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426 35.65 35.65 0 0 0-2.074-2.742.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102 35.54 35.54 0 0 0-3.363.437.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.426a.644.644 0 0 1 0 .629l-1.39 2.43a.638.638 0 0 1-.551.316h-2.774a.627.627 0 0 1-.546-.316l-1.395-2.43a.644.644 0 0 1 0-.629l1.395-2.426a.627.627 0 0 1 .546-.316Zm-.491.867h-1.79a.624.624 0 0 0-.546.316l-.899 1.56a.644.644 0 0 0 0 .628l.899 1.563a.632.632 0 0 0 .547.316h1.789a.632.632 0 0 0 .547-.316l.898-1.563a.644.644 0 0 0 0-.629l-.898-1.558a.624.624 0 0 0-.547-.317Zm-.477.828c.227 0 .438.121.547.317l.422.73a.625.625 0 0 1 0 .629l-.422.734a.627.627 0 0 1-.547.317h-.836a.632.632 0 0 1-.547-.317l-.422-.734a.625.625 0 0 1 0-.629l.422-.73a.632.632 0 0 1 .547-.317zm-.418.817a.548.548 0 0 0-.473.273.547.547 0 0 0 0 .547.544.544 0 0 0 .473.27.544.544 0 0 0 .473-.27.547.547 0 0 0 0-.547.548.548 0 0 0-.473-.273Zm-4.422.546h.98M18.98 7.75c.391-1.895.477-3.344.223-4.398-.148-.63-.422-1.137-.84-1.508-.441-.39-1-.582-1.625-.582-1.035 0-2.12.472-3.281 1.367a14.9 14.9 0 0 0-1.473 1.316 1.206 1.206 0 0 0-.136-.144c-1.446-1.285-2.66-2.082-3.7-2.39-.617-.184-1.195-.2-1.722-.024-.559.187-1.004.574-1.317 1.117-.515.894-.652 2.074-.46 3.527.078.59.214 1.235.402 1.934a1.119 1.119 0 0 0-.215.047C3.008 8.62 1.71 9.269.926 10.015c-.465.442-.77.938-.883 1.481-.113.578 0 1.156.312 1.7.516.894 1.465 1.597 2.817 2.155.543.223 1.156.426 1.844.61a1.023 1.023 0 0 0-.07.226c-.391 1.891-.477 3.344-.223 4.395.148.629.425 1.14.84 1.508.44.39 1 .582 1.625.582 1.035 0 2.12-.473 3.28-1.364.477-.37.973-.816 1.489-1.336a1.2 1.2 0 0 0 .195.227c1.446 1.285 2.66 2.082 3.7 2.39.617.184 1.195.2 1.722.024.559-.187 1.004-.574 1.317-1.117.515-.894.652-2.074.46-3.527a14.941 14.941 0 0 0-.425-2.012 1.225 1.225 0 0 0 .238-.047c1.828-.61 3.125-1.258 3.91-2.004.465-.441.77-.937.883-1.48.113-.578 0-1.157-.313-1.7-.515-.894-1.464-1.597-2.816-2.156a14.576 14.576 0 0 0-1.906-.625.865.865 0 0 0 .059-.195z" />
    </svg>
    <p className="mt-2 font-medium">TanStack Form</p>
  </LinkedCard>
  <LinkedCard href="#" className="border border-dashed bg-transparent">
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="size-10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>React</title>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
      />
    </svg>
    <p className="mt-2 font-medium">useActionState</p>
    <p className="text-muted-foreground mt-1 text-xs">(Coming Soon)</p>

  </LinkedCard>
</div>

---

For more details, check out the React_Hook_Forms file.

````

## .template\shadcn_guide\get_started\React_Hook_Forms.md

````markdown
---
title: React Hook Form
description: Build forms in React using React Hook Form and Zod.
links:
  doc: https://react-hook-form.com
---

import { InfoIcon } from "lucide-react"

In this guide, we will take a look at building forms with React Hook Form. We'll cover building forms with the `<Field />` component, adding schema validation using Zod, error handling, accessibility, and more.

## Demo

We are going to build the following form. It has a simple text input and a textarea. On submit, we'll validate the form data and display any errors.

<Callout icon={<InfoIcon />}>
**Note:** For the purpose of this demo, we have intentionally disabled browser
validation to show how schema validation and form errors work in React Hook
Form. It is recommended to add basic browser validation in your production
code.
</Callout>

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'

const formSchema = z.object({
  title: z
    .string()
    .min(5, 'Bug title must be at least 5 characters.')
    .max(32, 'Bug title must be at most 32 characters.'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters.')
    .max(100, 'Description must be at most 100 characters.'),
})

export function BugReportForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>Help us improve by reporting bugs you encounter.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Bug Title</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Login button not working on mobile"
                    autoComplete="off"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">Description</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="I'm having an issue with the login button on mobile."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what actually happened.
                  </FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```
````

## Approach

This form leverages React Hook Form for performant, flexible form handling. We'll build our form using the `<Field />` component, which gives you **complete flexibility over the markup and styling**.

- Uses React Hook Form's `useForm` hook for form state management.
- `<Controller />` component for controlled inputs.
- `<Field />` components for building accessible forms.
- Client-side validation using Zod with `zodResolver`.

## Anatomy

Here's a basic example of a form using the `<Controller />` component from React Hook Form and the `<Field />` component.

```tsx showLineNumbers {5-18}
<Controller
  name="title"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      <FieldDescription>Provide a concise title for your bug report.</FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

## Form

### Create a form schema

We'll start by defining the shape of our form using a Zod schema

<Callout icon={<InfoIcon />}>
**Note:** This example uses `zod v3` for schema validation, but you can
replace it with any other Standard Schema validation library supported by
React Hook Form.
</Callout>

```tsx showLineNumbers title="form.tsx"
import * as z from 'zod'

const formSchema = z.object({
  title: z
    .string()
    .min(5, 'Bug title must be at least 5 characters.')
    .max(32, 'Bug title must be at most 32 characters.'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters.')
    .max(100, 'Description must be at most 100 characters.'),
})
```

### Setup the form

Next, we'll use the `useForm` hook from React Hook Form to create our form instance. We'll also add the Zod resolver to validate the form data.

```tsx showLineNumbers title="form.tsx" {17-23}
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  title: z
    .string()
    .min(5, 'Bug title must be at least 5 characters.')
    .max(32, 'Bug title must be at most 32 characters.'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters.')
    .max(100, 'Description must be at most 100 characters.'),
})

export function BugReportForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* ... */}
      {/* Build the form here */}
      {/* ... */}
    </form>
  )
}
```

### Build the form

We can now build the form using the `<Controller />` component from React Hook Form and the `<Field />` component.

<ComponentSource
  src="/registry/new-york-v4/examples/form-rhf-demo.tsx"
  title="form.tsx"
/>

### Done

That's it. You now have a fully accessible form with client-side validation.

When you submit the form, the `onSubmit` function will be called with the validated form data. If the form data is invalid, React Hook Form will display the errors next to each field.

## Validation

### Client-side Validation

React Hook Form validates your form data using the Zod schema. Define a schema and pass it to the `resolver` option of the `useForm` hook.

```tsx showLineNumbers title="example-form.tsx" {5-8,12}
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
})

export function ExampleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })
}
```

### Validation Modes

React Hook Form supports different validation modes.

```tsx showLineNumbers title="form.tsx" {3}
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  mode: 'onChange',
})
```

| Mode          | Description                                              |
| ------------- | -------------------------------------------------------- |
| `"onChange"`  | Validation triggers on every change.                     |
| `"onBlur"`    | Validation triggers on blur.                             |
| `"onSubmit"`  | Validation triggers on submit (default).                 |
| `"onTouched"` | Validation triggers on first blur, then on every change. |
| `"all"`       | Validation triggers on blur and change.                  |

## Displaying Errors

Display errors next to the field using `<FieldError />`. For styling and accessibility:

- Add the `data-invalid` prop to the `<Field />` component.
- Add the `aria-invalid` prop to the form control such as `<Input />`, `<SelectTrigger />`, `<Checkbox />`, etc.

```tsx showLineNumbers title="form.tsx" {5,11,13}
<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input {...field} id={field.name} type="email" aria-invalid={fieldState.invalid} />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

## Working with Different Field Types

### Input

- For input fields, spread the `field` object onto the `<Input />` component.
- To show errors, add the `aria-invalid` prop to the `<Input />` component and the `data-invalid` prop to the `<Field />` component.

```tsx
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters.')
    .max(10, 'Username must be at most 10 characters.')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores.'),
})

export function FormRhfInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>Update your profile information below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-username">Username</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-input-username"
                    aria-invalid={fieldState.invalid}
                    placeholder="shadcn"
                    autoComplete="username"
                  />
                  <FieldDescription>
                    This is your public display name. Must be between 3 and 10 characters. Must only
                    contain letters, numbers, and underscores.
                  </FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-input">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

For simple text inputs, spread the `field` object onto the input.

```tsx showLineNumbers title="form.tsx" {5,7,8}
<Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

### Textarea

- For textarea fields, spread the `field` object onto the `<Textarea />` component.
- To show errors, add the `aria-invalid` prop to the `<Textarea />` component and the `data-invalid` prop to the `<Field />` component.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  about: z
    .string()
    .min(10, 'Please provide at least 10 characters.')
    .max(200, 'Please keep it under 200 characters.'),
})

export function FormRhfTextarea() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Personalization</CardTitle>
        <CardDescription>
          Customize your experience by telling us more about yourself.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-textarea" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="about"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-textarea-about">More about you</FieldLabel>
                  <Textarea
                    {...field}
                    id="form-rhf-textarea-about"
                    aria-invalid={fieldState.invalid}
                    placeholder="I'm a software engineer..."
                    className="min-h-[120px]"
                  />
                  <FieldDescription>
                    Tell us more about yourself. This will be used to help us personalize your
                    experience.
                  </FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-textarea">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

For textarea fields, spread the `field` object onto the textarea.

```tsx showLineNumbers title="form.tsx" {5,10,18}
<Controller
  name="about"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor="form-rhf-textarea-about">More about you</FieldLabel>
      <Textarea
        {...field}
        id="form-rhf-textarea-about"
        aria-invalid={fieldState.invalid}
        placeholder="I'm a software engineer..."
        className="min-h-[120px]"
      />
      <FieldDescription>
        Tell us more about yourself. This will be used to help us personalize your experience.
      </FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

### Select

- For select components, use `field.value` and `field.onChange` on the `<Select />` component.
- To show errors, add the `aria-invalid` prop to the `<SelectTrigger />` component and the `data-invalid` prop to the `<Field />` component.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const spokenLanguages = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Italian', value: 'it' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Japanese', value: 'ja' },
] as const

const formSchema = z.object({
  language: z
    .string()
    .min(1, 'Please select your spoken language.')
    .refine((val) => val !== 'auto', {
      message: 'Auto-detection is not allowed. Please select a specific language.',
    }),
})

export function FormRhfSelect() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-lg">
      <CardHeader>
        <CardTitle>Language Preferences</CardTitle>
        <CardDescription>Select your preferred spoken language.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-select" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="language"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation="responsive" data-invalid={fieldState.invalid}>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-select-language">Spoken Language</FieldLabel>
                    <FieldDescription>
                      For best results, select the language you speak.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </FieldContent>
                  <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="form-rhf-select-language"
                      aria-invalid={fieldState.invalid}
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="auto">Auto</SelectItem>
                      <SelectSeparator />
                      {spokenLanguages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-select">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

```tsx showLineNumbers title="form.tsx" {5,13,22}
<Controller
  name="language"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field orientation="responsive" data-invalid={fieldState.invalid}>
      <FieldContent>
        <FieldLabel htmlFor="form-rhf-select-language">Spoken Language</FieldLabel>
        <FieldDescription>For best results, select the language you speak.</FieldDescription>
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </FieldContent>
      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
        <SelectTrigger
          id="form-rhf-select-language"
          aria-invalid={fieldState.invalid}
          className="min-w-[120px]"
        >
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectItem value="auto">Auto</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  )}
/>
```

### Checkbox

- For checkbox arrays, use `field.value` and `field.onChange` with array manipulation.
- To show errors, add the `aria-invalid` prop to the `<Checkbox />` component and the `data-invalid` prop to the `<Field />` component.
- Remember to add `data-slot="checkbox-group"` to the `<FieldGroup />` component for proper styling and spacing.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'

const tasks = [
  {
    id: 'push',
    label: 'Push notifications',
  },
  {
    id: 'email',
    label: 'Email notifications',
  },
] as const

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, 'Please select at least one notification type.')
    .refine((value) => value.every((task) => tasks.some((t) => t.id === task)), {
      message: 'Invalid notification type selected.',
    }),
})

export function FormRhfCheckbox() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      responses: true,
      tasks: [],
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-checkbox" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="responses"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Responses</FieldLegend>
                  <FieldDescription>
                    Get notified for requests that take time, like research or image generation.
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    <Field orientation="horizontal">
                      <Checkbox
                        id="form-rhf-checkbox-responses"
                        name={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled
                      />
                      <FieldLabel htmlFor="form-rhf-checkbox-responses" className="font-normal">
                        Push notifications
                      </FieldLabel>
                    </Field>
                  </FieldGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
              )}
            />
            <FieldSeparator />
            <Controller
              name="tasks"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Tasks</FieldLegend>
                  <FieldDescription>
                    Get notified when tasks you&apos;ve created have updates.
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    {tasks.map((task) => (
                      <Field
                        key={task.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`form-rhf-checkbox-${task.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(task.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, task.id]
                              : field.value.filter((value) => value !== task.id)
                            field.onChange(newValue)
                          }}
                        />
                        <FieldLabel
                          htmlFor={`form-rhf-checkbox-${task.id}`}
                          className="font-normal"
                        >
                          {task.label}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-checkbox">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

```tsx showLineNumbers title="form.tsx" {10,15,20-22,38}
<Controller
  name="tasks"
  control={form.control}
  render={({ field, fieldState }) => (
    <FieldSet>
      <FieldLegend variant="label">Tasks</FieldLegend>
      <FieldDescription>Get notified when tasks you&apos;ve created have updates.</FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {tasks.map((task) => (
          <Field key={task.id} orientation="horizontal" data-invalid={fieldState.invalid}>
            <Checkbox
              id={`form-rhf-checkbox-${task.id}`}
              name={field.name}
              aria-invalid={fieldState.invalid}
              checked={field.value.includes(task.id)}
              onCheckedChange={(checked) => {
                const newValue = checked
                  ? [...field.value, task.id]
                  : field.value.filter((value) => value !== task.id)
                field.onChange(newValue)
              }}
            />
            <FieldLabel htmlFor={`form-rhf-checkbox-${task.id}`} className="font-normal">
              {task.label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </FieldSet>
  )}
/>
```

### Radio Group

- For radio groups, use `field.value` and `field.onChange` on the `<RadioGroup />` component.
- To show errors, add the `aria-invalid` prop to the `<RadioGroupItem />` component and the `data-invalid` prop to the `<Field />` component.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const plans = [
  {
    id: 'starter',
    title: 'Starter (100K tokens/month)',
    description: 'For everyday use with basic features.',
  },
  {
    id: 'pro',
    title: 'Pro (1M tokens/month)',
    description: 'For advanced AI usage with more features.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise (Unlimited tokens)',
    description: 'For large teams and heavy usage.',
  },
] as const

const formSchema = z.object({
  plan: z.string().min(1, 'You must select a subscription plan to continue.'),
})

export function FormRhfRadioGroup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>See pricing and features for each plan.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-radiogroup" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="plan"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend>Plan</FieldLegend>
                  <FieldDescription>
                    You can upgrade or downgrade your plan at any time.
                  </FieldDescription>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  >
                    {plans.map((plan) => (
                      <FieldLabel key={plan.id} htmlFor={`form-rhf-radiogroup-${plan.id}`}>
                        <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                          <FieldContent>
                            <FieldTitle>{plan.title}</FieldTitle>
                            <FieldDescription>{plan.description}</FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value={plan.id}
                            id={`form-rhf-radiogroup-${plan.id}`}
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-radiogroup">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

```tsx showLineNumbers title="form.tsx" {12-13,17,25,31}
<Controller
  name="plan"
  control={form.control}
  render={({ field, fieldState }) => (
    <FieldSet>
      <FieldLegend>Plan</FieldLegend>
      <FieldDescription>You can upgrade or downgrade your plan at any time.</FieldDescription>
      <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange}>
        {plans.map((plan) => (
          <FieldLabel key={plan.id} htmlFor={`form-rhf-radiogroup-${plan.id}`}>
            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldTitle>{plan.title}</FieldTitle>
                <FieldDescription>{plan.description}</FieldDescription>
              </FieldContent>
              <RadioGroupItem
                value={plan.id}
                id={`form-rhf-radiogroup-${plan.id}`}
                aria-invalid={fieldState.invalid}
              />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </FieldSet>
  )}
/>
```

### Switch

- For switches, use `field.value` and `field.onChange` on the `<Switch />` component.
- To show errors, add the `aria-invalid` prop to the `<Switch />` component and the `data-invalid` prop to the `<Field />` component.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

const formSchema = z.object({
  twoFactor: z.boolean().refine((val) => val === true, {
    message: 'It is highly recommended to enable two-factor authentication.',
  }),
})

export function FormRhfSwitch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      twoFactor: false,
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-switch" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="twoFactor"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-switch-twoFactor">
                      Multi-factor authentication
                    </FieldLabel>
                    <FieldDescription>
                      Enable multi-factor authentication to secure your account.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </FieldContent>
                  <Switch
                    id="form-rhf-switch-twoFactor"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-switch">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

```tsx showLineNumbers title="form.tsx" {5,13,18-19}
<Controller
  name="twoFactor"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field orientation="horizontal" data-invalid={fieldState.invalid}>
      <FieldContent>
        <FieldLabel htmlFor="form-rhf-switch-twoFactor">Multi-factor authentication</FieldLabel>
        <FieldDescription>
          Enable multi-factor authentication to secure your account.
        </FieldDescription>
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </FieldContent>
      <Switch
        id="form-rhf-switch-twoFactor"
        name={field.name}
        checked={field.value}
        onCheckedChange={field.onChange}
        aria-invalid={fieldState.invalid}
      />
    </Field>
  )}
/>
```

### Complex Forms

Here is an example of a more complex form with multiple fields and validation.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

const addons = [
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Advanced analytics and reporting',
  },
  {
    id: 'backup',
    title: 'Backup',
    description: 'Automated daily backups',
  },
  {
    id: 'support',
    title: 'Priority Support',
    description: '24/7 premium customer support',
  },
] as const

const formSchema = z.object({
  plan: z
    .string({
      required_error: 'Please select a subscription plan',
    })
    .min(1, 'Please select a subscription plan')
    .refine((value) => value === 'basic' || value === 'pro', {
      message: 'Invalid plan selection. Please choose Basic or Pro',
    }),
  billingPeriod: z
    .string({
      required_error: 'Please select a billing period',
    })
    .min(1, 'Please select a billing period'),
  addons: z
    .array(z.string())
    .min(1, 'Please select at least one add-on')
    .max(3, 'You can select up to 3 add-ons')
    .refine((value) => value.every((addon) => addons.some((a) => a.id === addon)), {
      message: 'You selected an invalid add-on',
    }),
  emailNotifications: z.boolean(),
})

export function FormRhfComplex() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: 'basic',
      billingPeriod: '',
      addons: [],
      emailNotifications: false,
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>You&apos;re almost there!</CardTitle>
        <CardDescription>Choose your subscription plan and billing period.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-complex" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="plan"
              control={form.control}
              render={({ field, fieldState }) => {
                const isInvalid = fieldState.invalid
                return (
                  <FieldSet data-invalid={isInvalid}>
                    <FieldLegend variant="label">Subscription Plan</FieldLegend>
                    <FieldDescription>Choose your subscription plan.</FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      aria-invalid={isInvalid}
                    >
                      <FieldLabel htmlFor="form-rhf-complex-basic">
                        <Field orientation="horizontal">
                          <FieldContent>
                            <FieldTitle>Basic</FieldTitle>
                            <FieldDescription>For individuals and small teams</FieldDescription>
                          </FieldContent>
                          <RadioGroupItem value="basic" id="form-rhf-complex-basic" />
                        </Field>
                      </FieldLabel>
                      <FieldLabel htmlFor="form-rhf-complex-pro">
                        <Field orientation="horizontal">
                          <FieldContent>
                            <FieldTitle>Pro</FieldTitle>
                            <FieldDescription>For businesses with higher demands</FieldDescription>
                          </FieldContent>
                          <RadioGroupItem value="pro" id="form-rhf-complex-pro" />
                        </Field>
                      </FieldLabel>
                    </RadioGroup>
                    {isInvalid && <FieldError errors={[fieldState.error]} />}
                  </FieldSet>
                )
              }}
            />
            <FieldSeparator />
            <Controller
              name="billingPeriod"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-complex-billingPeriod">Billing Period</FieldLabel>
                  <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      id="form-rhf-complex-billingPeriod"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldDescription>Choose how often you want to be billed.</FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <FieldSeparator />
            <Controller
              name="addons"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet>
                  <FieldLegend>Add-ons</FieldLegend>
                  <FieldDescription>
                    Select additional features you&apos;d like to include.
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    {addons.map((addon) => (
                      <Field
                        key={addon.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`form-rhf-complex-${addon.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(addon.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, addon.id]
                              : field.value.filter((value) => value !== addon.id)
                            field.onChange(newValue)
                            field.onBlur()
                          }}
                        />
                        <FieldContent>
                          <FieldLabel htmlFor={`form-rhf-complex-${addon.id}`}>
                            {addon.title}
                          </FieldLabel>
                          <FieldDescription>{addon.description}</FieldDescription>
                        </FieldContent>
                      </Field>
                    ))}
                  </FieldGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </FieldSet>
              )}
            />
            <FieldSeparator />
            <Controller
              name="emailNotifications"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-complex-emailNotifications">
                      Email Notifications
                    </FieldLabel>
                    <FieldDescription>
                      Receive email updates about your subscription
                    </FieldDescription>
                  </FieldContent>
                  <Switch
                    id="form-rhf-complex-emailNotifications"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-t">
        <Field>
          <Button type="submit" form="form-rhf-complex">
            Save Preferences
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

## Resetting the Form

Use `form.reset()` to reset the form to its default values.

```tsx showLineNumbers
<Button type="button" variant="outline" onClick={() => form.reset()}>
  Reset
</Button>
```

## Array Fields

React Hook Form provides a `useFieldArray` hook for managing dynamic array fields. This is useful when you need to add or remove fields dynamically.

```tsx
'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { XIcon } from 'lucide-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

const formSchema = z.object({
  emails: z
    .array(
      z.object({
        address: z.string().email('Enter a valid email address.'),
      })
    )
    .min(1, 'Add at least one email address.')
    .max(5, 'You can add up to 5 email addresses.'),
})

export function FormRhfArray() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: [{ address: '' }, { address: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'emails',
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader className="border-b">
        <CardTitle>Contact Emails</CardTitle>
        <CardDescription>Manage your contact email addresses.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-array" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet className="gap-4">
            <FieldLegend variant="label">Email Addresses</FieldLegend>
            <FieldDescription>
              Add up to 5 email addresses where we can contact you.
            </FieldDescription>
            <FieldGroup className="gap-4">
              {fields.map((field, index) => (
                <Controller
                  key={field.id}
                  name={`emails.${index}.address`}
                  control={form.control}
                  render={({ field: controllerField, fieldState }) => (
                    <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                      <FieldContent>
                        <InputGroup>
                          <InputGroupInput
                            {...controllerField}
                            id={`form-rhf-array-email-${index}`}
                            aria-invalid={fieldState.invalid}
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                          />
                          {fields.length > 1 && (
                            <InputGroupAddon align="inline-end">
                              <InputGroupButton
                                type="button"
                                variant="ghost"
                                size="icon-xs"
                                onClick={() => remove(index)}
                                aria-label={`Remove email ${index + 1}`}
                              >
                                <XIcon />
                              </InputGroupButton>
                            </InputGroupAddon>
                          )}
                        </InputGroup>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </FieldContent>
                    </Field>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ address: '' })}
                disabled={fields.length >= 5}
              >
                Add Email Address
              </Button>
            </FieldGroup>
            {form.formState.errors.emails?.root && (
              <FieldError errors={[form.formState.errors.emails.root]} />
            )}
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter className="border-t">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-array">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

### Using useFieldArray

Use the `useFieldArray` hook to manage array fields. It provides `fields`, `append`, and `remove` methods.

```tsx showLineNumbers title="form.tsx" {8-11}
import { useFieldArray, useForm } from 'react-hook-form'

export function ExampleForm() {
  const form = useForm({
    // ... form config
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'emails',
  })
}
```

### Array Field Structure

Wrap your array fields in a `<FieldSet />` with a `<FieldLegend />` and `<FieldDescription />`.

```tsx showLineNumbers title="form.tsx"
<FieldSet className="gap-4">
  <FieldLegend variant="label">Email Addresses</FieldLegend>
  <FieldDescription>Add up to 5 email addresses where we can contact you.</FieldDescription>
  <FieldGroup className="gap-4">{/* Array items go here */}</FieldGroup>
</FieldSet>
```

### Controller Pattern for Array Items

Map over the `fields` array and use `<Controller />` for each item. **Make sure to use `field.id` as the key**.

```tsx showLineNumbers title="form.tsx"
{
  fields.map((field, index) => (
    <Controller
      key={field.id}
      name={`emails.${index}.address`}
      control={form.control}
      render={({ field: controllerField, fieldState }) => (
        <Field orientation="horizontal" data-invalid={fieldState.invalid}>
          <FieldContent>
            <InputGroup>
              <InputGroupInput
                {...controllerField}
                id={`form-rhf-array-email-${index}`}
                aria-invalid={fieldState.invalid}
                placeholder="name@example.com"
                type="email"
                autoComplete="email"
              />
              {/* Remove button */}
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
    />
  ))
}
```

### Adding Items

Use the `append` method to add new items to the array.

```tsx showLineNumbers title="form.tsx"
<Button
  type="button"
  variant="outline"
  size="sm"
  onClick={() => append({ address: '' })}
  disabled={fields.length >= 5}
>
  Add Email Address
</Button>
```

### Removing Items

Use the `remove` method to remove items from the array. Add the remove button conditionally.

```tsx showLineNumbers title="form.tsx"
{
  fields.length > 1 && (
    <InputGroupAddon align="inline-end">
      <InputGroupButton
        type="button"
        variant="ghost"
        size="icon-xs"
        onClick={() => remove(index)}
        aria-label={`Remove email ${index + 1}`}
      >
        <XIcon />
      </InputGroupButton>
    </InputGroupAddon>
  )
}
```

### Array Validation

Use Zod's `array` method to validate array fields.

```tsx showLineNumbers title="form.tsx"
const formSchema = z.object({
  emails: z
    .array(
      z.object({
        address: z.string().email('Enter a valid email address.'),
      })
    )
    .min(1, 'Add at least one email address.')
    .max(5, 'You can add up to 5 email addresses.'),
})
```

````

## .template\shadcn_guide\get_started\Shadcn_Darkmode_Vite.md

```markdown
---
title: Vite
description: Adding dark mode to your vite app.
---

## Create a theme provider

```tsx title="components/theme-provider.tsx" showLineNumbers
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
````

## Wrap your root layout

Add the `ThemeProvider` to your root layout.

```tsx {1,5-7} title="App.tsx" showLineNumbers
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
```

## Add a mode toggle

Place a mode toggle on your site to toggle between light and dark mode.

```tsx title="components/mode-toggle.tsx" showLineNumbers
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

````

## .template\shadcn_guide\get_started\Theming.md

```markdown
---
title: Theming
description: Using CSS Variables and color utilities for theming.
---

You can choose between using CSS variables (recommended) or utility classes for theming.

## CSS Variables

```tsx /bg-background/ /text-foreground/
<div className="bg-background text-foreground" />
````

To use CSS variables for theming set `tailwind.cssVariables` to `true` in your `components.json` file.

```json {8} title="components.json" showLineNumbers
{
  "style": "new-york",
  "rsc": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

## Utility classes

```tsx /bg-zinc-950/ /text-zinc-50/ /dark:bg-white/ /dark:text-zinc-950/
<div className="bg-zinc-950 dark:bg-white" />
```

To use utility classes for theming set `tailwind.cssVariables` to `false` in your `components.json` file.

```json {8} title="components.json" showLineNumbers
{
  "style": "new-york",
  "rsc": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": false
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## Convention

We use a simple `background` and `foreground` convention for colors. The `background` variable is used for the background color of the component and the `foreground` variable is used for the text color.

<Callout className="mt-4">

The `background` suffix is omitted when the variable is used for the background color of the component.

</Callout>

Given the following CSS variables:

```css
--primary: oklch(0.205 0 0);
--primary-foreground: oklch(0.985 0 0);
```

The `background` color of the following component will be `var(--primary)` and the `foreground` color will be `var(--primary-foreground)`.

```tsx
<div className="bg-primary text-primary-foreground">Hello</div>
```

## List of variables

Here's the list of variables available for customization:

```css title="app/globals.css" showLineNumbers
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.269 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.439 0 0);
}
```

## Adding new colors

To add new colors, you need to add them to your CSS file under the `:root` and `dark` pseudo-classes. Then, use the `@theme inline` directive to make the colors available as CSS variables.

```css title="app/globals.css" showLineNumbers
:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}

.dark {
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}
```

You can now use the `warning` utility class in your components.

```tsx /bg-warning/ /text-warning-foreground/
<div className="bg-warning text-warning-foreground" />
```

## Other color formats

See the [Tailwind CSS documentation](https://tailwindcss.com/docs/colors) for more information on using colors in Tailwind CSS.

## Base Colors

For reference, here's a list of the base colors that are available.

### Neutral

<CodeCollapsibleWrapper>

```css title="app/globals.css" showLineNumbers
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
```

</CodeCollapsibleWrapper>

### Stone

<CodeCollapsibleWrapper>

```css title="app/globals.css" showLineNumbers
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.147 0.004 49.25);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.147 0.004 49.25);
  --primary: oklch(0.216 0.006 56.043);
  --primary-foreground: oklch(0.985 0.001 106.423);
  --secondary: oklch(0.97 0.001 106.424);
  --secondary-foreground: oklch(0.216 0.006 56.043);
  --muted: oklch(0.97 0.001 106.424);
  --muted-foreground: oklch(0.553 0.013 58.071);
  --accent: oklch(0.97 0.001 106.424);
  --accent-foreground: oklch(0.216 0.006 56.043);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.923 0.003 48.717);
  --input: oklch(0.923 0.003 48.717);
  --ring: oklch(0.709 0.01 56.259);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0.001 106.423);
  --sidebar-foreground: oklch(0.147 0.004 49.25);
  --sidebar-primary: oklch(0.216 0.006 56.043);
  --sidebar-primary-foreground: oklch(0.985 0.001 106.423);
  --sidebar-accent: oklch(0.97 0.001 106.424);
  --sidebar-accent-foreground: oklch(0.216 0.006 56.043);
  --sidebar-border: oklch(0.923 0.003 48.717);
  --sidebar-ring: oklch(0.709 0.01 56.259);
}

.dark {
  --background: oklch(0.147 0.004 49.25);
  --foreground: oklch(0.985 0.001 106.423);
  --card: oklch(0.216 0.006 56.043);
  --card-foreground: oklch(0.985 0.001 106.423);
  --popover: oklch(0.216 0.006 56.043);
  --popover-foreground: oklch(0.985 0.001 106.423);
  --primary: oklch(0.923 0.003 48.717);
  --primary-foreground: oklch(0.216 0.006 56.043);
  --secondary: oklch(0.268 0.007 34.298);
  --secondary-foreground: oklch(0.985 0.001 106.423);
  --muted: oklch(0.268 0.007 34.298);
  --muted-foreground: oklch(0.709 0.01 56.259);
  --accent: oklch(0.268 0.007 34.298);
  --accent-foreground: oklch(0.985 0.001 106.423);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.553 0.013 58.071);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.216 0.006 56.043);
  --sidebar-foreground: oklch(0.985 0.001 106.423);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0.001 106.423);
  --sidebar-accent: oklch(0.268 0.007 34.298);
  --sidebar-accent-foreground: oklch(0.985 0.001 106.423);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.553 0.013 58.071);
}
```

</CodeCollapsibleWrapper>

### Zinc

<CodeCollapsibleWrapper>

```css title="app/globals.css" showLineNumbers
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.21 0.006 285.885);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.705 0.015 286.067);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.21 0.006 285.885);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.705 0.015 286.067);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.21 0.006 285.885);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.21 0.006 285.885);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.92 0.004 286.32);
  --primary-foreground: oklch(0.21 0.006 285.885);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.552 0.016 285.938);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.006 285.885);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.552 0.016 285.938);
}
```

</CodeCollapsibleWrapper>

### Gray

<CodeCollapsibleWrapper>

```css title="app/globals.css" showLineNumbers
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.13 0.028 261.692);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.13 0.028 261.692);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.13 0.028 261.692);
  --primary: oklch(0.21 0.034 264.665);
  --primary-foreground: oklch(0.985 0.002 247.839);
  --secondary: oklch(0.967 0.003 264.542);
  --secondary-foreground: oklch(0.21 0.034 264.665);
  --muted: oklch(0.967 0.003 264.542);
  --muted-foreground: oklch(0.551 0.027 264.364);
  --accent: oklch(0.967 0.003 264.542);
  --accent-foreground: oklch(0.21 0.034 264.665);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.928 0.006 264.531);
  --input: oklch(0.928 0.006 264.531);
  --ring: oklch(0.707 0.022 261.325);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0.002 247.839);
  --sidebar-foreground: oklch(0.13 0.028 261.692);
  --sidebar-primary: oklch(0.21 0.034 264.665);
  --sidebar-primary-foreground: oklch(0.985 0.002 247.839);
  --sidebar-accent: oklch(0.967 0.003 264.542);
  --sidebar-accent-foreground: oklch(0.21 0.034 264.665);
  --sidebar-border: oklch(0.928 0.006 264.531);
  --sidebar-ring: oklch(0.707 0.022 261.325);
}

.dark {
  --background: oklch(0.13 0.028 261.692);
  --foreground: oklch(0.985 0.002 247.839);
  --card: oklch(0.21 0.034 264.665);
  --card-foreground: oklch(0.985 0.002 247.839);
  --popover: oklch(0.21 0.034 264.665);
  --popover-foreground: oklch(0.985 0.002 247.839);
  --primary: oklch(0.928 0.006 264.531);
  --primary-foreground: oklch(0.21 0.034 264.665);
  --secondary: oklch(0.278 0.033 256.848);
  --secondary-foreground: oklch(0.985 0.002 247.839);
  --muted: oklch(0.278 0.033 256.848);
  --muted-foreground: oklch(0.707 0.022 261.325);
  --accent: oklch(0.278 0.033 256.848);
  --accent-foreground: oklch(0.985 0.002 247.839);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.551 0.027 264.364);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.034 264.665);
  --sidebar-foreground: oklch(0.985 0.002 247.839);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0.002 247.839);
  --sidebar-accent: oklch(0.278 0.033 256.848);
  --sidebar-accent-foreground: oklch(0.985 0.002 247.839);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.551 0.027 264.364);
}
```

</CodeCollapsibleWrapper>

### Slate

<CodeCollapsibleWrapper>

```css title="app/globals.css" showLineNumbers
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.208 0.042 265.755);
  --muted: oklch(0.968 0.007 247.896);
  --muted-foreground: oklch(0.554 0.046 257.417);
  --accent: oklch(0.968 0.007 247.896);
  --accent-foreground: oklch(0.208 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.929 0.013 255.508);
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.984 0.003 247.858);
  --sidebar-foreground: oklch(0.129 0.042 264.695);
  --sidebar-primary: oklch(0.208 0.042 265.755);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.968 0.007 247.896);
  --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
  --sidebar-border: oklch(0.929 0.013 255.508);
  --sidebar-ring: oklch(0.704 0.04 256.788);
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  --card: oklch(0.208 0.042 265.755);
  --card-foreground: oklch(0.984 0.003 247.858);
  --popover: oklch(0.208 0.042 265.755);
  --popover-foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.929 0.013 255.508);
  --primary-foreground: oklch(0.208 0.042 265.755);
  --secondary: oklch(0.279 0.041 260.031);
  --secondary-foreground: oklch(0.984 0.003 247.858);
  --muted: oklch(0.279 0.041 260.031);
  --muted-foreground: oklch(0.704 0.04 256.788);
  --accent: oklch(0.279 0.041 260.031);
  --accent-foreground: oklch(0.984 0.003 247.858);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.551 0.027 264.364);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.208 0.042 265.755);
  --sidebar-foreground: oklch(0.984 0.003 247.858);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.279 0.041 260.031);
  --sidebar-accent-foreground: oklch(0.984 0.003 247.858);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.551 0.027 264.364);
}
```

</CodeCollapsibleWrapper>

````

## .template\shadcn_guide\get_started\components.json.md

```markdown
---
title: components.json
description: Configuration for your project.
---

The `components.json` file holds configuration for your project.

We use it to understand how your project is set up and how to generate components customized for your project.

<Callout className="mt-6" title="Note: The `components.json` file is optional">
  It is **only required if you're using the CLI** to add components to your
  project. If you're using the copy and paste method, you don't need this file.
</Callout>

You can create a `components.json` file in your project by running the following command:

```bash
npx shadcn@latest init
````

See the <Link href="/docs/cli">CLI section</Link> for more information.

## $schema

You can see the JSON Schema for `components.json` [here](https://ui.shadcn.com/schema.json).

```json title="components.json"
{
  "$schema": "https://ui.shadcn.com/schema.json"
}
```

## style

The style for your components. **This cannot be changed after initialization.**

```json title="components.json"
{
  "style": "new-york"
}
```

The `default` style has been deprecated. Use the `new-york` style instead.

## tailwind

Configuration to help the CLI understand how Tailwind CSS is set up in your project.

See the <Link href="/docs/installation">installation section</Link> for how to set up Tailwind CSS.

### tailwind.config

Path to where your `tailwind.config.js` file is located. **For Tailwind CSS v4, leave this blank.**

```json title="components.json"
{
  "tailwind": {
    "config": "tailwind.config.js" | "tailwind.config.ts"
  }
}
```

### tailwind.css

Path to the CSS file that imports Tailwind CSS into your project.

```json title="components.json"
{
  "tailwind": {
    "css": "styles/global.css"
  }
}
```

### tailwind.baseColor

This is used to generate the default color palette for your components. **This cannot be changed after initialization.**

```json title="components.json"
{
  "tailwind": {
    "baseColor": "gray" | "neutral" | "slate" | "stone" | "zinc"
  }
}
```

### tailwind.cssVariables

You can choose between using CSS variables or Tailwind CSS utility classes for theming.

To use utility classes for theming set `tailwind.cssVariables` to `false`. For CSS variables, set `tailwind.cssVariables` to `true`.

```json title="components.json"
{
  "tailwind": {
    "cssVariables": `true` | `false`
  }
}
```

For more information, see the <Link href="/docs/theming">theming docs</Link>.

**This cannot be changed after initialization.** To switch between CSS variables and utility classes, you'll have to delete and re-install your components.

### tailwind.prefix

The prefix to use for your Tailwind CSS utility classes. Components will be added with this prefix.

```json title="components.json"
{
  "tailwind": {
    "prefix": "tw-"
  }
}
```

## rsc

Whether or not to enable support for React Server Components.

The CLI automatically adds a `use client` directive to client components when set to `true`.

```json title="components.json"
{
  "rsc": `true` | `false`
}
```

## tsx

Choose between TypeScript or JavaScript components.

Setting this option to `false` allows components to be added as JavaScript with the `.jsx` file extension.

```json title="components.json"
{
  "tsx": `true` | `false`
}
```

## aliases

The CLI uses these values and the `paths` config from your `tsconfig.json` or `jsconfig.json` file to place generated components in the correct location.

Path aliases have to be set up in your `tsconfig.json` or `jsconfig.json` file.

<Callout className="mt-6">
  **Important:** If you're using the `src` directory, make sure it is included
  under `paths` in your `tsconfig.json` or `jsconfig.json` file.
</Callout>

### aliases.utils

Import alias for your utility functions.

```json title="components.json"
{
  "aliases": {
    "utils": "@/lib/utils"
  }
}
```

### aliases.components

Import alias for your components.

```json title="components.json"
{
  "aliases": {
    "components": "@/components"
  }
}
```

### aliases.ui

Import alias for `ui` components.

The CLI will use the `aliases.ui` value to determine where to place your `ui` components. Use this config if you want to customize the installation directory for your `ui` components.

```json title="components.json"
{
  "aliases": {
    "ui": "@/app/ui"
  }
}
```

### aliases.lib

Import alias for `lib` functions such as `format-date` or `generate-id`.

```json title="components.json"
{
  "aliases": {
    "lib": "@/lib"
  }
}
```

### aliases.hooks

Import alias for `hooks` such as `use-media-query` or `use-toast`.

```json title="components.json"
{
  "aliases": {
    "hooks": "@/hooks"
  }
}
```

## registries

Configure multiple resource registries for your project. This allows you to install components, libraries, utilities, and other resources from various sources including private registries.

See the <Link href="/docs/registry/namespace">Namespaced Registries</Link> documentation for detailed information.

### Basic Configuration

Configure registries with URL templates:

```json title="components.json"
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/{name}.json",
    "@internal": "https://internal.company.com/{name}.json"
  }
}
```

The `{name}` placeholder is replaced with the resource name when installing.

### Advanced Configuration with Authentication

For private registries that require authentication:

```json title="components.json"
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}",
        "X-API-Key": "${API_KEY}"
      },
      "params": {
        "version": "latest"
      }
    }
  }
}
```

Environment variables in the format `${VAR_NAME}` are automatically expanded from your environment.

### Using Namespaced Registries

Once configured, install resources using the namespace syntax:

```bash
# Install from a configured registry
npx shadcn@latest add @v0/dashboard

# Install from private registry
npx shadcn@latest add @private/button

# Install multiple resources
npx shadcn@latest add @acme/header @internal/auth-utils
```

### Example: Multiple Registry Setup

```json title="components.json"
{
  "registries": {
    "@shadcn": "https://ui.shadcn.com/r/{name}.json",
    "@company-ui": {
      "url": "https://registry.company.com/ui/{name}.json",
      "headers": {
        "Authorization": "Bearer ${COMPANY_TOKEN}"
      }
    },
    "@team": {
      "url": "https://team.company.com/{name}.json",
      "params": {
        "team": "frontend",
        "version": "${REGISTRY_VERSION}"
      }
    }
  }
}
```

This configuration allows you to:

- Install public components from shadcn/ui
- Access private company UI components with authentication
- Use team-specific resources with versioning

For more information about authentication, see the <Link href="/docs/registry/authentication">Authentication</Link> documentation.

````

## .template\shadcn_guide\get_started\shadcn_cli.md

```markdown
---
title: shadcn
description: Use the shadcn CLI to add components to your project.
---

## init

Use the `init` command to initialize configuration and dependencies for a new project.

The `init` command installs dependencies, adds the `cn` util and configures CSS variables for the project.

```bash
npx shadcn@latest init
````

**Options**

```bash
Usage: shadcn init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         name, url or local path to component

Options:
  -t, --template <template>      the template to use. (next, next-monorepo)
  -b, --base-color <base-color>  the base color to use. (neutral, gray, zinc, stone, slate)
  -y, --yes                      skip confirmation prompt. (default: true)
  -f, --force                    force overwrite of existing configuration. (default: false)
  -c, --cwd <cwd>                the working directory. defaults to the current directory.
  -s, --silent                   mute output. (default: false)
  --src-dir                      use the src directory when creating a new project. (default: false)
  --no-src-dir                   do not use the src directory when creating a new project.
  --css-variables                use css variables for theming. (default: true)
  --no-css-variables             do not use css variables for theming.
  --no-base-style                do not install the base shadcn style
  -h, --help                     display help for command
```

---

## add

Use the `add` command to add components and dependencies to your project.

```bash
npx shadcn@latest add [component]
```

**Options**

```bash
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         name, url or local path to component

Options:
  -y, --yes           skip confirmation prompt. (default: false)
  -o, --overwrite     overwrite existing files. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory.
  -a, --all           add all available components (default: false)
  -p, --path <path>   the path to add the component to.
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

---

## view

Use the `view` command to view items from the registry before installing them.

```bash
npx shadcn@latest view [item]
```

You can view multiple items at once:

```bash
npx shadcn@latest view button card dialog
```

Or view items from namespaced registries:

```bash
npx shadcn@latest view @acme/auth @v0/dashboard
```

**Options**

```bash
Usage: shadcn view [options] <items...>

view items from the registry

Arguments:
  items            the item names or URLs to view

Options:
  -c, --cwd <cwd>  the working directory. defaults to the current directory.
  -h, --help       display help for command
```

---

## search

Use the `search` command to search for items from registries.

```bash
npx shadcn@latest search [registry]
```

You can search with a query:

```bash
npx shadcn@latest search @shadcn -q "button"
```

Or search multiple registries at once:

```bash
npx shadcn@latest search @shadcn @v0 @acme
```

The `list` command is an alias for `search`:

```bash
npx shadcn@latest list @acme
```

**Options**

```bash
Usage: shadcn search|list [options] <registries...>

search items from registries

Arguments:
  registries             the registry names or urls to search items from. Names
                         must be prefixed with @.

Options:
  -c, --cwd <cwd>        the working directory. defaults to the current directory.
  -q, --query <query>    query string
  -l, --limit <number>   maximum number of items to display per registry (default: "100")
  -o, --offset <number>  number of items to skip (default: "0")
  -h, --help             display help for command
```

---

## list

Use the `list` command to list all items from a registry.

```bash
npx shadcn@latest list @acme
```

**Options**

```bash
Usage: shadcn list [options] <registries...>

list items from registries

Arguments:
  registries             the registry names or urls to list items from. Names
    must be prefixed with @.
```

**Options**

```bash
Usage: shadcn list [options] <registries...>

list items from registries

Arguments:
  registries             the registry names or urls to list items from. Names
    must be prefixed with @.
```

---

## build

Use the `build` command to generate the registry JSON files.

```bash
npx shadcn@latest build
```

This command reads the `registry.json` file and generates the registry JSON files in the `public/r` directory.

**Options**

```bash
Usage: shadcn build [options] [registry]

build components for a shadcn registry

Arguments:
  registry             path to registry.json file (default: "./registry.json")

Options:
  -o, --output <path>  destination directory for json files (default: "./public/r")
  -c, --cwd <cwd>      the working directory. defaults to the current directory.
  -h, --help           display help for command
```

To customize the output directory, use the `--output` option.

```bash
npx shadcn@latest build --output ./public/registry
```

````

## .template\shadcn_guide\registry\Add_a_Registry.txt

```txt
---
title: Add a Registry
description: Open Source Registry Index
---

The open source registry index is a list of all the open source registries that are available to use out of the box.

When you run `shadcn add` or `shadcn search`, the CLI will automatically check the registry index for the registry you are looking for and add it to your `components.json` file.

You can see the full list at [https://ui.shadcn.com/r/registries.json](https://ui.shadcn.com/r/registries.json).

## Adding a Registry

You can open an issue to add a registry to the index by filling out the [registry directory issue template](https://github.com/shadcn-ui/ui/issues/new?template=registry_directory.yml).

Once you have submitted your issue, it will be validated and reviewed by the team.

### Requirements

1. The registry must be open source and publicly accessible.
2. The registry must be a valid JSON file that conforms to the [registry schema specification](/docs/registry/registry-json).
3. The registry is expected to be a flat registry with no nested items i.e `/registry.json` and `/component-name.json` files are expected to be in the root of the registry.
4. The `files` array, if present, must NOT include a `content` property.

Here's an example of a valid registry:

```json title="registry.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "login-form",
      "type": "registry:component",
      "title": "Login Form",
      "description": "A login form component.",
      "files": [
        {
          "path": "registry/new-york/auth/login-form.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "example-login-form",
      "type": "registry:component",
      "title": "Example Login Form",
      "description": "An example showing how to use the login form component.",
      "files": [
        {
          "path": "registry/new-york/examples/example-login-form.tsx",
          "type": "registry:component"
        }
      ]
    }
    }
  ]
}
````

````

## .template\shadcn_guide\registry\Authentication.txt

```txt
---
title: Authentication
description: Secure your registry with authentication for private and personalized components.
---

Authentication lets you run private registries, control who can access your components, and give different teams or users different content. This guide shows common authentication patterns and how to set them up.

Authentication enables these use cases:

- **Private Components**: Keep your business logic and internal components secure
- **Team-Specific Resources**: Give different teams different components
- **Access Control**: Limit who can see sensitive or experimental components
- **Usage Analytics**: See who's using which components in your organization
- **Licensing**: Control who gets premium or licensed components

## Common Authentication Patterns

### Token-Based Authentication

The most common approach uses Bearer tokens or API keys:

```json title="components.json"
{
  "registries": {
    "@private": {
      "url": "https://registry.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
````

Set your token in environment variables:

```bash title=".env.local"
REGISTRY_TOKEN=your_secret_token_here
```

### API Key Authentication

Some registries use API keys in headers:

```json title="components.json"
{
  "registries": {
    "@company": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "X-API-Key": "${API_KEY}",
        "X-Workspace-Id": "${WORKSPACE_ID}"
      }
    }
  }
}
```

### Query Parameter Authentication

For simpler setups, use query parameters:

```json title="components.json"
{
  "registries": {
    "@internal": {
      "url": "https://registry.company.com/{name}.json",
      "params": {
        "token": "${ACCESS_TOKEN}"
      }
    }
  }
}
```

This creates: `https://registry.company.com/button.json?token=your_token`

## Server-Side Implementation

Here's how to add authentication to your registry server:

### Next.js API Route Example

```typescript title="app/api/registry/[name]/route.ts"
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { name: string } }) {
  // Get token from Authorization header.
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '')

  // Or from query parameters.
  const queryToken = request.nextUrl.searchParams.get('token')

  // Check if token is valid.
  if (!isValidToken(token || queryToken)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Check if token can access this component.
  if (!hasAccessToComponent(token, params.name)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Return the component.
  const component = await getComponent(params.name)
  return NextResponse.json(component)
}

function isValidToken(token: string | null) {
  // Add your token validation logic here.
  // Check against database, JWT validation, etc.
  return token === process.env.VALID_TOKEN
}

function hasAccessToComponent(token: string, componentName: string) {
  // Add role-based access control here.
  // Check if token can access specific component.
  return true // Your logic here.
}
```

### Express.js Example

```javascript title="server.js"
app.get('/registry/:name.json', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!isValidToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const component = getComponent(req.params.name)
  if (!component) {
    return res.status(404).json({ error: 'Component not found' })
  }

  res.json(component)
})
```

## Advanced Authentication Patterns

### Team-Based Access

Give different teams different components:

```typescript title="api/registry/route.ts"
async function GET(request: NextRequest) {
  const token = extractToken(request)
  const team = await getTeamFromToken(token)

  // Get components for this team.
  const components = await getComponentsForTeam(team)
  return NextResponse.json(components)
}
```

### User-Personalized Registries

Give users components based on their preferences:

```typescript
async function GET(request: NextRequest) {
  const user = await authenticateUser(request)

  // Get user's style and framework preferences.
  const preferences = await getUserPreferences(user.id)

  // Get personalized component version.
  const component = await getPersonalizedComponent(params.name, preferences)

  return NextResponse.json(component)
}
```

### Temporary Access Tokens

Use expiring tokens for better security:

```typescript
interface TemporaryToken {
  token: string
  expiresAt: Date
  scope: string[]
}

async function validateTemporaryToken(token: string) {
  const tokenData = await getTokenData(token)

  if (!tokenData) return false
  if (new Date() > tokenData.expiresAt) return false

  return true
}
```

## Multi-Registry Authentication

With [namespaced registries](/docs/registry/namespace), you can set up multiple registries with different authentication:

```json title="components.json"
{
  "registries": {
    "@public": "https://public.company.com/{name}.json",
    "@internal": {
      "url": "https://internal.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${INTERNAL_TOKEN}"
      }
    },
    "@premium": {
      "url": "https://premium.company.com/{name}.json",
      "headers": {
        "X-License-Key": "${LICENSE_KEY}"
      }
    }
  }
}
```

This lets you:

- Mix public and private registries
- Use different authentication per registry
- Organize components by access level

## Security Best Practices

### Use Environment Variables

Never commit tokens to version control. Always use environment variables:

```bash title=".env.local"
REGISTRY_TOKEN=your_secret_token_here
API_KEY=your_api_key_here
```

Then reference them in `components.json`:

```json
{
  "registries": {
    "@private": {
      "url": "https://registry.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

### Use HTTPS

Always use HTTPS URLs for registries to protect your tokens in transit:

```json
{
  "@secure": "https://registry.company.com/{name}.json" // ✅
  "@insecure": "http://registry.company.com/{name}.json" // ❌
}
```

### Add Rate Limiting

Protect your registry from abuse:

```typescript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})

app.use('/registry', limiter)
```

### Rotate Tokens

Change access tokens regularly:

```typescript
// Create new token with expiration.
function generateToken() {
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days.

  return { token, expiresAt }
}
```

### Log Access

Track registry access for security and analytics:

```typescript
async function logAccess(request: Request, component: string, userId: string) {
  await db.accessLog.create({
    timestamp: new Date(),
    userId,
    component,
    ip: request.ip,
    userAgent: request.headers['user-agent'],
  })
}
```

## Testing Authentication

Test your authenticated registry locally:

```bash
# Test with curl.
curl -H "Authorization: Bearer your_token" \
  https://registry.company.com/button.json

# Test with the CLI.
REGISTRY_TOKEN=your_token npx shadcn@latest add @private/button
```

## Error Handling

The shadcn CLI handles authentication errors gracefully:

- **401 Unauthorized**: Token is invalid or missing
- **403 Forbidden**: Token lacks permission for this resource
- **429 Too Many Requests**: Rate limit exceeded

### Custom Error Messages

Your registry server can return custom error messages in the response body, and the CLI will display them to users:

```typescript
// Registry server returns custom error
return NextResponse.json(
  {
    error: 'Unauthorized',
    message: 'Your subscription has expired. Please renew at company.com/billing',
  },
  { status: 403 }
)
```

The user will see:

```txt
Your subscription has expired. Please renew at company.com/billing
```

This helps provide context-specific guidance:

```typescript
// Different error messages for different scenarios
if (!token) {
  return NextResponse.json(
    {
      error: 'Unauthorized',
      message: 'Authentication required. Set REGISTRY_TOKEN in your .env.local file',
    },
    { status: 401 }
  )
}

if (isExpiredToken(token)) {
  return NextResponse.json(
    {
      error: 'Unauthorized',
      message: 'Token expired. Request a new token at company.com/tokens',
    },
    { status: 401 }
  )
}

if (!hasTeamAccess(token, component)) {
  return NextResponse.json(
    {
      error: 'Forbidden',
      message: `Component '${component}' is restricted to the Design team`,
    },
    { status: 403 }
  )
}
```

## Next Steps

To set up authentication with multiple registries and advanced patterns, see the [Namespaced Registries](/docs/registry/namespace) documentation. It covers:

- Setting up multiple authenticated registries
- Using different authentication per namespace
- Cross-registry dependency resolution
- Advanced authentication patterns

````

## .template\shadcn_guide\registry\Examples.txt

```txt
---
title: Examples
description: "Examples of registry items: styles, components, css vars, etc."
---

## registry:style

### Custom style that extends shadcn/ui

The following registry item is a custom style that extends shadcn/ui. On `npx shadcn init`, it will:

- Install `@tabler/icons-react` as a dependency.
- Add the `login-01` block and `calendar` component to the project.
- Add the `editor` from a remote registry.
- Set the `font-sans` variable to `Inter, sans-serif`.
- Install a `brand` color in light and dark mode.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["@tabler/icons-react"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
````

### Custom style from scratch

The following registry item is a custom style that doesn't extend shadcn/ui. See the `extends: none` field.

It can be used to create a new style from scratch i.e custom components, css vars, dependencies, etc.

On `npx shadcn add`, the following will:

- Install `tailwind-merge` and `clsx` as dependencies.
- Add the `utils` registry item from the shadcn/ui registry.
- Add the `button`, `input`, `label`, and `select` components from a remote registry.
- Install new css vars: `main`, `bg`, `border`, `text`, `ring`.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif",
    }
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000",
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff",
    }
  }
}
```

## registry:theme

### Custom theme

```json title="example-theme.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

### Custom colors

The following style will init using shadcn/ui defaults and then add a custom `brand` color.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "cssVars": {
    "light": {
      "brand": "oklch(0.99 0.00 0)"
    },
    "dark": {
      "brand": "oklch(0.14 0.00 286)"
    }
  }
}
```

## registry:block

### Custom block

This blocks installs the `login-01` block from the shadcn/ui registry.

```json title="login-01.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.tsx",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "app/login/page.tsx"
    },
    {
      "path": "blocks/login-01/components/login-form.tsx",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

### Install a block and override primitives

You can install a block fromt the shadcn/ui registry and override the primitives using your custom ones.

On `npx shadcn add`, the following will:

- Add the `login-01` block from the shadcn/ui registry.
- Override the `button`, `input`, and `label` primitives with the ones from the remote registry.

```json title="example-style.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

## CSS Variables

### Custom Theme Variables

Add custom theme variables to the `theme` object.

```json title="example-theme.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

### Override Tailwind CSS variables

```json title="example-theme.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "spacing": "0.2rem",
      "breakpoint-sm": "640px",
      "breakpoint-md": "768px",
      "breakpoint-lg": "1024px",
      "breakpoint-xl": "1280px",
      "breakpoint-2xl": "1536px"
    }
  }
}
```

## Add custom CSS

### Base styles

```json title="example-base.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

### Components

```json title="example-card.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-card",
  "type": "registry:component",
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

## Add custom utilities

### Simple utility

```json title="example-component.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

### Complex utility

```json title="example-utility.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

### Functional utilities

```json title="example-functional.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility tab-*": {
      "tab-size": "var(--tab-size-*)"
    }
  }
}
```

## Add CSS imports

Use `@import` to add CSS imports to your registry item. The imports will be placed at the top of the CSS file.

### Basic import

```json title="example-import.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-import",
  "type": "registry:component",
  "css": {
    "@import \"tailwindcss\"": {},
    "@import \"./styles/base.css\"": {}
  }
}
```

### Import with url() syntax

```json title="example-url-import.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "font-import",
  "type": "registry:item",
  "css": {
    "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},
    "@import url('./local-styles.css')": {}
  }
}
```

### Import with media queries

```json title="example-media-import.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "responsive-import",
  "type": "registry:item",
  "css": {
    "@import \"print-styles.css\" print": {},
    "@import url(\"mobile.css\") screen and (max-width: 768px)": {}
  }
}
```

## Add custom plugins

Use `@plugin` to add Tailwind plugins to your registry item. Plugins will be automatically placed after imports and before other content.

**Important:** When using plugins from npm packages, you must also add them to the `dependencies` array.

### Basic plugin usage

```json title="example-plugin.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-plugin",
  "type": "registry:item",
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"foo\"": {}
  }
}
```

### Plugin with npm dependency

When using plugins from npm packages like `@tailwindcss/typography`, include them in the dependencies.

```json title="example-typography.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "typography-component",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography"],
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@layer components": {
      ".prose": {
        "max-width": "65ch"
      }
    }
  }
}
```

### Scoped and file-based plugins

```json title="example-scoped-plugin.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "scoped-plugins",
  "type": "registry:component",
  "css": {
    "@plugin \"@headlessui/tailwindcss\"": {},
    "@plugin \"tailwindcss/plugin\"": {},
    "@plugin \"./custom-plugin.js\"": {}
  }
}
```

### Multiple plugins with automatic ordering

When you add multiple plugins, they are automatically grouped together and deduplicated.

```json title="example-multiple-plugins.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "multiple-plugins",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography", "@tailwindcss/forms", "tw-animate-css"],
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"@tailwindcss/forms\"": {},
    "@plugin \"tw-animate-css\"": {}
  }
}
```

## Combined imports and plugins

When using both `@import` and `@plugin` directives, imports are placed first, followed by plugins, then other CSS content.

```json title="example-combined.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "combined-example",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography", "tw-animate-css"],
  "css": {
    "@import \"tailwindcss\"": {},
    "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"tw-animate-css\"": {},
    "@layer base": {
      "body": {
        "font-family": "Inter, sans-serif"
      }
    },
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

## Add custom animations

Note: you need to define both `@keyframes` in css and `theme` in cssVars to use animations.

```json title="example-component.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

## Add environment variables

You can add environment variables using the `envVars` field.

```json title="example-item.json" showLineNumbers {5-9}
{»
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-item",
  "type": "registry:item",
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:4000",
    "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",
    "OPENAI_API_KEY": ""
  }
}
```

Environment variables are added to the `.env.local` or `.env` file. Existing variables are not overwritten.

<Callout>

**IMPORTANT:** Use `envVars` to add development or example variables. Do NOT use it to add production variables.

</Callout>

## Universal Items

As of `2.9.0`, you can create universal items that can be installed without framework detection or components.json.

To make an item universal i.e framework agnostic, all the files in the item must have an explicit target.

Here's an example of a registry item that installs custom Cursor rules for _python_:

```json title=".cursor/rules/custom-python.mdc" showLineNumbers {9}
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "python-rules",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-python.mdc",
      "type": "registry:file",
      "target": "~/.cursor/rules/custom-python.mdc",
      "content": "..."
    }
  ]
}
```

Here's another example for installation custom ESLint config:

```json title=".eslintrc.json" showLineNumbers {9}
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-eslint-config",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-eslint.json",
      "type": "registry:file",
      "target": "~/.eslintrc.json",
      "content": "..."
    }
  ]
}
```

You can also have a universal item that installs multiple files:

```json title="my-custom-starter-template.json" showLineNumbers {9}
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-custom-start-template",
  "type": "registry:item",
  "dependencies": ["better-auth"],
  "files": [
    {
      "path": "/path/to/file-01.json",
      "type": "registry:file",
      "target": "~/file-01.json",
      "content": "..."
    },
    {
      "path": "/path/to/file-02.vue",
      "type": "registry:file",
      "target": "~/pages/file-02.vue",
      "content": "..."
    }
  ]
}
```

````

## .template\shadcn_guide\registry\MCP_Server.txt

```txt
---
title: MCP Server
description: MCP support for registry developers
---

The [shadcn MCP server](/docs/mcp) works out of the box with any shadcn-compatible registry. You do not need to do anything special to enable MCP support for your registry.

---

## Prerequisites

The MCP server works by requesting your registry index. Make sure you have a registry item file at the root of your registry named `registry`.

For example, if your registry is hosted at `https://acme.com/r/[name].json`, you should have a file at `https://acme.com/r/registry.json` or `https://acme.com/r/registry` if you're using a JSON file extension.

This file must be a valid JSON file that conforms to the [registry schema](/docs/registry/registry-json).

---

## Configuring MCP

Ask your registry consumers to configure your registry in their `components.json` file and install the shadcn MCP server:

<Tabs defaultValue="claude">
  <TabsList>
    <TabsTrigger value="claude">Claude Code</TabsTrigger>
    <TabsTrigger value="cursor">Cursor</TabsTrigger>
    <TabsTrigger value="vscode">VS Code</TabsTrigger>
    <TabsTrigger value="codex">Codex</TabsTrigger>
  </TabsList>
  <TabsContent value="claude" className="mt-4">
    **Configure your registry** in your `components.json` file:

    ```json title="components.json" showLineNumbers
    {
      "registries": {
        "@acme": "https://acme.com/r/{name}.json"
      }
    }
    ```

    **Run the following command** in your project:

    ```bash
    npx shadcn@latest mcp init --client claude
    ```

    **Restart Claude Code** and try the following prompts:
       - Show me the components in the acme registry
       - Create a landing page using items from the acme registry

    **Note:** You can use `/mcp` command in Claude Code to debug the MCP server.

  </TabsContent>

  <TabsContent value="cursor" className="mt-4">
    **Configure your registry** in your `components.json` file:

    ```json title="components.json" showLineNumbers
    {
      "registries": {
        "@acme": "https://acme.com/r/{name}.json"
      }
    }
    ```
    **Run the following command** in your project:
       ```bash
       npx shadcn@latest mcp init --client cursor
       ```

    Open **Cursor Settings** and **Enable the MCP server** for shadcn. Then try the following prompts:
       - Show me the components in the acme registry
       - Create a landing page using items from the acme registry

  </TabsContent>

  <TabsContent value="vscode" className="mt-4">
    **Configure your registry** in your `components.json` file:

    ```json title="components.json" showLineNumbers
    {
      "registries": {
        "@acme": "https://acme.com/r/{name}.json"
      }
    }
    ```
    **Run the following command** in your project:
       ```bash
       npx shadcn@latest mcp init --client vscode
       ```

    Open `.vscode/mcp.json` and click **Start** next to the shadcn server. Then try the following prompts with GitHub Copilot:
       - Show me the components in the acme registry
       - Create a landing page using items from the acme registry

  </TabsContent>

  <TabsContent value="codex" className="mt-4">
    **Configure your registry** in your `components.json` file:

    ```json title="components.json" showLineNumbers
    {
      "registries": {
        "@acme": "https://acme.com/r/{name}.json"
      }
    }
    ```

    **Add the following configuration** to `~/.codex/config.toml`:
       ```toml
       [mcp_servers.shadcn]
       command = "npx"
       args = ["shadcn@latest", "mcp"]
       ```

    **Restart Codex** and try the following prompts:
       - Show me the components in the acme registry
       - Create a landing page using items from the acme registry

  </TabsContent>
</Tabs>

You can read more about the MCP server in the [MCP documentation](/docs/mcp).

---

## Best Practices

Here are some best practices for MCP-compatible registries:

1. **Clear Descriptions**: Add concise, informative descriptions that help AI assistants understand what a registry item is for and how to use it.
2. **Proper Dependencies**: List all `dependencies` accurately so MCP can install them automatically.
3. **Registry Dependencies**: Use `registryDependencies` to indicate relationships between items.
4. **Consistent Naming**: Use kebab-case for component names and maintain consistency across your registry.
````

## .template\shadcn_guide\registry\Namespaces.txt

````txt
---
title: Namespaces
description: Configure and use multiple resource registries with namespace support.
---

Namespaced registries let you configure multiple resource sources in one project. This means you can install components, libraries, utilities, AI prompts, configuration files, and other resources from various registries, whether they're public, third-party, or your own custom private libraries.

## Table of Contents

- [Overview](#overview)
- [Decentralized Namespace System](#decentralized-namespace-system)
- [Getting Started](#getting-started)
- [Registry Naming Convention](#registry-naming-convention)
- [Configuration](#configuration)
- [Authentication & Security](#authentication--security)
- [Versioning](#versioning)
- [Dependency Resolution](#dependency-resolution)
- [Built-in Registries](#built-in-registries)
- [CLI Commands](#cli-commands)
- [Error Handling](#error-handling)
- [Creating Your Own Registry](#creating-your-own-registry)
- [Example Configurations](#example-configurations)
- [Technical Details](#technical-details)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

Registry namespaces are prefixed with `@` and provide a way to organize and reference resources from different sources. Resources can be any type of content: components, libraries, utilities, hooks, AI prompts, configuration files, themes, and more. For example:

- `@shadcn/button` - UI component from the shadcn registry
- `@v0/dashboard` - Dashboard component from the v0 registry
- `@ai-elements/input` - AI prompt input from an AI elements registry
- `@acme/auth-utils` - Authentication utilities from your company's private registry
- `@ai/chatbot-rules` - AI prompt rules from an AI resources registry
- `@themes/dark-mode` - Theme configuration from a themes registry

---

## Decentralized Namespace System

We intentionally designed the namespace system to be decentralized. There is a [central open source registry index](/docs/registry/registry-index) for open source namespaces but you are free to create and use any namespace you want.

This decentralized approach gives you complete flexibility to organize your resources however makes sense for your organization.

You can create multiple registries for different purposes:

```json title="components.json" showLineNumbers
{
  "registries": {
    "@acme-ui": "https://registry.acme.com/ui/{name}.json",
    "@acme-docs": "https://registry.acme.com/docs/{name}.json",
    "@acme-ai": "https://registry.acme.com/ai/{name}.json",
    "@acme-themes": "https://registry.acme.com/themes/{name}.json",
    "@acme-internal": {
      "url": "https://internal.acme.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${INTERNAL_TOKEN}"
      }
    }
  }
}
````

This allows you to:

- **Organize by type**: Separate UI components, documentation, AI resources, etc.
- **Organize by team**: Different teams can maintain their own registries
- **Organize by visibility**: Public vs. private resources
- **Organize by version**: Stable vs. experimental registries
- **No naming conflicts**: Since there's no central authority, you don't need to worry about namespace collisions

### Examples of Multi-Registry Setups

#### By Resource Type

```json title="components.json" showLineNumbers
{
  "@components": "https://cdn.company.com/components/{name}.json",
  "@hooks": "https://cdn.company.com/hooks/{name}.json",
  "@utils": "https://cdn.company.com/utils/{name}.json",
  "@prompts": "https://cdn.company.com/ai-prompts/{name}.json"
}
```

#### By Team or Department

```json title="components.json" showLineNumbers
{
  "@design": "https://design.company.com/registry/{name}.json",
  "@engineering": "https://eng.company.com/registry/{name}.json",
  "@marketing": "https://marketing.company.com/registry/{name}.json"
}
```

#### By Stability

```json title="components.json" showLineNumbers
{
  "@stable": "https://registry.company.com/stable/{name}.json",
  "@latest": "https://registry.company.com/beta/{name}.json",
  "@experimental": "https://registry.company.com/experimental/{name}.json"
}
```

---

## Getting Started

### Installing Resources

Once configured, you can install resources using the namespace syntax:

```bash
npx shadcn@latest add @v0/dashboard
```

or multiple resources at once:

```bash
npx shadcn@latest add @acme/header @lib/auth-utils @ai/chatbot-rules
```

### Quick Configuration

Add registries to your `components.json`:

```json title="components.json"
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/resources/{name}.json"
  }
}
```

Then start installing:

```bash
npx shadcn@latest add @acme/button
```

---

## Registry Naming Convention

Registry names must follow these rules:

- Start with `@` symbol
- Contain only alphanumeric characters, hyphens, and underscores
- Examples of valid names: `@v0`, `@acme-ui`, `@my_company`

The pattern for referencing resources is: `@namespace/resource-name`

---

## Configuration

Namespaced registries are configured in your `components.json` file under the `registries` field.

### Basic Configuration

The simplest way to configure a registry is with a URL template string:

```json title="components.json"
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/resources/{name}.json",
    "@lib": "https://lib.company.com/utilities/{name}",
    "@ai": "https://ai-resources.com/r/{name}.json"
  }
}
```

> **Note:** The `{name}` placeholder in the URL is automatically parsed and replaced with the resource name when you run `npx shadcn@latest add @namespace/resource-name`. For example, `@acme/button` becomes `https://registry.acme.com/resources/button.json`. See [URL Pattern System](#url-pattern-system) for more details.

### Advanced Configuration

For registries that require authentication or additional parameters, use the object format:

```json title="components.json"
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}",
        "X-API-Key": "${API_KEY}"
      },
      "params": {
        "version": "latest",
        "format": "json"
      }
    }
  }
}
```

> **Note:** Environment variables in the format `${VAR_NAME}` are automatically expanded from your environment (process.env). This works in URLs, headers, and params. For example, `${REGISTRY_TOKEN}` will be replaced with the value of `process.env.REGISTRY_TOKEN`. See [Authentication & Security](#authentication--security) for more details on using environment variables.

---

### URL Pattern System

Registry URLs support the following placeholders:

### `{name}` Placeholder (required)

The `{name}` placeholder is replaced with the resource name:

```json title="components.json" showLineNumbers
{
  "@acme": "https://registry.acme.com/{name}.json"
}
```

When installing `@acme/button`, the URL becomes: `https://registry.acme.com/button.json`
When installing `@acme/auth-utils`, the URL becomes: `https://registry.acme.com/auth-utils.json`

### `{style}` Placeholder (optional)

The `{style}` placeholder is replaced with the current style configuration:

```json
{
  "@themes": "https://registry.example.com/{style}/{name}.json"
}
```

With style set to `new-york`, installing `@themes/card` resolves to: `https://registry.example.com/new-york/card.json`

The style placeholder is optional. Use this when you want to serve different versions of the same resource. For example, you can serve a different version of a component for each style.

---

## Authentication & Security

### Environment Variables

Use environment variables to securely store credentials:

```json title="components.json"
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

Then set the environment variable:

```bash title=".env.local"
REGISTRY_TOKEN=your_secret_token_here
```

### Authentication Methods

#### Bearer Token (OAuth 2.0)

```json
{
  "@github": {
    "url": "https://api.github.com/repos/org/registry/contents/{name}.json",
    "headers": {
      "Authorization": "Bearer ${GITHUB_TOKEN}"
    }
  }
}
```

#### API Key in Headers

```json title="components.json" showLineNumbers
{
  "@private": {
    "url": "https://api.company.com/registry/{name}",
    "headers": {
      "X-API-Key": "${API_KEY}"
    }
  }
}
```

#### Basic Authentication

```json title="components.json" showLineNumbers
{
  "@internal": {
    "url": "https://registry.company.com/{name}.json",
    "headers": {
      "Authorization": "Basic ${BASE64_CREDENTIALS}"
    }
  }
}
```

#### Query Parameter Authentication

```json title="components.json" showLineNumbers
{
  "@secure": {
    "url": "https://registry.example.com/{name}.json",
    "params": {
      "api_key": "${API_KEY}",
      "client_id": "${CLIENT_ID}",
      "signature": "${REQUEST_SIGNATURE}"
    }
  }
}
```

#### Multiple Authentication Methods

Some registries require multiple authentication methods:

```json title="components.json" showLineNumbers
{
  "@enterprise": {
    "url": "https://api.enterprise.com/v2/registry/{name}",
    "headers": {
      "Authorization": "Bearer ${ACCESS_TOKEN}",
      "X-API-Key": "${API_KEY}",
      "X-Workspace-Id": "${WORKSPACE_ID}"
    },
    "params": {
      "version": "latest"
    }
  }
}
```

### Security Considerations

When working with namespaced registries, especially third-party or public ones, security is paramount. Here's how we handle security:

### Resource Validation

All resources fetched from registries are validated against our registry item schema before installation. This ensures:

- **Structure validation**: Resources must conform to the expected JSON schema
- **Type safety**: Resource types are validated (`registry:ui`, `registry:lib`, etc.)
- **No arbitrary code execution**: Resources are data files, not executable scripts

### Environment Variable Security

Environment variables used for authentication are:

- **Never logged**: The CLI never logs or displays environment variable values
- **Expanded at runtime**: Variables are only expanded when needed, not stored
- **Isolated per registry**: Each registry maintains its own authentication context

Example of secure configuration:

```json title="components.json" showLineNumbers
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${PRIVATE_REGISTRY_TOKEN}"
      }
    }
  }
}
```

Never commit actual tokens to version control. Use `.env.local`:

```bash title=".env.local"
PRIVATE_REGISTRY_TOKEN=actual_token_here
```

### HTTPS Enforcement

We strongly recommend using HTTPS for all registry URLs:

- **Encrypted transport**: Prevents man-in-the-middle attacks
- **Certificate validation**: Ensures you're connecting to the legitimate registry
- **Credential protection**: Headers and tokens are encrypted in transit

```json title="components.json" showLineNumbers
{
  "registries": {
    "@secure": "https://registry.example.com/{name}.json", // ✅ Good
    "@insecure": "http://registry.example.com/{name}.json" // ❌ Avoid
  }
}
```

### Content Security

Resources from registries are treated as data, not code:

1. **JSON parsing only**: Resources must be valid JSON
2. **Schema validation**: Must match the registry item schema
3. **File path restrictions**: Files can only be written to configured paths
4. **No script execution**: The CLI doesn't execute any code from registry resources

### Registry Trust Model

The namespace system operates on a trust model:

- **You trust what you install**: Only add registries you trust to your configuration
- **Explicit configuration**: Registries must be explicitly configured in `components.json`
- **No automatic registry discovery**: The CLI never automatically adds registries
- **Dependency transparency**: All dependencies are clearly listed in registry items

### Best Practices for Registry Operators

If you're running your own registry:

1. **Use HTTPS always**: Never serve registry content over HTTP
2. **Implement authentication**: Require API keys or tokens for private registries
3. **Rate limiting**: Protect your registry from abuse
4. **Content validation**: Validate resources before serving them

Example secure registry setup:

```json title="components.json" showLineNumbers
{
  "@company": {
    "url": "https://registry.company.com/v1/{name}.json",
    "headers": {
      "Authorization": "Bearer ${COMPANY_TOKEN}",
      "X-Registry-Version": "1.0"
    }
  }
}
```

### Inspecting Resources Before Installation

The CLI provides transparency about what's being installed. You can see the payload of a registry item using the following command:

```bash
npx shadcn@latest view @acme/button
```

This will output the payload of the registry item to the console.

---

## Dependency Resolution

### Basic Dependency Resolution

Resources can have dependencies across different registries:

```json title="registry-item.json" showLineNumbers
{
  "name": "dashboard",
  "type": "registry:block",
  "registryDependencies": [
    "@shadcn/card", // From default registry
    "@v0/chart", // From v0 registry
    "@acme/data-table", // From acme registry
    "@lib/data-fetcher", // Utility library
    "@ai/analytics-prompt" // AI prompt resource
  ]
}
```

The CLI automatically resolves and installs all dependencies from their respective registries.

### Advanced Dependency Resolution

Understanding how dependencies are resolved internally is important if you're developing registries or need to customize third-party resources.

### How Resolution Works

When you run `npx shadcn@latest add @namespace/resource`, the CLI does the following:

1. **Clears registry context** to start fresh
2. **Fetches the main resource** from the specified registry
3. **Recursively resolves dependencies** from their respective registries
4. **Applies topological sorting** to ensure proper installation order
5. **Deduplicates files** based on target paths (last one wins)
6. **Deep merges configurations** (tailwind, cssVars, css, envVars)

This means that if you run the following command:

```bash
npx shadcn@latest add @acme/auth @custom/login-form
```

The `login-form.ts` from `@custom/login-form` will override the `login-form.ts` from `@acme/auth` because it's resolved last.

### Overriding Third-Party Resources

You can leverage the dependency resolution process to override any third-party resource by adding them to your custom resource under `registryDependencies` and overriding with your own custom values.

#### Example: Customizing a Third-Party Button

Let's say you want to customize a button from a vendor registry:

**1. Original vendor button** (`@vendor/button`):

```json title="button.json" showLineNumbers
{
  "name": "button",
  "type": "registry:ui",
  "files": [
    {
      "path": "components/ui/button.tsx",
      "type": "registry:ui",
      "content": "// Vendor's button implementation\nexport function Button() { ... }"
    }
  ],
  "cssVars": {
    "light": {
      "--button-bg": "blue"
    }
  }
}
```

**2. Create your custom override** (`@my-company/custom-button`):

```json title="custom-button.json" showLineNumbers
{
  "name": "custom-button",
  "type": "registry:ui",
  "registryDependencies": [
    "@vendor/button" // Import original first
  ],
  "cssVars": {
    "light": {
      "--button-bg": "purple" // Override the color
    }
  }
}
```

**3. Install your custom version**:

```bash
npx shadcn@latest add @my-company/custom-button
```

This installs the original button from `@vendor/button` and then overrides the `cssVars` with your own custom values.

### Advanced Override Patterns

#### Extending Without Replacing

Keep the original and add extensions:

```json title="extended-table.json" showLineNumbers
{
  "name": "extended-table",
  "registryDependencies": ["@vendor/table"],
  "files": [
    {
      "path": "components/ui/table-extended.tsx",
      "content": "import { Table } from '@vendor/table'\n// Add your extensions\nexport function ExtendedTable() { ... }"
    }
  ]
}
```

This will install the original table from `@vendor/table` and then add your extensions to `components/ui/table-extended.tsx`.

#### Partial Override (Multi-file Resources)

Override only specific files from a complex component:

```json title="custom-auth.json" showLineNumbers
{
  "name": "custom-auth",
  "registryDependencies": [
    "@vendor/auth" // Has multiple files
  ],
  "files": [
    {
      "path": "lib/auth-server.ts",
      "type": "registry:lib",
      "content": "// Your custom auth server"
    }
  ]
}
```

### Resolution Order Example

When you install `@custom/dashboard` that depends on multiple resources:

```json title="dashboard.json" showLineNumbers
{
  "name": "dashboard",
  "registryDependencies": [
    "@shadcn/card", // 1. Resolved first
    "@vendor/chart", // 2. Resolved second
    "@custom/card" // 3. Resolved last (overrides @shadcn/card)
  ]
}
```

Resolution order:

1. `@shadcn/card` - installs to `components/ui/card.tsx`
2. `@vendor/chart` - installs to `components/ui/chart.tsx`
3. `@custom/card` - overwrites `components/ui/card.tsx` (if same target)

### Key Resolution Features

1. **Source Tracking**: Each resource knows which registry it came from, avoiding naming conflicts
2. **Circular Dependency Prevention**: Automatically detects and prevents circular dependencies
3. **Smart Installation Order**: Dependencies are installed first, then the resources that use them

---

## Versioning

You can implement versioning for your registry resources using query parameters. This allows users to pin specific versions or use different release channels.

### Basic Version Parameter

```json title="components.json" showLineNumbers
{
  "@versioned": {
    "url": "https://registry.example.com/{name}",
    "params": {
      "version": "v2"
    }
  }
}
```

This resolves `@versioned/button` to: `https://registry.example.com/button?version=v2`

### Dynamic Version Selection

Use environment variables to control versions across your project:

```json title="components.json" showLineNumbers
{
  "@stable": {
    "url": "https://registry.company.com/{name}",
    "params": {
      "version": "${REGISTRY_VERSION}"
    }
  }
}
```

This allows you to:

- Set `REGISTRY_VERSION=v1.2.3` in production
- Override per environment (dev, staging, prod)

### Semantic Versioning

Implement semantic versioning with range support:

```json title="components.json" showLineNumbers
{
  "@npm-style": {
    "url": "https://registry.example.com/{name}",
    "params": {
      "semver": "^2.0.0",
      "prerelease": "${ALLOW_PRERELEASE}"
    }
  }
}
```

### Version Resolution Best Practices

1. **Use environment variables** for version control across environments
2. **Provide sensible defaults** using the `${VAR:-default}` syntax
3. **Document version schemes** clearly for registry users
4. **Support version pinning** for reproducible builds
5. **Implement version discovery** endpoints (e.g., `/versions/{name}`)
6. **Cache versioned resources** appropriately with proper cache headers

---

## CLI Commands

The shadcn CLI provides several commands for working with namespaced registries:

### Adding Resources

Install resources from any configured registry:

```bash
# Install from a specific registry
npx shadcn@latest add @v0/dashboard

# Install multiple resources
npx shadcn@latest add @acme/button @lib/utils @ai/prompt

# Install from URL directly
npx shadcn@latest add https://registry.example.com/button.json

# Install from local file
npx shadcn@latest add ./local-registry/button.json
```

### Viewing Resources

Inspect registry items before installation:

```bash
# View a resource from a registry
npx shadcn@latest view @acme/button

# View multiple resources
npx shadcn@latest view @v0/dashboard @shadcn/card

# View from URL
npx shadcn@latest view https://registry.example.com/button.json
```

The `view` command displays:

- Resource metadata (name, type, description)
- Dependencies and registry dependencies
- File contents that will be installed
- CSS variables and Tailwind configuration
- Required environment variables

### Searching Registries

Search for available resources in registries:

```bash
# Search a specific registry
npx shadcn@latest search @v0

# Search with query
npx shadcn@latest search @acme --query "auth"

# Search multiple registries
npx shadcn@latest search @v0 @acme @lib

# Limit results
npx shadcn@latest search @v0 --limit 10 --offset 20

# List all items (alias for search)
npx shadcn@latest list @acme
```

Search results include:

- Resource name and type
- Description
- Registry source

---

## Error Handling

### Registry Not Configured

If you reference a registry that isn't configured:

```bash
npx shadcn@latest add @non-existent/component
```

Error:

```txt
Unknown registry "@non-existent". Make sure it is defined in components.json as follows:
{
  "registries": {
    "@non-existent": "[URL_TO_REGISTRY]"
  }
}
```

### Missing Environment Variables

If required environment variables are not set:

```txt
Registry "@private" requires the following environment variables:

  • REGISTRY_TOKEN

Set the required environment variables to your .env or .env.local file.
```

### Resource Not Found

404 Not Found:

```txt
The item at https://registry.company.com/button.json was not found. It may not exist at the registry.
```

This usually means:

- The resource name is misspelled
- The resource doesn't exist in the registry
- The registry URL pattern is incorrect

### Authentication Failures

401 Unauthorized:

```txt
You are not authorized to access the item at https://api.company.com/button.json
Check your authentication credentials and environment variables.
```

403 Forbidden:

```txt
Access forbidden for https://api.company.com/button.json
Verify your API key has the necessary permissions.
```

---

## Creating Your Own Registry

To make your registry compatible with the namespace system, you can serve any type of resource - components, libraries, utilities, AI prompts, themes, configurations, or any other shareable code/content:

1. **Implement the registry item schema**: Your registry must return JSON that conforms to the [registry item schema](/docs/registry/registry-item-json).

2. **Support the URL pattern**: Include `{name}` in your URL template where the resource name will be inserted.

3. **Define resource types**: Use appropriate `type` fields to identify your resources (e.g., `registry:ui`, `registry:lib`, `registry:ai`, `registry:theme`, etc.).

4. **Handle authentication** (if needed): Accept authentication via headers or query parameters.

5. **Document your namespace**: Provide clear instructions for users to configure your registry:

```json title="components.json" showLineNumbers
{
  "registries": {
    "@your-registry": "https://your-domain.com/r/{name}.json"
  }
}
```

---

## Technical Details

### Parser Pattern

The namespace parser uses the following regex pattern:

```regex title="namespace-parser.js"
/^(@[a-zA-Z0-9](?:[a-zA-Z0-9-_]*[a-zA-Z0-9])?)\/(.+)$/
```

This ensures valid namespace formatting and proper component name extraction.

### Resolution Process

1. **Parse**: Extract namespace and component name from `@namespace/component`
2. **Lookup**: Find registry configuration for `@namespace`
3. **Build URL**: Replace placeholders with actual values
4. **Set Headers**: Apply authentication headers if configured
5. **Fetch**: Retrieve component from the resolved URL
6. **Validate**: Ensure response matches registry item schema
7. **Resolve Dependencies**: Recursively fetch any registry dependencies

### Cross-Registry Dependencies

When a component has dependencies from different registries, the resolver:

1. Maintains separate authentication contexts for each registry
2. Resolves each dependency from its respective source
3. Deduplicates files based on target paths
4. Merges configurations (tailwind, cssVars, etc.) from all sources

---

## Best Practices

1. **Use environment variables** for sensitive data like API keys and tokens
2. **Namespace your registry** with a unique, descriptive name
3. **Document authentication requirements** clearly for users
4. **Implement proper error responses** with helpful messages
5. **Cache registry responses** when possible to improve performance
6. **Support style variants** if your components have multiple themes

---

## Troubleshooting

### Resources not found

- Verify the registry URL is correct and accessible
- Check that the `{name}` placeholder is included in the URL
- Ensure the resource exists in the registry
- Confirm the resource type matches what the registry provides

### Authentication issues

- Confirm environment variables are set correctly
- Verify API keys/tokens are valid and not expired
- Check that headers are being sent in the correct format

### Dependency conflicts

- Review resources with the same name from different registries
- Use fully qualified names (`@namespace/resource`) to avoid ambiguity
- Check for circular dependencies between registries
- Ensure resource types are compatible when mixing registries

````

## .template\shadcn_guide\registry\registry-item.json.txt

```txt
---
title: registry-item.json
description: Specification for registry items.
---

The `registry-item.json` schema is used to define your custom registry items.

```json title="registry-item.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "type": "registry:block",
  "title": "Hello World",
  "description": "A simple hello world component.",
  "registryDependencies": [
    "button",
    "@acme/input-form",
    "https://example.com/r/foo"
  ],
  "dependencies": ["is-even@3.0.0", "motion"],
  "files": [
    {
      "path": "registry/new-york/hello-world/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/use-hello-world.ts",
      "type": "registry:hook"
    }
  ],
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
````

<div className="mt-6 flex items-center gap-2">
  <Link href="/docs/registry/examples">See more examples</Link>
</div>

## Definitions

You can see the JSON Schema for `registry-item.json` [here](https://ui.shadcn.com/schema/registry-item.json).

### $schema

The `$schema` property is used to specify the schema for the `registry-item.json` file.

```json title="registry-item.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json"
}
```

### name

The name of the item. This is used to identify the item in the registry. It should be unique for your registry.

```json title="registry-item.json" showLineNumbers
{
  "name": "hello-world"
}
```

### title

A human-readable title for your registry item. Keep it short and descriptive.

```json title="registry-item.json" showLineNumbers
{
  "title": "Hello World"
}
```

### description

A description of your registry item. This can be longer and more detailed than the `title`.

```json title="registry-item.json" showLineNumbers
{
  "description": "A simple hello world component."
}
```

### type

The `type` property is used to specify the type of your registry item. This is used to determine the type and target path of the item when resolved for a project.

```json title="registry-item.json" showLineNumbers
{
  "type": "registry:block"
}
```

The following types are supported:

| Type                 | Description                                      |
| -------------------- | ------------------------------------------------ |
| `registry:block`     | Use for complex components with multiple files.  |
| `registry:component` | Use for simple components.                       |
| `registry:lib`       | Use for lib and utils.                           |
| `registry:hook`      | Use for hooks.                                   |
| `registry:ui`        | Use for UI components and single-file primitives |
| `registry:page`      | Use for page or file-based routes.               |
| `registry:file`      | Use for miscellaneous files.                     |
| `registry:style`     | Use for registry styles. eg. `new-york`          |
| `registry:theme`     | Use for themes.                                  |
| `registry:item`      | Use for universal registry items.                |

### author

The `author` property is used to specify the author of the registry item.

It can be unique to the registry item or the same as the author of the registry.

```json title="registry-item.json" showLineNumbers
{
  "author": "John Doe <john@doe.com>"
}
```

### dependencies

The `dependencies` property is used to specify the dependencies of your registry item. This is for `npm` packages.

Use `@version` to specify the version of your registry item.

```json title="registry-item.json" showLineNumbers
{
  "dependencies": ["@radix-ui/react-accordion", "zod", "lucide-react", "name@1.0.2"]
}
```

### registryDependencies

Used for registry dependencies. Can be names, namespaced or URLs.

- For `shadcn/ui` registry items such as `button`, `input`, `select`, etc use the name eg. `['button', 'input', 'select']`.
- For namespaced registry items such as `@acme` use the name eg. `['@acme/input-form']`.
- For custom registry items use the URL of the registry item eg. `['https://example.com/r/hello-world.json']`.

```json title="registry-item.json" showLineNumbers
{
  "registryDependencies": ["button", "@acme/input-form", "https://example.com/r/editor.json"]
}
```

Note: The CLI will automatically resolve remote registry dependencies.

### files

The `files` property is used to specify the files of your registry item. Each file has a `path`, `type` and `target` (optional) property.

**The `target` property is required for `registry:page` and `registry:file` types.**

```json title="registry-item.json" showLineNumbers
{
  "files": [
    {
      "path": "registry/new-york/hello-world/page.tsx",
      "type": "registry:page",
      "target": "app/hello/page.tsx"
    },
    {
      "path": "registry/new-york/hello-world/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/use-hello-world.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/new-york/hello-world/.env",
      "type": "registry:file",
      "target": "~/.env"
    }
  ]
}
```

#### path

The `path` property is used to specify the path to the file in your registry. This path is used by the build script to parse, transform and build the registry JSON payload.

#### type

The `type` property is used to specify the type of the file. See the [type](#type) section for more information.

#### target

The `target` property is used to indicate where the file should be placed in a project. This is optional and only required for `registry:page` and `registry:file` types.

By default, the `shadcn` cli will read a project's `components.json` file to determine the target path. For some files, such as routes or config you can specify the target path manually.

Use `~` to refer to the root of the project e.g `~/foo.config.js`.

### tailwind

**DEPRECATED:** Use `cssVars.theme` instead for Tailwind v4 projects.

The `tailwind` property is used for tailwind configuration such as `theme`, `plugins` and `content`.

You can use the `tailwind.config` property to add colors, animations and plugins to your registry item.

```json title="registry-item.json" showLineNumbers
{
  "tailwind": {
    "config": {
      "theme": {
        "extend": {
          "colors": {
            "brand": "hsl(var(--brand))"
          },
          "keyframes": {
            "wiggle": {
              "0%, 100%": { "transform": "rotate(-3deg)" },
              "50%": { "transform": "rotate(3deg)" }
            }
          },
          "animation": {
            "wiggle": "wiggle 1s ease-in-out infinite"
          }
        }
      }
    }
  }
}
```

### cssVars

Use to define CSS variables for your registry item.

```json title="registry-item.json" showLineNumbers
{
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%",
      "radius": "0.5rem"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

### css

Use `css` to add new rules to the project's CSS file eg. `@layer base`, `@layer components`, `@utility`, `@keyframes`, `@plugin`, etc.

```json title="registry-item.json" showLineNumbers
{
  "css": {
    "@plugin @tailwindcss/typography": {},
    "@plugin foo": {},
    "@layer base": {
      "body": {
        "font-size": "var(--text-base)",
        "line-height": "1.5"
      }
    },
    "@layer components": {
      "button": {
        "background-color": "var(--color-primary)",
        "color": "var(--color-white)"
      }
    },
    "@utility text-magic": {
      "font-size": "var(--text-base)",
      "line-height": "1.5"
    },
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

### envVars

Use `envVars` to add environment variables to your registry item.

```json title="registry-item.json" showLineNumbers
{
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:4000",
    "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",
    "OPENAI_API_KEY": ""
  }
}
```

Environment variables are added to the `.env.local` or `.env` file. Existing variables are not overwritten.

<Callout>

**IMPORTANT:** Use `envVars` to add development or example variables. Do NOT use it to add production variables.

</Callout>

### docs

Use `docs` to show custom documentation or message when installing your registry item via the CLI.

```json title="registry-item.json" showLineNumbers
{
  "docs": "To get an OPENAI_API_KEY, sign up for an account at https://platform.openai.com."
}
```

### categories

Use `categories` to organize your registry item.

```json title="registry-item.json" showLineNumbers
{
  "categories": ["sidebar", "dashboard"]
}
```

### meta

Use `meta` to add additional metadata to your registry item. You can add any key/value pair that you want to be available to the registry item.

```json title="registry-item.json" showLineNumbers
{
  "meta": { "foo": "bar" }
}
```

````

## .template\shadcn_guide\registry\registry.json.txt

```txt
---
title: registry.json
description: Schema for running your own component registry.
---

The `registry.json` schema is used to define your custom component registry.

```json title="registry.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "shadcn",
  "homepage": "https://ui.shadcn.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "registryDependencies": [
        "button",
        "@acme/input-form",
        "https://example.com/r/foo"
      ],
      "dependencies": ["is-even@3.0.0", "motion"],
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
````

## Definitions

You can see the JSON Schema for `registry.json` [here](https://ui.shadcn.com/schema/registry.json).

### $schema

The `$schema` property is used to specify the schema for the `registry.json` file.

```json title="registry.json" showLineNumbers
{
  "$schema": "https://ui.shadcn.com/schema/registry.json"
}
```

### name

The `name` property is used to specify the name of your registry. This is used for data attributes and other metadata.

```json title="registry.json" showLineNumbers
{
  "name": "acme"
}
```

### homepage

The homepage of your registry. This is used for data attributes and other metadata.

```json title="registry.json" showLineNumbers
{
  "homepage": "https://acme.com"
}
```

### items

The `items` in your registry. Each item must implement the [registry-item schema specification](https://ui.shadcn.com/schema/registry-item.json).

```json title="registry.json" showLineNumbers
{
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "registryDependencies": ["button", "@acme/input-form", "https://example.com/r/foo"],
      "dependencies": ["is-even@3.0.0", "motion"],
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

See the [registry-item schema documentation](/docs/registry/registry-item-json) for more information.

````

## docs\README.md

```markdown
# Business Documentation

This folder is reserved for **business-specific documentation** for projects that use this template.

## Suggested Structure

```txt
docs/
├── requirements/     # Business requirements
├── specifications/   # Technical specifications
├── user-guides/      # End-user documentation
└── api/              # API documentation (if applicable)
````

## Template Documentation

For template-specific documentation (architecture, security), see:

- **Architecture**: [.template/ARCHITECTURE.md](../.template/ARCHITECTURE.md)
- **Security**: [.template/SECURITY.md](../.template/SECURITY.md)

````

## docs\TURSO_GUIDELINES.md

```markdown
# Turso & Database Guidelines

## 🛡️ "Turso Care" - Critical Rules

### 1. Naming Conventions

- **Language**: Use the language consistent with the feature name. If the feature is `estudantes`, the table MUST be `estudantes`.
- **Avoid Ambiguity**: Do not mix English and Portuguese for the same entity (e.g., `feature: estudantes`, `table: students` -> ❌ BAD).

### 2. Migration Workflow

1. **Define Schema**: Edit `electron/main/database/schema.ts`.
2. **Generate Migration**:

    ```bash
    npm run db:generate
    ```

3. **Apply Types**:
    - **Production/Stable**: `npm run db:migrate`
    - **Development/Conflict**: `npm run db:push`
      - *Use `db:push` if you encounter "Table already exists" errors or if you want to force sync the local schema to the remote DB.*

### 3. Conflict Resolution

- If a migration fails because a table exists:
  - Check if it's a "garbage" table (wrong name).
  - If yes, **DROP** the old table using a script.
  - Run `db:push` or retry `db:migrate`.

### 4. Verification

- Always verify the table creation using the Turso dashboard or a script after running migrations.

````

## docs\app_wizped_claro_mirageblaze.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\app_wizped_claro_moderncontrast.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\app_wizped_claro_tropical.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_bold_high_contrast_midnight_kimchi.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_elegant_black_gold_navy.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_minimalist_mirage_blaze_orange.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_modern_contrast_orange_blue.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_monochromatic_blue_gradient.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_sunset_dusk_navy_coral.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\palette_vibrant_tropical_rainbow.png

```png
*(Arquivo binário ou ilegível)*

```

## docs\ui_app_document_management_system.jpg

```jpg
*(Arquivo binário ou ilegível)*

```

## docs\ui_dashboard_moonrow_analytics_clean.jpg

```jpg
*(Arquivo binário ou ilegível)*

```

## docs\ui_dashboard_useably_management_purple.jpg

```jpg
*(Arquivo binário ou ilegível)*

```

## docs\ui_platform_talent_assessment_builder.jpg

```jpg
*(Arquivo binário ou ilegível)*

```

## docs\ui_sidebar_integration_variants_multistyle.jpg

```jpg
*(Arquivo binário ou ilegível)*

```

## docs\ui_sidebar_pointsale_minimalist_white.jpg

```jpg
*(Arquivo binário ou ilegível)*

```

## electron\main\index.ts

```typescript
import { app, BrowserWindow, shell, session } from 'electron'
import { join } from 'node:path'
import * as dotenv from 'dotenv'

// Carrega variáveis de ambiente (.env)
dotenv.config({ quiet: true })

import { registerIpcHandlers } from './ipc'
import { closeDatabase } from './database/client'

// Security: Allowed permissions whitelist
const ALLOWED_PERMISSIONS = new Set(['clipboard-read', 'clipboard-write', 'notifications'])

// Security: Configure session permissions
function configureSecurityHandlers(): void {
  // Block permission requests not in whitelist
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(ALLOWED_PERMISSIONS.has(permission))
  })

  // Block permission checks not in whitelist
  session.defaultSession.setPermissionCheckHandler((_webContents, permission) => {
    return ALLOWED_PERMISSIONS.has(permission)
  })
}

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false,
      // Security: Additional hardening
      webviewTag: false,
      allowRunningInsecureContent: false,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  // Security: Block navigation to external URLs
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const allowedOrigins = ['file://', 'http://localhost', 'https://localhost']
    const isAllowed = allowedOrigins.some((origin) => url.startsWith(origin))
    if (!isAllowed) {
      event.preventDefault()
      console.warn(`[Security] Blocked navigation to: ${url}`)
    }
  })

  // Security: Block new window creation, open in external browser
  mainWindow.webContents.setWindowOpenHandler((details) => {
    void shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (process.env.ELECTRON_RENDERER_URL) {
    void mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    void mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
void app.whenReady().then(() => {
  // Set app user model id for windows
  app.setAppUserModelId('com.wizped.app')

  // Security: Configure session handlers
  configureSecurityHandlers()

  // Register IPC handlers
  registerIpcHandlers()

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  closeDatabase()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

## electron\main\database\client.ts

```typescript
import { createClient } from '@libsql/client'
import type { Client } from '@libsql/core/api'
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql'
import { app } from 'electron'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import * as schema from './schema'

const DB_FILENAME = 'wizped-local.db'

function getDatabasePath(): string {
  if (app.isPackaged) {
    return join(dirname(process.execPath), 'data', DB_FILENAME)
  }
  return join(process.cwd(), 'resources', DB_FILENAME)
}

let client: Client | null = null
let db: LibSQLDatabase<typeof schema> | null = null

export function getDatabase(): LibSQLDatabase<typeof schema> {
  if (db) {
    return db
  }

  const dbPath = getDatabasePath()
  const dbDir = dirname(dbPath)

  if (!existsSync(dbDir)) {
    mkdirSync(dbDir, { recursive: true })
  }

  const url = `file:${dbPath}`
  const authToken = process.env.TURSO_AUTH_TOKEN ?? undefined
  const syncUrl = process.env.TURSO_DATABASE_URL ?? undefined
  const isCloudEnabled = Boolean(syncUrl && authToken)

  if (isCloudEnabled) {
    // Cyan (*) for connecting
    console.log(`\x1b[36m(*)\x1b[0m [WizPed] Conectando...`)
  } else {
    // Red (!) for offline
    console.error('\x1b[31m(!)\x1b[0m [WizPed] Offline (Sem credenciais)')
  }

  client = (createClient as unknown as (config: unknown) => Client)({
    url,
    authToken,
    syncUrl,
  })

  if (isCloudEnabled) {
    setInterval(() => {
      void (async () => {
        try {
          await client?.sync()
        } catch {
          // Ignora erros de rede silenciosamente em background
        }
      })()
    }, 60 * 1000)

    void client
      .sync()
      .then(() => {
        console.log('\x1b[32m(v)\x1b[0m [WizPed] Sincronizado com sucesso')
      })
      .catch(() => {
        console.log('[Sync] Offline init')
      })
  }

  db = drizzle(client, { schema })
  return db
}

export function closeDatabase(): void {
  if (client) {
    client.close()
    client = null
    db = null
  }
}
```

## electron\main\database\schema.ts

```typescript
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// --- USERS (Professores) ---
export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').unique(),
  password: text('password').notNull(),
  role: text('role').default('teacher'), // teacher | admin
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
})

// --- ESTUDANTES (Alunos) ---
export const estudantes = sqliteTable('estudantes', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text('name').notNull(),

  // Dados Wizard
  book: text('book'), // Ex: W2, T8, W4
  classTime: text('class_time'), // Ex: "Seg/Qua 18:00"

  // Dados Pessoais/Responsável
  birthDate: text('birth_date'), // YYYY-MM-DD
  responsibleName: text('responsible_name'),
  phone: text('phone'),

  // Metadados
  active: integer('active', { mode: 'boolean' }).default(true),
  notes: text('notes'),

  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
})

// Inferência de Tipos
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Student = typeof estudantes.$inferSelect
export type NewStudent = typeof estudantes.$inferInsert
```

## electron\main\database\migrations\0000_chunky_adam_warlock.sql

```sql
CREATE TABLE `estudantes` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`book` text,
	`class_time` text,
	`birth_date` text,
	`responsible_name` text,
	`phone` text,
	`active` integer DEFAULT true,
	`notes` text,
	`created_at` integer DEFAULT (unixepoch()),
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text,
	`password` text NOT NULL,
	`role` text DEFAULT 'teacher',
	`created_at` integer DEFAULT (unixepoch()),
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
```

## electron\main\database\migrations\meta\0000_snapshot.json

```json
{
  "version": "6",
  "dialect": "sqlite",
  "id": "b723191b-8696-456e-8169-47640d8bd0f9",
  "prevId": "00000000-0000-0000-0000-000000000000",
  "tables": {
    "estudantes": {
      "name": "estudantes",
      "columns": {
        "id": {
          "name": "id",
          "type": "text",
          "primaryKey": true,
          "notNull": true,
          "autoincrement": false
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": true,
          "autoincrement": false
        },
        "book": {
          "name": "book",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "class_time": {
          "name": "class_time",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "birth_date": {
          "name": "birth_date",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "responsible_name": {
          "name": "responsible_name",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "phone": {
          "name": "phone",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "active": {
          "name": "active",
          "type": "integer",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false,
          "default": true
        },
        "notes": {
          "name": "notes",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "created_at": {
          "name": "created_at",
          "type": "integer",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false,
          "default": "(unixepoch())"
        },
        "updated_at": {
          "name": "updated_at",
          "type": "integer",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false,
          "default": "(unixepoch())"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    },
    "users": {
      "name": "users",
      "columns": {
        "id": {
          "name": "id",
          "type": "text",
          "primaryKey": true,
          "notNull": true,
          "autoincrement": false
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": true,
          "autoincrement": false
        },
        "email": {
          "name": "email",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false
        },
        "password": {
          "name": "password",
          "type": "text",
          "primaryKey": false,
          "notNull": true,
          "autoincrement": false
        },
        "role": {
          "name": "role",
          "type": "text",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false,
          "default": "'teacher'"
        },
        "created_at": {
          "name": "created_at",
          "type": "integer",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false,
          "default": "(unixepoch())"
        },
        "updated_at": {
          "name": "updated_at",
          "type": "integer",
          "primaryKey": false,
          "notNull": false,
          "autoincrement": false,
          "default": "(unixepoch())"
        }
      },
      "indexes": {
        "users_email_unique": {
          "name": "users_email_unique",
          "columns": ["email"],
          "isUnique": true
        }
      },
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    }
  },
  "enums": {},
  "_meta": {
    "schemas": {},
    "tables": {},
    "columns": {}
  },
  "internal": {
    "indexes": {}
  }
}
```

## electron\main\database\migrations\meta_journal.json

```json
{
  "version": "7",
  "dialect": "sqlite",
  "entries": [
    {
      "idx": 0,
      "version": "6",
      "when": 1766129099268,
      "tag": "0000_chunky_adam_warlock",
      "breakpoints": true
    }
  ]
}
```

## electron\main\ipc\index.ts

```typescript
import { registerUsersHandlers } from './handlers/users.handlers'
import { registerEstudantesHandlers } from './handlers/estudantes.handlers'

export function registerIpcHandlers(): void {
  // Register all IPC handlers
  registerUsersHandlers()
  registerEstudantesHandlers()
}
```

## electron\main\ipc\handlers\estudantes.handlers.ts

```typescript
import { ipcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { estudantes, type NewStudent } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function registerEstudantesHandlers() {
  const db = getDatabase()

  ipcMain.handle('estudantes:getAll', async () => {
    return db.select().from(estudantes).all()
  })

  ipcMain.handle('estudantes:getById', async (_event, id: string) => {
    const result = await db.select().from(estudantes).where(eq(estudantes.id, id)).get()
    return result ?? null
  })

  ipcMain.handle('estudantes:create', async (_event, data: unknown) => {
    // TODO: Add Zod validation here
    const result = await db
      .insert(estudantes)
      .values(data as NewStudent)
      .returning()
      .get()
    return result
  })

  ipcMain.handle('estudantes:update', async (_event, id: string, data: unknown) => {
    // TODO: Add Zod validation here
    const result = await db
      .update(estudantes)
      .set(data as Partial<NewStudent>)
      .where(eq(estudantes.id, id))
      .returning()
      .get()
    return result
  })

  ipcMain.handle('estudantes:delete', async (_event, id: string) => {
    await db.delete(estudantes).where(eq(estudantes.id, id)).run()
    return true
  })
}
```

## electron\main\ipc\handlers\users.handlers.ts

```typescript
import { ipcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { users, type NewUser } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function registerUsersHandlers() {
  const db = getDatabase()

  ipcMain.handle('users:getAll', async () => {
    return db.select().from(users).all()
  })

  ipcMain.handle('users:getById', async (_event, id: string) => {
    const result = await db.select().from(users).where(eq(users.id, id)).get()
    return result ?? null
  })

  ipcMain.handle('users:create', async (_event, data: unknown) => {
    const result = await db
      .insert(users)
      .values(data as NewUser)
      .returning()
      .get()
    return result
  })

  ipcMain.handle('users:update', async (_event, id: string, data: unknown) => {
    const result = await db
      .update(users)
      .set(data as Partial<NewUser>)
      .where(eq(users.id, id))
      .returning()
      .get()
    return result
  })

  ipcMain.handle('users:delete', async (_event, id: string) => {
    await db.delete(users).where(eq(users.id, id)).run()
    return true
  })
}
```

## electron\preload\index.ts

```typescript
import { contextBridge, ipcRenderer } from 'electron'
import type { IpcEvents } from '@shared/types/ipc'

// Security: Allowed IPC channels whitelist
// This prevents renderer from invoking arbitrary IPC channels
const ALLOWED_CHANNELS = new Set<keyof IpcEvents>([
  'users:getAll',
  'users:getById',
  'users:create',
  'users:update',
  'users:delete',
  'estudantes:getAll',
  'estudantes:getById',
  'estudantes:create',
  'estudantes:update',
  'estudantes:delete',
])

// Security: Validate channel before invoking
function validateChannel(channel: string): channel is keyof IpcEvents {
  return ALLOWED_CHANNELS.has(channel as keyof IpcEvents)
}

// Typed API exposed to renderer
export const electronAPI = {
  invoke: <K extends keyof IpcEvents>(
    channel: K,
    ...args: IpcEvents[K]['request']
  ): Promise<IpcEvents[K]['response']> => {
    // Security: Only allow whitelisted channels
    if (!validateChannel(channel)) {
      return Promise.reject(new Error(`[Security] IPC channel "${String(channel)}" is not allowed`))
    }
    return ipcRenderer.invoke(channel, ...args) as Promise<IpcEvents[K]['response']>
  },
  on: (channel: string, callback: (...args: unknown[]) => void) => {
    // Security: Validate channel for listeners too
    if (!validateChannel(channel)) {
      console.warn(`[Security] IPC channel "${channel}" is not allowed for listeners`)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
    const subscription = (_event: Electron.IpcRendererEvent, ...args: unknown[]) => {
      callback(...args)
    }
    ipcRenderer.on(channel, subscription)
    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
} as const

contextBridge.exposeInMainWorld('electronAPI', electronAPI)

// Type augmentation for renderer
declare global {
  interface Window {
    electronAPI: typeof electronAPI
  }
}
```

## plop-templates\component\component.tsx.hbs

```hbs
interface
{{pascalCase name}}Props { className?: string } export function
{{pascalCase name}}({ className }:
{{pascalCase name}}Props) { return (
<div className='{className}'>
  <p>{{pascalCase name}} Component</p>
</div>
) }
```

## plop-templates\component\index.ts.hbs

```hbs
export * from './{{pascalCase name}}'
```

## plop-templates\feature\handler.ts.hbs

```hbs
import { ipcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { {{camelCase name}}, type New{{pascalCase name}} } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function register{{pascalCase name}}Handlers() {
  const db = getDatabase()

  ipcMain.handle('{{kebabCase name}}:getAll', async () => {
    return db.select().from({{camelCase name}}).all()
  })

  ipcMain.handle('{{kebabCase name}}:getById', async (_event, id: string) => {
    const result = await db.select().from({{camelCase name}}).where(eq({{camelCase name}}.id, id)).get()
    return result ?? null
  })

  ipcMain.handle('{{kebabCase name}}:create', async (_event, data: unknown) => {
    const result = await db
      .insert({{camelCase name}})
      .values(data as New{{pascalCase name}})
      .returning()
      .get()
    return result
  })

  ipcMain.handle('{{kebabCase name}}:update', async (_event, id: string, data: unknown) => {
    const result = await db
      .update({{camelCase name}})
      .set(data as Partial<New{{pascalCase name}}>)
      .where(eq({{camelCase name}}.id, id))
      .returning()
      .get()
    return result
  })

  ipcMain.handle('{{kebabCase name}}:delete', async (_event, id: string) => {
    await db.delete({{camelCase name}}).where(eq({{camelCase name}}.id, id)).run()
    return true
  })
}

```

## plop-templates\feature\index.ts.hbs

```hbs
// Feature:
{{pascalCase name}}
// Export public API from this file export * from './types'
```

## plop-templates\feature\schema.ts.hbs

```hbs
import { z } from 'zod'

// NOTE: Ensure the table name matches the feature domain in Portuguese (e.g., 'estudantes' for 'students')
// This avoids conflicts and mismatched expectations in Turso.
export const {{camelCase name}}Schema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Nome é obrigatório'),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const create{{pascalCase name}}Schema = {{camelCase name}}Schema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const update{{pascalCase name}}Schema = create{{pascalCase name}}Schema.partial()

export type {{pascalCase name}}FormData = z.infer<typeof create{{pascalCase name}}Schema>
export type Update{{pascalCase name}}FormData = z.infer<typeof update{{pascalCase name}}Schema>

```

## plop-templates\feature\service.ts.hbs

```hbs
// {{pascalCase name}} Service
// IPC calls to interact with main process

import type { {{pascalCase name}}, New{{pascalCase name}} } from '@main/database/schema'

export const {{camelCase name}}Service = {
  async getAll() {
    return window.electronAPI.invoke('{{kebabCase name}}:getAll')
  },

  async getById(id: string) {
    return window.electronAPI.invoke('{{kebabCase name}}:getById', id)
  },

  async create(data: New{{pascalCase name}}) {
    return window.electronAPI.invoke('{{kebabCase name}}:create', data)
  },

  async update(id: string, data: Partial<New{{pascalCase name}}>) {
    return window.electronAPI.invoke('{{kebabCase name}}:update', id, data)
  },

  async delete(id: string) {
    return window.electronAPI.invoke('{{kebabCase name}}:delete', id)
  },
}

/*
 * IMPORTANT: After creating this service, you must:
 * 1. Add IPC types in src/shared/types/ipc.ts
 * 2. Update ALLOWED_CHANNELS in electron/preload/index.ts
 * 3. Create handler in electron/main/ipc/handlers/{{kebabCase name}}.handlers.ts
 * 4. Register handler in electron/main/ipc/index.ts
 */

```

## plop-templates\feature\store.ts.hbs

```hbs
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface {{pascalCase name}}State {
  isLoading: boolean
  error: string | null
}

interface {{pascalCase name}}Actions {
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState: {{pascalCase name}}State = {
  isLoading: false,
  error: null,
}

export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
  devtools(
    (set) => ({
      ...initialState,

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      reset: () => set(initialState),
    }),
    { name: '{{pascalCase name}}Store' }
  )
)

```

## plop-templates\feature\types.ts.hbs

```hbs
//
{{pascalCase name}}
Types // Add feature-specific types here export interface
{{pascalCase name}}
{ id: string name: string createdAt: Date updatedAt: Date }
```

## plop-templates\store\store.ts.hbs

```hbs
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface {{pascalCase name}}State {
  isLoading: boolean
  error: string | null
}

interface {{pascalCase name}}Actions {
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState: {{pascalCase name}}State = {
  isLoading: false,
  error: null,
}

export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
  devtools(
    (set) => ({
      ...initialState,

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      reset: () => set(initialState),
    }),
    { name: '{{pascalCase name}}Store' }
  )
)

```

## scripts\check-students-table.js

```javascript
const { createClient } = require('@libsql/client')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

const client = createClient({
  url,
  authToken,
})

async function main() {
  console.log('Checking students table...')
  try {
    await client.execute('SELECT count(*) as count FROM students')
    console.log('✅ Students table exists!')
  } catch (e) {
    console.error('❌ Error querying students table:', e.message)
  }
}

void main()
```

## scripts\clear-migrations.js

```javascript
const { createClient } = require('@libsql/client')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN

if (!url || !authToken) {
  console.error('Missing TURSO credentials')
  process.exit(1)
}

const client = createClient({
  url,
  authToken,
})

async function main() {
  console.log('Clearing migration history for 0000...')
  try {
    // Drizzle stores hashes. We just want to delete the row so it thinks it never ran.
    // The table is __drizzle_migrations. There isn't a guaranteed ID column we know without peeking,
    // but usually deleting all or by name if possible. Drizzle usually tracks by index.
    // Let's just delete everything since this is migration 0000 and we want to re-init.
    await client.execute('DELETE FROM __drizzle_migrations')
    console.log('Migration history cleared.')
  } catch (e) {
    console.error('Error clearing history:', e)
    process.exit(1)
  }
}

void main()
```

## scripts\doc_project.py

````python
import os
import datetime
import argparse
import sys

# Configurações Globais
IGNORE_DIRS = {'.git', 'node_modules', 'out', 'dist', '.vscode', '.idea', '__pycache__', '.agent', 'coverage', 'resources'}
IGNORE_FILES = {'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'PROJECT_STRUC_DOCS.md', '.DS_Store', 'thumbs.db'}
OUTPUT_FILE = 'PROJECT_STRUC_DOCS.md'

# Mapeamento de extensões
EXT_MAP = {
    'ts': 'typescript', 'tsx': 'tsx', 'js': 'javascript', 'jsx': 'jsx',
    'py': 'python', 'ps1': 'powershell', 'bat': 'batch',
    'md': 'markdown', 'json': 'json', 'yml': 'yaml', 'yaml': 'yaml',
    'html': 'html', 'css': 'css', 'scss': 'scss',
    'sql': 'sql', 'sh': 'bash'
}

def is_binary(file_path):
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
            return b'\0' in chunk
    except Exception:
        return True

def generate_tree_recursive(current_path, prefix, ignore_dirs, ignore_files):
    output = []
    try:
        items = sorted(os.listdir(current_path))
    except PermissionError:
        return []

    items = [i for i in items if i not in ignore_dirs and i not in ignore_files]

    for i, item in enumerate(items):
        path = os.path.join(current_path, item)
        is_last = (i == len(items) - 1)
        marker = "\\--- " if is_last else "+--- "

        output.append(f"{prefix}{marker}{item}")

        if os.path.isdir(path):
            next_prefix = prefix + ("     " if is_last else "|    ")
            output.extend(generate_tree_recursive(path, next_prefix, ignore_dirs, ignore_files))

    return output

def main():
    parser = argparse.ArgumentParser(description="Ferramenta unificada de documentação e visualização de estrutura.")

    # Argumento Posicional: Path (Opcional, default=current)
    parser.add_argument("path", nargs="?", default=".", help="Diretório alvo.")

    # Flags Mutuamente Exclusivas (para evitar confusão)
    group = parser.add_mutually_exclusive_group()
    group.add_argument("-t", "--terminal", action="store_true", help="Exibe APENAS a árvore no terminal (sem gerar arquivo).")
    group.add_argument("-n", "--no-content", action="store_true", help="Gera o arquivo de documentação APENAS com a árvore (sem conteúdo dos arquivos).")

    args = parser.parse_args()

    # Validação e Setup
    root_execution_dir = os.getcwd()
    target_path = os.path.abspath(args.path)

    # Configuração do diretório de saída (docs/)
    docs_dir = os.path.join(root_execution_dir, 'docs')
    if not os.path.exists(docs_dir):
        try:
            os.makedirs(docs_dir)
        except OSError as e:
            print(f"Erro ao criar diretório 'docs': {e}")
            sys.exit(1)

    # Determina o nome base do arquivo
    base_filename = OUTPUT_FILE

    # Se um path específico foi passado (não é o diretório atual)
    if os.path.abspath(target_path) != root_execution_dir:
        # Pega o caminho relativo e sanitiza para usar no nome do arquivo
        rel_path_name = os.path.relpath(target_path, root_execution_dir)
        # Substitui separadores de diretório por underscore e remove caracteres inválidos
        safe_name = rel_path_name.replace(os.sep, '_').replace(':', '').replace('.', '')
        name_part, ext_part = os.path.splitext(OUTPUT_FILE)
        base_filename = f"{name_part}_{safe_name}{ext_part}"

    output_path = os.path.join(docs_dir, base_filename)

    # Versionamento de arquivo: se existir, cria _v1, _v2, etc.
    if os.path.exists(output_path):
        base_name, ext = os.path.splitext(base_filename)
        counter = 1
        while True:
            new_filename = f"{base_name}_v{counter}{ext}"
            new_output_path = os.path.join(docs_dir, new_filename)
            if not os.path.exists(new_output_path):
                output_path = new_output_path
                break
            counter += 1

    # Adiciona o próprio arquivo de saída à lista de ignorados
    IGNORE_FILES.add(os.path.basename(output_path))

    if not os.path.exists(target_path):
        print(f"Erro: O caminho '{target_path}' não existe.")
        sys.exit(1)

    if not os.path.isdir(target_path):
        print(f"Erro: O caminho '{target_path}' não é um diretório.")
        sys.exit(1)

    # Lógica Principal

    # 1. Modo Terminal (-t): Apenas imprime a árvore e sai.
    if args.terminal:
        tree_lines = generate_tree_recursive(target_path, "", IGNORE_DIRS, IGNORE_FILES)
        print(os.path.basename(target_path))
        print("\n".join(tree_lines))
        sys.exit(0)

    # 2. Modo Arquivo (Default ou -n): Gera PROJECT_DOCS.md
    print(f"Gerando documentação para: {target_path}")
    print(f"Arquivo de saída: {output_path}")

    if args.no_content:
        print("Modo: Apenas Estrutura (Conteúdo ignorado)")
    else:
        print("Modo: Completo (Estrutura + Conteúdo)")

    print("Gerando estrutura de árvore...")
    tree_lines = generate_tree_recursive(target_path, "", IGNORE_DIRS, IGNORE_FILES)

    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Documentação do Projeto\n\n")
            f.write(f"> Gerado automaticamente em {datetime.datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n")
            f.write(f"> Caminho documentado: `{target_path}`\n\n")

            f.write("## Estrutura de Arquivos\n\n")
            f.write("```text\n")
            f.write(os.path.basename(target_path) + "\n")
            f.write("\n".join(tree_lines))
            f.write("\n```\n\n")

            # Se NÃO tiver a flag --no-content, escreve o conteúdo
            if not args.no_content:
                f.write("## Conteúdo dos Arquivos\n")
                print("Escrevendo conteúdo dos arquivos...")

                file_count = 0
                for root, dirs, files in os.walk(target_path):
                    dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
                    files = sorted([f for f in files if f not in IGNORE_FILES])

                    for file in files:
                        file_path = os.path.join(root, file)
                        # Ignora o próprio arquivo de saída se estiver no caminho
                        if os.path.abspath(file_path) == os.path.abspath(output_path): continue

                        rel_path = os.path.relpath(file_path, target_path)

                        f.write(f"\n## {rel_path}\n\n")

                        ext = os.path.splitext(file)[1].lower().lstrip('.')
                        lang = EXT_MAP.get(ext, ext)

                        f.write(f"```{lang}\n")

                        if is_binary(file_path):
                            f.write("*(Arquivo binário ou ilegível)*\n")
                        else:
                            try:
                                with open(file_path, 'r', encoding='utf-8', errors='replace') as source:
                                    f.write(source.read())
                            except Exception as e:
                                f.write(f"*(Erro ao ler arquivo: {e})*\n")

                        f.write("\n```\n")
                        file_count += 1
                print(f"Concluído! {file_count} arquivos documentados.")
            else:
                print("Concluído! Apenas estrutura gerada.")

    except PermissionError:
        print(f"Erro: Permissão negada ao escrever em {output_path}")
        sys.exit(1)
    except Exception as e:
        print(f"Erro inesperado: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

````

## scripts\generate-theme.ts

```typescript
import type { Colord } from 'colord'
import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

extend([mixPlugin])

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const THEMES = [
  { name: 'midnight-kimchi', color: '#ED4B00', label: 'Midnight Kimchi' },
  { name: 'black-gold', color: '#FCA311', label: 'Black & Gold' },
  { name: 'mirage-blaze', color: '#FF5B04', label: 'Mirage Blaze' },
  { name: 'contrast-orange', color: '#FF7124', label: 'Modern Contrast' },
  { name: 'monochromatic-blue', color: '#0A4174', label: 'Mono Blue' },
  { name: 'sunset-dusk', color: '#F43F5E', label: 'Sunset Dusk' },
  { name: 'tropical', color: '#10B981', label: 'Tropical Rainbow' },
]

const TARGET_FILE_INDEX = path.resolve(__dirname, '../src/index.css')
const TARGET_FILE_THEMES = path.resolve(__dirname, '../src/styles/themes.css')

// 1. Parse Arguments (npm run theme:update #HexCode)
// If argument provided, update default index.css.
const baseColorInput = process.argv[2]
const runDefaultUpdate = !!baseColorInput

if (runDefaultUpdate) {
  if (!colord(baseColorInput).isValid()) {
    console.error('Invalid color format. Please use HEX, RGB, or HSL.')
    process.exit(1)
  }
  console.log(`🎨 Updating Default Theme (index.css) base: ${baseColorInput}`)
} else {
  console.log(
    `🎨 Generating Multi-Theme System (themes.css) from ${String(THEMES.length)} presets...`
  )
}

// 2. Generator Functions
function getHslString(color: Colord): string {
  const { h, s, l } = color.toHsl()
  // Round human-friendly
  return `${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%`
}

function generatePalette(baseColor: Colord) {
  const primitives: Record<number, string> = {}

  // Lighter (50-400)
  primitives[50] = getHslString(baseColor.mix('#ffffff', 0.95))
  primitives[100] = getHslString(baseColor.mix('#ffffff', 0.9))
  primitives[200] = getHslString(baseColor.mix('#ffffff', 0.8))
  primitives[300] = getHslString(baseColor.mix('#ffffff', 0.6))
  primitives[400] = getHslString(baseColor.mix('#ffffff', 0.4))

  // Base
  primitives[500] = getHslString(baseColor)

  // Darker (600-950)
  primitives[600] = getHslString(baseColor.mix('#000000', 0.1))
  primitives[700] = getHslString(baseColor.mix('#000000', 0.2)) // Less aggressive darkening
  primitives[800] = getHslString(baseColor.mix('#000000', 0.4))
  primitives[900] = getHslString(baseColor.mix('#000000', 0.6))
  primitives[950] = getHslString(baseColor.mix('#000000', 0.8))

  return primitives
}

function generateCssBlock(baseColor: Colord, selector: string, isDefault = false): string {
  const palette = generatePalette(baseColor)
  const indent = isDefault ? '    ' : '  '

  /*
   * TINTED NEUTRALS STRATEGY
   * Instead of hardcoded Zinc (240), we mix the Brand Color with White/Black
   * to create harmonious grays.
   */

  // Light Mode Neutrals
  const lightBg = colord('#ffffff').toHsl()
  const lightFg = baseColor.mix('#000000', 0.9).toHsl() // Black with hint of brand

  const lightCard = colord('#ffffff').toHsl()
  const lightCardFg = lightFg

  const lightMuted = baseColor.mix('#ffffff', 0.9).toHsl() // Very light brand tint
  const lightMutedFg = baseColor.mix('#000000', 0.6).toHsl()

  const lightAccent = baseColor.mix('#ffffff', 0.93).toHsl() // Subtle hover
  const lightAccentFg = baseColor.mix('#000000', 0.8).toHsl()

  const lightBorder = baseColor.mix('#ffffff', 0.85).toHsl() // Visible border, tinted
  const lightInput = baseColor.mix('#ffffff', 0.85).toHsl()

  // Dark Mode Neutrals
  const darkBg = baseColor.mix('#000000', 0.95).toHsl() // Almost black, tinted
  const darkFg = colord('#ffffff').toHsl()

  const darkCard = baseColor.mix('#000000', 0.92).toHsl()
  const darkCardFg = colord('#ffffff').toHsl()

  const darkMuted = baseColor.mix('#000000', 0.7).toHsl() // Muted styling
  const darkMutedFg = baseColor.mix('#ffffff', 0.7).toHsl()

  const darkAccent = baseColor.mix('#000000', 0.75).toHsl() // Richer hover
  const darkAccentFg = colord('#ffffff').toHsl()

  const darkBorder = baseColor.mix('#000000', 0.8).toHsl()
  const darkInput = baseColor.mix('#000000', 0.8).toHsl()

  /* Sidebar (Light) - HIGH CONTRAST STRATEGY */
  // We want a Deep Brand background for the sidebar in light mode (e.g. Navy, typically brand-900/950)
  // This solves the 'everything is white' complaint.
  const lightSidebarBg = baseColor.mix('#000000', 0.85).toHsl() // Very dark version of brand
  const lightSidebarFg = colord('#ffffff').mix(baseColor.toHex(), 0.1).toHsl() // White with tiny tint

  // Sidebar Accent (Hover) - Slightly lighter than BG
  const lightSidebarAccent = baseColor.mix('#000000', 0.75).toHsl()
  const lightSidebarAccentFg = colord('#ffffff').toHsl()

  // Sidebar Primary (Active Item) - The main Brand Color or bright variant
  const lightSidebarPrimary = baseColor.toHsl()
  const lightSidebarPrimaryFg = colord('#ffffff').toHsl()

  // Sidebar Border - Low contrast against deep bg
  const lightSidebarBorder = baseColor.mix('#000000', 0.8).toHsl()

  /* Sidebar (Dark) - COORDINATED STRATEGY */
  // In dark mode, we keep it dark but maybe slightly different tone
  const darkSidebarBg = baseColor.mix('#000000', 0.95).toHsl() // Almost black
  const darkSidebarFg = colord('#ffffff').mix(baseColor.toHex(), 0.05).toHsl()

  // Sidebar Accent (Hover)
  const darkSidebarAccent = baseColor.mix('#000000', 0.8).toHsl()
  const darkSidebarAccentFg = colord('#ffffff').toHsl()

  const darkSidebarPrimary = baseColor.toHsl()
  const darkSidebarPrimaryFg = colord('#ffffff').toHsl()

  const darkSidebarBorder = baseColor.mix('#000000', 0.9).toHsl()

  // Helper
  const toHsl = (c: { h: number; s: number; l: number }) =>
    `${c.h.toFixed(1)} ${c.s.toFixed(1)}% ${c.l.toFixed(1)}%`

  let css = ''
  if (isDefault) css += `:root {\n`
  else css += `${selector} {\n`

  css += `
${indent}/* Generated Primitives */
${indent}--brand-50: ${palette[50]};
${indent}--brand-100: ${palette[100]};
${indent}--brand-200: ${palette[200]};
${indent}--brand-300: ${palette[300]};
${indent}--brand-400: ${palette[400]};
${indent}--brand-500: ${palette[500]};
${indent}--brand-600: ${palette[600]};
${indent}--brand-700: ${palette[700]};
${indent}--brand-800: ${palette[800]};
${indent}--brand-900: ${palette[900]};
${indent}--brand-950: ${palette[950]};

${indent}/* Light Mode Semantics */
${indent}--background: ${toHsl(lightBg)};
${indent}--foreground: ${toHsl(lightFg)};

${indent}--card: ${toHsl(lightCard)};
${indent}--card-foreground: ${toHsl(lightCardFg)};
${indent}--popover: ${toHsl(lightCard)};
${indent}--popover-foreground: ${toHsl(lightCardFg)};

${indent}--primary: var(--brand-600);
${indent}--primary-foreground: 0 0% 98%;

${indent}--secondary: ${toHsl(lightMuted)};
${indent}--secondary-foreground: ${toHsl(lightMutedFg)};
${indent}--muted: ${toHsl(lightMuted)};
${indent}--muted-foreground: ${toHsl(lightMutedFg)};
${indent}--accent: ${toHsl(lightAccent)};
${indent}--accent-foreground: ${toHsl(lightAccentFg)};

${indent}--destructive: 0 84.2% 60.2%;
${indent}--destructive-foreground: 0 0% 98%;

${indent}--border: ${toHsl(lightBorder)};
${indent}--input: ${toHsl(lightInput)};
${indent}--ring: var(--brand-600);
${indent}--radius: 0.5rem;

${indent}/* Sidebar (Light) - High Contrast */
${indent}--sidebar-background: ${toHsl(lightSidebarBg)};
${indent}--sidebar-foreground: ${toHsl(lightSidebarFg)};
${indent}--sidebar-primary: ${toHsl(lightSidebarPrimary)};
${indent}--sidebar-primary-foreground: ${toHsl(lightSidebarPrimaryFg)};
${indent}--sidebar-accent: ${toHsl(lightSidebarAccent)};
${indent}--sidebar-accent-foreground: ${toHsl(lightSidebarAccentFg)};
${indent}--sidebar-border: ${toHsl(lightSidebarBorder)};
${indent}--sidebar-ring: var(--brand-600);

${indent}--chart-1: var(--brand-600);
${indent}--chart-2: var(--brand-500);
${indent}--chart-3: var(--brand-700);
${indent}--chart-4: var(--brand-400);
${indent}--chart-5: var(--brand-800);
`
  if (isDefault) css += `  }\n`
  else css += `}\n`

  // Dark Mode
  if (isDefault) css += `  .dark {\n`
  else css += `.dark${selector}, ${selector}.dark {\n`

  css += `
${indent}/* Dark Mode Semantics */
${indent}--background: ${toHsl(darkBg)};
${indent}--foreground: ${toHsl(darkFg)};

${indent}--card: ${toHsl(darkCard)};
${indent}--card-foreground: ${toHsl(darkCardFg)};
${indent}--popover: ${toHsl(darkCard)};
${indent}--popover-foreground: ${toHsl(darkCardFg)};

${indent}--primary: var(--brand-500);
${indent}--primary-foreground: 0 0% 100%;

${indent}--secondary: ${toHsl(darkMuted)};
${indent}--secondary-foreground: ${toHsl(darkMutedFg)};
${indent}--muted: ${toHsl(darkMuted)};
${indent}--muted-foreground: ${toHsl(darkMutedFg)};
${indent}--accent: ${toHsl(darkAccent)};
${indent}--accent-foreground: ${toHsl(darkAccentFg)};

${indent}--destructive: 0 62.8% 30.6%;
${indent}--destructive-foreground: 0 0% 98%;

${indent}--border: ${toHsl(darkBorder)};
${indent}--input: ${toHsl(darkInput)};
${indent}--ring: var(--brand-500);

${indent}/* Sidebar (Dark) */
${indent}--sidebar-background: ${toHsl(darkSidebarBg)};
${indent}--sidebar-foreground: ${toHsl(darkSidebarFg)};
${indent}--sidebar-primary: ${toHsl(darkSidebarPrimary)};
${indent}--sidebar-primary-foreground: ${toHsl(darkSidebarPrimaryFg)};
${indent}--sidebar-accent: ${toHsl(darkSidebarAccent)};
${indent}--sidebar-accent-foreground: ${toHsl(darkSidebarAccentFg)};
${indent}--sidebar-border: ${toHsl(darkSidebarBorder)};
${indent}--sidebar-ring: var(--brand-500);

${indent}--chart-1: var(--brand-500);
${indent}--chart-2: var(--brand-400);
${indent}--chart-3: var(--brand-600);
${indent}--chart-4: var(--brand-300);
${indent}--chart-5: var(--brand-700);
`
  if (isDefault) css += `  }\n`
  else css += `}\n`

  return css
}

// 3. Execution Logic
if (runDefaultUpdate) {
  // Only update index.css
  const base = colord(baseColorInput)
  const cssBody = generateCssBlock(base, '', true)

  const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {

${cssBody}

}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`
  fs.writeFileSync(TARGET_FILE_INDEX, cssContent)
  console.log('✅ Default Theme updated successfully in src/index.css')
} else {
  // Generate themes.css with ALL presets
  let themeCssContent = '/* Auto-generated by scripts/generate-theme.ts */\n\n'

  THEMES.forEach((theme) => {
    console.log(`Processing theme: ${theme.label}`)
    const base = colord(theme.color)
    themeCssContent += `/** Theme: ${theme.label} */\n`
    themeCssContent += generateCssBlock(base, `[data-theme="${theme.name}"]`, false)
    themeCssContent += '\n'
  })

  fs.writeFileSync(TARGET_FILE_THEMES, themeCssContent)
  console.log(`✅ Generated ${String(THEMES.length)} themes in src/styles/themes.css`)
}
```

## scripts\log_lint.ps1

```powershell
$logFile = ".agent/lint_history.txt"
$date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$header = "`n----------------------------------------`n[LINT RUN] $date`n----------------------------------------`n"

# Ensure directory exists
if (!(Test-Path ".agent")) { New-Item -ItemType Directory -Path ".agent" | Out-Null }

# Add Header
Add-Content -Path $logFile -Value $header

# Run ESLint (no color for clean logs), Tee to console and Append to file
Write-Host "Running ESLint and logging to $logFile..."
npx eslint . --no-color | Tee-Object -FilePath $logFile -Append

# Run Prettier Check (optional, but requested "ESLint and Prettier errors")
$prettierHeader = "`n[PRETTIER CHECK]`n"
Add-Content -Path $logFile -Value $prettierHeader
npx prettier --check . --no-color 2>&1 | Tee-Object -FilePath $logFile -Append

```

## src\App.tsx

```tsx
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { AppRoutes } from '@/app/router'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  )
}
```

## src\index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* -------------------------------------------------------------------------- */
    /*                                 PRIMITIVES                                 */
    /* -------------------------------------------------------------------------- */
    /* Generated from #3b82f6 */

    --brand-50: 230 96% 98%;
    --brand-100: 230 96% 97%;
    --brand-200: 229 94% 90%;
    --brand-300: 227 93% 83%;
    --brand-400: 223 92% 73%;
    --brand-500: 217 91% 60%;
    --brand-600: 218 69% 54%;
    --brand-700: 219 54% 42%;
    --brand-800: 221 48% 30%;
    --brand-900: 223 40% 19%;
    --brand-950: 226 30% 11%;

    /* Neutrals (Zinc-like) - Hardcoded for consistency */
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    /* -------------------------------------------------------------------------- */
    /*                                 SEMANTICS                                  */
    /* -------------------------------------------------------------------------- */

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    /* Primary maps to Brand-600 for contrast on white */
    --primary: var(--brand-600);
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    /* Charts - Generated from Brand Split/Analagous or Standard */
    --chart-1: var(--brand-600);
    --chart-2: var(--brand-500);
    --chart-3: var(--brand-700);
    --chart-4: var(--brand-400);
    --chart-5: var(--brand-800);

    --radius: 0.5rem;
  }

  /* -------------------------------------------------------------------------- */
  /*                                 DARK MODE                                  */
  /* -------------------------------------------------------------------------- */
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: var(--brand-500);
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: var(--brand-500);

    --chart-1: var(--brand-500);
    --chart-2: var(--brand-400);
    --chart-3: var(--brand-600);
    --chart-4: var(--brand-300);
    --chart-5: var(--brand-700);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
}

/* Sidebar Specifics (Synced to theme or independent) */
:root {
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: var(--brand-600);
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: var(--brand-600);
}

.dark {
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 240 4.8% 95.9%;
  --sidebar-primary: var(--brand-500);
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 240 4.8% 95.9%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: var(--brand-500);
}
```

## src\main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import './styles/themes.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## src\app\components\AppSidebar.tsx

```tsx
'use client'

import * as React from 'react'
import { BookOpen, Settings2, SquareTerminal, User, Users } from 'lucide-react'

import { NavMain } from '@/shared/components/nav-main'
import { NavUser } from '@/shared/components/nav-user'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/shared/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'Admin User',
    email: 'admin@wizped.com',
    avatar: '',
  },
  teams: [
    {
      name: 'Wizped',
      logo: BookOpen,
      plan: 'Gestão Escolar',
    },
  ],
  navMain: [
    {
      title: 'Gestão',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Estudantes',
          url: '/estudantes',
          icon: Users,
        },
        {
          title: 'Usuários',
          url: '/users',
          icon: User,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Configurações',
      url: '/settings',
      icon: Settings2,
      items: [
        {
          title: 'Geral',
          url: '/settings',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const activeTeam = data.teams[0]
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="pointer-events-none data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 overflow-hidden text-left text-sm leading-tight transition-[width,opacity,margin] duration-200 ease-in-out group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
                <span className="truncate font-semibold">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
```

## src\app\components\team-switcher.tsx

```tsx
'use client'

import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/shared/components/ui/sidebar'

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 overflow-hidden text-left text-sm leading-tight transition-[width,opacity,margin] duration-300 ease-in-out group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => {
                  setActiveTeam(team)
                }}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <team.logo className="size-3.5 shrink-0" />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
```

## src\app\layouts\RootLayout.tsx

```tsx
import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/shared/components/ui/sidebar'
import { AppSidebar } from '@/app/components/AppSidebar'
import { Separator } from '@/shared/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/components/ui/breadcrumb'
import { Fragment } from 'react'

import { useLocation } from 'react-router-dom'

export function RootLayout() {
  const location = useLocation()

  const getBreadcrumbs = (pathname: string): { label: string; href?: string }[] => {
    switch (pathname) {
      case '/':
        return [{ label: 'Dashboard' }]
      case '/estudantes':
        return [{ label: 'Gestão', href: '#' }, { label: 'Estudantes' }]
      case '/users':
        return [{ label: 'Gestão', href: '#' }, { label: 'Usuários' }]
      default:
        // Fallback for nested or unknown routes
        return pathname
          .split('/')
          .filter(Boolean)
          .map((segment) => ({ label: segment.charAt(0).toUpperCase() + segment.slice(1) }))
    }
  }

  const breadcrumbs = getBreadcrumbs(location.pathname)

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 transition-[width] ease-linear">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.length > 0 ? (
                breadcrumbs.map((item, index) => (
                  <Fragment key={index}>
                    <BreadcrumbItem className="hidden md:block">
                      {item.href ? (
                        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </Fragment>
                ))
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>Wizped</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col overflow-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

## src\app\providers\ThemeProvider.tsx

```tsx
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'app-ui-theme',
  ...props
}: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme
  )

  useEffect(() => {
    const root = globalThis.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }),
    [theme, storageKey]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  return context
}
```

## src\app\router\index.tsx

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/app/layouts/RootLayout'
import { DashboardPage } from '@/features/dashboard/components/DashboardPage'
import { EstudantesPage } from '@/features/estudantes/components/EstudantesPage'
import { UsersPage } from '@/features/users/components/UsersPage'
import { SettingsPage } from '@/features/settings/components/SettingsPage'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="estudantes" element={<EstudantesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

## src\features\dashboard\index.ts

```typescript
export * from './components/DashboardPage'
```

## src\features\dashboard\components\DashboardPage.tsx

```tsx
import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Users, GraduationCap } from 'lucide-react'
import { useEstudantesStore } from '@/features/estudantes/stores/estudantes.store'
import { useUsersStore } from '@/features/users/stores/users.store'

import { PageContainer, PageContent, PageHeader } from '@/shared/components/layout/page-layout'

export function DashboardPage() {
  const { estudantes, fetchEstudantes } = useEstudantesStore()
  const { users, fetchUsers } = useUsersStore()

  useEffect(() => {
    void fetchEstudantes()
    void fetchUsers()
  }, [fetchEstudantes, fetchUsers])

  return (
    <PageContainer>
      <PageHeader title="Dashboard" description="Visão geral do sistema" />
      <PageContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Estudantes</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{estudantes.length}</div>
              <p className="text-xs text-muted-foreground">Alunos matriculados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">Professores e Admins</p>
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </PageContainer>
  )
}
```

## src\features\estudantes\index.ts

```typescript
// Feature: Estudantes
// Export public API from this file
```

## src\features\estudantes\components\.gitkeep

```

```

## src\features\estudantes\components\EstudantesPage.tsx

```tsx
import { useEffect, useState } from 'react'
import { useEstudantesStore } from '../stores/estudantes.store'
import { StudentForm } from './StudentForm'
import { StudentList } from './StudentList'
import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Plus } from 'lucide-react'
import type { StudentFormValues } from '../schemas/student.schema'
import type { Student } from '@main/database/schema'
import { PageContainer, PageContent, PageHeader } from '@/shared/components/layout/page-layout'

export function EstudantesPage() {
  const { estudantes, isLoading, fetchEstudantes, createStudent, updateStudent, deleteStudent } =
    useEstudantesStore()
  const [isOpen, setIsOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)

  useEffect(() => {
    void fetchEstudantes()
  }, [fetchEstudantes])

  const handleSubmit = async (data: StudentFormValues) => {
    if (editingStudent) {
      await updateStudent(editingStudent.id, data)
    } else {
      await createStudent(data)
    }
    setIsOpen(false)
    setEditingStudent(null)
  }

  const handleEdit = (student: Student) => {
    setEditingStudent(student)
    setIsOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir este estudante?')) {
      await deleteStudent(id)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) setEditingStudent(null)
  }

  return (
    <PageContainer>
      <PageHeader
        title="Estudantes"
        description="Gerencie os alunos da escola"
        actions={
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Estudante
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{editingStudent ? 'Editar Estudante' : 'Novo Estudante'}</DialogTitle>
              </DialogHeader>
              <StudentForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                defaultValues={
                  editingStudent
                    ? {
                        name: editingStudent.name,
                        book: editingStudent.book ?? '',
                        classTime: editingStudent.classTime ?? '',
                        responsibleName: editingStudent.responsibleName ?? '',
                        phone: editingStudent.phone ?? '',
                        notes: editingStudent.notes ?? '',
                        active: editingStudent.active ?? true,
                      }
                    : undefined
                }
              />
            </DialogContent>
          </Dialog>
        }
      />
      <PageContent>
        <StudentList
          students={estudantes}
          isLoading={isLoading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </PageContent>
    </PageContainer>
  )
}
```

## src\features\estudantes\components\StudentForm.tsx

```tsx
import { useForm, type Resolver, type ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { studentSchema, type StudentFormValues } from '../schemas/student.schema'
import { Button } from '@/shared/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { useEffect } from 'react'

interface StudentFormProps {
  defaultValues?: Partial<StudentFormValues>
  onSubmit: (data: StudentFormValues) => Promise<void>
  isLoading?: boolean
}

export function StudentForm({ defaultValues, onSubmit, isLoading }: StudentFormProps) {
  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema) as Resolver<StudentFormValues>,
    defaultValues: {
      name: '',
      book: '',
      classTime: '',
      responsibleName: '',
      phone: '',
      notes: '',
      active: true,
      ...defaultValues,
    },
  })

  useEffect(() => {
    if (defaultValues) {
      form.reset({ ...defaultValues })
    }
  }, [defaultValues, form])

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          void form.handleSubmit(onSubmit)(e)
        }}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Estudante</FormLabel>
              <FormControl>
                <Input placeholder="Nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="book"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Livro / Nível</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: W2, T8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="classTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horário da Aula</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Seg/Qua 18:00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="responsibleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Responsável</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do responsável" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>
              <FormControl>
                <Textarea placeholder="Anotações gerais..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="active"
          render={({ field }: { field: ControllerRenderProps<StudentFormValues, 'active'> }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Aluno Ativo</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Salvando...' : 'Salvar Estudante'}
        </Button>
      </form>
    </Form>
  )
}
```

## src\features\estudantes\components\StudentList.tsx

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import { Pencil, Trash2, Check, X } from 'lucide-react'
import type { Student } from '@main/database/schema'

interface StudentListProps {
  students: Student[]
  onEdit: (student: Student) => void
  onDelete: (id: string) => void
  isLoading?: boolean
}

export function StudentList({ students, onEdit, onDelete, isLoading }: StudentListProps) {
  if (isLoading) {
    return <div className="p-8 text-center text-muted-foreground">Carregando estudantes...</div>
  }

  if (students.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">Nenhum estudante cadastrado.</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Livro</TableHead>
            <TableHead>Horário</TableHead>
            <TableHead>Ativo</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.book ?? '-'}</TableCell>
              <TableCell>{student.classTime ?? '-'}</TableCell>
              <TableCell>
                {student.active ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      onEdit(student)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive"
                    onClick={() => {
                      onDelete(student.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

## src\features\estudantes\hooks\.gitkeep

```

```

## src\features\estudantes\schemas\estudantes.schema.ts

```typescript
import { z } from 'zod'

export const estudantesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Nome é obrigatório'),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const createEstudantesSchema = estudantesSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const updateEstudantesSchema = createEstudantesSchema.partial()

export type EstudantesFormData = z.infer<typeof createEstudantesSchema>
export type UpdateEstudantesFormData = z.infer<typeof updateEstudantesSchema>
```

## src\features\estudantes\schemas\student.schema.ts

```typescript
import { z } from 'zod'

export const studentSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  book: z.string().optional(),
  classTime: z.string().optional(),
  birthDate: z.string().optional(),
  responsibleName: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
  active: z.boolean().default(true),
})

export type StudentFormValues = z.infer<typeof studentSchema>
```

## src\features\estudantes\services\estudantes.service.ts

```typescript
import type { z } from 'zod'
import { studentSchema } from '../schemas/student.schema'
import type { Student, NewStudent } from '@main/database/schema'

class EstudantesService {
  async getAll(): Promise<Student[]> {
    return await window.electronAPI.invoke('estudantes:getAll')
  }

  async getById(id: string): Promise<Student | null> {
    return await window.electronAPI.invoke('estudantes:getById', id)
  }

  async create(data: z.infer<typeof studentSchema>): Promise<Student> {
    const parsed = studentSchema.parse(data)
    return await window.electronAPI.invoke('estudantes:create', parsed as NewStudent)
  }

  async update(id: string, data: Partial<z.infer<typeof studentSchema>>): Promise<Student> {
    const parsed = studentSchema.partial().parse(data)
    return await window.electronAPI.invoke('estudantes:update', id, parsed as Partial<NewStudent>)
  }

  async delete(id: string): Promise<boolean> {
    return await window.electronAPI.invoke('estudantes:delete', id)
  }
}

export const estudantesService = new EstudantesService()
```

## src\features\estudantes\stores\estudantes.store.ts

```typescript
import { create } from 'zustand'
import { estudantesService } from '../services/estudantes.service'
import type { Student } from '@main/database/schema'
import type { StudentFormValues } from '../schemas/student.schema'

interface EstudantesState {
  estudantes: Student[]
  isLoading: boolean
  error: string | null

  fetchEstudantes: () => Promise<void>
  createStudent: (data: StudentFormValues) => Promise<void>
  updateStudent: (id: string, data: Partial<StudentFormValues>) => Promise<void>
  deleteStudent: (id: string) => Promise<void>
}

export const useEstudantesStore = create<EstudantesState>((set, get) => ({
  estudantes: [],
  isLoading: false,
  error: null,

  fetchEstudantes: async () => {
    set({ isLoading: true, error: null })
    try {
      const estudantes = await estudantesService.getAll()
      set({ estudantes, isLoading: false })
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  createStudent: async (data: StudentFormValues) => {
    set({ isLoading: true, error: null })
    try {
      await estudantesService.create(data)
      await get().fetchEstudantes()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  updateStudent: async (id: string, data: Partial<StudentFormValues>) => {
    set({ isLoading: true, error: null })
    try {
      await estudantesService.update(id, data)
      await get().fetchEstudantes()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  deleteStudent: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      await estudantesService.delete(id)
      await get().fetchEstudantes()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },
}))
```

## src\features\settings\components\SettingsPage.tsx

```tsx
import { PageContainer, PageHeader, PageContent } from '@/shared/components/layout/page-layout'
import { useThemeStore } from '@/shared/stores/theme.store'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Check, Moon, Sun, Laptop } from 'lucide-react'

// Duplicate from theme-switcher, ideal to extract to shared constant file
const THEMES = [
  { id: 'default', label: 'Default (Blue)', color: '#3b82f6' },
  { id: 'midnight-kimchi', label: 'Midnight Kimchi', color: '#ED4B00' },
  { id: 'black-gold', label: 'Black & Gold', color: '#FCA311' },
  { id: 'mirage-blaze', label: 'Mirage Blaze', color: '#FF5B04' },
  { id: 'contrast-orange', label: 'Modern Contrast', color: '#FF7124' },
  { id: 'monochromatic-blue', label: 'Mono Blue', color: '#0A4174' },
  { id: 'sunset-dusk', label: 'Sunset Dusk', color: '#F43F5E' },
  { id: 'tropical', label: 'Tropical', color: '#10B981' },
] as const

export function SettingsPage() {
  const { theme, setTheme } = useThemeStore()
  const { theme: mode, setTheme: setMode } = useTheme()

  return (
    <PageContainer>
      <PageHeader title="Configurações" description="Gerencie as preferências da sua aplicação." />
      <PageContent>
        <div className="space-y-8">
          {/* Mode Selection */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Modo</h3>
              <p className="text-sm text-muted-foreground">
                Escolha o modo de exibição (Claro, Escuro ou Sistema).
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:max-w-md">
              <div
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50 ${mode === 'light' ? 'border-primary bg-muted' : 'border-transparent bg-card'} `}
                onClick={() => {
                  setMode('light')
                }}
              >
                <Sun className="h-6 w-6" />
                <span className="text-sm font-medium">Claro</span>
              </div>
              <div
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50 ${mode === 'dark' ? 'border-primary bg-muted' : 'border-transparent bg-card'} `}
                onClick={() => {
                  setMode('dark')
                }}
              >
                <Moon className="h-6 w-6" />
                <span className="text-sm font-medium">Escuro</span>
              </div>
              <div
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50 ${mode === 'system' ? 'border-primary bg-muted' : 'border-transparent bg-card'} `}
                onClick={() => {
                  setMode('system')
                }}
              >
                <Laptop className="h-6 w-6" />
                <span className="text-sm font-medium">Sistema</span>
              </div>
            </div>
          </section>

          {/* Theme Selection */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Tema de Cores</h3>
              <p className="text-sm text-muted-foreground">
                Selecione a paleta de cores principal. (Experimente no modo Claro e Escuro!)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {THEMES.map((item) => {
                const isActive = theme === item.id
                return (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer rounded-xl border-2 p-1 transition-all ${isActive ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border'} `}
                    onClick={() => {
                      setTheme(item.id)
                    }}
                  >
                    <div className="space-y-2 overflow-hidden rounded-lg border bg-card p-4">
                      {/* ... existing card content ... */}
                      <div className="flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-full shadow-sm"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="text-sm font-semibold">{item.label}</div>
                      </div>
                      <div className="space-y-1 opacity-50">
                        <div className="h-2 w-full rounded-full bg-muted" />
                        <div className="h-2 w-2/3 rounded-full bg-muted" />
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </PageContent>
    </PageContainer>
  )
}
```

## src\features\users\index.ts

```typescript
export * from './stores/user.store'
export * from './schemas/user.schema'
export * from './services/user.service'
```

## src\features\users\components\UserForm.tsx

```tsx
import { useForm, type Resolver, type ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, type UserFormValues } from '../schemas/user.schema'
import { Button } from '@/shared/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { useEffect } from 'react'

interface UserFormProps {
  defaultValues?: Partial<UserFormValues>
  onSubmit: (data: UserFormValues) => Promise<void>
  isLoading?: boolean
}

export function UserForm({ defaultValues, onSubmit, isLoading }: UserFormProps) {
  const form = useForm<UserFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    resolver: zodResolver(userSchema) as Resolver<UserFormValues>,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'teacher' as const,
      ...defaultValues,
    },
  })

  // Reset form when defaultValues change (editing mode)
  useEffect(() => {
    if (defaultValues) {
      form.reset({ ...defaultValues })
    }
  }, [defaultValues, form])

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          void form.handleSubmit(onSubmit)(e)
        }}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do usuário" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }: { field: ControllerRenderProps<UserFormValues, 'role'> }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma função" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="teacher">Professor</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Salvando...' : 'Salvar Usuário'}
        </Button>
      </form>
    </Form>
  )
}
```

## src\features\users\components\UserList.tsx

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import { Pencil, Trash2 } from 'lucide-react'
import type { User } from '@main/database/schema'

interface UserListProps {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (id: string) => void
  isLoading?: boolean
}

export function UserList({ users, onEdit, onDelete, isLoading }: UserListProps) {
  if (isLoading) {
    return <div className="p-8 text-center text-muted-foreground">Carregando usuários...</div>
  }

  if (users.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">Nenhum usuário cadastrado.</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Função</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  {user.role === 'admin' ? 'Admin' : 'Professor'}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      onEdit(user)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive"
                    onClick={() => {
                      onDelete(user.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

## src\features\users\components\UsersPage.tsx

```tsx
import { useEffect, useState } from 'react'
import { useUsersStore } from '../stores/users.store'
import { UserForm } from './UserForm'
import { UserList } from './UserList'
import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Plus } from 'lucide-react'
import type { UserFormValues } from '../schemas/user.schema'
import type { User } from '@main/database/schema'
import { PageContainer, PageContent, PageHeader } from '@/shared/components/layout/page-layout'

export function UsersPage() {
  const { users, isLoading, fetchUsers, createUser, updateUser, deleteUser } = useUsersStore()
  const [isOpen, setIsOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  useEffect(() => {
    void fetchUsers()
  }, [fetchUsers])

  const handleSubmit = async (data: UserFormValues) => {
    if (editingUser) {
      await updateUser(editingUser.id, data)
    } else {
      await createUser(data)
    }
    setIsOpen(false)
    setEditingUser(null)
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setIsOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      await deleteUser(id)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) setEditingUser(null)
  }

  return (
    <PageContainer>
      <PageHeader
        title="Usuários"
        description="Gerencie os usuários do sistema"
        actions={
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Usuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingUser ? 'Editar Usuário' : 'Novo Usuário'}</DialogTitle>
              </DialogHeader>
              <UserForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                defaultValues={
                  editingUser
                    ? {
                        name: editingUser.name,
                        email: editingUser.email ?? '',
                        role: editingUser.role as 'teacher' | 'admin',
                      }
                    : undefined
                }
              />
            </DialogContent>
          </Dialog>
        }
      />
      <PageContent>
        <UserList users={users} isLoading={isLoading} onEdit={handleEdit} onDelete={handleDelete} />
      </PageContent>
    </PageContainer>
  )
}
```

## src\features\users\schemas\user.schema.ts

```typescript
import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  role: z.enum(['teacher', 'admin']).default('teacher'),
})

export type UserFormValues = z.infer<typeof userSchema>
```

## src\features\users\services\user.service.ts

```typescript
import type { User, NewUser } from '../../../../electron/main/database/schema'

export const userService = {
  async getAll(): Promise<User[]> {
    return window.electronAPI.invoke('users:getAll')
  },

  async getById(id: string): Promise<User | null> {
    return window.electronAPI.invoke('users:getById', id)
  },

  async create(data: NewUser): Promise<User> {
    return window.electronAPI.invoke('users:create', data)
  },

  async update(id: string, data: Partial<NewUser>): Promise<User> {
    return window.electronAPI.invoke('users:update', id, data)
  },

  async delete(id: string): Promise<boolean> {
    return window.electronAPI.invoke('users:delete', id)
  },
}
```

## src\features\users\services\users.service.ts

```typescript
import type { z } from 'zod'
import { userSchema } from '../schemas/user.schema'
import type { User, NewUser } from '@main/database/schema'

class UsersService {
  async getAll(): Promise<User[]> {
    return await window.electronAPI.invoke('users:getAll')
  }

  async getById(id: string): Promise<User | null> {
    return await window.electronAPI.invoke('users:getById', id)
  }

  async create(data: z.infer<typeof userSchema>): Promise<User> {
    const parsed = userSchema.parse(data)
    // Cast to NewUser because schemas might differ slightly in ID/dates handling during creation
    return await window.electronAPI.invoke('users:create', parsed as NewUser)
  }

  async update(id: string, data: Partial<z.infer<typeof userSchema>>): Promise<User> {
    const parsed = userSchema.partial().parse(data)
    return await window.electronAPI.invoke('users:update', id, parsed as Partial<NewUser>)
  }

  async delete(id: string): Promise<boolean> {
    return await window.electronAPI.invoke('users:delete', id)
  }
}

export const usersService = new UsersService()
```

## src\features\users\stores\user.store.ts

```typescript
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User } from '../../../../electron/main/database/schema'

interface UserState {
  users: User[]
  selectedUser: User | null
  isLoading: boolean
  error: string | null
}

interface UserActions {
  setUsers: (users: User[]) => void
  setSelectedUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  fetchUsers: () => Promise<void>
  reset: () => void
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
}

export const useUserStore = create<UserState & UserActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setUsers: (users) => {
          set({ users })
        },
        setSelectedUser: (user) => {
          set({ selectedUser: user })
        },
        setLoading: (isLoading) => {
          set({ isLoading })
        },
        setError: (error) => {
          set({ error })
        },

        fetchUsers: async () => {
          set({ isLoading: true, error: null })
          try {
            const users = await window.electronAPI.invoke('users:getAll')
            set({ users, isLoading: false })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : 'Unknown error',
              isLoading: false,
            })
          }
        },

        reset: () => {
          set(initialState)
        },
      }),
      { name: 'user-store' }
    ),
    { name: 'UserStore' }
  )
)
```

## src\features\users\stores\users.store.ts

```typescript
import { create } from 'zustand'
import { usersService } from '../services/users.service'
import type { User } from '@main/database/schema'
import type { UserFormValues } from '../schemas/user.schema'

interface UsersState {
  users: User[]
  isLoading: boolean
  error: string | null

  fetchUsers: () => Promise<void>
  createUser: (data: UserFormValues) => Promise<void>
  updateUser: (id: string, data: Partial<UserFormValues>) => Promise<void>
  deleteUser: (id: string) => Promise<void>
}

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null })
    try {
      const users = await usersService.getAll()
      set({ users, isLoading: false })
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  createUser: async (data: UserFormValues) => {
    set({ isLoading: true, error: null })
    try {
      await usersService.create(data)
      await get().fetchUsers()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  updateUser: async (id: string, data: Partial<UserFormValues>) => {
    set({ isLoading: true, error: null })
    try {
      await usersService.update(id, data)
      await get().fetchUsers()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  deleteUser: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      await usersService.delete(id)
      await get().fetchUsers()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },
}))
```

## src\shared\components\chart-area-interactive.tsx

```tsx
'use client'

import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/shared/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/ui/toggle-group'

export const description = 'An interactive area chart'

const chartData = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 97, mobile: 180 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 242, mobile: 260 },
  { date: '2024-04-05', desktop: 373, mobile: 290 },
  { date: '2024-04-06', desktop: 301, mobile: 340 },
  { date: '2024-04-07', desktop: 245, mobile: 180 },
  { date: '2024-04-08', desktop: 409, mobile: 320 },
  { date: '2024-04-09', desktop: 59, mobile: 110 },
  { date: '2024-04-10', desktop: 261, mobile: 190 },
  { date: '2024-04-11', desktop: 327, mobile: 350 },
  { date: '2024-04-12', desktop: 292, mobile: 210 },
  { date: '2024-04-13', desktop: 342, mobile: 380 },
  { date: '2024-04-14', desktop: 137, mobile: 220 },
  { date: '2024-04-15', desktop: 120, mobile: 170 },
  { date: '2024-04-16', desktop: 138, mobile: 190 },
  { date: '2024-04-17', desktop: 446, mobile: 360 },
  { date: '2024-04-18', desktop: 364, mobile: 410 },
  { date: '2024-04-19', desktop: 243, mobile: 180 },
  { date: '2024-04-20', desktop: 89, mobile: 150 },
  { date: '2024-04-21', desktop: 137, mobile: 200 },
  { date: '2024-04-22', desktop: 224, mobile: 170 },
  { date: '2024-04-23', desktop: 138, mobile: 230 },
  { date: '2024-04-24', desktop: 387, mobile: 290 },
  { date: '2024-04-25', desktop: 215, mobile: 250 },
  { date: '2024-04-26', desktop: 75, mobile: 130 },
  { date: '2024-04-27', desktop: 383, mobile: 420 },
  { date: '2024-04-28', desktop: 122, mobile: 180 },
  { date: '2024-04-29', desktop: 315, mobile: 240 },
  { date: '2024-04-30', desktop: 454, mobile: 380 },
  { date: '2024-05-01', desktop: 165, mobile: 220 },
  { date: '2024-05-02', desktop: 293, mobile: 310 },
  { date: '2024-05-03', desktop: 247, mobile: 190 },
  { date: '2024-05-04', desktop: 385, mobile: 420 },
  { date: '2024-05-05', desktop: 481, mobile: 390 },
  { date: '2024-05-06', desktop: 498, mobile: 520 },
  { date: '2024-05-07', desktop: 388, mobile: 300 },
  { date: '2024-05-08', desktop: 149, mobile: 210 },
  { date: '2024-05-09', desktop: 227, mobile: 180 },
  { date: '2024-05-10', desktop: 293, mobile: 330 },
  { date: '2024-05-11', desktop: 335, mobile: 270 },
  { date: '2024-05-12', desktop: 197, mobile: 240 },
  { date: '2024-05-13', desktop: 197, mobile: 160 },
  { date: '2024-05-14', desktop: 448, mobile: 490 },
  { date: '2024-05-15', desktop: 473, mobile: 380 },
  { date: '2024-05-16', desktop: 338, mobile: 400 },
  { date: '2024-05-17', desktop: 499, mobile: 420 },
  { date: '2024-05-18', desktop: 315, mobile: 350 },
  { date: '2024-05-19', desktop: 235, mobile: 180 },
  { date: '2024-05-20', desktop: 177, mobile: 230 },
  { date: '2024-05-21', desktop: 82, mobile: 140 },
  { date: '2024-05-22', desktop: 81, mobile: 120 },
  { date: '2024-05-23', desktop: 252, mobile: 290 },
  { date: '2024-05-24', desktop: 294, mobile: 220 },
  { date: '2024-05-25', desktop: 201, mobile: 250 },
  { date: '2024-05-26', desktop: 213, mobile: 170 },
  { date: '2024-05-27', desktop: 420, mobile: 460 },
  { date: '2024-05-28', desktop: 233, mobile: 190 },
  { date: '2024-05-29', desktop: 78, mobile: 130 },
  { date: '2024-05-30', desktop: 340, mobile: 280 },
  { date: '2024-05-31', desktop: 178, mobile: 230 },
  { date: '2024-06-01', desktop: 178, mobile: 200 },
  { date: '2024-06-02', desktop: 470, mobile: 410 },
  { date: '2024-06-03', desktop: 103, mobile: 160 },
  { date: '2024-06-04', desktop: 439, mobile: 380 },
  { date: '2024-06-05', desktop: 88, mobile: 140 },
  { date: '2024-06-06', desktop: 294, mobile: 250 },
  { date: '2024-06-07', desktop: 323, mobile: 370 },
  { date: '2024-06-08', desktop: 385, mobile: 320 },
  { date: '2024-06-09', desktop: 438, mobile: 480 },
  { date: '2024-06-10', desktop: 155, mobile: 200 },
  { date: '2024-06-11', desktop: 92, mobile: 150 },
  { date: '2024-06-12', desktop: 492, mobile: 420 },
  { date: '2024-06-13', desktop: 81, mobile: 130 },
  { date: '2024-06-14', desktop: 426, mobile: 380 },
  { date: '2024-06-15', desktop: 307, mobile: 350 },
  { date: '2024-06-16', desktop: 371, mobile: 310 },
  { date: '2024-06-17', desktop: 475, mobile: 520 },
  { date: '2024-06-18', desktop: 107, mobile: 170 },
  { date: '2024-06-19', desktop: 341, mobile: 290 },
  { date: '2024-06-20', desktop: 408, mobile: 450 },
  { date: '2024-06-21', desktop: 169, mobile: 210 },
  { date: '2024-06-22', desktop: 317, mobile: 270 },
  { date: '2024-06-23', desktop: 480, mobile: 530 },
  { date: '2024-06-24', desktop: 132, mobile: 180 },
  { date: '2024-06-25', desktop: 141, mobile: 190 },
  { date: '2024-06-26', desktop: 434, mobile: 380 },
  { date: '2024-06-27', desktop: 448, mobile: 490 },
  { date: '2024-06-28', desktop: 149, mobile: 200 },
  { date: '2024-06-29', desktop: 103, mobile: 160 },
  { date: '2024-06-30', desktop: 446, mobile: 400 },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
    color: 'var(--primary)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--primary)',
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState('90d')

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date('2024-06-30')
    let daysToSubtract = 90
    if (timeRange === '30d') {
      daysToSubtract = 30
    } else if (timeRange === '7d') {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">Total for the last 3 months</span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden *:data-[slot=toggle-group-item]:!px-4"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="**:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden flex w-40"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value as string | number | Date)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value as string | number | Date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

## src\shared\components\data-table.tsx

```tsx
import * as React from 'react'
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { IconChevronDown } from '@tabler/icons-react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter..."
          value={(table.getColumn('email')?.getFilterValue() as string | undefined) ?? ''}
          onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <IconChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => {
                      column.toggleVisibility(value)
                    }}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.previousPage()
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.nextPage()
            }}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
```

## src\shared\components\nav-documents.tsx

```tsx
'use client'

import { IconDots, IconFolder, IconShare3, IconTrash, type Icon } from '@tabler/icons-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/shared/components/ui/sidebar'

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover className="rounded-sm data-[state=open]:bg-accent">
                  <IconDots />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <DropdownMenuItem>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
```

## src\shared\components\nav-main.tsx

```tsx
'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/shared/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
```

## src\shared\components\nav-secondary.tsx

```tsx
'use client'

import * as React from 'react'
import { type Icon } from '@tabler/icons-react'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/components/ui/sidebar'

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
```

## src\shared\components\nav-user.tsx

```tsx
import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from '@tabler/icons-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/shared/components/ui/sidebar'

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 shrink-0 rounded-lg grayscale">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 overflow-hidden text-left text-sm leading-tight transition-[width,opacity,margin] duration-200 ease-in-out group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">{user.email}</span>
              </div>
              <IconDotsVertical className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUserCircle />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconNotification />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
```

## src\shared\components\section-cards.tsx

```tsx
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'

import { Badge } from '@/shared/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Visitors for the last 6 months</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Acquisition needs attention</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  )
}
```

## src\shared\components\site-header.tsx

```tsx
import { Button } from '@/shared/components/ui/button'
import { Separator } from '@/shared/components/ui/separator'
import { SidebarTrigger } from '@/shared/components/ui/sidebar'

export function SiteHeader() {
  return (
    <header className="h-(--header-height) group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
```

## src\shared\components\theme-switcher.tsx

```tsx
import { Palette } from 'lucide-react'
import type { ThemeName } from '@/shared/stores/theme.store'
import { useThemeStore } from '@/shared/stores/theme.store'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/components/ui/dropdown-menu'
import { SidebarMenuButton } from '@/shared/components/ui/sidebar'

const THEMES: { id: ThemeName; label: string; color: string }[] = [
  { id: 'default', label: 'Default (Blue)', color: '#3b82f6' },
  { id: 'midnight-kimchi', label: 'Midnight Kimchi', color: '#ED4B00' },
  { id: 'black-gold', label: 'Black & Gold', color: '#FCA311' },
  { id: 'mirage-blaze', label: 'Mirage Blaze', color: '#FF5B04' },
  { id: 'contrast-orange', label: 'Modern Contrast', color: '#FF7124' },
  { id: 'monochromatic-blue', label: 'Mono Blue', color: '#0A4174' },
  { id: 'sunset-dusk', label: 'Sunset Dusk', color: '#F43F5E' },
  { id: 'tropical', label: 'Tropical', color: '#10B981' },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton tooltip="Change Theme">
          <Palette className="min-h-4 min-w-4" />
          <span>Change Theme</span>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEMES.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => {
              setTheme(t.id)
            }}
            className="flex items-center gap-2"
          >
            <div
              className="h-4 w-4 rounded-full border border-border"
              style={{ backgroundColor: t.color }}
            />
            <span className={theme === t.id ? 'font-bold' : ''}>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## src\shared\components\layout\page-layout.tsx

```tsx
import * as React from 'react'
import { cn } from '@/shared/lib/utils'

interface PageContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function PageContainer({ className, children, ...props }: PageContainerProps) {
  return (
    <div className={cn('flex flex-1 flex-col overflow-hidden bg-background', className)} {...props}>
      {children}
    </div>
  )
}

interface PageHeaderProps extends React.ComponentProps<'header'> {
  title?: string
  description?: string
  actions?: React.ReactNode
}

export function PageHeader({
  className,
  title,
  description,
  actions,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-sidebar px-6 transition-[width] duration-200 ease-linear animate-in fade-in slide-in-from-top-1',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        {title && <h1 className="text-lg font-semibold leading-none tracking-tight">{title}</h1>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {children}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  )
}

interface PageContentProps extends React.ComponentProps<'main'> {
  children: React.ReactNode
}

export function PageContent({ className, children, ...props }: PageContentProps) {
  return (
    <main
      className={cn(
        'flex-1 overflow-auto p-6 duration-300 animate-in fade-in slide-in-from-bottom-2',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'h-full w-full rounded-xl border bg-card text-card-foreground shadow-sm',
          className
        )}
      >
        {children}
      </div>
    </main>
  )
}
```

## src\shared\components\ui\avatar.tsx

```tsx
'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/shared/lib/utils'

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('flex size-full items-center justify-center rounded-full bg-muted', className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
```

## src\shared\components\ui\badge.tsx

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const badgeVariants = cva(
  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90',
        outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
```

## src\shared\components\ui\breadcrumb.tsx

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
```

## src\shared\components\ui\button.tsx

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
        outline:
          'shadow-xs border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

## src\shared\components\ui\card.tsx

```tsx
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('font-semibold leading-none', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('[.border-t]:pt-6 flex items-center px-6', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
```

## src\shared\components\ui\chart.tsx

```tsx
import * as React from 'react'
import * as RechartsPrimitive from 'recharts'

import { cn } from '@/shared/lib/utils'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>

interface ChartContextProps {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children']
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme ?? config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = String(labelKey ?? item.dataKey ?? item.name ?? 'value')
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === 'string' ? (config[label].label ?? label) : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn('font-medium', labelClassName)}>{labelFormatter(value, payload)}</div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn('font-medium', labelClassName)}>{value}</div>
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'

  return (
    <div
      className={cn(
        'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== 'none')
          .map((item, index) => {
            const key = String(nameKey ?? item.name ?? item.dataKey ?? 'value')
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color ?? (item.payload as { fill?: string }).fill ?? item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                  indicator === 'dot' && 'items-center'
                )}
              >
                {formatter && item.value !== undefined && item.name ? (
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            'border-(--color-border) bg-(--color-bg) shrink-0 rounded-[2px]',
                            {
                              'h-2.5 w-2.5': indicator === 'dot',
                              'w-1': indicator === 'line',
                              'w-0 border-[1.5px] border-dashed bg-transparent':
                                indicator === 'dashed',
                              'my-0.5': nestLabel && indicator === 'dashed',
                            }
                          )}
                          style={
                            {
                              '--color-bg': indicatorColor,
                              '--color-border': indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        'flex flex-1 justify-between leading-none',
                        nestLabel ? 'items-end' : 'items-center'
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label ?? item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
}: React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className
      )}
    >
      {payload
        .filter((item) => item.type !== 'none')
        .map((item) => {
          const key = String(nameKey ?? item.dataKey ?? 'value')
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value as string}
              className={cn(
                'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (key in payload && typeof payload[key as keyof typeof payload] === 'string') {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

## src\shared\components\ui\checkbox.tsx

```tsx
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs peer size-4 shrink-0 rounded-[4px] border border-input outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
```

## src\shared\components\ui\collapsible.tsx

```tsx
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

## src\shared\components\ui\dialog.tsx

```tsx
import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="rounded-xs focus:outline-hidden absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
```

## src\shared\components\ui\drawer.tsx

```tsx
import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/shared/lib/utils'

function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content fixed z-50 flex h-auto flex-col bg-background',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
```

## src\shared\components\ui\dropdown-menu.tsx

```tsx
'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "data-[variant=destructive]:*:[svg]:!text-destructive outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "outline-hidden flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'origin-(--radix-dropdown-menu-content-transform-origin) z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
```

## src\shared\components\ui\form.tsx

```tsx
'use client'

import * as React from 'react'
import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

import { cn } from '@/shared/lib/utils'
import { Label } from '@/shared/components/ui/label'

const Form = FormProvider

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

interface FormItemContextValue {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn('grid gap-2', className)} {...props} />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? error.message : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-sm text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

## src\shared\components\ui\input.tsx

```tsx
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'shadow-xs h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }
```

## src\shared\components\ui\label.tsx

```tsx
import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/shared/lib/utils'

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Label }
```

## src\shared\components\ui\select.tsx

```tsx
import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'item-aligned',
  align = 'center',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) relative z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "outline-hidden *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
```

## src\shared\components\ui\separator.tsx

```tsx
import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/shared/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  )
}

export { Separator }
```

## src\shared\components\ui\sheet.tsx

```tsx
'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
          side === 'right' &&
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
          side === 'left' &&
            'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
          side === 'top' &&
            'inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          side === 'bottom' &&
            'inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="rounded-xs focus:outline-hidden absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## src\shared\components\ui\sidebar.tsx

```tsx
'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Separator } from '@/shared/components/ui/separator'
import { Skeleton } from '@/shared/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_ICON = '3rem'

const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

interface SidebarContextProps {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  // Desktop-only enforcement
  const isMobile = false

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${String(openState)}; path=/; max-age=${String(SIDEBAR_COOKIE_MAX_AGE)}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    setOpen((open) => !open)
  }, [setOpen])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { state } = useSidebar()

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+theme(spacing.4))]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'fixed inset-y-0 z-10 flex h-svh w-[--sidebar-width] overflow-hidden transition-[left,right,width] duration-200 ease-linear',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+theme(spacing.4)+2px)]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-slot="sidebar-trigger"
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-slot="sidebar-rail"
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'absolute inset-y-0 z-20 flex w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0',
        'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'relative flex w-full flex-1 flex-col bg-background',
        'peer-data-[variant=inset]:m-2 peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 peer-data-[variant=inset]:ml-0 peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('h-8 w-full bg-background shadow-none', className)}
      {...props}
    />
  )
}

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn(
          'flex flex-col gap-2 overflow-hidden p-2 transition-[padding] duration-200 ease-in-out group-data-[collapsible=icon]:px-0',
          className
        )}
        {...props}
      />
    )
  }
)
SidebarHeader.displayName = 'SidebarHeader'

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn(
          'flex flex-col gap-2 overflow-hidden p-2 transition-[padding] duration-200 ease-in-out group-data-[collapsible=icon]:px-0',
          className
        )}
        {...props}
      />
    )
  }
)
SidebarFooter.displayName = 'SidebarFooter'

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('mx-2 w-auto bg-sidebar-border', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden [&::-webkit-scrollbar]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'outline-hidden flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'outline-hidden absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  'peer/menu-button group-has-data-[sidebar=menu-action]/menu-item:pr-8 flex w-full items-center gap-2 overflow-hidden rounded-md border-none p-2 text-left text-sm outline-none ring-0 transition-[width,height,padding,gap] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default:
          'h-8 text-sm group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:!gap-0',
        sm: 'h-7 text-xs group-data-[collapsible=icon]:size-7 group-data-[collapsible=icon]:!gap-0',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:size-12 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!gap-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : 'button'
  const { state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== 'collapsed'} {...tooltip} />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'outline-hidden absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  // Fixed width for skeleton to avoid hydration errors and impurity
  const width = React.useMemo(() => {
    return '70%'
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
```

## src\shared\components\ui\skeleton.tsx

```tsx
import { cn } from '@/shared/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-accent', className)}
      {...props}
    />
  )
}

export { Skeleton }
```

## src\shared\components\ui\sonner.tsx

```tsx
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
```

## src\shared\components\ui\table.tsx

```tsx
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={cn('[&_tr]:border-b', className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
```

## src\shared\components\ui\tabs.tsx

```tsx
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/shared/lib/utils'

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 text-sm font-medium text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## src\shared\components\ui\textarea.tsx

```tsx
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive field-sizing-content shadow-xs flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 md:text-sm',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
```

## src\shared\components\ui\toggle-group.tsx

```tsx
'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'
import { toggleVariants } from '@/shared/components/ui/toggle'

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }
>({
  size: 'default',
  variant: 'default',
  spacing: 0,
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ '--gap': spacing } as React.CSSProperties}
      className={cn(
        'group/toggle-group data-[spacing=default]:data-[variant=outline]:shadow-xs flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md',
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant ?? variant}
      data-size={context.size ?? size}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: context.variant ?? variant,
          size: context.size ?? size,
        }),
        'w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10',
        'data-[spacing=0]:rounded-none data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:data-[variant=outline]:first:border-l data-[spacing=0]:last:rounded-r-md',
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
```

## src\shared\components\ui\toggle.tsx

```tsx
'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const toggleVariants = cva(
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'shadow-xs border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 min-w-9 px-2',
        sm: 'h-8 min-w-8 px-1.5',
        lg: 'h-10 min-w-10 px-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
```

## src\shared\components\ui\tooltip.tsx

```tsx
import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/shared/lib/utils'

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'origin-(--radix-tooltip-content-transform-origin) z-50 w-fit text-balance rounded-md bg-foreground px-3 py-1.5 text-xs text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```

## src\shared\hooks\.gitkeep

```
// Placeholder for shared hooks

```

## src\shared\lib\utils.ts

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## src\shared\schemas\.gitkeep

```
// Placeholder for shared Zod schemas

```

## src\shared\stores\.gitkeep

```
// Placeholder for global Zustand stores

```

## src\shared\stores\layout.store.ts

```typescript
import { create } from 'zustand'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface LayoutState {
  breadcrumbs: BreadcrumbItem[]
  setBreadcrumbs: (items: BreadcrumbItem[]) => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  breadcrumbs: [],
  setBreadcrumbs: (items) => {
    set({ breadcrumbs: items })
  },
}))
```

## src\shared\stores\theme.store.ts

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeName =
  | 'default'
  | 'midnight-kimchi'
  | 'black-gold'
  | 'mirage-blaze'
  | 'contrast-orange'
  | 'monochromatic-blue'
  | 'sunset-dusk'
  | 'tropical'

interface ThemeStore {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'default',
      setTheme: (theme) => {
        set({ theme })
        if (theme === 'default') {
          document.documentElement.removeAttribute('data-theme')
        } else {
          document.documentElement.setAttribute('data-theme', theme)
        }
      },
    }),
    {
      name: 'wizped-theme',
      onRehydrateStorage: () => (state) => {
        // Apply theme on load
        if (state?.theme && state.theme !== 'default') {
          document.documentElement.setAttribute('data-theme', state.theme)
        }
      },
    }
  )
)
```

## src\shared\types\.gitkeep

```
// Placeholder for shared types

```

## src\shared\types\ipc.ts

```typescript
import type { User, NewUser, Student, NewStudent } from '@main/database/schema'

export interface IpcEvents {
  'users:getAll': {
    request: []
    response: User[]
  }
  'users:getById': {
    request: [id: string]
    response: User | null
  }
  'users:create': {
    request: [data: NewUser]
    response: User
  }
  'users:update': {
    request: [id: string, data: Partial<NewUser>]
    response: User
  }
  'users:delete': {
    request: [id: string]
    response: boolean
  }
  'estudantes:getAll': {
    request: []
    response: Student[]
  }
  'estudantes:getById': {
    request: [id: string]
    response: Student | null
  }
  'estudantes:create': {
    request: [data: NewStudent]
    response: Student
  }
  'estudantes:update': {
    request: [id: string, data: Partial<NewStudent>]
    response: Student
  }
  'estudantes:delete': {
    request: [id: string]
    response: boolean
  }
}
```

## src\styles\themes.css

```css
/* Auto-generated by scripts/generate-theme.ts */

/** Theme: Midnight Kimchi */
[data-theme='midnight-kimchi'] {
  /* Generated Primitives */
  --brand-50: 20 100% 97%;
  --brand-100: 20 100% 95%;
  --brand-200: 20 100% 90%;
  --brand-300: 19 100% 81%;
  --brand-400: 18 100% 71%;
  --brand-500: 19 100% 46%;
  --brand-600: 18 95% 42%;
  --brand-700: 18 91% 38%;
  --brand-800: 18 83% 29%;
  --brand-900: 18 74% 20%;
  --brand-950: 21 70% 11%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 24 75% 7%;

  --card: 0 0% 100%;
  --card-foreground: 24 75% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 24 75% 7%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 20 100% 95%;
  --secondary-foreground: 18 74% 20%;
  --muted: 20 100% 95%;
  --muted-foreground: 18 74% 20%;
  --accent: 20 100% 96%;
  --accent-foreground: 21 70% 11%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 20 100% 93%;
  --input: 20 100% 93%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 24 72% 9%;
  --sidebar-foreground: 20 100% 95%;
  --sidebar-primary: 19 100% 46%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 20 70% 14%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 21 70% 11%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='midnight-kimchi'],
[data-theme='midnight-kimchi'].dark {
  /* Dark Mode Semantics */
  --background: 20 80% 4%;
  --foreground: 0 0% 100%;

  --card: 23 77% 6%;
  --card-foreground: 0 0% 100%;
  --popover: 23 77% 6%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 19 71% 16%;
  --secondary-foreground: 19 100% 85%;
  --muted: 19 71% 16%;
  --muted-foreground: 19 100% 85%;
  --accent: 20 70% 14%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 21 70% 11%;
  --input: 21 70% 11%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 20 80% 4%;
  --sidebar-foreground: 20 100% 97%;
  --sidebar-primary: 19 100% 46%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 21 70% 11%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 24 75% 7%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}

/** Theme: Black & Gold */
[data-theme='black-gold'] {
  /* Generated Primitives */
  --brand-50: 34 100% 98%;
  --brand-100: 34 100% 96%;
  --brand-200: 34 100% 91%;
  --brand-300: 34 100% 83%;
  --brand-400: 34 100% 75%;
  --brand-500: 37 98% 53%;
  --brand-600: 37 83% 48%;
  --brand-700: 36 79% 43%;
  --brand-800: 35 72% 33%;
  --brand-900: 34 64% 23%;
  --brand-950: 33 52% 13%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 36 54% 7%;

  --card: 0 0% 100%;
  --card-foreground: 36 54% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 36 54% 7%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 34 100% 96%;
  --secondary-foreground: 34 64% 23%;
  --muted: 34 100% 96%;
  --muted-foreground: 34 64% 23%;
  --accent: 34 100% 97%;
  --accent-foreground: 33 52% 13%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 34 100% 94%;
  --input: 34 100% 94%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 34 51% 10%;
  --sidebar-foreground: 34 100% 96%;
  --sidebar-primary: 37 98% 53%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 34 55% 15%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 33 52% 13%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='black-gold'],
[data-theme='black-gold'].dark {
  /* Dark Mode Semantics */
  --background: 34 62% 4%;
  --foreground: 0 0% 100%;

  --card: 36 57% 6%;
  --card-foreground: 0 0% 100%;
  --popover: 36 57% 6%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 34 58% 18%;
  --secondary-foreground: 34 100% 87%;
  --muted: 34 58% 18%;
  --muted-foreground: 34 100% 87%;
  --accent: 34 55% 15%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 33 52% 13%;
  --input: 33 52% 13%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 34 62% 4%;
  --sidebar-foreground: 34 100% 98%;
  --sidebar-primary: 37 98% 53%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 33 52% 13%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 36 54% 7%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}

/** Theme: Mirage Blaze */
[data-theme='mirage-blaze'] {
  /* Generated Primitives */
  --brand-50: 23 100% 98%;
  --brand-100: 22 100% 95%;
  --brand-200: 22 100% 90%;
  --brand-300: 21 100% 81%;
  --brand-400: 21 100% 72%;
  --brand-500: 21 100% 51%;
  --brand-600: 20 92% 46%;
  --brand-700: 20 88% 42%;
  --brand-800: 19 81% 32%;
  --brand-900: 19 73% 22%;
  --brand-950: 21 66% 12%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 25 70% 7%;

  --card: 0 0% 100%;
  --card-foreground: 25 70% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 25 70% 7%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 22 100% 95%;
  --secondary-foreground: 19 73% 22%;
  --muted: 22 100% 95%;
  --muted-foreground: 19 73% 22%;
  --accent: 22 100% 97%;
  --accent-foreground: 21 66% 12%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 22 100% 93%;
  --input: 22 100% 93%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 24 67% 10%;
  --sidebar-foreground: 22 100% 95%;
  --sidebar-primary: 21 100% 51%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 20 67% 15%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 21 66% 12%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='mirage-blaze'],
[data-theme='mirage-blaze'].dark {
  /* Dark Mode Semantics */
  --background: 21 76% 4%;
  --foreground: 0 0% 100%;

  --card: 24 73% 6%;
  --card-foreground: 0 0% 100%;
  --popover: 24 73% 6%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 19 68% 17%;
  --secondary-foreground: 22 100% 86%;
  --muted: 19 68% 17%;
  --muted-foreground: 22 100% 86%;
  --accent: 20 67% 15%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 21 66% 12%;
  --input: 21 66% 12%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 21 76% 4%;
  --sidebar-foreground: 23 100% 98%;
  --sidebar-primary: 21 100% 51%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 21 66% 12%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 25 70% 7%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}

/** Theme: Modern Contrast */
[data-theme='contrast-orange'] {
  /* Generated Primitives */
  --brand-50: 23 100% 98%;
  --brand-100: 23 100% 96%;
  --brand-200: 23 100% 91%;
  --brand-300: 23 100% 83%;
  --brand-400: 22 100% 74%;
  --brand-500: 21 100% 57%;
  --brand-600: 21 77% 51%;
  --brand-700: 21 72% 45%;
  --brand-800: 21 68% 34%;
  --brand-900: 21 63% 23%;
  --brand-950: 21 54% 13%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 26 58% 7%;

  --card: 0 0% 100%;
  --card-foreground: 26 58% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 26 58% 7%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 23 100% 96%;
  --secondary-foreground: 21 63% 23%;
  --muted: 23 100% 96%;
  --muted-foreground: 21 63% 23%;
  --accent: 23 100% 97%;
  --accent-foreground: 21 54% 13%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 23 100% 93%;
  --input: 23 100% 93%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 23 54% 10%;
  --sidebar-foreground: 23 100% 96%;
  --sidebar-primary: 21 100% 57%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 21 56% 15%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 21 54% 13%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='contrast-orange'],
[data-theme='contrast-orange'].dark {
  /* Dark Mode Semantics */
  --background: 22 65% 5%;
  --foreground: 0 0% 100%;

  --card: 25 61% 6%;
  --card-foreground: 0 0% 100%;
  --popover: 25 61% 6%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 20 58% 18%;
  --secondary-foreground: 23 100% 87%;
  --muted: 20 58% 18%;
  --muted-foreground: 23 100% 87%;
  --accent: 21 56% 15%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 21 54% 13%;
  --input: 21 54% 13%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 22 65% 5%;
  --sidebar-foreground: 23 100% 98%;
  --sidebar-primary: 21 100% 57%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 21 54% 13%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 26 58% 7%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}

/** Theme: Mono Blue */
[data-theme='monochromatic-blue'] {
  /* Generated Primitives */
  --brand-50: 222 24% 96%;
  --brand-100: 222 24% 93%;
  --brand-200: 221 24% 85%;
  --brand-300: 221 24% 71%;
  --brand-400: 219 24% 56%;
  --brand-500: 209 84% 25%;
  --brand-600: 210 75% 23%;
  --brand-700: 212 69% 21%;
  --brand-800: 214 57% 17%;
  --brand-900: 216 46% 13%;
  --brand-950: 218 37% 8%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 220 45% 5%;

  --card: 0 0% 100%;
  --card-foreground: 220 45% 5%;
  --popover: 0 0% 100%;
  --popover-foreground: 220 45% 5%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 222 24% 93%;
  --secondary-foreground: 216 46% 13%;
  --muted: 222 24% 93%;
  --muted-foreground: 216 46% 13%;
  --accent: 222 24% 95%;
  --accent-foreground: 218 37% 8%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 222 24% 89%;
  --input: 222 24% 89%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 218 40% 6%;
  --sidebar-foreground: 222 24% 93%;
  --sidebar-primary: 209 84% 25%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 218 37% 9%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 218 37% 8%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='monochromatic-blue'],
[data-theme='monochromatic-blue'].dark {
  /* Dark Mode Semantics */
  --background: 222 48% 2%;
  --foreground: 0 0% 100%;

  --card: 221 46% 4%;
  --card-foreground: 0 0% 100%;
  --popover: 221 46% 4%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 217 40% 10%;
  --secondary-foreground: 221 24% 78%;
  --muted: 217 40% 10%;
  --muted-foreground: 221 24% 78%;
  --accent: 218 37% 9%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 218 37% 8%;
  --input: 218 37% 8%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 222 48% 2%;
  --sidebar-foreground: 222 24% 96%;
  --sidebar-primary: 209 84% 25%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 218 37% 8%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 220 45% 5%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}

/** Theme: Sunset Dusk */
[data-theme='sunset-dusk'] {
  /* Generated Primitives */
  --brand-50: 1 100% 98%;
  --brand-100: 1 100% 97%;
  --brand-200: 0 100% 93%;
  --brand-300: 359 100% 86%;
  --brand-400: 357 100% 79%;
  --brand-500: 350 89% 60%;
  --brand-600: 350 68% 54%;
  --brand-700: 351 56% 48%;
  --brand-800: 352 52% 36%;
  --brand-900: 354 47% 25%;
  --brand-950: 357 38% 14%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 1 35% 8%;

  --card: 0 0% 100%;
  --card-foreground: 1 35% 8%;
  --popover: 0 0% 100%;
  --popover-foreground: 1 35% 8%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 1 100% 97%;
  --secondary-foreground: 354 47% 25%;
  --muted: 1 100% 97%;
  --muted-foreground: 354 47% 25%;
  --accent: 1 100% 98%;
  --accent-foreground: 357 38% 14%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 1 100% 95%;
  --input: 1 100% 95%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 359 34% 11%;
  --sidebar-foreground: 1 100% 97%;
  --sidebar-primary: 350 89% 60%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 356 41% 17%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 357 38% 14%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='sunset-dusk'],
[data-theme='sunset-dusk'].dark {
  /* Dark Mode Semantics */
  --background: 1 43% 5%;
  --foreground: 0 0% 100%;

  --card: 1 38% 7%;
  --card-foreground: 0 0% 100%;
  --popover: 1 38% 7%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 355 43% 19%;
  --secondary-foreground: 360 100% 90%;
  --muted: 355 43% 19%;
  --muted-foreground: 360 100% 90%;
  --accent: 356 41% 17%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 357 38% 14%;
  --input: 357 38% 14%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 1 43% 5%;
  --sidebar-foreground: 1 100% 98%;
  --sidebar-primary: 350 89% 60%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 357 38% 14%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 1 35% 8%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}

/** Theme: Tropical Rainbow */
[data-theme='tropical'] {
  /* Generated Primitives */
  --brand-50: 147 48% 98%;
  --brand-100: 148 48% 95%;
  --brand-200: 148 48% 90%;
  --brand-300: 149 48% 80%;
  --brand-400: 151 48% 69%;
  --brand-500: 160 84% 39%;
  --brand-600: 159 75% 37%;
  --brand-700: 158 68% 34%;
  --brand-800: 156 57% 27%;
  --brand-900: 154 46% 19%;
  --brand-950: 152 33% 11%;

  /* Light Mode Semantics */
  --background: 0 0% 100%;
  --foreground: 151 29% 7%;

  --card: 0 0% 100%;
  --card-foreground: 151 29% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 151 29% 7%;

  --primary: var(--brand-600);
  --primary-foreground: 0 0% 98%;

  --secondary: 148 48% 95%;
  --secondary-foreground: 154 46% 19%;
  --muted: 148 48% 95%;
  --muted-foreground: 154 46% 19%;
  --accent: 148 48% 97%;
  --accent-foreground: 152 33% 11%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  --border: 148 48% 93%;
  --input: 148 48% 93%;
  --ring: var(--brand-600);
  --radius: 0.5rem;

  /* Sidebar (Light) - High Contrast */
  --sidebar-background: 151 29% 9%;
  --sidebar-foreground: 148 48% 95%;
  --sidebar-primary: 160 84% 39%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 152 37% 13%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 152 33% 11%;
  --sidebar-ring: var(--brand-600);

  --chart-1: var(--brand-600);
  --chart-2: var(--brand-500);
  --chart-3: var(--brand-700);
  --chart-4: var(--brand-400);
  --chart-5: var(--brand-800);
}
.dark[data-theme='tropical'],
[data-theme='tropical'].dark {
  /* Dark Mode Semantics */
  --background: 149 36% 4%;
  --foreground: 0 0% 100%;

  --card: 151 32% 6%;
  --card-foreground: 0 0% 100%;
  --popover: 151 32% 6%;
  --popover-foreground: 0 0% 100%;

  --primary: var(--brand-500);
  --primary-foreground: 0 0% 100%;

  --secondary: 153 40% 15%;
  --secondary-foreground: 149 48% 85%;
  --muted: 153 40% 15%;
  --muted-foreground: 149 48% 85%;
  --accent: 152 37% 13%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 152 33% 11%;
  --input: 152 33% 11%;
  --ring: var(--brand-500);

  /* Sidebar (Dark) */
  --sidebar-background: 149 36% 4%;
  --sidebar-foreground: 147 48% 98%;
  --sidebar-primary: 160 84% 39%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 152 33% 11%;
  --sidebar-accent-foreground: 0 0% 100%;
  --sidebar-border: 151 29% 7%;
  --sidebar-ring: var(--brand-500);

  --chart-1: var(--brand-500);
  --chart-2: var(--brand-400);
  --chart-3: var(--brand-600);
  --chart-4: var(--brand-300);
  --chart-5: var(--brand-700);
}
```
