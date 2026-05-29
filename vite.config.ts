import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Добавляем настройки nitro прямо здесь:
    nitro: true, 
  },
});
