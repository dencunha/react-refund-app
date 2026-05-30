# Refund Management System 

An intuitive corporate refund management application with distinct user profiles, role-based access control (RBAC), and full integration with a Node.js REST API. Built to streamline the process of submitting, uploading, and managing corporate expenses.

*(Portuguese version below / Versão em português abaixo 🇧🇷)*

##  Technologies Used
* **React 19 + TypeScript + Vite**: Core framework utilizing modern features alongside Vite as the bundler.
* **Tailwind CSS**: Utility-first CSS framework for rapid, responsive, and clean UI styling.
* **Axios**: HTTP client configured with interceptors and storage persistence to handle API communication.
* **Zod**: Robust schema-based data validation for user creation and multi-part form payloads.
* **React Router**: Client-side routing management, including state-based route guards and parameter hooks (`useParams`, `useLocation`).
* **clsx & tailwind-merge**: Conditional styling utilities used to build dynamic button variants without design conflicts.

##  Features Implemented
* **React 19 Form Actions:** Refactored authentication flows to natively use `useActionState` and native `FormData` extraction instead of conventional `useState` hook boilerplate.
* **Real Authentication & RBAC:** Complete login (`SignIn`) and account creation (`SignUp`) views interacting with a JWT backend. Sessions persist securely via browser `localStorage`.
* **Employee Flow (Requester):**
  * Expense filing interface supporting strict type conversion for numbers and categories.
  * Native file handler delivering receipt uploads as raw binary chunks via `FormData`.
  * Secure multi-step confirmation page utilizing `useLocation` state to reject direct URL tampering.
* **Manager Flow (Admin):**
  * Real-time dashboard parsing remote listings with server-side URL pagination (`page`, `perPage`).
  * Instant search bar executing precise client-to-server query-string filtering by requester name.
  * Read-only layout reuse making direct links available to inspect digital files and view uploaded receipt image attachments directly on the host server.

---

### 🇧🇷 Versão em Português 🇧🇷


# Sistema de Gestão de Reembolsos 

Uma aplicação robusta para gestão de reembolsos corporativos com perfis de acesso distintos (RBAC), controle de sessões e integração ponta a ponta com uma API REST em Node.js. Desenvolvida para digitalizar e otimizar todo o processo de envio de despesas, upload de comprovantes e auditoria gerencial.

##  Tecnologias Utilizadas
* **React 19 + TypeScript + Vite**: Framework principal em sua versão mais recente utilizando novos hooks nativos e Vite como empacotador.
* **Tailwind CSS**: Framework utilitário para estilização visual rápida, responsiva e performática.
* **Axios**: Cliente HTTP estruturado com configurações de base URL e envio automático de cabeçalhos de autenticação.
* **Zod**: Biblioteca de validação de esquemas para tipagem estática e segurança na entrada de dados de usuários e formulários.
* **React Router**: Gerenciamento completo de navegação em rotas públicas, privadas, passagem de parâmetros (`useParams`) e bloqueio de acessos diretos.
* **clsx & tailwind-merge**: Utilitários acoplados em uma função personalizada para permitir botões customizáveis e variantes dinâmicas livre de conflitos de CSS.

##  Funcionalidades Implementadas
* **Form Actions do React 19:** Fluxos de autenticação refatorados para utilizar a nova abordagem do ecossistema React, substituindo o excesso de `useState` pelo hook `useActionState` e tratamento nativo de `FormData`.
* **Autenticação Real e JWT:** Telas completas de Entrada (`SignIn`) e Cadastro (`SignUp`) conectadas ao banco de dados da API. Armazenamento e persistência do token de acesso utilizando o `localStorage` do navegador.
* **Fluxo do Colaborador (Solicitante):**
  * Formulário dinâmico de solicitação tratando a conversão monetária automática e mapeamento tipado de chaves e ícones de categorias.
  * Upload físico de notas fiscais despachando arquivos binários reais via requisições de tipo mutável (`FormData`).
  * Tela de confirmação protegida usando validação de histórico do `useLocation` para impedir que o usuário pule etapas digitando a URL diretamente.
* **Fluxo do Gerente (Administrador):**
  * Painel de controle alimentado por paginação dinâmica integrada no servidor através de parâmetros na URL (`page`, `perPage`).
  * Barra de pesquisa instantânea realizando filtragens avançadas direto no banco através de Query Strings pelo nome da solicitação.
  * Reutilização inteligente de componentes em modo de "Apenas Leitura" permitindo ao gestor auditar valores, abrir e visualizar os arquivos de comprovante anexados na nuvem/servidor.
