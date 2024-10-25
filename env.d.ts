
declare namespace NodeJS {
  interface ProcessEnv {
    readonly DBCONNECTION: string;
    readonly PORT: string;
    readonly SECRET_ROUNDS: string;
    readonly JWT_SECRET: string;
    readonly ENV: "Development" | "Production";
  }
}