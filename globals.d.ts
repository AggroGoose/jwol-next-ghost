import type { GhostAPI } from "@tryghost/content-api";
import type { PrismaClient } from "@prisma/client";

declare global {
  var ghost: GhostAPI;
  var prisma: PrismaClient;
}
