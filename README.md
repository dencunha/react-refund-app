# Refund Management System 

[cite_start]An intuitive refund request application with distinct user profiles and role-based access control[cite: 3, 4]. Built to streamline the process of submitting and managing corporate expenses.

*(Portuguese version below / Versão em português abaixo)*

## Technologies Used
* [cite_start]**React + TypeScript + Vite**: Core framework and build tool[cite: 11, 13, 14].
* [cite_start]**Tailwind CSS**: Utility-first CSS framework for rapid and responsive styling, utilizing a custom `@theme` configuration[cite: 60, 65, 98].
* [cite_start]**React Router**: Handling client-side routing and protected routes based on simulated user roles[cite: 134, 1654].
* [cite_start]**clsx & tailwind-merge**: Utility libraries to conditionally construct and merge Tailwind classes efficiently[cite: 1180, 1182].

## Features
* [cite_start]**Role-Based Access Control (RBAC):** Simulated session validation directing users to either the Employee Route, Manager Route, or Auth Routes[cite: 1654, 1657, 1658].
* [cite_start]**Authentication Flow:** SignIn and SignUp pages utilizing a shared reusable `AuthLayout` [cite: 125-127, 171].
* [cite_start]**Employee Profile:** * Form to submit refund requests with details such as name, category, amount, and receipt upload[cite: 5].
    * [cite_start]Secure confirmation page leveraging `useLocation` state to prevent direct URL access[cite: 5, 1018, 1047].
* [cite_start]**Manager Profile:** * Dashboard to list all refund requests[cite: 6, 1072].
    * [cite_start]Pagination controls and a name-based search input[cite: 6, 1114, 1394].
    * [cite_start]Read-only detailed view of requests reusing the submission form component via URL parameters (`useParams`)[cite: 1544, 1545, 1588].
* **Advanced UI Elements:**
    * [cite_start]Reusable UI components (`Button` with variants, `Input`, `Select`, `Upload`)[cite: 238, 322, 692, 876, 1153].
    * [cite_start]Native JavaScript `Intl.NumberFormat` for BRL currency formatting[cite: 1373, 1384].
    * [cite_start]Custom scrollbar styling globally implemented via CSS[cite: 1358].

---

# Sistema de Solicitação de Reembolso

[cite_start]Uma aplicação intuitiva de solicitação de reembolso com perfis de usuário distintos e controle de acesso baseado em funções[cite: 3, 4]. Desenvolvida para otimizar o processo de envio e gerenciamento de despesas corporativas.

## Tecnologias Utilizadas
* [cite_start]**React + TypeScript + Vite**: Framework principal e ferramenta de build[cite: 11, 13, 14].
* [cite_start]**Tailwind CSS**: Framework CSS focado em utilitários para estilização rápida e responsiva, utilizando uma configuração de `@theme` personalizada[cite: 60, 65, 98].
* [cite_start]**React Router**: Gerenciamento de rotas no lado do cliente e proteção de rotas baseada em perfis de usuário simulados[cite: 134, 1654].
* [cite_start]**clsx & tailwind-merge**: Bibliotecas utilitárias para construir e mesclar classes Tailwind condicionalmente com eficiência[cite: 1180, 1182].

## Funcionalidades
* [cite_start]**Controle de Acesso Baseado em Perfis:** Validação de sessão simulada direcionando os usuários para a Rota de Funcionário, Rota de Gerente ou Rotas de Autenticação[cite: 1654, 1657, 1658].
* [cite_start]**Fluxo de Autenticação:** Páginas de Login e Cadastro utilizando um `AuthLayout` reutilizável [cite: 125-127, 171].
* **Perfil do Funcionário (Solicitante):**
    * [cite_start]Formulário para envio de solicitações de reembolso com detalhes como nome, categoria, valor e envio de comprovante[cite: 5].
    * [cite_start]Página de confirmação segura utilizando o estado do `useLocation` para evitar acessos diretos pela URL[cite: 5, 1018, 1047].
* **Perfil do Administrador (Gerente):**
    * [cite_start]Dashboard para listar todas as solicitações de reembolso[cite: 6, 1072].
    * [cite_start]Controles de paginação e input de pesquisa por nome[cite: 6, 1114, 1394].
    * [cite_start]Visualização detalhada em modo "somente leitura" reutilizando o componente de formulário por meio de parâmetros de URL (`useParams`)[cite: 1544, 1545, 1588].
* **Elementos Avançados de UI:**
    * [cite_start]Componentes de interface reutilizáveis (`Button` com variantes, `Input`, `Select`, `Upload`)[cite: 238, 322, 692, 876, 1153].
    * [cite_start]Uso da API nativa `Intl.NumberFormat` para formatação de moeda em Real (BRL)[cite: 1373, 1384].
    * [cite_start]Estilização customizada da barra de rolagem (scrollbar) implementada globalmente no CSS[cite: 1358].