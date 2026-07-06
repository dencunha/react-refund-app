import { useActionState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, { message: "Senha é obrigatória" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  const auth = useAuth();

  //nova função: login de demonstração
  async function handleDemoLogin(role: "manager" | "employee") {
    try {
      // Definimos os e-mails de teste que você criará no seu banco de dados
      const email = role === "manager" ? "gerente@email.com" : "funcionario@email.com";
      const password = "123456"; // Escolha uma senha padrão para os testes

      // Faz a chamada direta para a API pulando a validação do formulário da tela
      const response = await api.post("/sessions", { email, password });
      auth.save(response.data);
    } catch (error) {
      console.error(error);
      alert("Não foi possível conectar com a conta de teste. Verifique se ela foi criada no banco de dados.");
    }
  }

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      console.log(error);
      return { message: "Não foi possível entrar!" };
    }
  }
  return (
    <form action={formAction} className=" w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <div className="flex flex-col gap-2 mt-4 border-t border-gray-700 pt-4">
        <p className="text-[10px] text-gray-600 text-center font-bold uppercase tracking-wider mb-1">
          Acesso rápido para recrutadores
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            onClick={() => handleDemoLogin("manager")}
            className="flex-1 text-xs"
          >
            Ver como Gerente
          </Button>
          
          <Button
            type="button"
            onClick={() => handleDemoLogin("employee")}
            className="flex-1 text-xs"
          >
            Ver como Funcionário
          </Button>
        </div>
      </div>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
