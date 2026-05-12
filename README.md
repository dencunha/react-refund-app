# Refund Management System 

An intuitive corporate refund management application with distinct user profiles and role-based access control. Built to streamline the process of submitting and managing corporate expenses.

*(Portuguese version below / Versão em português abaixo)*

## 🚀 Technologies Used
* **React + TypeScript + Vite**: Core framework and build tool.
* **Tailwind CSS**: Utility-first CSS framework for rapid and responsive styling, utilizing a custom `@theme` configuration.
* **React Router**: Handling client-side routing and protected routes based on simulated user roles.
* **React Hook Form**: Efficient form state management and validation.
* **clsx & tailwind-merge**: Utility libraries to conditionally construct and merge Tailwind classes efficiently.

## Features
* **Role-Based Access Control (RBAC):** Simulated session validation directing users to either the Employee Route, Manager Route, or Auth Routes.
* **Authentication Flow:** SignIn and SignUp pages utilizing a shared reusable layout.
* **Employee Profile (Requester):** * Form to submit refund requests with details such as name, category, amount, and receipt upload.
    * Secure confirmation page leveraging `useLocation` state to prevent direct URL access.
* **Manager Profile (Admin):** * Dashboard to list all refund requests.
    * Pagination controls and a name-based search input.
    * Read-only detailed view of requests reusing the submission form component via URL parameters (`useParams`).
* **Advanced UI Elements:**
    * Reusable UI components (`Button` with variants, `Input`, `Select`, `Upload`).
    * Native JavaScript `Intl.NumberFormat` for BRL currency formatting.
    * Custom scrollbar styling globally implemented via CSS.

---

# 🇧🇷 Sistema de Solicitação de Reembolso

Uma aplicação intuitiva de solicitação de reembolso com perfis de usuário distintos e controle de acesso baseado em funções. Desenvolvida para otimizar o processo de envio e gerenciamento de despesas corporativas.

## Tecnologias Utilizadas
* **React + TypeScript + Vite**: Framework principal e ferramenta de build.
* **Tailwind CSS**: Framework CSS focado em utilitários para estilização rápida e responsiva, utilizando uma configuração de `@theme` personalizada.
* **React Router**: Gerenciamento de rotas no lado do cliente e proteção de rotas baseada em perfis de usuário simulados.
* **React Hook Form**: Gerenciamento eficiente de estados e validações de formulários.
* **clsx & tailwind-merge**: Bibliotecas utilitárias para construir e mesclar classes Tailwind condicionalmente com eficiência.

## Funcionalidades
* **Controle de Acesso Baseado em Perfis:** Validação de sessão simulada direcionando os usuários para a Rota de Funcionário, Rota de Gerente ou Rotas de Autenticação.
* **Fluxo de Autenticação:** Páginas de Login e Cadastro utilizando um layout compartilhado e reutilizável.
* **Perfil do Funcionário (Solicitante):**
    * Formulário para envio de solicitações de reembolso com detalhes como nome, categoria, valor e envio de comprovante.
    * Página de confirmação segura utilizando o estado do `useLocation` para evitar acessos diretos pela URL.
* **Perfil do Administrador (Gerente):**
    * Dashboard para listar todas as solicitações de reembolso.
    * Controles de paginação e input de pesquisa por nome.
    * Visualização detalhada em modo "somente leitura" reutilizando o componente de formulário por meio de parâmetros de URL (`useParams`).
* **Elementos Avançados de UI:**
    * Componentes de interface reutilizáveis (`Button` com variantes, `Input`, `Select`, `Upload`).
    * Uso da API nativa `Intl.NumberFormat` para formatação de moeda em Real (BRL).
    * Estilização customizada da barra de rolagem (scrollbar) implementada globalmente no CSS.